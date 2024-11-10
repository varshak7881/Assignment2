// src/pages/Home.js
import React from 'react';
import CakeList from '../components/CakeList';

const Home = ({ cakes, viewCakeDetails }) => (
  <div className="home">
    <CakeList cakes={cakes} viewCakeDetails={viewCakeDetails} />
  </div>
);

export default Home;
