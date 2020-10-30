import { GlobalAuthStyles } from '@components/auth/auth-global-styles';
import AuthGuard from '@components/AuthGuard';
import { styled, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../../theme';
import './App.scss';

interface AppProps {}

const Login = React.lazy(() => import('../Login'));
const Signup = React.lazy(() => import('../Signup'));

const Main = styled('main')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100%',
});

function App({}: AppProps) {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>

          <AuthGuard />
        </HelmetProvider>

        <GlobalAuthStyles />
      </ThemeProvider>
    </Main>
  );
}

export default App;
