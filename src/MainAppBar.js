import React from "react";
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';
import useStyles from "./styles";

const MainAppBar = () => {
    const classes = useStyles();
    return(
        <AppBar position='relative' style={{ background: '#2E3B55' }}>
            <Toolbar  sx={{ m: 1 }}>
                <CottageIcon className={classes.icon} />
                
                <Typography variant="h5">
                    Waaneiza
                    <Typography variant="subtitle2" color="gray">
                    System Development Team 
                    </Typography>
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default MainAppBar;