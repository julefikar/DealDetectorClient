import React, { useState, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../Authorization/AuthContext';

import FavoritesComponent from '../Favorites/FavoritesComponent';

const productTileStyle = {
  display: 'flex',
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '20px',
  padding: '20px',
  margin: '10px 0',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative', // Add this line
};

const productInfoStyle = {
  flex: 3,
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const productImageStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
  marginBottom: '10px',
};

const productDescriptionStyle = {
  fontSize: '0.9rem',
  color: '#555',
  margin: '10px 0',
};

const productPriceStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  margin: '10px 0',
};

const productShippingPriceStyle = {
  fontSize: '1rem',
  color: '#888',
  margin: '5px 0',
};

const starDisplayStyle = {
  display: 'flex',
  flexDirection: 'row',
  margin: '10px 0',
  background: '#fffae6',
  padding: '5px 10px',
  borderRadius: '5px',
};

const renderStars = (rating) => {
  const filledStars = Math.ceil((rating / 100) * 5);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} style={{ color: index < filledStars ? 'goldenrod' : 'gray' }} />
  ));
  return stars;
};

const Products = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const redirectToProduct = () => {
    window.open(data.data.cheapest_product.url, '_blank');
  };

  const handlePropogation = (e)=>{
    e.stopPropagation();
  }

  let isProcessing = false;

  const addToFavorites = (e) => {
    e.stopPropagation();
    if (isProcessing) return;
    isProcessing = true;

    const productData = {
      ...data.data.cheapest_product,
      userId: currentUser && currentUser.id // Include the current user's ID
    };
  
    if (isFavorite) {
      // Currently a favorite, remove from favorites
      fetch('http://localhost:5000/remove-favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Favorite removed:', data);
        setFavorites(favorites.filter((fav) => fav.id !== productData.id));
      })
      .catch((error) => {
        console.error('Error removing favorite:', error);
      });
    } else {
      // Currently not a favorite, add to favorites
      fetch('http://localhost:5000/add-favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Favorite added:', data);
        setFavorites([...favorites, productData]);
      })
      .catch((error) => {
        console.error('Error adding favorite:', error);
      });
    }
  
    // Toggle favorite state after handling the logic
    setIsFavorite(!isFavorite);
  
    setTimeout(() => {
      isProcessing = false;
    }, 500); // Add a delay to prevent rapid toggling
  };
  
  
  return (
    <div>
      <div
        style={{
          ...productTileStyle,
          backgroundColor: isHovered ? '#e6f7ff' : 'inherit',
        }}
        onClick={redirectToProduct}
        onKeyPress={(e) => e.key === 'Enter' && redirectToProduct()}
        role="button"
        tabIndex="0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={productInfoStyle}>
       
          <p style={productPriceStyle}>
            <strong>Name:</strong> {JSON.stringify(data.data.cheapest_product.name).slice(1,-1)}
          </p>
    
          <p>
            <strong>Image:</strong>{' '}
            <img src={JSON.stringify(data.data.cheapest_product.image_url).slice(1,-1)} referrerPolicy="no-referrer" alt='Cannot retrieve image, please refer to original site to view product image.' style={productImageStyle} />
          </p>
          <p style={productDescriptionStyle}>
            <strong>Description:</strong> {JSON.stringify(data.data.cheapest_product.description).slice(1,-1)}
          </p>
          <p style={productPriceStyle}>
            <strong>Price:</strong> ${JSON.stringify(data.data.cheapest_product.price).slice(1, -1)}
          </p>
          <p style={productShippingPriceStyle}>
            <strong>Price with Shipping:</strong> ${JSON.stringify(data.data.cheapest_product.price_with_shipping).slice(1, -1)}
          </p>
          <div style={starDisplayStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {renderStars(data.data.cheapest_product.rating)}
              <span style={{ color: 'gray', marginLeft: '5px' }}>
                ({JSON.stringify(data.data.cheapest_product.review_count)})
              </span>
            </div>
          </div>
        </div>
        <div style={{
          flex: 1,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '40px', marginRight: '10px' }}>➔</div>
        </div>
        <div style={{position: 'absolute', top: '10px', right:'30px'}} onClick={addToFavorites}>
          <FavoritesComponent onToggle={addToFavorites} isFavorite={isFavorite} />
        </div>
      </div>
    </div>
  );
};

export default Products;