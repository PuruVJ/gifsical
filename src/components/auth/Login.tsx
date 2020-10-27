import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginIllustrationSVG from '../../assets/art/login.svg';
import { AuthArea, AuthPage, AuthTextField } from './auth-shared-styles';
import { PasswordInput } from './password-input';

export default function Login({}) {
  const classes = useClasses();

  // States
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  function toggleError() {
    setError(({ email, password }) => ({
      email: email ? '' : 'Invalid email',
      password: password ? '' : 'Invalid email',
    }));
  }

  return (
    <>
      <AuthPage>
        <AuthArea>
          <Typography color="secondary" variant="h2">
            Login
          </Typography>
          <br />
          <img className={classes.img} src={LoginIllustrationSVG} />
          <form className={classes.form}>
            <AuthTextField
              label="E-mail address"
              name="email"
              type="email"
              required
              error={!!error.email}
              helperText={error.email && 'Hello world'}
              className={classes.input}
            />

            <PasswordInput
              color="secondary"
              variant="filled"
              label="Password"
              name="password"
              className={`${classes.passwordInput} ${classes.input}`}
              required
            />

            <Button
              onClick={(e) => {
                e.preventDefault();
                toggleError();
              }}
              type="submit"
              color="secondary"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </AuthArea>
      </AuthPage>
      <Helmet>
        <title>Login | Gifsical</title>
      </Helmet>
    </>
  );
}

/**
 * General styles
 */
const useClasses = makeStyles(({ spacing, palette }) => ({
  form: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: spacing(0.5),
  },

  img: {
    maxWidth: '100%',
  },

  input: {
    caretColor: palette.secondary.main,
  },

  passwordInput: {
    '& svg': {
      fill: palette.text.primary,
      color: palette.text.primary,
    },
  },
}));
