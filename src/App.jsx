import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import { ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'plants'

  return (
    <div className="app-container">
      {view === 'landing' ? (
        <div className="landing-page">
          <div className="landing-content">
            <AboutUs />
            <div className="landing-divider"></div>
            <button 
              className="btn-get-started" 
              onClick={() => setView('plants')}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        <ProductList onNavigateToLanding={() => setView('landing')} />
      )}
    </div>
  );
}

export default App;
