import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";


const ServerErrors = () => {
    const {state} = useLocation()

    return ( 
        <Paper>
            {state.error ? (
                <>
                <Typography gutterBottom variant="h3" sx={{px: 4, pt: 2}} color="secondary">
                    {state.error.title}
                </Typography>
                <Divider/>
                <Typography  variant="body1" sx={{p: 4}} color="secondary">
                    {state.error.detail}
                </Typography>
                </>
            ) : (
                <Typography variant="h3" gutterBottom sx={{p: 4}}>
                    Server Error
                </Typography>
            )}
        </Paper>
    );
}

export default ServerErrors;