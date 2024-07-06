import React from 'react';
import { Link } from 'react-scroll';
import './attachment.css';

const Attachment = () => {
  return (
    <div className="attachment">
      <div className="attach-image" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` }}>
        <div className="attach-layer">
          <h1>Welcome to Our Big Day</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam velit dolore assumenda eum, architecto nobis laborum aliquid. Porro soluta quia necessitatibus quisquam, voluptas ipsum ut.</p>
          <div className="callActions">
            <Link to="rsvp" smooth={true} duration={700}>
              RSVP
            </Link>
            <Link to="location" smooth={true} duration={700}>
              Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attachment;
