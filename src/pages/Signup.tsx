import { makeStyles, TextField, Typography } from '@material-ui/core';
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

        <section className={classes.authArea}>
          <div>
            <Typography variant="h3" color="secondary">
              Sign Up
            </Typography>
            <TextField label="Email" className={classes.textField} color="secondary" />
            <TextField className={classes.textField} color="secondary" />
          </div>
        </section>
      </section>

      <Helmet>
        <title>Sign up | Gifsical</title>
      </Helmet>
    </>
  );
}

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',

    [breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'initial',

      '& > *': {
        flex: '0 !important',
      },
    },

    '& > *': {
      flex: '1',
    },
  },

  authArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    margin: spacing(0.5),

    width: spacing(20),
    maxWidth: '90%',

    caretColor: palette.secondary.main,
  },

  illustration: {
    display: 'flex',
    justifyContent: 'center',

    width: '100%',

    '& img': {
      maxWidth: '80%',
      width: spacing(25),
    },
  },
}));
