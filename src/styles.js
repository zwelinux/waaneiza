import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    icon: {
        margin: 10,
    },
    container: {
        backgroundImage: `url("https://img.freepik.com/free-vector/white-background-with-wavy-lines_23-2149124447.jpg?w=2000")`,
        // backgroundImage: `url("https://source.unsplash.com/random")`,
        paddingTop: 170,
        height: 600,
    },
    containerTwo: {
        paddingTop: 80,
        backgroundColor: '#2e4675',        
        paddingBottom: 80,
    },
    containerThree: {
        paddingTop: 80,
        backgroundColor: '#eefeff',
        paddingBottom: 20,
    },
    h6ContainerThree: {
        paddingTop: 50,
    },
    button: {
        marginTop: 30,
    },
    paragraphOneDiv: {
        marginTop: 30,
    },
    cardGrid: {
        paddingTop: 70,
        paddingBottom: 40,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#2E3B55',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
    },

    // main page 

    mainDiv: {
        backgroundColor: '#efefef',
    },

    mainContainerTwo: {
        marginTop: 30,
        marginBottom: 30,
    },

    mainTableContainer: {
        marginBottom: 50,
    },

});

export default useStyles;