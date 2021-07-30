import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import Profile from './Profile';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default Main;
