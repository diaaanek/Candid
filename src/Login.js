import React, { Component } from 'react';
import "./Splash.scss";
import LoginButton from './LoginButton';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            CANDID
          </h2>
          <p className="Login-intro">
            An app to learn any subject through spaced repetition.
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
        <button type="button" className="signup button mainbutton">Sign in with Github</button>

      
      </div>
    );
  }
}

export default Login;
