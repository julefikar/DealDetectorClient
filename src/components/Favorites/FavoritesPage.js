import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Authorization/AuthContext';

const cardStyle = {
  border: '1px solid #282929',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '10px',
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#f9f9f9',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  alignItems: 'center',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '5px',
  marginRight: '20px',
};

const textStyle = {
  fontSize: '1rem',
  color: '#333',
  marginBottom: '5px',
};

const noFavoritesStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '1.5rem',
  color: '#666',
};

const FavoritesPage = () => {
    const { currentUser } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (currentUser && currentUser.id) {
            fetch(`http://localhost:5000/get-favorites/${currentUser.id}`)
                .then(response => response.json())
                .then(data => {
                    setFavorites(data);
                })
                .catch(error => console.error('Error fetching favorites:', error));
        }
    }, [currentUser]); // Dependency on currentUser


  if (favorites.length === 0) {
    return <div style={noFavoritesStyle}>You have no favorite items yet.</div>;
  }

  return (
    <div>
      <h2>Your Favorites:</h2>
      {favorites.map((favorite, index) => (
        <div key={index} style={cardStyle}>
          <a href={favorite.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src={favorite.image_url} alt={favorite.name} style={imageStyle} />
            <div>
              <p style={textStyle}><strong>Name:</strong> {favorite.name}</p>
              <p style={textStyle}><strong>Description:</strong> {favorite.description}</p>
              <p style={textStyle}><strong>Price:</strong> ${favorite.price}</p>
              <p style={textStyle}><strong>Price with Shipping:</strong> ${favorite.price_with_shipping}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;