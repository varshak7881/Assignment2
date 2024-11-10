// src/components/CakeDetail.js
import React from 'react';

const CakeDetail = ({ cake, addToCart }) => (
  <div className="cake-detail">
    <img src={cake.image} alt={cake.name} />
    <h2>{cake.name}</h2>
    <p>${cake.price}</p>
    <p>{cake.description}</p>
    <button onClick={() => addToCart(cake)}>Add to Cart</button>
  </div>
);

export default CakeDetail;
