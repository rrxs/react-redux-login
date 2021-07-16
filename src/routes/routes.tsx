import React from 'react';
import { Route, Switch, Router } from "react-router-dom";
import Login from "../pages/login";
import PrivateRoute from "./private-route";
import Dashboard from "../pages/dashboard";
import history from "./history";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/login" component={Login}/>
                {/*<Redirect from="*" to="/"/>*/}
            </Switch>
        </Router>
    );
}

export default Routes;
