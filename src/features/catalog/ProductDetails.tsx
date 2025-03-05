import { useState, useEffect, ChangeEvent } from 'react';
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
import {
	useRemoveBasketItemMutation,
	useAddBasketItemMutation,
	useFetchBasketQuery,
} from '../basket/basketApi';

const ProductDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data: product, isLoading } = useFetchProductDetailsQuery(id!);
	const [addBasketItem] = useAddBasketItemMutation();
	const [removeBasketItem] = useRemoveBasketItemMutation();
	const { data: basket } = useFetchBasketQuery();

	const item = basket?.items.find(x => x.productId === +id!);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		if (item) setQuantity(item.quantity);
	}, [item]);

	if (isLoading || !product) return <div>Loading...</div>;

	const handleUpdateBasket = () => {
		const updatedQuantity = item ? Math.abs(quantity - item.quantity) : quantity;
		
		if (!item || quantity > item.quantity) {
			addBasketItem({ product, quantity: updatedQuantity });
		} else {
			removeBasketItem({productId: product.id, quantity: updatedQuantity})
		}
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = +event.currentTarget.value
		
		if (value >= 0 ) setQuantity(value)
		
	}

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
					<Table sx={{ '& td': { fontSize: '1rem' } }}>
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
							value={quantity}
							onChange={handleInputChange}
						/>
					</Grid2>
					<Grid2 size={6}>
						<Button
							sx={{ height: '55px' }}
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							onClick={handleUpdateBasket}
							disabled={quantity === item?.quantity || !item && quantity === 0}
						>
							{item ? 'Update quantity' : 'Add to Basket'}
						</Button>
					</Grid2>
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default ProductDetails;
