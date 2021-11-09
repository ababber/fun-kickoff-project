import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';

const AuthHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="secondary">
        <Box className={classes.headerWrapper}>
          <Grid container justify="space-between">
            <Grid item>
              <img src={logo} alt="logo" className={logo} />
            </Grid>
            <Grid item>
              <Box className={classes.authWrapper}>
                <Link to="" className={classes.sitterLink}>
                  Become A Sitter
                </Link>
                <Link to="/login" className={classes.link}>
                  <Button color="primary" className={classes.loginBtn} variant="outlined">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className={classes.link}>
                  <Button color="primary" className={classes.signupBtn} variant="contained">
                    Sign Up
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default AuthHeader;
