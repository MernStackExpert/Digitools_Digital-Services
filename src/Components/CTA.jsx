import React from 'react';

const CTA = () => {
  return (
    <section className="w-full bg-[#7C3AED] py-16 md:py-20 px-6">
      <div className="max-w-[1440px] mx-auto text-center text-white">
        
        <h2 className="text-[32px] md:text-[48px] font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-white/80 text-[16px] md:text-[18px] max-w-[600px] mx-auto mb-10">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7C3AED] px-8 py-3.5 rounded-full text-[16px] font-bold hover:bg-gray-100 transition-all w-full sm:w-auto active:scale-95">
            Explore Products
          </button>
          <button className="border-2 border-white text-white px-8 py-3.5 rounded-full text-[16px] font-bold hover:bg-white/10 transition-all w-full sm:w-auto active:scale-95">
            View Pricing
          </button>
        </div>

        <p className="text-white/60 text-[14px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTA;