import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'

import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // textDecoration: 'none'
  },
  container: {
    paddingTop: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rootBottomNav: {
      // top: 'auto',
      bottom: 0,
      left: 0,
      right: 0,
      position: 'fixed',
  },
  media: {
    height: 140,
  },

  link: {
    margin: theme.spacing(0.5),
  },

  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  footer: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function CustomCard({title, description, imagemedia, linkto}) {
  const classes = useStyles();

  return (
    <Link component={RouterLink} to={linkto} underline='none' >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          //image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          image={require('../assets/'+imagemedia)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Lihat
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Link>
  )
}

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <Container maxWidth="md">
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Pengelola Data Handal untuk Informasi MKG Terpercaya
      </Typography>
    </Container>
    <Container className={classes.container}  maxWidth="lg">
      {/* <Typography>
        Pilihan Menu
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <CustomCard title={'Agenda'} description={'Jadwal lengkap kegiatan Bimtek tahun 2020 ada di sini'} imagemedia={'agenda2.jpg'} linkto={'/agenda'} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CustomCard title={'Faq'} description={'Tanya jawab seputar Bimtek'} imagemedia={'asking.jpg'} linkto={'/faq'} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CustomCard title={'Dokumentasi'} description={'Materi pendukung beserta foto-foto dokumentasi ada di sini'} imagemedia={'documentation.jpg'} linkto={'/dokumentasi'} />
        </Grid>
      </Grid>
    </Container>
    
    {/* <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Container> */}
    </>
  );
}