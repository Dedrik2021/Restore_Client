import { FC } from 'react';

import { Item } from '../../models/basket';
import { Box, Grid2, IconButton, Paper, Typography } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';
import { useRemoveBasketItemMutation, useAddBasketItemMutation } from './basketApi';
import {currencyFormat} from '../../lib/util'

type Props = {
	item: Item;
};

const BasketItem: FC<Props> = ({ item }) => {
	const [removeBasketItem] = useRemoveBasketItemMutation();
	const [addBasketItem] = useAddBasketItemMutation();

	return (
		<Paper
			sx={{
				height: 140,
				borderRadius: 3,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				mb: 2,
			}}
		>
			<Box display={'flex'} alignItems={'center'}>
				<Box
					component={'img'}
					sx={{
						width: 100,
						height: 100,
						objectFit: 'cover',
						borderRadius: 4,
						mr: 8,
						ml: 4,
					}}
					src={item.pictureUrl}
					alt={item.name}
				/>

				<Box display={'flex'} flexDirection={'column'} gap={1}>
					<Typography variant="h6">{item.name}</Typography>
					<Box display={'flex'} alignItems={'center'} gap={3}>
						<Typography sx={{ fontSize: '1.1rem' }}>
							{currencyFormat(item.price)} x {item.quantity}
						</Typography>
						<Typography sx={{ fontSize: '1.1rem' }} color="primary">
							{currencyFormat(item.price * item.quantity)}
						</Typography>
					</Box>

					<Grid2 container spacing={1} alignItems={'center'}>
						<IconButton
							onClick={() =>
								removeBasketItem({ productId: item.productId, quantity: 1 })
							}
							size="small"
							color="error"
							sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
						>
							<Remove />
						</IconButton>

						<Typography variant="h6">{item.quantity}</Typography>

						<IconButton
							size="small"
							color="success"
							sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
							onClick={() => addBasketItem({ product: item, quantity: 1 })}
						>
							<Add />
						</IconButton>
					</Grid2>
				</Box>
			</Box>

			<IconButton
				onClick={() =>
					removeBasketItem({ productId: item.productId, quantity: item.quantity })
				}
				size="small"
				color="error"
				sx={{
					border: 1,
					borderRadius: 1,
					minWidth: 0,
					alignSelf: 'flex-start',
					mr: 1,
					mt: 1,
				}}
			>
				<Close />
			</IconButton>
		</Paper>
	);
};

export default BasketItem;
