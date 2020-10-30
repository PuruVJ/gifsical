import { makeStyles } from '@material-ui/core';
import { AuthArea } from '@components/auth/auth-shared-styles';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SignupSVG from '../assets/art/signup.svg';

export default function Signup({}) {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <section className={classes.illustration}>
          <img src={SignupSVG} />
        </section>

        <AuthArea className={classes.authArea}></AuthArea>
      </section>

      <Helmet>
        <title>Sign up | Gifsical</title>
      </Helmet>
    </>
  );
}

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',

    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },

    '& > *': {
      flex: '1',
    },
  },

  authArea: {},

  illustration: {
    display: 'flex',
    justifyContent: 'center',

    width: '100%',

    '& img': {
      maxWidth: '80%',
      width: spacing(30),
    },
  },
}));
