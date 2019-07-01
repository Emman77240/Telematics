import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import * as routes from './constants/routes';

import Header from './components/header';

import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Route path={routes.SIGNIN} exact component={SignIn} />
        <Route path={routes.SIGNUP} component={SignUp} />
        <Route path={routes.DASHBOARD} component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;