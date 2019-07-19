import React, { Component } from 'react';
import axios from 'axios';
import ClientCardGroup from './ClientCardGroup'

export default class ClientCards extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      error: 'There was an error!',
      edit: false,
      editTitle: false,
      updateEmail: '',
      firstName: '',
      lastName: '',
      email: '',
      business: '',
      title: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/clients")
      .then(response => {
        // console.log(response)
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

  editEmail = (id) => {
    const { updateEmail } = this.state
    console.log(updateEmail)
    axios.put(`api/clients/${id}`, { updateEmail })
      .then(res => this.setState({ clients: res.data }))
      .catch(error => console.log(error))
  }

  toggleEdit = (id) => {
    this.state.edit === false ? this.setState({edit: true}) : this.setState({edit: false});
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, business, title } = this.state
    axios
      .post( "/api/clients", {
        firstName,
        lastName,
        email,
        business,
        title
      })
      .then( (response) => {
        this.setState({ clients: response.data })
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
    console.log(value);
  }

  render() {
    const { id, firstName, lastName, email, business, title, clients, edit } = this.state
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
            <div className='input-duo'>Business:&nbsp;
              <input name='business' className='input-section' onChange={handleInputChange} value={business} />
            </div>
            <div className='input-duo'>Title:&nbsp;
              <input name='title' className='input-section' onChange={handleInputChange} value={title} />
            </div>
          </div>
          <input value='Add Client' type='submit' className='add-btn' />
        </form>
        <div className='label-total'>
          <div className='label'>Clients: </div>
          <div className='total'>Total: {clients.length}</div>
        </div>
        <div className='card-group'>
          <div className='client-card-group'>
            {this.state.clients.map(client => (
              <ClientCardGroup
                editEmail={this.editEmail}
                deleteClient={this.deleteClient}
                client={client} 
                toggleEdit={this.toggleEdit}
                edit={edit}
                handleInputChange={handleInputChange}
                key={client.id}
                />
            ))}
          </div>
        </div>
      </div>
    );
  }

}