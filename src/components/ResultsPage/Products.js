import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const productTileStyle = {
  display: 'flex',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '10px',
  margin: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const productInfoStyle = {
  flex: 2,
  padding: '10px',
};

const productActionsStyle = {
  flex: 1,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  cursor: 'pointer',
};

const alternativeDealsStyle = {
  marginTop: '20px',
};

const alternativeDealsListStyle = {
  listStyle: 'none',
  padding: '0',
};

const alternativeDealsItemStyle = {
  marginBottom: '5px',
};

const starDisplay = {
  display: 'flex',
  flexDirection: 'row',
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
          <p>
            <strong>Name:</strong> {JSON.stringify(data.data.cheapest_product.name).slice(1,-1)}
          </p>
          <p>
            <strong>Image:</strong>{' '}
            <img src={JSON.stringify(data.data.cheapest_product.image_url).slice(1,-1)} referrerPolicy="no-referrer" style={{ maxWidth: '100%' }} />
          </p>
          <p>
            <strong>Description:</strong> {JSON.stringify(data.data.cheapest_product.description).slice(1,-1)}
          </p>
          <p>
            <strong>Price:</strong> ${JSON.stringify(data.data.cheapest_product.price).slice(1, -1)}
          </p>
          <p>
            <strong>Price with Shipping:</strong> ${JSON.stringify(data.data.cheapest_product.price_with_shipping).slice(1, -1)}
          </p>
          <p style={starDisplay}>
            {renderStars(data.data.cheapest_product.rating)} ({JSON.stringify(data.data.cheapest_product.review_count)})
          </p>
        </div>
        <div style={productActionsStyle}>
          <div style={{ fontSize: '20px', marginRight: '10px' }}>➔</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
