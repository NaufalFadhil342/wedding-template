import React from 'react';

const CeremonyDetail = (props) => {
  return (
    <div className={props.className}>
      <div className="ceremony-image">
        <div className="img" style={{ backgroundImage: `url(${props.image})` }} />
      </div>
      <div className="ceremony-caption">
        <h3>{props.label}</h3>
        <div className="caption">
          <div>
            <p>Friday, 10 January, 10.00 AM - 5.00 PM</p>
            <p>Pullman Hotel, Jakarta</p>
          </div>
          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeremonyDetail;
