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
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

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
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80",
          description: "Beautiful white blooms that filter indoor pollutants and thrive in shade.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=600&q=80",
          description: "Feathery fronds that naturally humidify and purify indoor spaces.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
          description: "Thick glossy leaves that remove toxins efficiently and look stunning.",
          cost: "$20"
        },
        {
          name: "English Ivy",
          image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
          description: "Classic climbing vine known to reduce airborne mold particles.",
          cost: "$16"
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
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&w=600&q=80",
          description: "Refreshing aroma that enlivens spaces and deters common household pests.",
          cost: "$10"
        },
        {
          name: "Basil",
          image: "https://images.unsplash.com/photo-1618386365623-b1c1e5405021?auto=format&fit=crop&w=600&q=80",
          description: "Sweet peppery scent, perfect for sunny kitchen window sills.",
          cost: "$12"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
          description: "Sweet floral fragrance that boosts mood and energizes the room.",
          cost: "$22"
        },
        {
          name: "Eucalyptus",
          image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80",
          description: "Cooling minty scent that helps clear breathing passages and freshens air.",
          cost: "$25"
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
        },
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
          description: "Shiny waxy leaves, thrives in low light and requires very little watering.",
          cost: "$19"
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
          description: "Fast-growing trailing vine that tolerates low light and drought easily.",
          cost: "$13"
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
          description: "Thick woody stems and succulent leaves symbolizing good luck.",
          cost: "$15"
        },
        {
          name: "Chinese Evergreen",
          image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=600&q=80",
          description: "Sturdy plant with variegated leaves that thrives in low light environments.",
          cost: "$16"
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
            className="nav-link" 
            onClick={(e) => { e.preventDefault(); onNavigateToLanding(); }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={`nav-link ${!showCart ? 'active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setShowCart(false); }}
          >
            Plants
          </a>
          <button 
            className="cart-icon-btn" 
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
            <span className="cart-badge">{totalQuantity}</span>
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
