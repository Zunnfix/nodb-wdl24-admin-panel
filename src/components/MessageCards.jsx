import React, { Component } from 'react';
import axios from 'axios';

export default class MessageCards extends Component {
  constructor(props) {
    super(props);
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
      let viewCards = this.state.messages.map(note => {
        const { id, firstName, lastName, email, message } = note
        return (
          <div className='card=container'>
            <div className='client-card-group' key={id}>
              <div className='client-card'>
                <div className='message-info-display'>
                  <div className='message-name'><span className='value-key'>Name: </span>{firstName} {lastName}</div>
                  <div className='message-email'><span className='value-key'>Email: </span>{email}</div>
                </div>
                <div className='message-display'>
                  <div className='message'><span className='value-key'>Message: </span>{message}</div>
                </div>
                <button className='delete-btn' onClick={() => this.deleteMessage(id)}>Delete</button>
              </div>
            </div>
          </div>
        )
      })
    return (
      <div>
        {viewCards}
      </div>
    )
  }
}