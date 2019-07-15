import React, { Component } from "react";

export default class MessageCardGroup extends Component {
  render() {
    let viewCards = this.props.messages.map(note => {
      const { id, firstName, lastName, email, message } = note
      return (
        <div className='client-card-group' key={id}>
          <div className='message-card'>
            <div className='message-info-display'>
              <div className='message-name'><span className='value-key'>Name: </span>{firstName} {lastName}</div>
              <div className='message-email'><span className='value-key'>Email: </span>{email}</div>
            </div>
            <div className='message-display'>
              <div className='message'>{message}</div>
            </div>
            <button className='message-delete-btn' onClick={() => this.deleteMessage(id)}>Delete</button>
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