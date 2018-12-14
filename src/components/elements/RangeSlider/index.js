import React from 'react';

import './RangeSlider.scss';

class RangeSlider extends React.Component {
  render() {
    const { name, value } = this.props;
    return (
      <React.Fragment>
        <div className="slide-container">
          <p className="mb-5">{name}</p>
          <input className="slider" type="range" min="1" max="100" value={value} />
        </div>
      </React.Fragment>
    );
  }
}

export default RangeSlider;