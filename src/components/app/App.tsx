import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import AuthPage from '../auth-page/AuthPage';
import './App.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/login" render={() => <AuthPage authType="login" />} />
          <Route path="/signup" render={() => <AuthPage authType="signup" />} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
