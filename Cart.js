// //rafce +enter

import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    )}
    <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
  </div>
);

export default Cart;
