import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const mapsURL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2655547084914!2d106.82172528843893!3d-6.193430531892131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4216285d5a7%3A0xbe4125a0d8fb1ddc!2sPullman%20Jakarta%20Indonesia%20Thamrin%20CBD!5e0!3m2!1sid!2sid!4v1718348114197!5m2!1sid!2sid';

const Maps = () => {
  return (
    <div style={containerStyle}>
      <iframe title="location" width="100%" height="100%" style={{ border: 0 }} src={mapsURL} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
    </div>
  );
};

export default Maps;
