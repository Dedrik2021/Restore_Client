import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router';

import Navbar from './Navbar';
import { useAppSelector } from '../store/store';

function App() {
	const {darkMode} = useAppSelector(state => state.ui);
	const palletType = darkMode ? 'dark' : 'light';

	const theme = createTheme({
		palette: {
			mode: palletType,
			background: {
				default: palletType === 'light' ? '#eaeaea' : '#121212',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
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
					<Outlet />
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
