import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import DigitalTools from './Components/DigitalTools';
import productsData from './data/products.json';
import Steps from './Components/Steps';
import Pricing from './Components/Pricing';
import CTA from './Components/CTA';
import Footer from './Components/Footer';

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      
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
          <Steps/>
          <Pricing/>
          <CTA/>
        </>
      ) : (
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold">Cart Section Coming Soon...</h2>
          <button 
            onClick={() => setActiveTab('products')} 
            className="btn btn-primary mt-4"
          >
            Back to Products
          </button>
        </div>
      )}

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;