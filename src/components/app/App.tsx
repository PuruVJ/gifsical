import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from '../auth-page/AuthPage';
import AuthGuard from '../AuthGuard';
import './App.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <main>
      <Switch>
        <Route path="/login" render={() => <AuthPage authType="login" />} />
        <Route path="/signup" render={() => <AuthPage authType="signup" />} />
      </Switch>
      <AuthGuard />
    </main>
  );
}

export default App;
