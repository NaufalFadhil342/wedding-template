import React, { useState } from 'react';
import './partner.css';
import Leaf from '../../ui/leaf';
import Button from '../../ui/button';
import { partnerData } from '../../data/weddingData';
import ManMaids from './manMaids';

const Partner = () => {
  const [partnerSelected, setPartnerSelected] = useState('all');

  const filterGalleries = (tag) => {
    if (tag === 'all') {
      return partnerData;
    }
    return partnerData.filter((data) => data.tag.includes(tag));
  };

  const filteredData = filterGalleries(partnerSelected);

  return (
    <div className="partner">
      <div className="header">
        <h1>Groomsmen & Bridesmaid</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
      </div>
      <div className="body">
        <div className="partnerButton">
          <Button onClick={() => setPartnerSelected('groom')}>Groomsmen</Button>
          <Button onClick={() => setPartnerSelected('bride')}>Bridesmaid</Button>
        </div>
        <div className="partnerData">
          {filteredData.map((data) => {
            return <ManMaids className="man-maids" key={data.id} id={data.id} name={data.name} label={data.label} image={data.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
