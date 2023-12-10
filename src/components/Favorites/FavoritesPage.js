import React from 'react';

const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || {}; // Parse the JSON string
console.log(favoritesFromStorage);

const FavoritesPage = () => {
  return (
    <div>
      {Object.keys(favoritesFromStorage).map((key) => (
        <div key={key}>
          <h2>Group {key}</h2>
          {JSON.stringify(favoritesFromStorage[key])}
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
