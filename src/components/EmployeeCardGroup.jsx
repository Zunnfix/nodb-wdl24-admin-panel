import React, { Component } from 'react'

/////////////////// MAKE THIS A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT ///////////////////////////
export default class EmployeeCardGroup extends Component {

  render() {
    let viewCards = this.props.employees.map(employee => {
      const { id, firstName, lastName, email, jobTitle, location } = employee
      return (
        <div className='client-card' key={id}>
          <div className='client-display-group1'>
            <div className='client-name'>{firstName} {lastName}</div>
            <div className='client-form-item'><span className='value-key'>Email: </span>{email}</div>
          </div>
          <div className='client-display-group2'>
            <div className='client-form-item'><span className='value-key'>Job Title: </span>{jobTitle}</div>
            <div className='client-form-item'><span className='value-key'>Location: </span>{location}</div>
          </div>
          <button className='edit-btn'>Edit</button>
          <button className='delete-btn' onClick={() => this.props.deleteEmployee(id)}>Delete</button>
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