import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>🌿 Paradise Nursery</h1>
            <p>Bring nature indoors. Discover beautiful houseplants for every corner of your home.</p>
            <button
              className="get-started-btn"
              onClick={() => setCurrentPage('products')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList onNavigate={setCurrentPage} />
      )}

      {currentPage === 'cart' && (
        <CartItem onNavigate={setCurrentPage} />
      )}

      {currentPage === 'about' && (
        <>
          <nav className="navbar">
            <h2>🌿 Paradise Nursery</h2>
            <ul className="navbar-links">
              <li><a href="#" onClick={() => setCurrentPage('landing')}>Home</a></li>
              <li><a href="#" onClick={() => setCurrentPage('products')}>Plants</a></li>
              <li><a href="#" onClick={() => setCurrentPage('cart')}>Cart</a></li>
            </ul>
          </nav>
          <AboutUs />
        </>
      )}
    </div>
  );
}

export default App;
