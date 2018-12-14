import React from 'react';

import placeholderIcon from './../../global/assets/images/placeholder.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <input className="header__search" type="text" id="myInput" placeholder="Search" title="Search" />
          <img className="header__user" alt="placeholderIcon" src={placeholderIcon} />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;