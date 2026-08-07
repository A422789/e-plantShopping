import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import { Sprout, ShoppingCart, Leaf } from 'lucide-react';
import './App.css';

function ProductList({ onNavigateToLanding }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items in the cart across all quantities
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
          description: "Produces oxygen at night, improves air quality, and is extremely hard to kill.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=600&q=80",
          description: "Elegant cascading leaves that filter formaldehyde and carbon monoxide.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
          description: "Soothing fragrance that helps reduce stress and promotes better sleep.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515589654462-a9881e276b8a?auto=format&fit=crop&w=600&q=80",
          description: "Culinary herb with a fresh woody scent that boosts memory and alertness.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Low Maintenance",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",
          description: "Succulent with healing gel, thrives with minimal water and bright light.",
          cost: "$10"
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=600&q=80",
          description: "Extremely tough plant that survives in low light and irregular watering.",
          cost: "$22"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div>
      {/* Shared Header / Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onNavigateToLanding}>
          <div className="navbar-logo">
            <Sprout size={32} />
          </div>
          <div className="navbar-title-container">
            <span className="navbar-title">Paradise Nursery</span>
            <span className="navbar-tagline">Where Greenery Meets Peace</span>
          </div>
        </div>

        <div className="navbar-links">
          <a 
            href="#" 
            className={`nav-link ${!showCart ? 'active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setShowCart(false); }}
          >
            Plants
          </a>
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => { e.preventDefault(); onNavigateToLanding(); }}
          >
            Home
          </a>
          <button 
            className="cart-icon-btn" 
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
            {totalItemsCount > 0 && (
              <span className="cart-badge">{totalItemsCount}</span>
            )}
          </button>
        </div>
      </nav>

      {/* Conditionally render Plant Catalog or Cart Page */}
      {!showCart ? (
        <div className="product-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">
                <Leaf size={24} className="category-icon" />
                {categoryObj.category}
              </h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant, pIndex) => {
                  const inCart = isItemInCart(plant.name);
                  return (
                    <div key={pIndex} className="plant-card">
                      <div className="plant-image-container">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="plant-image" 
                          loading="lazy"
                        />
                      </div>
                      <div className="plant-card-content">
                        <h3 className="plant-name">{plant.name}</h3>
                        <div className="plant-cost">{plant.cost}</div>
                        <p className="plant-description">{plant.description}</p>
                        <button 
                          className="btn-add-to-cart"
                          disabled={inCart}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {inCart ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
