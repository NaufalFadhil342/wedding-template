import React from 'react';
import Navbar from '../components/navbar';

const Navigation = ({ isScrolled }) => {
  return (
    <section>
      <Navbar isScrolled={isScrolled} />
    </section>
  );
};

export default Navigation;
