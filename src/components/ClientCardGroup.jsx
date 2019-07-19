import React from 'react';

const ClientCardGroup = (props) => {
  // console.log(props)
  const { id, firstName, lastName, email, business, title } = props.client
  return (
    <div className='client-card'>
      <div className='client-display-group1'>
        <div className='client-name'>{firstName} {lastName}</div>
        {props.edit === false ? 
          ( <div className='client-form-item'><span className='value-key'>Email: </span>{email}</div> ) : 
          ( <div><input name='updateEmail' placeholder='Edit Email' onChange={props.handleInputChange} autoComplete='new-password' />
            <button onClick={() => props.editEmail(id)}>Submit</button></div> )
        }
      </div>
      <div className='client-display-group2'>
        {Array.isArray(business) ? <div className='client-form-item'><span className='value-key'>Business: </span>{business[0]}, {business[1]}, {business[2]}</div>
          : <div className='client-form-item'><span className='value-key'>Business: </span>{business}</div>}
        <div className='client-form-item'><span className='value-key'>Title: </span>{title}</div>
      </div>
      <button onClick={ props.toggleEdit } className='edit-btn'>Edit</button>
      <button className='delete-btn' onClick={() => props.deleteClient(id)}>Delete</button>
      
    </div>
  )
}

export default ClientCardGroup

// * The ghost server that objects are temporarily saved to until nodemon is restarted