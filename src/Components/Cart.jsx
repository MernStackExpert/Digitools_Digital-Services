import React from 'react';
import writingIcon from '../assets/products/writing_2327400 1.png';
import designIcon from '../assets/products/design-tool.png';
import stockIcon from '../assets/products/shopping-cart.png';
import automationIcon from '../assets/products/operation.png';
import resumeIcon from '../assets/products/portfolio.png';
import socialIcon from '../assets/products/social-media.png';

const Cart = ({ cart, removeFromCart, handleCheckout, setActiveTab }) => {
  const iconMap = {
    1: writingIcon,
    2: designIcon,
    3: stockIcon,
    4: automationIcon,
    5: resumeIcon,
    6: socialIcon
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-[40px] md:text-[52px] font-bold text-[#1F2937] mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-[#6B7280] text-[18px] max-w-[650px] mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-[#F9FAFB] p-1.5 rounded-full flex items-center border border-gray-100">
            <button 
              onClick={() => setActiveTab('products')}
              className="px-8 py-3 rounded-full text-[16px] font-bold text-[#6B7280] hover:text-[#1F2937] transition-all"
            >
              Products
            </button>
            <button 
              className="px-8 py-3 rounded-full text-[16px] font-bold bg-[#7C3AED] text-white shadow-lg transition-all"
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto bg-white border border-gray-100 rounded-[24px] p-6 md:p-10 shadow-sm">
          <h3 className="text-[20px] font-bold text-[#1F2937] mb-8">Your Cart</h3>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-[18px] mb-6">Your cart is empty</p>
              <button 
                onClick={() => setActiveTab('products')}
                className="text-[#7C3AED] font-bold hover:underline"
              >
                Back to Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-[#F9FAFB] p-4 md:p-6 rounded-[20px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <img src={iconMap[item.id]} alt={item.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937] text-[16px] md:text-[18px]">{item.name}</h4>
                      <p className="text-gray-400 text-[14px]">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#FF4D8D] font-semibold text-[14px] md:text-[16px] hover:opacity-80 transition-all"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-between items-center pt-8 px-2">
                <span className="text-[#9CA3AF] text-[16px]">Total:</span>
                <span className="text-[28px] font-bold text-[#1F2937]">${totalPrice}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-[#7C3AED] text-white py-4 md:py-5 rounded-full text-[16px] font-bold mt-8 hover:bg-[#6D28D9] transition-all shadow-lg active:scale-[0.98]"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Cart;