import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button type={`button ${props.type}`} className={`button ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
