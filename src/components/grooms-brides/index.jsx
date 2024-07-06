import React from 'react';
import './groomsBrides.css';
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Leaf from '../../ui/leaf';

const GroomsBrides = () => {
  return (
    <div className="grooms-brides">
      <div className="header">
        <h1>Happy Couple</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
      </div>
      <div className="body">
        <div className="grooms">
          <div className="grooms-image">
            <div
              className="img"
              style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}
            />
          </div>
          <div className="grooms-story">
            <h1>The Groom</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium velit, dolore quae exercitationem consequuntur consectetur, optio ducimus perspiciatis eaque mollitia earum autem ipsum nihil minus.</p>
            <h2>- Gabriel</h2>
            <span className="more-about-grooms">
              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </Link>
              <Link to="https://www.tiktok.com/" target="_blank">
                <FaTiktok />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
              </Link>
            </span>
          </div>
        </div>
        <div className="brides">
          <div className="brides-image">
            <div className="img" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1546578623-d1d3af878403?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }} />
          </div>
          <div className="brides-story">
            <h1>The Bride</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium velit, dolore quae exercitationem consequuntur consectetur, optio ducimus perspiciatis eaque mollitia earum autem ipsum nihil minus.</p>
            <h2>- Justine</h2>
            <span className="more-about-brides">
              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </Link>
              <Link to="https://www.tiktok.com/" target="_blank">
                <FaTiktok />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomsBrides;
