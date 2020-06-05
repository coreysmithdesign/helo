import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../redux/reducer'
import logo from '../logo.png';

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    axios.post('/api/auth/login', { username, password })
      .then(res => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        alert('Could not log in')
      })
  }

  handleRegister() {

  }

  render() {
    const { username, password } = this.state

    return (
      <div className="auth">
        <div className="auth-form">
          <img className="auth-logo rotating" src={logo} alt="Helo App" />
          <h1 className="auth-title">Helo</h1>
          <form className="form-body" onSubmit={e => this.handleLogin(e)}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)} />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => this.handleChange(e)} />
            <div className="form-routes">
              <input
                type="submit"
                value="Login" />
              <input
                type="submit"
                value="Register" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { loginUser }

export default connect(null, mapDispatchToProps)(Auth)