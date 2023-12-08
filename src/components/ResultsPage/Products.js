import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


const productTileStyle = {
  display: 'flex',
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  borderRadius: '20px',
  padding: '20px',
  margin: '10px 0',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',
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
  const [isHovered, setIsHovered] = useState(false);

  const redirectToProduct = () => {
    window.open(data.data.cheapest_product.url, '_blank');
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
            <img src={JSON.stringify(data.data.cheapest_product.image_url).slice(1,-1)} referrerPolicy="no-referrer" style={productImageStyle} />
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
          <div style={{ fontSize: '20px', marginRight: '10px' }}>➔</div>
        </div>
      </div>
    </div>
  );
};

export default Products;