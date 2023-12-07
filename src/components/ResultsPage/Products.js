import React from 'react';

const Products = ({data})=>{
    console.log(data)
    return(
        <div>
            <h2>{JSON.stringify(data.data.cheapest_product)}</h2>
        </div>
    )
}

export default Products;