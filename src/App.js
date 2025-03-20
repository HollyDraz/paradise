// src/App.js
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
//styling
import './App.css';  
// import components
import LandingPage from './LandingPage';


function Home() {
  const navigate = useNavigate();

  return (
    <div className='app-container'>
      <div className='content'>
        <div className='landingWelcome'>
          <h1>Welcome to the nursery</h1>
          <button className="start" onClick={() => navigate('/landing')}>
            Start!
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}



export default App;
