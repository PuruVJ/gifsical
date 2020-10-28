import { CssBaseline, styled, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../../theme';
import Login from '../Login';
import Signup from '../Signup';
import AuthGuard from '../../components/AuthGuard';
import './App.scss';

interface AppProps {}

const Main = styled('main')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
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

          <CssBaseline />
        </HelmetProvider>
      </ThemeProvider>
    </Main>
  );
}

export default App;
