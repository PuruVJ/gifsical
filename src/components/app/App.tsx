import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import AuthPage from '../auth-page/AuthPage';
import AuthGuard from '../AuthGuard';

interface AppProps {}

const GlobalStyle = createGlobalStyle`
   ${reset}
  body {
  margin: 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;

function App({}: AppProps) {
  return (
    <main>
      <HelmetProvider>
        <Switch>
          <Route path="/login" render={() => <AuthPage authType="login" />} />
          <Route path="/signup" render={() => <AuthPage authType="signup" />} />
        </Switch>

        <AuthGuard />

        <GlobalStyle />
      </HelmetProvider>
    </main>
  );
}

export default App;
