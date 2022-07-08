export const navbarStyles = {
    drawer: {
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#123456',
            color: '#fff',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icons: {
        color: '#fff',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        },
    },
};