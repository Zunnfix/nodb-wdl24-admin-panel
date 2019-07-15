import React from 'react';

const ClientCardGroup = (props) => {
  let viewCards = props.clients.map(client => {
    const { id, firstName, lastName, email, business, title } = client
    return (
      <div className='client-card' key={id}>
        <div className='client-display-group1'>
          <div className='client-name'>{firstName} {lastName}</div>
          <div className='client-form-item'><span className='value-key'>Email: </span>{email}</div>
        </div>
        <div className='client-display-group2'>
          {Array.isArray(business) ? <div className='client-form-item'><span className='value-key'>Business: </span>{business[0]}, {business[1]}, {business[2]}</div>
            : <div className='client-form-item'><span className='value-key'>Business: </span>{business}</div>}
          <div className='client-form-item'><span className='value-key'>Title: </span>{title}</div>
        </div>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn' onClick={() => props.deleteClient(id)}>Delete</button>
      </div>
    )
  })
  return (
    <div>
      {viewCards}
    </div>
  )
}
export default ClientCardGroup

// * The ghost server that objects are temporarily saved to until nodemon is restarted