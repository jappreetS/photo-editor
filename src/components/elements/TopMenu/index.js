import React from 'react';

import './TopMenu.scss';

class TopMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="topMenu">
          <ul className="pl-0">
            <li>Postcard</li>
            <li className="active">Phostcard</li>
            <li>Letter</li>
            <li>Album</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default TopMenu;