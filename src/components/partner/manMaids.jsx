import React from 'react';

const ManMaids = (props) => {
  return (
    <div className={props.className}>
      <div className="manMaids-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="caption">
        <h3>{props.label}</h3>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ManMaids;
