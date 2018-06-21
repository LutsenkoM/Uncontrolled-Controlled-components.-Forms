import React, { Component } from 'react';
import Registration from './Registration'
import Login from './Login'
import Home from './Home'
import { Route } from "react-router-dom";

class Routingwrap extends Component {

  render () {
    return (
      <div className="home">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </div>
    );
  }
}

export default Routingwrap;