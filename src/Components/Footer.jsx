import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1D3F] text-white py-10">
      <div className="mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold text-white">Skill<span className="text-[#32B6FF]">line</span></div>
            <span className="border-l border-gray-400 h-5 mx-2"></span>
            <p className="text-sm text-gray-300">Virtual Class for Zoom</p>
          </div>
        </div>

        <p className="text-gray-300 mb-4">Subscribe to get our Newsletter</p>
        <div className="flex justify-center mb-6">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-l-full bg-[#1f234c] text-white placeholder-gray-400 border border-[#2c3166] w-64"
          />
          <button className="px-5 py-2 rounded-r-full bg-gradient-to-r from-[#6C63FF] to-[#48AFFF] text-white font-medium">
            Subscribe
          </button>
        </div>

        <div className="flex justify-center space-x-4 text-sm text-gray-400 mb-4">
          <a href="#">Careers</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>
        
        <p className="text-xs text-gray-500">© 2021 Class Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
