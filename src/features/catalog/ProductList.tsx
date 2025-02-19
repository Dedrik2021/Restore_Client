import { FC } from "react";

import { Product } from "../../models/product";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

type Props = {
    products: Product[]
}
const ProductList: FC<Props> = ({products}) => {
	return (
		<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center'}}>
			{products.map((product) => (
                    <ProductCard key={product.id} product={product} />
			))}
		</Box>
	);
};

export default ProductList;
