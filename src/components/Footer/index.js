import React from 'react';

import facebookIcon from './../../global/assets/images/facebook.svg';
import instagramIcon from './../../global/assets/images/instagram.svg';
import twitterIcon from './../../global/assets/images/twitter.svg';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="col">
            <h1 className="title">Services</h1>
            <ul>
              <li>Phostcard</li>
              <li>Postcard</li>
              <li>Letter</li>
              <li>Phote Album</li>
            </ul>
          </div>
          <div className="col">
            <h1 className="title">Quick Links</h1>
            <ul>
              <li>About us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
          <div className="col">
            <h1 className="title">Support</h1>
            <ul>
              <li>Getting Started</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="social">
            <ul className="social-container">
              <li><img alt="facebook" src={facebookIcon} /></li>
              <li><img alt="instagram" src={instagramIcon} /></li>
              <li><img alt="twitter" src={twitterIcon} /></li>
            </ul>
          </div>
          {/* <div className="copyright">&copy; 2016 REWIND, All rights reserved</div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;