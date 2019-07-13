import React, { Component } from 'react';

// MAKE THIS A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT //
export default class ClientCardGroup extends Component {

  render() {
    let viewCards = this.props.clients.map(client => {
      const { id, firstName, lastName, email, business, title } = client
      return (
        <div className='client-card-group' key={id}>
          <div className='client-card'>
            <div className='client-display-group1'>
              <div className='client-name'>{firstName} {lastName}</div>
              <div className='client-form-item'>Email: {email}</div>
            </div>
            <div className='client-display-group2'>
              { Array.isArray(business) ? <div className='client-form-item'>Business: {business[0]}, {business[1]}, {business[2]}</div> 
                                        : <div className='client-form-item'>Business: {business}</div> }
              <div className='client-form-item'>Title: {title}</div>
            </div>
            <button className='edit-btn' onClick={() => this.props.addClient()}>Edit</button>
            <button className='delete-btn' onClick={() => this.props.deleteClient(id)}>Delete</button>
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
