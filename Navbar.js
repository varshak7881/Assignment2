
import React from 'react';
import './Navbar.css';

const Navbar = ({ cartItemsCount }) => (
  <nav className="navbar">
    <h1>Cake Shop</h1>
    <div className="cart">
      <span>Cart ({cartItemsCount})</span>
    </div>
  </nav>
);

export default Navbar;
