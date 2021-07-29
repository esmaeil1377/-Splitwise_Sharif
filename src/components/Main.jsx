import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import LandingPage from './LandingPage';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}

export default Main;
