import React from 'react';
import './whereWhen.css';
import Leaf from '../../ui/leaf';
import Maps from './maps';

const WhereWhen = () => {
  return (
    <div className="whereWhen">
      <div className="header">
        <h1>Where & When</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
      </div>
      <div className="body">
        <div className="date-ceremony">
          <p> June / 15TH / 2024 </p>
          <p> Ten in the morning </p>
          <p> Pullman Hotel </p>
        </div>
        <div>
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default WhereWhen;
