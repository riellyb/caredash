import React from 'react';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-3">
          <div className="footer-content">
            <h3>CareDash</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Write a Review</a></li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="footer-content">
            <h3>Specialists</h3>
            <ul>
              <li><a href="">Primary Care Physicians</a></li>
              <li><a href="">Pediatricians</a></li>
              <li><a href="">Optometrists</a></li>
              <li><a href="">Dentists</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="footer-content footer-follow">
            <h3>Follow Us</h3>
            <ul>
              <li className="footer-social-image"><img src="https://image.freepik.com/free-icon/instagram-photo-camera-logo-outline_318-56004.jpg" /></li>
              <li className="footer-social-image"><img src="https://image.freepik.com/free-icon/facebook-logo_318-49940.jpg" /></li>
              <li className="footer-social-image"><img src="https://image.freepik.com/free-icon/twitter-logo_318-40209.jpg" /></li>
              <li className="footer-social-image"><img src="https://image.freepik.com/free-icon/pinterest-logo-circle_318-40721.jpg" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row footer-copyright">
        <div className="col-12">
          Copyright 2018 CareDash
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
