import React, { useRef } from 'react';
import Bilboards from '../container/bilboards';
import Couple from '../container/couple';
import AttachArea from '../container/attach-area';
import OurStory from '../container/our-story';
import Location from '../container/location';
import People from '../container/people';
import Events from '../container/events';
import RSVP from '../container/rsvp';
import Gift from '../container/gift';
import Greeting from '../container/greeting';
import Gallery from '../container/gallery';

const Home = () => {
  const contentRef = useRef(null);

  return (
    <div className="home" ref={contentRef} id="content">
      <Bilboards />
      <Couple />
      <AttachArea />
      <OurStory />
      <Location />
      <People />
      <Events />
      <Gallery />
      <RSVP />
      <Gift />
      <Greeting />
    </div>
  );
};

export default Home;
