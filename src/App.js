import React, { Component } from 'react';
import './App.css';
import Routingwrap from './Routingwrap'
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Home/>*/}
        {/*<Registration/>*/}
        {/*<Login/>*/}
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="/login">Login</Link><br/>
          <Link to="/registration">Registration</Link><br/>
        </div>
        <div className="routing-wrap">
          <Routingwrap />
        </div>
      </div>
    );
  }
}

export default App;
