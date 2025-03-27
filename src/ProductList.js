import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './Cart'; // Import Cart component
import './ProductList.css'; // Import the CSS file for styling

const products = [
  { id: 1, name: "Aloe Vera", description: "Healing plant." },
  { id: 2, name: "Snake Plant", description: "Air-purifying plant." },
];

function ProductList() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='product-list-container'>
      <button className="start-btn" onClick={() => navigate('/landing')}>
        Return
      </button>
      <h1 className="title">Product List</h1>
      <div className="product-container">
        {products.map((plant) => (
          <div key={plant.id} className="product-card">
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <button className="add-btn" onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Pass the cart state and removeFromCart function to Cart component */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ProductList;
