import React, { useState } from 'react';
import Navbar from './Components/Navbar';


function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />

    </div>
  );
}

export default App;