import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => {
            setActiveTab("products");
            setIsOpen(false);
          }}
        >
          <h1 className="text-[24px] md:text-[28px] font-bold text-[#7C3AED] tracking-tight">
            DigiTools
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium hover:text-[#7C3AED] transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium hover:text-[#7C3AED] transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium hover:text-[#7C3AED] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium hover:text-[#7C3AED] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium hover:text-[#7C3AED] transition-colors"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div
            className="relative cursor-pointer group p-2"
            onClick={() => {
              setActiveTab("cart");
              setIsOpen(false);
            }}
          >
            <ShoppingCart className="w-6 h-6 text-[#374151] group-hover:text-[#7C3AED] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#7C3AED] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </div>

          <button className="hidden sm:block text-[#374151] text-[16px] font-semibold hover:text-[#7C3AED] transition-colors">
            Login
          </button>

          <button className="hidden xs:block bg-[#7C3AED] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[14px] md:text-[16px] font-semibold hover:bg-[#6D28D9] transition-all shadow-md active:scale-95">
            Get Started
          </button>

          <button
            className="lg:hidden p-2 text-[#374151]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="flex flex-col p-6 gap-4">
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-[#374151] text-[16px] font-medium"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <div className="flex flex-col gap-3 pt-4 border-t">
            <button className="text-[#374151] text-[16px] font-semibold text-left">
              Login
            </button>
            <button className="bg-[#7C3AED] text-white px-6 py-3 rounded-full text-[16px] font-semibold w-full text-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
