import React from 'react';
import { Link } from 'react-router-dom'

import './NavigationBar.scss';

class NavigationBar extends React.Component {
  render() {
    const { pathname } = window.location;
    return (
      <React.Fragment>
        <div className="NavigationBar">
          <ul className="pl-0">
            <li className={pathname === '/postcard' ? 'active' : ''}><Link to='/postcard'>Postcard</Link></li>
            <li><Link to='/phostcard'>Phostcard</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default NavigationBar;