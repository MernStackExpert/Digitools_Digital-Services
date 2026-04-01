import React from 'react';
import writingIcon from '../assets/products/writing_2327400 1.png';
import designIcon from '../assets/products/design-tool.png';
import stockIcon from '../assets/products/shopping-cart.png';
import automationIcon from '../assets/products/operation.png';
import resumeIcon from '../assets/products/portfolio.png';
import socialIcon from '../assets/products/social-media.png';

const ProductCard = ({ product, addToCart }) => {
  const iconMap = {
    1: writingIcon,
    2: designIcon,
    3: stockIcon,
    4: automationIcon,
    5: resumeIcon,
    6: socialIcon
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
      {product.tag && (
        <span className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[12px] font-bold ${
          product.tagType === 'warning' ? 'bg-[#FEF3C7] text-[#D97706]' : 
          product.tagType === 'primary' ? 'bg-[#EDE9FE] text-[#7C3AED]' : 
          'bg-[#DCFCE7] text-[#16A34A]'
        }`}>
          {product.tag}
        </span>
      )}

      <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-6">
        <img src={iconMap[product.id]} alt={product.name} className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-[22px] font-bold text-[#1F2937] mb-3">{product.name}</h3>
      <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-[28px] font-bold text-[#1F2937]">${product.price}</span>
        <span className="text-[#9CA3AF] text-[14px]">/{product.period === 'monthly' ? 'Mo' : 'One-Time'}</span>
      </div>

      <div className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#4B5563] text-[15px]">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-[#7C3AED] text-white py-4 rounded-full text-[16px] font-bold hover:bg-[#6D28D9] transition-all active:scale-[0.98] shadow-md"
      >
        Buy Now
      </button>
    </div>
  );
};

const DigitalTools = ({ products, addToCart, activeTab, setActiveTab, cartCount }) => {
  return (
    <section className="w-full py-20 bg-white">
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
              className={`px-8 py-3 rounded-full text-[16px] font-bold transition-all ${
                activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-3 rounded-full text-[16px] font-bold transition-all ${
                activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTools;