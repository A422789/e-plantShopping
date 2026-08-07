import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import './App.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total amount for all items
  const calculateTotalAmount = () => {
    const total = cartItems.reduce((totalCost, item) => {
      const price = parseFloat(item.cost.replace('$', ''));
      return totalCost + (price * item.quantity);
    }, 0);
    return total.toFixed(2);
  };

  // Calculate subtotal for a specific item
  const calculateSubtotal = (item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert("Thank you for shopping with Paradise Nursery! Checkout functionality is coming soon.");
  };

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        <>
          <div className="cart-header">
            <h2 className="cart-summary-title">Shopping Cart Summary</h2>
            <div className="cart-summary-totals">
              <span className="cart-total-count">
                Total Items: <span>{totalCount}</span>
              </span>
              <span className="cart-total-cost">
                Total Cost: <span>${calculateTotalAmount()}</span>
              </span>
            </div>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-card">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-img" 
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <span className="cart-item-price">Unit Price: {item.cost}</span>
                  <span className="cart-item-subtotal">Subtotal: ${calculateSubtotal(item)}</span>
                </div>
                <div className="cart-item-controls">
                  <button 
                    className="btn-qty" 
                    onClick={() => handleDecrement(item)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="cart-item-qty-value">{item.quantity}</span>
                  <button 
                    className="btn-qty" 
                    onClick={() => handleIncrement(item)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  className="btn-delete"
                  onClick={() => handleRemove(item.name)}
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button 
              className="btn-continue"
              onClick={onContinueShopping}
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </button>
            <button 
              className="btn-checkout"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart-message">
          <ShoppingBag size={64} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
          <h2>Your Cart is Empty</h2>
          <p>Explore our wide range of premium houseplants and bring peace to your home today!</p>
          <button 
            className="btn-continue" 
            onClick={onContinueShopping}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
