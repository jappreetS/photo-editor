import React from 'react';

import './BottomMenu.scss';

class BottomMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bottomMenu">
          <ul className="pl-0 mt-0">
            <li>Reset</li>
            <li>Upload other</li>
            <li>Next</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BottomMenu;