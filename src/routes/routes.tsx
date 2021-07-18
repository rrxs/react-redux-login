import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import PrivateRoute from './private-route';
import Dashboard from '../pages/dashboard';
import history from './history';
import NotFound from '../pages/not-found';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default Routes;
