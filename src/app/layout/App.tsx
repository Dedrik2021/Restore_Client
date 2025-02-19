import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Product } from '../../models/product';
import Catalog from '../../features/catalog/Catalog';
import Navbar from './Navbar';

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [darkMode, setDarkMode] = useState< boolean >(false);
	
	const palletType = darkMode ? 'dark' : 'light';

	const theme = createTheme({
		palette: {
			mode: palletType,
			background: {
				default: palletType === 'light' ? '#eaeaea' : '#121212',
			},
		},
	});

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:5001/api/products');
			setProducts(response.data);
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Box
				sx={{
					minHeight: '100vh',
					background: darkMode
						? 'radial-gradient(circle, #1e3aba, #111b27 )'
						: 'radial-gradient(circle, #baecf9, #f0f9ff )',
						py: 6
				}}
			>
				<Container maxWidth="xl" sx={{ mt: 8 }}>
					<Catalog products={products} />
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
