import React from 'react';
import './LandingPage.css';
import ProductList from './ProductList';

function LandingPage() {
  return (
    <div className="landing-container">
      <h2 className="landing-title">This is the Landing Page</h2>
      <p className="landing-text">More info</p>
      <p className="landing-text">Let's check out the plants</p>
      <button className="start-btn" onClick={() => window.location.href = '/products'}>
        Products
      </button>
    </div>
  );
}

export default LandingPage;
