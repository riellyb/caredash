import React from 'react';
import './_hero.scss';

const Hero = props =>
  (<div className="hero">
    <img src={props.src} />
  </div>);

export default Hero;
