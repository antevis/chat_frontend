import React, { Component } from 'react';
import config from './config';

class Home extends Component {

  handleLogin = (e, route) => {
    e.preventDefault();

    const payload = {username: this.username.value, password: this.password.value};

    const url = config.baseUrl + config.api + route;
    const reqData = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    };

    fetch(url, reqData)
      .then(response => response.json())
      .then(response => this.props.onLogin(response)) // Invokes App.js method
      .then(() => this.props.history.push('/chat'))
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Chat.</h2>
        <h3>Please login</h3>
        <form id="login-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="username" ref={input => this.username=input} />
          <input type="password" placeholder="password" ref={input => this.password=input} />
          <button id="login-btn" onClick={e => this.handleLogin(e, '/login')}>Login</button>
          <button id="signup-btn" onClick={e => this.handleLogin(e, '/signup')}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Home;
