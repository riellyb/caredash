import React from 'react';
import './_hero.scss';

const heroStyle = {
	backgroundImage: 'url(https://via.placeholder.com/1000x900)',
	backgroundPosition: 'center center',
	backgroundSize: 'cover',
	height: '100%',
    width: '100%',
    minHeight: '300px'
};
const Hero = props =>
  (<div className="hero" style={heroStyle}>
  </div>);

export default Hero;
