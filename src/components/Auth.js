import React, { Component } from 'react';
import logo from '../logo.png';

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth-form">
          <img className="auth-logo rotating" src={logo} alt="Helo App" />
          <h1 className="auth-title">Helo</h1>
          <form className="form-body" action="">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" />
            <div className="form-routes">
              <button>Login</button>
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth