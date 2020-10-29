import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SignupSVG from '../assets/art/signup.svg';

export default function Signup({}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img src={SignupSVG} />
      </div>

      <Helmet>
        <title>Sign up | Gifsical</title>
      </Helmet>
    </>
  );
}

const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    width: '100%',

    display: 'flex',

    [breakpoints.down('md')]: {
      
    }
  },
}));
