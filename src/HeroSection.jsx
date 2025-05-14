import React from 'react';
import './HeroSection.css';
import heroImage from './assets/hero-new.jpg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-brand">Wrapp</div>
      <h1>All your ideas in one place</h1>
      <p>
        Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse nec lorem mauris.<br />
        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
      </p>
      <button className="hero-btn">Start For Free →</button>
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="UI mockup" className="hero-img" />
      </div>
      <a href="#" className="watch-demo">▶ Watch Demo</a>
    </section>
  );
}

export default HeroSection;
