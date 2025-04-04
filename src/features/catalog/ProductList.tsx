import { FC } from 'react';

import { Product } from '../../models/product';
import ProductCard from './ProductCard';
import { Grid2 } from '@mui/material';

type Props = {
	products: Product[];
};
const ProductList: FC<Props> = ({ products }) => {
	return (
		<Grid2 container spacing={3}>
			{products.map((product) => (
				<Grid2 key={product.id} size={3} display={'flex'}>
					<ProductCard key={product.id} product={product} />
				</Grid2>
			))}
		</Grid2>
	);
};

export default ProductList;
