import React from 'react';
import { Play } from 'lucide-react';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
            <span className="text-[#7C3AED] text-sm font-semibold">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-[40px] md:text-[64px] font-bold text-[#1F2937] leading-[1.1] mb-6">
            Supercharge Your <br />
            <span className="text-[#1F2937]">Digital Workflow</span>
          </h1>

          <p className="text-[#6B7280] text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-[540px]">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#6D28D9] transition-all shadow-lg active:scale-95">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#F3E8FF] transition-all active:scale-95">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[550px]">
            <img 
              src={bannerImg} 
              alt="Digital Workflow Banner" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#7C3AED] w-full py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          
          <div className="text-center text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
            <h2 className="text-[48px] md:text-[56px] font-bold mb-2">50K+</h2>
            <p className="text-white/80 text-[18px]">Active Users</p>
          </div>

          <div className="text-center text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
            <h2 className="text-[48px] md:text-[56px] font-bold mb-2">200+</h2>
            <p className="text-white/80 text-[18px]">Premium Tools</p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-[48px] md:text-[56px] font-bold mb-2">4.9</h2>
            <p className="text-white/80 text-[18px]">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;