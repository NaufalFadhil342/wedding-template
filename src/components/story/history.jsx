import React from 'react';

const History = (props) => {
  const { className, loveBirdIcon, pict, title, date } = props;

  return (
    <div className={className}>
      <div className="history-content">
        <div className="image">
          <img src={pict} alt="history" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <div className="date">{date}</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolores ratione dignissimos architecto doloribus aperiam sequi beatae, dicta ex aliquam ipsam maiores amet fugit odio sunt nihil iusto voluptates qui accusantium
            inventore in. Cumque, veniam dolore inventore temporibus dignissimos voluptatum.
          </p>
        </div>
        <div className="listDate">
          <span className="line" />
          <img className="lbIcon" src={loveBirdIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
