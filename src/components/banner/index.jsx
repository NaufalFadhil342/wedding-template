import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner" id="home">
      <div
        className="heading-image"
        style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1541089255538-4ea146c8866d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}
      />
      <div className="layer">
        <div className="content">
          <div
            className="subheading-image"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1541089255538-4ea146c8866d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}
          >
            <div className="sub-content">
              <p>We're Getting Merried</p>
              <h1>We're so excited to share our special day with you.</h1>
              <span>15 June 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
