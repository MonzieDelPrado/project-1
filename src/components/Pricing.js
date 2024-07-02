import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <p>Includes basic features and support.</p>
          <button className="button primary">Choose Basic</button>
        </div>
        <div className="pricing-card">
          <h3>Standard Plan</h3>
          <p>$20/month</p>
          <p>Includes standard features and priority support.</p>
          <button className="button primary">Choose Standard</button>
        </div>
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p>$30/month</p>
          <p>Includes all features and 24/7 support.</p>
          <button className="button primary">Choose Premium</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
