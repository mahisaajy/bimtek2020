import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



import MusicNoteIcon from '@material-ui/icons/MusicNote';

import Home from './screens/Home';
import Agenda from './screens/Agenda';
import Dokumentasi from './screens/Dokumentasi';
import Faq from './screens/Faq';

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
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
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      marginTop: 'auto',
      padding: theme.spacing(6),
    },
  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to={'/'}>
          Pusat Database BMKG
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [titleNavMobile, setTitleNavMobile] = React.useState('Bimtek Database 2020');
    const [title, setTitle] = React.useState('Bimtek Database');

  return (
    <Router>
      <React.Fragment>
        <div className={classes.root}>

        <CssBaseline />
        
        <Hidden only="xs">
            <AppBar position="static">
              <Container maxWidth="lg">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                    Bimtek Database 2020
                    </Typography>
                    <Button 
                      component={Link} 
                      to={'/'} 
                      color="inherit" 
                      className={classes.link} 
                      onClick={() => {
                        setValue(0);
                        setTitle('Bimtek Database');
                      }}>
                        Beranda
                    </Button>
                    <Button 
                      component={Link}
                      to={'/agenda'} 
                      color="inherit" 
                      className={classes.link} 
                      onClick={() => {
                        setValue(1);
                        setTitle('Agenda Bimtek Database');
                      }}>
                      Agenda
                    </Button>
                    <Button 
                      component={Link} 
                      to={'/faq'} 
                      color="inherit" 
                      className={classes.link} 
                      onClick={() => {
                        setValue(2);
                        setTitle('Tanya Jawab Seputar Bimtek Database');
                      }}>
                      FAQ
                    </Button>
                    <Button 
                      component={Link} 
                      to={'/dokumentasi'} 
                      color="inherit" 
                      className={classes.link} 
                      onClick={() => {
                        setValue(3);
                        setTitle('Dokumentasi dan Resource Pendukung')
                      }}>
                      Dokumentasi
                    </Button>
                </Toolbar>
              </Container>
            </AppBar>
        </Hidden>

        <Hidden smUp>
            <AppBar position="sticky">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                    {titleNavMobile}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Hidden>
        
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                {title}
                </Typography>
                
                {/* <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                      <Grid item>
                      <Button variant="contained" color="primary">
                          Main call to action
                      </Button>
                      </Grid>
                      <Grid item>
                      <Button variant="outlined" color="primary">
                          Secondary action
                      </Button>
                      </Grid>
                  </Grid>
                </div> */}
            </Container>
            
        
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/dokumentasi">
            <Dokumentasi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        </div>
        
        </main>

        <Hidden only="xs">
          {/* Footer */}
          <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
              Bimtek Pengelola Database TA 2020
              </Typography>
              {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
              </Typography> */}
              <Copyright />
          </footer>
          {/* End footer */}
        </Hidden>

        <Hidden smUp>
          <Box mt={4} />
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    //console.log(newValue);
                    setValue(newValue);
                }}
                showLabels
                className={classes.rootBottomNav}
            >
                <BottomNavigationAction 
                    component={Link} 
                    to={'/'} 
                    label="Beranda" 
                    icon={<HomeIcon />} 
                    onClick={() => {
                      setTitleNavMobile('Bimtek Database');
                      setTitle('Bimtek Database');
                    }}
                />
                <BottomNavigationAction 
                    component={Link} 
                    to={'/agenda'} 
                    label="Agenda" 
                    icon={<EventNoteIcon />} 
                    onClick={() => {
                      setTitleNavMobile('Agenda Bimtek Database');
                      setTitle('Agenda Bimtek Database');
                    }}
                />
                <BottomNavigationAction 
                    component={Link} 
                    to={'/faq'} 
                    label="Faq" 
                    icon={<HelpIcon />} 
                    onClick={() => {
                        setTitleNavMobile('Faq Bimtek Database');
                        setTitle('Tanya Jawab Seputar Bimtek Database')
                    }}
                />
                <BottomNavigationAction 
                    component={Link} 
                    to={'/dokumentasi'} 
                    label="Dokumentasi" 
                    icon={<PhotoLibraryIcon />} 
                    onClick={() => {
                    setTitleNavMobile('Dokumentasi Bimtek Database');
                    setTitle('Dokumentasi')
                    } }/>
            </BottomNavigation>
        </Hidden>
        </div>

      </React.Fragment>
    </Router>
  );
}


