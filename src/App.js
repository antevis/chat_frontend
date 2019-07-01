import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Chat from './Chat';

class App extends Component {

  constructor() {
    super();
    this.state = {};
    console.log('Props.', this.props);
  }

  handleLogin = data => {
    console.log(data);
    this.setState(
      {
        userId: data.id,
        username: data.username,
        token: data.token.token,
        validThru: data.token.validThru
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" render={(history) => (
                <Home
                  {...history}
                  onLogin={this.handleLogin}
                />)}
              />
              <Route path="/chat" render={(history) => (<Chat {...history} creds={this.state}/>)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
