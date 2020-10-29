import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Link,
  makeStyles,
  Slide,
  Snackbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import LoginIllustrationSVG from '../assets/art/login.svg';
import { AuthArea, AuthPage, AuthTextField } from '../components/auth/auth-shared-styles';
import { PasswordInput } from '../components/password-input';
import { firebaseInstance } from '../helpers/firebase';
import { emailRegex } from '../helpers/utils';

type TLoginError =
  | 'user-not-found'
  | 'wrong-password'
  | 'network-request-failed'
  | 'too-many-requests'
  | '';

const loginErrorMap: { [error in TLoginError]: string } = {
  '': '',
  'network-request-failed': `Network request failed. Try to log in again.`,
  'user-not-found': 'Email not found in our database',
  'wrong-password': 'Email and Password do not match',
  'too-many-requests': 'Too many login attempts. Try again in a minute',
};

export default function Login({}) {
  const classes = useClasses();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });

  // Login error
  const [loginError, setLoginError] = useState<TLoginError>('');
  const [isInProgress, setIsInProgress] = useState(false);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  // Open snackbar when errors occur
  useEffect(() => {
    if (!loginError) return;

    setIsSnackBarOpen(true);
  }, [loginError]);

  async function login(data: Record<string, any>) {
    // Got the email and password
    const { email, password } = data;

    // Reset errors
    setLoginError('');

    // Show loading
    setIsInProgress(true);

    // Initialize firebase auth
    const auth = firebaseInstance.auth();

    auth.setPersistence(firebaseInstance.auth.Auth.Persistence.LOCAL);

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.code);

      setLoginError(error.code.replace('auth/', '') as TLoginError);
    } finally {
      setIsInProgress(false);
    }
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
          <form className={classes.form} onSubmit={handleSubmit(login)}>
            <AuthTextField
              label="E-mail address"
              name="email"
              type="email"
              required
              className={classes.input}
              inputRef={register({
                required: `Email can't be empty`,
                pattern: {
                  value: emailRegex,
                  message: 'Enter a valid email address',
                },
              })}
              error={!!errors.email}
              helperText={errors?.email?.message}
            />

            <PasswordInput
              color="secondary"
              variant="filled"
              label="Password"
              name="password"
              className={`${classes.passwordInput} ${classes.input}`}
              required
              inputRef={register({ required: `Password can't be empty` })}
              error={!!errors.password}
              helperText={errors?.password?.message}
            />

            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
          </form>
          <br />
          <Typography align="right">
            <Link color="secondary" to="/forgot-password" component={RouterLink}>
              Forgot Password
            </Link>
          </Typography>
        </AuthArea>
      </AuthPage>

      {/* For loading */}
      <Backdrop open={isInProgress}>
        <CircularProgress color="secondary" />
      </Backdrop>

      {/* These are for errors and confirmation */}
      <Snackbar
        TransitionComponent={(props) => <Slide {...props} direction="up" />}
        open={isSnackBarOpen}
        autoHideDuration={6180}
        onClose={() => setIsSnackBarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert variant="filled" severity="error">
          {loginErrorMap[loginError]}
        </Alert>
      </Snackbar>

      <Helmet>
        <title>Login | Gifsical</title>
      </Helmet>

      {/* Global styles when auth page is here */}
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
    gap: spacing(0.6),
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
