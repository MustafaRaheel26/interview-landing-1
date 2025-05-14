import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">wrapp</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>Products</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
        <div className="mobile-actions">
          <button className="login-btn">Log In</button>
          <button className="start-btn">Start For Free</button>
        </div>
      </div>

      <div className="navbar-actions">
        <button className="login-btn">Log In</button>
        <button className="start-btn">Start For Free</button>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
