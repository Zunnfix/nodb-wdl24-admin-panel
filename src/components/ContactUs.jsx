import React, { Component } from "react";
import axios from 'axios';

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      messages: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/messages")
      .then(response => {
        // console.log(response)
        this.setState({ messages: response.data })
      })
      .catch(error => console.log(error))
  }

  onSubmit = (e) => {
    const { firstName, lastName, email, message } = this.state
    axios
      .post("/api/messages/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      })
      .then((res) => {
        this.setState({ messages: res.data })
      })
      .catch(() => {
        this.setState({
          error: "An error occurred, please try again."
        })
      })
  }

  handleInputChange(e) {
    const { name, value } = e.target

    this.setState({ [name]: value });
    // console.log(value);
  }


  render() {
    const { firstName, lastName, email, message } = this.state
    const { handleInputChange } = this
    return (
      <main>
        <form className='contact-form' onSubmit={this.onSubmit}>
          <div className='contact-title'>Contact Us</div>
          <div className='form-group'>
            <div className='name-input-group'>
              <input name='firstName' placeholder='First name' className='c-input name-input' type="text" onChange={handleInputChange} value={firstName} />
              <input name='lastName' placeholder='Last name' className='c-input right-input name-input' type="text" onChange={handleInputChange} value={lastName} />
            </div>
            <input name='email' placeholder='Email' className='c-input full-width-input email-input' type="text" onChange={handleInputChange} value={email} />
            <textarea name='message' placeholder='Type message here...' className='c-input full-width-input message-input' type="text" onChange={handleInputChange} value={message} />
            <div className='message-wrapper'>
              <input className='c-submit' value='Submit' type="submit" />
            </div>
          </div>
        </form>
      </main>
    )
  }
}