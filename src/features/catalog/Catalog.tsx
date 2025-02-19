import { FC } from "react";

import { Product } from "../../models/product";
import ProductList from "./ProductList";


type CatalogProps = {
    products: Product[];
}

const Catalog: FC<CatalogProps> = ({products}) => {
    return ( 
        <>
            <ProductList products={products} />
			
        </>
    );
}

export default Catalog;