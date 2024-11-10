// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Cake Shop. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
