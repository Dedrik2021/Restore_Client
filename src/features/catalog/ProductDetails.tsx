import { useParams } from 'react-router';
import {
	Button,
	Divider,
	Grid2,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	TextField,
	Typography,
} from '@mui/material';

import { useFetchProductDetailsQuery } from './catalogApi';

const ProductDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data: product, isLoading } = useFetchProductDetailsQuery(id!);

	if (isLoading || !product) return <div>Loading...</div>;

	const productDetails = [
		{ label: 'Name:', value: product.name },
		{ label: 'Description:', value: product.description },
		{ label: 'Type:', value: product.type },
		{ label: 'Brand:', value: product.brand },
		{ label: 'Quantity in stock:', value: product.quantityInStock },
	];

	return (
		<Grid2 container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>
			<Grid2 size={6}>
				<img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
			</Grid2>

			<Grid2 size={6}>
				<Typography variant="h3">{product.name}</Typography>

				<Divider sx={{ mb: 2 }} />

				<Typography variant="h4" color="secondary">
					${(product.price / 100).toFixed(2)}
				</Typography>

				<TableContainer>
					<Table sx={{'& td': {fontSize: '1rem'}}}>
						<TableBody>
							{productDetails.map((detail, i) => (
								<TableRow key={i}>
									<TableCell component="th" scope="row">
										{detail.label}
									</TableCell>
									<TableCell>{detail.value}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

				<Grid2 container spacing={2} marginTop={3}>
					<Grid2 size={6}>
						<TextField
							variant="outlined"
							type="number"
							label="Quantity in Basket"
							fullWidth
							defaultValue={1}
						/>
					</Grid2>
					<Grid2 size={6}>
						<Button sx={{ height: '55px'}} variant="contained" color="primary" size="large" fullWidth>
							Add to Basket
						</Button>
					</Grid2>
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default ProductDetails;
