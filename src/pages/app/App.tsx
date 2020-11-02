import { styled, ThemeProvider } from '@material-ui/core';
import React, { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Redirect, Route, Switch } from 'react-router-dom';
import { GlobalAuthStyles } from '__components/auth/auth-global-styles';
import AuthGuard from '__components/AuthGuard';
import { theme } from '__theme__';
import './App.scss';

function App() {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/chats" />} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/chats" component={IndexPage} />
          </Switch>

          <AuthGuard />
        </HelmetProvider>

        <GlobalAuthStyles />
      </ThemeProvider>
    </Main>
  );
}

const Login = lazy(() => import('../Login'));
const Signup = lazy(() => import('../Signup'));
const IndexPage = lazy(() => import('../Index'));

const Main = styled('main')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100%',
});
export default App;
