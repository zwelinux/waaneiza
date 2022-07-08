import * as React from 'react';
import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { mainNavbarItems } from './consts/navbarItems';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const Navbar = () => {

    const navigate = useNavigate();
        
    return(
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            {/* <Toolbar /> */}
            <br />
            <Typography variant='text' align='center'><FilterDramaIcon sx={{ fontSize: 50 }} /></Typography>
            <Typography variant="h5" align='center'>WAANEIZA</Typography>
            <Typography variant="subtitle2" align='center' color="secondary">System Development Team v1.0</Typography>
            <br />
            
            <br />
            <Divider />
            <List>
            {mainNavbarItems.map((item, index) => (
                <ListItem key={item.id} onClick={() => navigate(item.route)}>
                <ListItemButton>
                    <ListItemIcon sx={{ color: '#fff' }}>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>            
        </Drawer>
    );
}

export default Navbar;