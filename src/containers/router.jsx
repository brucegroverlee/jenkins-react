import React from 'react';
import { Router as BrowserRouter, Route, Redirect, Switch /*, withRouter */ } from 'react-router-dom';

import history from '../modules/history';

import Login from './login.jsx';
import Dashboard from './dashboard.jsx';

const Router = () => {
  return(
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from='/' to='/login'/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;