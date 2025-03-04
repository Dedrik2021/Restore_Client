import { FC } from 'react';

import { Product } from '../../models/product';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router';
import { useAddBasketItemMutation } from '../basket/basketApi';
import { currencyFormat } from '../../lib/util';

type Props = {
	product: Product;
};

const ProductCard: FC<Props> = ({ product }) => {
	const [addBasketItem, { isLoading }] = useAddBasketItemMutation();

	return (
		<Card
			sx={{
				width: 280,
				borderRadius: 2,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
			elevation={3}
		>
			<CardMedia
				sx={{ height: 290, backgroundSize: 'cover' }}
				image={product.pictureUrl}
				title={product.name}
			/>

			<CardContent>
				<Typography gutterBottom sx={{ textTransform: 'uppercase' }} variant="subtitle2">
					{product.name}
				</Typography>
				<Typography sx={{ color: 'secondary.main' }} variant="h6">
					{currencyFormat(product.price)}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'space-between' }}>
				<Button
					disabled={isLoading}
					onClick={() => addBasketItem({product, quantity: 1 })}
				>
					Add to cart
				</Button>
				<Button component={Link} to={`/catalog/${product.id}`}>
					View
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
