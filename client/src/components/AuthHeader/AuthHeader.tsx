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
        <Box margin="15px">
          <Grid container justify="space-between">
            <Grid item>
              <img src={logo} alt="logo" className={logo} />
            </Grid>
            <Grid item>
              <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="flex-end" alignSelf="flex-end">
                <Link to="" className={classes.sitterLink}>
                  Become A Sitter
                </Link>
                <Button component={Link} to="/login" color="primary" variant="outlined" className={classes.loginBtn}>
                  login
                </Button>
                <Button component={Link} to="/signup" color="primary" variant="contained" className={classes.signupBtn}>
                  sign Up
                </Button>
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
