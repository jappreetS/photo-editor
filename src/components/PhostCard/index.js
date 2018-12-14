import React from 'react';

import TopMenu from '../elements/TopMenu';
import SideMenu from '../elements/SideMenu';
import BottomMenu from '../elements/BottomMenu';
import RangeSlider from '../elements/RangeSlider';
import normal from './../../global/assets/images/normal.png';

import './PhostCard.scss';

class PhostCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="body-container">
          <div className="section-container">
            <div className="row">
              <TopMenu />
            </div>
            <div className="row second mt-10">
              <SideMenu />
              <div className="image-container">
                <img alt="postcard-img" src={normal} />
                <BottomMenu />
              </div>
              <div className="filter-section">
                <RangeSlider name="Intensity" value="90" />
                <RangeSlider name="Vigenette" value="40" />
                <RangeSlider name="Brightness" value="70" />
                <RangeSlider name="Sharpness" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default PhostCard;