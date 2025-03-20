// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products or use static data
  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Plant 1', description: 'A beautiful house plant', price: 10 },
      { id: 2, name: 'Plant 2', description: 'A medicinal plant', price: 20 },
      // Add more products here as needed
    ];

    setProducts(fetchedProducts); // Set products to the state
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
