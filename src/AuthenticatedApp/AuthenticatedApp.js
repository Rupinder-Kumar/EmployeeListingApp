import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from "../Login/store/LoginActions";
import DefaultLayout from '../common/layout/DefaultLayout';
import Dashboard from '../Dashboard/containers/Dashboard';

export class AuthenticatedApp extends Component {
    render() {        
        return (
            <DefaultLayout logout={this.props.logout}>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </DefaultLayout>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    null,
    mapDispatchToProps
)(AuthenticatedApp);