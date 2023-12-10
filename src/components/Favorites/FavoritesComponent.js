import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoritesComponent = ({ onToggle, isFavorite }) => {
  const toggleFavorite = (e) => {
    onToggle(e);
  };

  return (
    <div onClick={toggleFavorite} style={{ fontSize: '35px', cursor: 'pointer' }}>
      {isFavorite ? <FaHeart color="pink" /> : <FaHeart />}
    </div>
  );
};

export default FavoritesComponent;