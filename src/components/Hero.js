import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import backgroundImage from '../assets/background.jpg'; // Ensure the correct path to the image

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/pricing');
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to Our Web App</h1>
      <p>Your productivity companion</p>
      <button className="button primary" onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

export default Hero;
