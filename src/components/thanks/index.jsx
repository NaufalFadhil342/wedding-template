import React from 'react';
import './thanks.css';

const Thanks = () => {
  return (
    <div className="thanks" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` }}>
      <div className="layer">
        <div className="content">
          <h1>Thank You</h1>
          <p>For Being With Us</p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
