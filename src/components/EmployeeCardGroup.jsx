import React, { Component } from 'react'

// MAKE THIS A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT //
export default class EmployeeCardGroup extends Component {

  render() {

    console.log(this.props.employees)
    let viewCards = this.props.employees.map(employee => {
      const { id, firstName, lastName, email, jobTitle, location } = employee
      return (
        <div className='client-card-group' key={id}>
          <div className='client-card'>
            <div className='client-display-group1'>
              <div className='client-name'>{firstName} {lastName}</div>
              <div className='client-form-item'>Email: {email}</div>
            </div>
            <div className='client-display-group2'>
              <div className='client-form-item'>Job Title: {jobTitle}</div>
              <div className='client-form-item'>Location: {location}</div>
            </div>
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>
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