import React, { useState } from 'react';
import './albums.css';
import Leaf from '../../ui/leaf';
import { galleryData } from '../../data/weddingData';
import { FaSearchPlus } from 'react-icons/fa';
import Modal from '../../ui/modal';

const Albums = () => {
  const [showAlbums, setShowAlbums] = useState(false);

  return (
    <div className="albums">
      <div className="header">
        <h1>Our Gallery</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
      </div>
      <div className="body">
        {galleryData.map((data, index) => {
          return (
            <div className="galleryData gallery" key={index} onClick={() => setShowAlbums(!showAlbums)}>
              <img src={data} alt="our gallery" />
              <FaSearchPlus />
            </div>
          );
        })}
      </div>
      {showAlbums && <Modal showAlbums={showAlbums} setShowAlbums={setShowAlbums} />}
    </div>
  );
};

export default Albums;
