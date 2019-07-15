import React, { Component } from 'react';
import EmployeeCardGroup from './EmployeeCardGroup'
import axios from 'axios';

export default class EmployeeCards extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    // BIND FUNCTIONS
  }

  componentDidMount() {
    axios.get("/api/employees")
      .then(response => {
        // console.log(response)
        this.setState({ employees: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`)
      .then(res => this.setState({ employees: res.data })) // data is whatever you send it to be w/ .send(DATAFILE) in you controller function
      .catch(error => console.log(error))
  }

  render() {

    return (
      <div className='all-cards'>
        <div className='client-add-card'>
          <form className='client-add-form-group1'>
            <div className='input-duo'>First name: <input className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Last name: <input className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Email: <input className='input-section' type="text" id="" /></div>
          </form>
          <form className='client-add-form-group2'>
            <div className='input-duo'>Business: <input className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Title: <input className='input-section' type="text" id="" /></div>
          </form>
          <button className='add-btn'>Add Employee</button>
        </div>
        <div className='label-total'>
          <div className='label'>Employees: </div>
          <div className='total'>Total: {this.state.employees.length}</div>
        </div>
        <div className='card-group'>
          <div className='client-card-group'>
            <EmployeeCardGroup employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
          </div>
        </div>
      </div>
    );
  }

}