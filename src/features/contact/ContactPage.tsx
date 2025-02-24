import { Button, ButtonGroup, Typography } from "@mui/material";
import { increment, decrement } from "./counterReducer";
import { useAppSelector, useAppDispatch } from "../../app/store/store";


const ContactPage = () => {
    const {data} = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    return ( 
        <>
            <Typography variant="h2">Contact Page</Typography>

            <Typography variant="body1">
                This is the contact page. You can reach us at: {data}
            </Typography>
            <ButtonGroup>
                <Button color="secondary" onClick={() => dispatch(increment(1))}>Increment</Button>
                <Button color="error" onClick={() => dispatch(decrement(1))}>Decrement</Button>
                <Button color="primary" onClick={() => dispatch(increment(5))}>Increment by 5</Button>
            </ButtonGroup>
        </>
    );
}

export default ContactPage;