import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';
import UnAunthenticatedApp from './UnAuthenticatedApp/UnAuthenticatedApp';


class App extends Component {
  render() {
    console.log(this.props.isLoggedIn)
    const app = this.props.isLoggedIn ? (
      <AuthenticatedApp/>
    ) : (
      <UnAunthenticatedApp/>
    )
    return (
      app
    )
  }
}


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});


export default connect(mapStateToProps, null)(App);