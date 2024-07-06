import React from 'react';
import './ceremony.css';
import Leaf from '../../ui/leaf';
import { ceremonyData } from '../../data/weddingData';
import CeremonyDetail from './ceremonyDetail';

const Ceremony = () => {
  return (
    <div className="ceremony">
      <div className="header">
        <h1>More Events</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
      </div>
      <div className="body">
        {ceremonyData.map((data) => {
          return <CeremonyDetail className="ceremony-detail" key={data.id} id={data.id} image={data.image} label={data.label} text={data.text} />;
        })}
      </div>
    </div>
  );
};

export default Ceremony;
