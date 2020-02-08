import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthenticatedApp from './AunthenticatedApp/AuthenticatedApp';
import UnAunthenticatedApp from './UnAunthenticatedApp/UnAunthenticatedApp';


class App extends Component {
  render() {
    const app = this.props.isLoggedIn ? (
      <AuthenticatedApp/>
    ) : (
      <UnAunthenticatedApp/>
    )
    return (
      {app}
    )

  }
}


const mapStateToProps = state => ({

});


export default connect(mapStateToProps, null)(App);