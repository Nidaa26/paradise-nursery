import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('🛒 Coming Soon! Checkout is under development.');
  };

  return (
    <div>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <ul className="navbar-links">
          <li><a href="#" onClick={() => onNavigate('landing')}>Home</a></li>
          <li><a href="#" onClick={() => onNavigate('products')}>Plants</a></li>
          <li>
            <a href="#" className="cart-icon">
              🛒
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </a>
          </li>
        </ul>
      </nav>

      <div className="cart-page">
        <h1>🛒 Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>
            Your cart is empty. Start adding some plants! 🌱
          </p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑 Delete
                </button>
              </div>
            ))}

            <div className="cart-total">
              Total Amount: ${totalCost.toFixed(2)}
            </div>

            <div className="cart-actions">
              <button
                className="continue-btn"
                onClick={() => onNavigate('products')}
              >
                ← Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
