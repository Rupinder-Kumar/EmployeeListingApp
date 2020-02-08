import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from '../common/layout/DefaultLayout';
import Dashboard from '../Dashboard/containers/Dashboard';

export class AuthenticatedApp extends Component {
    render() {
        return (
            <DefaultLayout>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>

            </DefaultLayout>

        )
    }
}

export default AuthenticatedApp;
