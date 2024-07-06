import React from 'react';
import './loading.css';
import { MdFavorite } from 'react-icons/md';

const Loading = () => {
  return (
    <div className="loading">
      <MdFavorite />
      <MdFavorite />
      <MdFavorite />
    </div>
  );
};

export default Loading;
