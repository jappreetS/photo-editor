import React from 'react';

import profileImage from './../../global/assets/images/profile.png';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profileContent">
          <div className="profileContent-profileImage">
            <img className="image" alt="profileImage" src={profileImage} />
          </div>
          <div className="profileContent-profileData">
            <div className="name">
              <div className="name-primary">Connie Lyn</div>
              <div className="name-secondary">Pen Name</div>
            </div>
            <div className="contact">
              <ul className="row">
                <li className="title">Contact</li>
                <li className="details">9425009699</li>
              </ul>
              <ul className="row">
                <li className="title">Email</li>
                <li className="details">connielyn00@hotmail.com</li>
              </ul>
              <ul className="row">
                <li className="title">Lives at</li>
                <li className="details">
                  <div className="address">
                    Flat No. 100<br />
                    Triveni Apartments<br />
                    Pitam Pura<br />
                    NEW DELHI 110034<br />
                    INDIA<br />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="profileContent-edit">
            <span className="editText">Edit profile</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;