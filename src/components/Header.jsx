import React, { Component } from 'react';
import profile from '../imgs/profile.jpg';

export default class Header extends Component {

  render() {
    return (
      <header>
        <div className='logo'>Company Inc.</div>
        <div className='btn-group'>
          <div className='btn-group'>
            <div className='button dropdown-toggle mr-4' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className='header-btn'>
                <i className="far fa-bell"></i>
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
    );
  }

}