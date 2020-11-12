import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-form">
          <input
            value="email"
            label="Email"
          /> Email
          <input
            value="password"
            label="Password"
          /> Password
        </div>
        <div className="login-btn">
          <button>Login</button>
        </div>
      </div>
    )
  }
}
