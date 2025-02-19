import { FC } from "react";

import { Product } from "../../models/product";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    product: Product
}

const ProductCard: FC<Props> = ({product}) => {
    return ( 
        <Card sx={{width: 280, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} elevation={3}>
            <CardMedia sx={{height: 290, backgroundSize: 'cover'}} image={product.pictureUrl} title={product.name}/>

            <CardContent>
                <Typography gutterBottom sx={{textTransform: 'uppercase'}} variant="subtitle2">
                {product.name}
                </Typography>
                <Typography sx={{color: 'secondary.main'}} variant="h6">
                ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button>Add to cart</Button>
                <Button>View</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;