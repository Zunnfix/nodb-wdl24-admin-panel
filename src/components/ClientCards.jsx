import React, { Component } from 'react';
import ClientCardGroup from './ClientCardGroup'
import axios from 'axios';

export default class ClientCards extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      business: '',
      title: '',
    };
    // BIND FUNCTIONS
  }

  componentDidMount() {
    axios.get("/api/clients")
      .then(response => {
        console.log(response)
        this.setState({ clients: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteClient = (id) => {
    axios.delete(`/api/clients/${id}`)
         .then(res => this.setState({ clients: res.data })) // data is whatever you send it to be w/ .send(DATAFILE) in you controller function
         .catch(error => console.log(error))
  }

  addClient = () => {
    axios.post("api/clients/")
         .then(res => this.setState({ clients: res.data }))
         .catch(error => console.log(error))
  }

  handleChange() {

  }
  
  render() {

    return (
      <div className='all-cards'>
        <form className='client-add-card' onSubmit={this.addClient}>
          <div className='client-add-form-group1'>
            <div className='input-duo'>First name: <input firstName={this.state.firstName} className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Last name: <input className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Email: <input className='input-section' type="text" id="" /></div>
          </div>
          <div className='client-add-form-group2'>
            <div className='input-duo'>Business: <input className='input-section' type="text" id="" /></div>
            <div className='input-duo'>Title: <input className='input-section' type="text" id="" /></div>
          </div>
          <input value='Add Client' type='submit' className='add-btn' />
        </form>
        <div className='label-total'>
          <div className='label'>Clients: </div>
          <div className='total'>Total: {this.state.clients.length}</div>
        </div>
        <div className='card-group'>
          <ClientCardGroup deleteClient={this.deleteClient} clients={this.state.clients} />
        </div>
      </div>
    );
  }

}