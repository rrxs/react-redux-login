import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import loginService from '../services/login.service';

function PrivateRoute({ ...rest }: RouteProps) {
  if (!loginService.isAuthenticated()) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
}

export default PrivateRoute;
