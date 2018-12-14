import React from 'react';

import './FilterType.scss';

class FilterType extends React.Component {
  render() {
    const { imgSrc, filterName, active } = this.props;
    return (
      <React.Fragment>
        <div className={`filter ${active ? 'active' : ''}`}>
          <img className="filter-image" alt="postcard-img" src={imgSrc} />
          <span className="caption">{filterName}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterType;