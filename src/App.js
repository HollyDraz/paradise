// src/App.js
import React from 'react';
import './App.css';  // Import the CSS file for styling
import './LandingPage';


function App() {
  return (
    // main container
    <div className='app-container'> 
    {/* all the content will go here */}
    <div className='content'> 
  {/* landing */}
      <div className='landingWelcome'>
      <h1>Welcome to the nursery</h1>
      <button className="start">
            Start!
      </button>
      </div> 
    </div>
    </div>

  );
}

export default App;
