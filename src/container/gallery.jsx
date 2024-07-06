import React from 'react';
import { Element } from 'react-scroll';
import Albums from '../components/albums';

const Gallery = () => {
  return (
    <Element name="gallery">
      <Albums />
    </Element>
  );
};

export default Gallery;
