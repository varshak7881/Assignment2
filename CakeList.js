// src/components/CakeList.js
import React from 'react';

const CakeList = ({ cakes, viewCakeDetails }) => (
  <div className="cake-list">
    {cakes.map(cake => (
      <div className="cake-card" key={cake.id}>
        <img src={cake.image} alt={cake.name} />
        <h3>{cake.name}</h3>
        <p>${cake.price}</p>
        <button onClick={() => viewCakeDetails(cake)}>View Details</button>
      </div>
    ))}
  </div>
);

export default CakeList;
