import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-tiers">
        <div className="pricing-tier">
          <h3>Free</h3>
          <p>$0 / month</p>
          <p>Basic features</p>
          <button>Select</button>
        </div>
        <div className="pricing-tier">
          <h3>Pro</h3>
          <p>$10 / month</p>
          <p>Advanced features</p>
          <button>Select</button>
        </div>
        <div className="pricing-tier">
          <h3>Team</h3>
          <p>$30 / month</p>
          <p>All features</p>
          <button>Select</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
