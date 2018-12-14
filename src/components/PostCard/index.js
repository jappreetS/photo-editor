import React from 'react';

import FilterType from '../elements/FilterType';
import RangeSlider from '../elements/RangeSlider';
import SideMenu from '../elements/SideMenu';
import TopMenu from '../elements/TopMenu';

import normal from './../../global/assets/images/normal.png';
import greyscale from './../../global/assets/images/greyscale.png';
import polaris from './../../global/assets/images/polaris.png';
import caramel from './../../global/assets/images/caramel.png';
import inkewell from './../../global/assets/images/inkewell.png';
import sepia from './../../global/assets/images/sepia.png';
import './PostCard.scss';

class PostCard extends React.Component {
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
              </div>
              <div className="filter-section">
                <div className="filter-container">
                  <div className="image-row-1">
                    <FilterType imgSrc={normal} filterName="Normal" active />
                    <div className="filter">
                      <FilterType imgSrc={greyscale} filterName="Greyscale" />
                    </div>
                    <div className="filter">
                      <FilterType imgSrc={polaris} filterName="Polaris" />
                    </div>
                  </div>
                  <div className="image-row-1">
                    <div className="filter">
                      <FilterType imgSrc={caramel} filterName="Caramel" />
                    </div>
                    <div className="filter">
                      <FilterType imgSrc={inkewell} filterName="Inkewell" />
                    </div>
                    <div className="filter">
                      <FilterType imgSrc={sepia} filterName="Sepia" />
                    </div>
                  </div>
                </div>
                <RangeSlider name="Intensity" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default PostCard;