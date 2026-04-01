import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />

      <Hero/>

    </div>
  );
}

export default App;