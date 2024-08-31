import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-list">
        <div className="testimonial-item">
          <p>"This app changed my life!"</p>
          <h4>- Happy User</h4>
        </div>
        <div className="testimonial-item">
          <p>"An essential tool for anyone."</p>
          <h4>- Satisfied Customer</h4>
        </div>
        <div className="testimonial-item">
          <p>"I can't imagine working without it."</p>
          <h4>- Loyal User</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
