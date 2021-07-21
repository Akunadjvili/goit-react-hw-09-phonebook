import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Box } from '@material-ui/core';
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import { contactsActions } from 'redux/contacts';

const useStyles = makeStyles({
  container: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
    width: '100% !important',
  },
  home: {
    alignSelf: 'center',
    marginBottom: '20px',
  },
  content: {},
});

const HomeView = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsActions.showNotify('wefefew ewf ewf we'));
  }, [dispatch]);

  return (
    <section id="home" className={classes.home}>
      <Container fixed className={classes.container}>
        <Box component="div" className={classes.content}>
          <HomeTwoTone />
          <button
            onClick={() => {
              dispatch(contactsActions.showNotify(Date.now()));
            }}
          >
            click
          </button>
        </Box>
      </Container>
    </section>
  );
};

export default HomeView;
