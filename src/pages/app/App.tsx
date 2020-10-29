import { styled, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { GlobalAuthStyles } from '../../components/auth/auth-global-styles';
import AuthGuard from '../../components/AuthGuard';
import { theme } from '../../theme';
import Login from '../Login';
import Signup from '../Signup';
import './App.scss';

interface AppProps {}

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
