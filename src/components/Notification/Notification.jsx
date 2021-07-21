import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';

import { contactsActions } from 'redux/contacts';

import fadeFromRight from 'animations/fadeFromRight.module.css';

const place = document.querySelector('#notify');

const useStyles = makeStyles({
  Notification: {
    position: 'fixed',
    right: '20px',
    top: '20px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 30px',
    backgroundColor: 'coral',
    width: 'fitContent',
  },
});

export default function Notification({ message, delay, notifyRef }) {
  const dispatch = useDispatch();
  // const notifyRef = React.createRef();
  const classes = useStyles();
  const showTimer = useRef(null);

  useEffect(() => {
    showTimer.current = setTimeout(() => {
      dispatch(contactsActions.hideNotify());
      showTimer.current = null;
    }, delay);

    return () => {
      clearTimeout(showTimer.current);
    };
  }, [dispatch, delay]);

  return createPortal(
    <CSSTransition
      in={true}
      timeout={250}
      classNames={fadeFromRight}
      nodeRef={notifyRef}
      unmountOnExit
    >
      <div className={classes.Notification} ref={notifyRef}>
        <p>{message}</p>
      </div>
    </CSSTransition>,
    place,
  );
}

Notification.defaultProps = { delay: 2000, message: '' };
