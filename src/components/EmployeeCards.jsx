import React, { Component } from 'react';
import EmployeeCardGroup from './EmployeeCardGroup'
import axios from 'axios';

export default class EmployeeCards extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      error: 'There was an error!',
      edit: false,
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      jobTitle: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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

  addEmployee = () => {
    axios.post("api/employees/")
      .then(res => this.setState({ employees: res.data }))
      .catch(error => console.log(error))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, location, jobTitle } = this.state
    axios
      .post( "/api/employees", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        location: location,
        jobTitle: jobTitle
      })
      .then( (response) => {
        this.setState({ employees: response.data })
      })
      .catch( () => {
        this.setState({
          error: "An error occurred, please try again."
        });
      });
  }

  handleInputChange(e) {
    const { name, value } = e.target

    this.setState({ [name]: value });
    // console.log(value);
  }

  render() {
    const { firstName, lastName, email, location, jobTitle } = this.state
    const { handleInputChange } = this
    return (
      <div className='all-cards'>
        <form className='client-add-card' onSubmit={this.onSubmit}>
          <div className='client-add-form-group1'>
            <div className='input-duo'>First name:&nbsp;
              <input name='firstName' className='input-section' onChange={handleInputChange} value={firstName} />
            </div>
            <div className='input-duo'>Last name:&nbsp;
              <input name='lastName' className='input-section' onChange={handleInputChange} value={lastName} />
            </div>
            <div className='input-duo'>Email:&nbsp;
              <input name='email' className='input-section' onChange={handleInputChange} value={email} />
            </div>
          </div>
          <div className='client-add-form-group2'>
            <div className='input-duo'>Job Title:&nbsp;
              <input name='jobTitle' className='input-section' onChange={handleInputChange} value={jobTitle} />
            </div>
            <div className='input-duo'>Location:&nbsp;
              <input name='location' className='input-section' onChange={handleInputChange} value={location} />
            </div>
          </div>
          <input value='Add Employee' type='submit' className='add-btn' />
        </form>
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