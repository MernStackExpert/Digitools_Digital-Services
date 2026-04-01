import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import DigitalTools from './Components/DigitalTools';
import Steps from './Components/Steps';
import Pricing from './Components/Pricing';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import productsData from './data/products.json';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart! 🚀`);
    } else {
      toast.warn("Product already in cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart! 🗑️");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Proceeding to checkout! All items cleared. 🎉");
    setActiveTab('products');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />

      <main>
        {activeTab === 'products' ? (
          <>
            <Hero />
            <DigitalTools 
              products={productsData} 
              addToCart={addToCart} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              cartCount={cart.length}
            />
            <Steps />
            <Pricing />
            <CTA />
          </>
        ) : (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            handleCheckout={handleCheckout}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
}

export default App;