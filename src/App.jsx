import React from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import Header from './components/Header';
import routes from './routes';
import './AppStyle.css';

export default function App() {
  return (
    <div>
      <Header />
      <div className='main-page'>
        <HashRouter>
          <nav>
            <div className='nav-group'>
              <NavLink to='/dashboard' className='nav-link' activeClassName='selected'>
                <div><i class="fas fa-tachometer-alt"></i> Dashboard</div>
              </NavLink>
              <NavLink to='/clients' className='nav-link' activeClassName='selected'>
                <div><i class="fas fa-users"></i> Clients</div>
              </NavLink>
              <NavLink to='/employees' className='nav-link' activeClassName='selected'>
                <div><i class="fas fa-address-card"></i> Employees</div>
              </NavLink>
              <NavLink to='/messages' className='nav-link' activeClassName='selected'>
                <div><i class="fas fa-comment-alt"></i> Messages</div>
              </NavLink>
              <NavLink to='/contact' className='nav-link' activeClassName='selected'>
                <div><i class="fas fa-envelope"></i> Contact</div>
              </NavLink>
            </div>
          </nav>
          <div className='all-card-tags'>
            {routes}
          </div>
        </HashRouter>
      </div>
    </div>
  )
}