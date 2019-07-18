import React, { Component } from 'react';
import ClientCard from './components/ClientCards';
import EmployeeCard from './components/EmployeeCards';
import MessageCards from "./components/MessageCards";
import Header from './components/Header';
import './AppStyle.css';
import ContactUs from './components/ContactUs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "contact"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    const { view } = this.state;
    return (
      <main>
        <Header />
        <div className='main-page'>
          <nav>
            <div className='nav-group'>
              <div onClick={() => { this.setState({ view: "contact" }); }}
                className={view === 'contact' ? 'nav-link selected' : 'nav-link'}>Home</div>
              <div onClick={() => { this.setState({ view: "clients" }); }}
                className={view === 'clients' ? 'nav-link selected' : 'nav-link'}>Clients</div>
              <div onClick={() => { this.setState({ view: "employees" }); }}
                className={view === 'employees' ? 'nav-link selected' : 'nav-link'}>Employees</div>
              <div onClick={() => { this.setState({ view: "messages" }); }}
                className={view === 'messages' ? 'nav-link selected' : 'nav-link'}>Messages</div>
            </div>
          </nav>
          <div className='all-card-tags'>
            {this.state.view === "clients" && <ClientCard data={this.state.clients} changeView={this.changeView} />}
            {this.state.view === "employees" && <EmployeeCard data={this.state.employees} changeView={this.changeView} />}
            {this.state.view === "messages" && <MessageCards data={this.state.messages} changeView={this.changeView} />}
            {this.state.view === "contact" && <ContactUs data={this.state.contact} changeView={this.changeView} />}
          </div>
        </div>
      </main>
    );
  }

}