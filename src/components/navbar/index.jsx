import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { MdFavorite } from 'react-icons/md';
import Sidebar from './sidebar';

const Navbar = ({ isScrolled }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navbarContent = (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="couple" smooth={true} duration={700}>
            Couple
          </Link>
        </li>
        <li>
          <Link to="story" smooth={true} duration={700}>
            Story
          </Link>
        </li>
        <li>
          <Link to="location" smooth={true} duration={700}>
            Where & When
          </Link>
        </li>
        <div className="the-couple">
          <Link to="bilboards" smooth={true} duration={700}>
            <>G</>
            <span>
              <MdFavorite />
            </span>
            <>B</>
          </Link>
        </div>
        <li>
          <Link to="people" smooth={true} duration={700}>
            People
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={700}>
            Events
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={700}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="rsvp" smooth={true} duration={700}>
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <React.Fragment>
      <div className={`navbar ${isScrolled ? 'fixed' : ''}`}>{navbarContent}</div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} isScrolled={isScrolled} />
    </React.Fragment>
  );
};

export default Navbar;
