import React from 'react';

import './_button.scss';

const Button = props => (
  <button onClick={props.onClick} className={`button ${props.className}`} type="button">{props.text}</button>
);

export default Button;
