import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void
}

const Navbar: FC<Props> = ({darkMode, toggleDarkMode}) => {

    return ( 
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <IconButton sx={{marginLeft: '20px'}} onClick={toggleDarkMode}>
                    {darkMode ? '🌙' : '☀️'}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;