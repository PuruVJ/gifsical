import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from '../auth-page/AuthPage';
import AuthGuard from '../AuthGuard';
import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import './App.scss';

interface AppProps {}

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App({}: AppProps) {
  return (
    <main>
      <Switch>
        <Route path="/login" render={() => <AuthPage authType="login" />} />
        <Route path="/signup" render={() => <AuthPage authType="signup" />} />
      </Switch>

      <AuthGuard />

      <GlobalStyle />
    </main>
  );
}

export default App;
