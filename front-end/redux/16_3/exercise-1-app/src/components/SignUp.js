import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="signup-form">
          <input
            value="email"
            label="Email"
          /> Email
          <input
            value="name"
            label="Name"
          /> Name
          <input
            value="age"
            label="Age"
          /> Age
        </div>
        <div className="signup-btn">
          <button>Register</button>
        </div>
      </div>
    )
  }
}
