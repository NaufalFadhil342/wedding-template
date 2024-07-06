import React from 'react';
import './sidebar.css';
import { Link } from 'react-scroll';
import { MdFavorite } from 'react-icons/md';

const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div className="sidebar">
      <div className="the-couple">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <>G</>
          <span>
            <MdFavorite />
          </span>
          <>B</>
        </button>
      </div>
      {showSidebar && (
        <nav>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={1700} onClick={() => setShowSidebar(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="couple" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                Couple
              </Link>
            </li>
            <li>
              <Link to="story" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                Story
              </Link>
            </li>
            <li>
              <Link to="location" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                Where & When
              </Link>
            </li>
            <li>
              <Link to="people" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                People
              </Link>
            </li>
            <li>
              <Link to="events" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="rsvp" smooth={true} duration={700} onClick={() => setShowSidebar(false)}>
                RSVP
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
