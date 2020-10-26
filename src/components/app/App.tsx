import Login from '../auth/Login';
import Signup from '../auth/Signup';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Link, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>

        <AuthGuard />

        <GlobalStyle />

        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </HelmetProvider>
    </main>
  );
}

export default App;
