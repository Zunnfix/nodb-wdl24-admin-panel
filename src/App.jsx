import React, { Component } from 'react';
import ClientCard from './components/ClientCards';
import EmployeeCard from './components/EmployeeCards';
import profile from './imgs/profile.jpg';
import './AppStyle.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "clients"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    const {view} = this.state;
    return (
      <main>
        <header>
          <div className='logo'>Company Inc.</div>
          <div className='profile-group'>
            <img className='profile' src={profile} alt="" />
            <div className='profile-name'>Trevor</div>
          </div>
        </header>
        <div className='main-page'>
          <nav>
            <div className='nav-group'>
              <div className='nav-link'>Home</div>
              <div onClick={() => { this.setState({ view: "clients" }); }} 
                   className={view === 'clients' ? 'nav-link selected' : 'nav-link'}>Clients</div>
              <div onClick={() => { this.setState({ view: "employees" }); }} 
                   className={view === 'employees' ? 'nav-link selected' : 'nav-link'}>Employees</div>
              <div onClick={() => { this.setState({ view: "messages" }); }} 
                   className={view === 'messages' ? 'nav-link selected' : 'nav-link'}>Messages</div>
            </div>
          </nav>
          <div className='all-card-tags'>
            {this.state.view === "clients" && <ClientCard data={this.state.customers} changeView={this.changeView} />}
            {this.state.view === "employees" && <EmployeeCard data={this.state.staff} changeView={this.changeView} />}
          </div>
        </div>
      </main>
    );
  }

}