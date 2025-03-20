
//landing page for plant page 

//simple paragraph and title

// button to take to product listing page 

// src/components/ProductList.js
import React from 'react';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Plant Store!</h1>
      <p>Discover a variety of plants to beautify your home.</p>
      <button onClick={() => window.location.href = '/product-list'}>View Products</button>
    </div>


  );
}

export default LandingPage;
