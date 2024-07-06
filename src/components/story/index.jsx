import React from 'react';
import './story.css';
import LoveBirds from '../../image/loveBird.svg';
import { historyData } from '../../data/weddingData';
import History from './history';
import Leaf from '../../ui/leaf';

const Story = () => {
  return (
    <div className="story">
      <h1>Our Story</h1>
      <div className="header-leaf">
        <Leaf />
        <Leaf />
      </div>
      <div className="history">
        {historyData.map((data) => {
          return <History className="historyData" key={data.id} id={data.id} title={data.title} pict={data.image} date={data.date} loveBirdIcon={LoveBirds} />;
        })}
      </div>
    </div>
  );
};

export default Story;
