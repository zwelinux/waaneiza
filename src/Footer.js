import React from 'react';
import useStyles from './styles';
import { Typography } from '@mui/material';

const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Typography variant="subtitle1" color="white" align='center' gutterBottom>
                Copyright © WAANEIZA 2022
            </Typography>
            <Typography variant="subtitle2" align='center' color="white" gutterBottom>
                Waaneiza System Development Team
            </Typography>
        </footer>
    );
}

export default Footer;