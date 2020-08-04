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
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Agenda from './screens/Agenda';
import Dokumentasi from './screens/Dokumentasi';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
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
        <CssBaseline />
        
        <Hidden only="xs">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Bimtek Pengelola Database TA 2020
                    </Typography>
                    <Button component={Link} to={'/'} color="inherit">Beranda</Button>
                    <Button component={Link} to={'/agenda'} color="inherit">Agenda</Button>
                    <Button component={Link} to={'/faq'} color="inherit">FAQ</Button>
                    <Button component={Link} to={'/dokumentasi'} color="inherit">Dokumentasi</Button>
                </Toolbar>
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
                {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
                </Typography>
                <div className={classes.heroButtons}>
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
            </div>
        
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
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
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
                    onClick={() => setTitleNavMobile('Bimtek Database') }
                />
                <BottomNavigationAction 
                    component={Link} 
                    to={'/agenda'} 
                    label="Agenda" 
                    icon={<EventNoteIcon />} 
                    onClick={() => setTitleNavMobile('Agenda Bimtek Database') }
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
                    icon={<DescriptionIcon />} 
                    onClick={() => {
                    setTitleNavMobile('Dokumentasi Bimtek Database');
                    setTitle('Dokumentasi')
                    } }/>
            </BottomNavigation>
        </Hidden>
      </React.Fragment>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Faq() {
  return <h2>Faq</h2>;
}
