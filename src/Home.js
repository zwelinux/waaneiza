import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from "@mui/material";
import useStyles from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import MainAppBar from "./MainAppBar";
import Footer from './Footer';

const Home = () => {
    const classes = useStyles();
    // const cards = [1,2];
    return(
        
        <>
            <CssBaseline />
            <MainAppBar />
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Hello, System Developers
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            This is our file sharing platform v1.0 developed by WWS Waaneiza Worldwide Service.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                <Grid item>
                                    <Link to="file/recent">   
                                        <Button size="large" variant="contained" color="secondary">
                                            Get Started
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="#">   
                                        <Button size="large" variant="outlined" color="secondary">
                                            LEARN MORE
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.paragraphOneDiv}>                        
                            <Typography variant="paragraph" align="center" color="textSecondary" paragraph>
                                Our WWS Teammates are very grateful to develop awesome digital products for Waaneiza Company.
                            </Typography>
                        </div>

                    </Container>
                </div>
                <div className={classes.containerTwo}>
                    <Typography variant="h3" align="center" color="#fff">
                        Our Stories
                    </Typography>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {/* {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">VIEW</Button>
                                            <Button size="small" color="primary">EDIT</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))} */}
                                <Grid item xs={12} sm={6} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://cdni.iconscout.com/illustration/premium/thumb/startup-business-1460503-1234533.png"
                                            title="Outside In"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                Outside In
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="larger" color="primary">LEARN MORE</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://img.freepik.com/free-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?w=2000"
                                            title="Inside Out"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                Inside Out
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="larger" color="primary">LEARN MORE</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.containerThree}>
                    <Typography variant="h3" align="center" color="#123456">
                        Our Digital Products
                    </Typography>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                                <Grid item xs={12} sm={4} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://cdn.dribbble.com/users/1850746/screenshots/5287424/__.png"
                                            title="Pyin Nyar Sharing"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h6">
                                                Pyin Nyar Sharing
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="big" color="primary"><a href='https://lms.wwsblog.xyz/' target='_blank'>LEARN MORE</a></Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149383351.jpg?w=2000"
                                            title="ERP"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h6">
                                                ERP 
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="big" color="primary"><a href='http://18.142.234.41/' target="_blank">LEARN MORE</a></Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4} >
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            image="https://media.istockphoto.com/vectors/flat-vector-business-technology-storage-and-cloud-connect-concept-vector-id1221331439?k=20&m=1221331439&s=612x612&w=0&h=GSricvneUDK6MOMkCQ54AjhLIHMJnOrkcBZpQ0ZdR_A="
                                            title="File Sharing"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h6">
                                                File Sharing 
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="big" color="primary">
                                                <a href="http://wdrive.pythonanywhere.com/admin/" target="_blank">
                                                    LEARN MORE
                                                </a>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                        </Grid>
                        <Typography variant="h6" align="center" className={classes.h6ContainerThree}>
                            Be Our Valuable Partner. Contact Us On <FacebookIcon /> <YouTubeIcon />
                        </Typography>
                        
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;