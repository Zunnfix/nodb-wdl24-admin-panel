import React, { Component } from 'react';
import axios from 'axios';
import MessageCardGroup from './MessageCardGroup';

export default class MessageCards extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    // BIND FUNCTIONS
  }

  componentDidMount() {
    axios.get("/api/messages")
      .then(response => {
        // console.log(response)
        this.setState({ messages: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteMessage = (id) => {
    axios.delete(`/api/messages/${id}`)
      .then(res => this.setState({ messages: res.data })) // data is whatever you send it to be w/ .send(DATAFILE) in you controller function
      .catch(error => console.log(error))
  }

  render() {
    const { messages } = this.state
    return (
      <div className='info-card-group'>
        <div className='label-total'>
          <div className='label'>Messages: </div>
          <div className='total'>Total: {messages.length}</div>
        </div>
        <div className='message-card-group'>
          <MessageCardGroup
            deleteClient={this.deleteMessage}
            messages={messages} />
        </div>
      </div>
    )
  }
}