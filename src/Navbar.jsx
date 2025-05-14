
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">wrapp</div>
      <ul className="navbar-links">
        <li>Products</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="navbar-actions">
        <button className="login-btn">Log In</button>
        <button className="start-btn">Start For Free</button>
      </div>
    </nav>
  );
}

export default Navbar;
