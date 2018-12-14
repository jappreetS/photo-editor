import React from 'react';

import './SideMenu.scss';

class SideMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sideMenu">
          <ul className="pl-0 mt-0">
            <li>Caption</li>
            <li>Filter</li>
            <li className="active">Edit</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideMenu;