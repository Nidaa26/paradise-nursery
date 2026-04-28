import React from 'react';
import './App.css';

function AboutUs({ onNavigate }) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Paradise Nursery</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>
              Plants
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}>
              Cart
            </a>
          </li>
        </ul>
      </nav>

      <div className="about-us">
        <h1>About Paradise Nursery</h1>

        <p>
          Welcome to <strong>Paradise Nursery</strong>, your trusted destination for
          beautiful, healthy houseplants. We are passionate about bringing nature indoors
          and helping people create greener, happier living spaces.
        </p>

        <p>
          Founded in 2018 in Hyderabad, India, Paradise Nursery began as a small family
          venture with a simple belief: every home deserves a touch of green. Over the
          years, we have grown into a trusted online plant shop serving thousands of
          happy customers across the country.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make plant ownership accessible, joyful, and sustainable.
          We source our plants ethically, provide expert care guidance with every
          purchase, and are committed to reducing our environmental footprint with
          eco-friendly packaging and sustainable practices.
        </p>

        <h2>What We Offer</h2>
        <p>
          We offer a wide range of houseplants carefully grouped into categories such as
          Air Purifying Plants, Low Light Plants, and Succulents and Cacti. Whether you
          are a first-time plant parent or a seasoned green thumb, we have something
          perfect for you.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide variety of houseplants across multiple categories</li>
          <li>Safe and eco-friendly packaging on all orders</li>
          <li>Expert plant care advice included with every purchase</li>
          <li>Fast and reliable delivery to your doorstep</li>
          <li>Thousands of happy plant parents across India</li>
          <li>Dedicated customer support team available 7 days a week</li>
        </ul>

        <p>
          Thank you for choosing Paradise Nursery. We hope our plants bring as much
          joy to your home as they bring to ours. Happy planting!
        </p>

        <button
          className="get-started-btn"
          style={{ marginTop: '20px' }}
          onClick={() => onNavigate('products')}
        >
          Shop Plants
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
