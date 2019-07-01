import React, { Component } from 'react';
import Message from './Message';
import config from './config';

import openSocket from 'socket.io-client';
const socket = openSocket(config.baseUrl);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      messages: []
    };

    socket.on('msg', messages => {
      this.setState({messages})
    });
  }

  componentDidMount() {
    console.log('Creds in chat: ',this.props.creds);
    // fetch current messages
    const url = config.baseUrl + config.api + config.messagesRoute;
    const reqData = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'token': this.props.creds.token
      },
      mode: 'cors'
    }

    fetch(url, reqData)
      .then(res => res.json())
      .then(res => {
        if (!('error' in res)) {
          this.setState({messages: res})
        }
      })
      .catch(err => console.log(err));
  }

  handleSubmit = e => {
    e.preventDefault();

    const payload = {
      userId: this.props.creds.userId,
      token: this.props.creds.token,
      message: this.message.value
    };

    console.log(payload);

    const url = config.baseUrl + config.api + config.messageRoute;
    const reqData = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'},
      mode: 'cors'
    };

    this.form.current.reset();

    fetch(url, reqData)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log('Error: ', err));
  }

  render () {
    return (
      <div>
        <h2>Chat</h2>
        <ul id="messages">
          {this.state.messages.map(msg =>
            <Message
              username={msg.username}
              timeStamp={msg.timeStamp}
              message={msg.message}
              key={msg.id}
            />
          )}
        </ul>
        <form id="chat-message-form" onSubmit={e => e.preventDefault()} ref={this.form} >
          <input id="message-input-field" type="text" placeholder="Spread the word." ref={input => this.message=input} />
          <button id="send-message-btn" onClick={this.handleSubmit}>Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;
