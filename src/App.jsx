import React, { Component } from 'react';
import ClientCard from './components/ClientCards';
import EmployeeCard from './components/EmployeeCards';
import MessageCards from "./components/MessageCards";
import profile from './imgs/profile.jpg';
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
        <header>
          <div className='logo'>Company Inc.</div>
          <div className='btn-group'>
            <div className='btn-group'>
              <div className='button dropdown-toggle mr-4' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className='header-btn'>
                  <i class="far fa-bell"></i>
                </div>
              </div>
              <div className="dropdown-menu custom-menu dropdown-menu-right">
                <div className="dropdown-item custom-item">
                  <div className='icon-bubble'><i className="fas fa-chart-line"></i></div>
                  <div className='text-group'>
                    <div className='item-title'>Analytics</div>
                    <div className='dropdown-text'>Your website’s active users count increased by <span className='text-success'>28%</span>.</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item custom-item">
                  <div className='icon-bubble'><i className="fas fa-dollar-sign"></i></div>
                  <div className='text-group'>
                    <div className='item-title'>Sales</div>
                    <div className='dropdown-text'>Last week your store’s sales count decreased by <span className='text-danger'>5.2%</span>.</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item custom-item2"><div>View all Notifications</div></a>
              </div>
            </div>
            <div className='btn-group a-btn-group'>
              <div className='profile-group dropdown-toggle button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className='profile' src={profile} alt="" />
                <div className='profile-name'>Trevor</div>
              </div>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item"><i className="far fa-user"></i> Profile</a>
                <a className="dropdown-item"><i className="far fa-file-alt"></i> Blog Posts</a>
                <a className="dropdown-item"><i className="far fa-file"></i> Add New Post</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item"><span className='text-danger'><i className="fas fa-sign-out-alt"></i> Logout</span></a>
              </div>
            </div>
          </div>
        </header>
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