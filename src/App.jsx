import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function AppContent() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <h2>Where Green Meets Serenity</h2>
            <p>
              Welcome to Paradise Nursery — your one-stop destination for beautiful,
              healthy houseplants. Bring nature indoors and transform your living spaces.
            </p>
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
        <AboutUs onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
