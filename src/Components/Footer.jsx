import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="lg:col-span-2 text-left">
            <h2 className="text-[32px] font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-[16px] leading-relaxed max-w-[350px]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6 text-white text-left">Product</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors text-left">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6 text-white text-left">Company</h4>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors text-left">About</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6 text-white text-left">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-[15px] mb-8">
              <li className="hover:text-white cursor-pointer transition-colors text-left">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Community</li>
              <li className="hover:text-white cursor-pointer transition-colors text-left">Contact</li>
            </ul>

            <h4 className="text-[18px] font-bold mb-4 text-white text-left">Social Links</h4>
            <div className="flex gap-3 justify-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] cursor-pointer hover:bg-gray-200 transition-all">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] cursor-pointer hover:bg-gray-200 transition-all">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F172A] cursor-pointer hover:bg-gray-200 transition-all">
                <FaTwitter size={18} />
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[14px]">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-[14px]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;