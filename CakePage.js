// src/pages/CakePage.js
import React from 'react';
import CakeDetail from '../components/CakeDetail';

const CakePage = ({ selectedCake, addToCart }) => (
  <div className="cake-page">
    <CakeDetail cake={selectedCake} addToCart={addToCart} />
  </div>
);

export default CakePage;
