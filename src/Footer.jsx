import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      
        <div className="footer-copy">
          © {new Date().getFullYear()} Wrapp. All rights reserved.
        </div>
      
    </footer>
  );
}

export default Footer;
