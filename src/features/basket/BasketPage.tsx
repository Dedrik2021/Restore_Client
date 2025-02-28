import { Typography } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi";

const BasketPage = () => {
    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <Typography>Loading basket...</Typography>;

    if (!data) return <Typography variant="h3">Your basket is empty</Typography>;

    return ( 
        <div>
            <h1>{data.basketId}</h1>
        </div>
    );
}

export default BasketPage;