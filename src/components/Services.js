import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <h3>Service One</h3>
          <p>Details about service one. It provides great value to our customers and helps them achieve their goals.</p>
        </div>
        <div className="service">
          <h3>Service Two</h3>
          <p>Details about service two. It is designed to offer exceptional support and solutions to our clients.</p>
        </div>
        <div className="service">
          <h3>Service Three</h3>
          <p>Details about service three. Our innovative approach ensures the best outcomes for our users.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
