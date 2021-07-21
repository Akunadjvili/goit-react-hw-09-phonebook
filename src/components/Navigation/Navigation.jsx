import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import routes from 'routes';

const useStyles = makeStyles({
  box: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, auto)',
    gridGap: '10px',
    justifyContent: 'center',
    width: 'auto',
  },
  link: {
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  },
  link_current: {
    fontWeight: 600,
    color: '#3F51B5',
  },
});

export default function Navigation() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  return (
    <Box component="div" className={classes.box}>
      <Button color="primary" className={classes.button}>
        <NavLink
          exact
          className={classes.link}
          to={routes.home}
          activeClassName={classes.link_current}
        >
          Main
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button color="primary" className={classes.button}>
          <NavLink
            exact
            className={classes.link}
            to={routes.contacts}
            activeClassName={classes.link_current}
          >
            Contacts
          </NavLink>
        </Button>
      )}
    </Box>
  );
}
