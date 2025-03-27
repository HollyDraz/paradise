// src/LandingPage.js
import React from 'react';
import ProductList from './ProductList';
// import { useNavigate } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <h2>This is the Landing Page</h2>
      <p>more info </p>
      <p>lets check out the plants</p>
      <button className="start" onClick={() => window.location.href = '/products'}>
        products
      </button>
    </div>
  );
}

export default LandingPage;
