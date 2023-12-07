import React from 'react';

const productTileStyle = {
    display: 'flex',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
  };

  const productInfoStyle = {
    flex: 2,
  };

  const productActionsStyle = {
    flex: 1,
    textAlign: 'center',
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


const Products = ({data})=>{
    console.log(data)
    return(
        <div>
            <div style={productTileStyle}>
            <div style={productInfoStyle}>
                <p>Description: {JSON.stringify(data.data.cheapest_product.description)}</p>
                <p>Price: ${JSON.stringify(data.data.cheapest_product.price).slice(1,-1)}</p>
                <p>Price with Shipping: ${JSON.stringify(data.data.cheapest_product.price_with_shipping).slice(1,-1)}</p>
            </div>
            </div>
          </div>
    )
}

export default Products;