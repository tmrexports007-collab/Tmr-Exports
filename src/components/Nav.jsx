import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHeadset, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/logo.jpeg'; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Product', href: '#product' },
    { name: 'Quality', href: '#quality' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
   
  ];

  // Specific Brand Colors based on your request
  const brandBlue = 'text-[#000033]';
  const brandBgBlue = 'bg-[#C00707]';
  const brandGreen = 'text-[#002200]';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-[1000] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[90px]">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">

       <img src={logo} alt="TMR Exports Logo" className="h-20 w-20 object-cover rounded-full" />
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium flex items-center hover:text-red-700 transition-colors hover:opacity-70 ${
                index === 0 ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              {index === 0 && <span className="mr-1.5 text-[8px]">●</span>}
              {link.name}
            </a>
          ))}
        </div>

        {/* 3. Right Action Section */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2.5 border border-gray-200 px-4 py-2 rounded-lg text-gray-800">
            <FaHeadset className={brandBlue} />
            <span className="text-sm font-semibold">+91 123456789</span>
          </div>

            {/* Changed from <button> to <a> */}
  <a 
    href="#contact" 
    className={`${brandBgBlue} text-white px-6 py-3 rounded-lg flex items-center gap-2.5 font-semibold hover:opacity-90 transition-all active:scale-95`}
  >
    Contact <FaArrowRight size={14} />
  </a>

          
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <FaBars size={24} className={brandBlue} />
        </div>
      </div>

      {/* Mobile Slider (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-[1100] backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-[1200] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between  items-center mb-10">
                <span className={` ${brandBlue}`}>MENU</span>
                <FaTimes onClick={() => setIsOpen(false)} className="cursor-pointer text-gray-500" size={24} />
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg hover:bg-gray-100 px-4 rounded-lg  border-b border-gray-50 pb-2 ${brandGreen}`}
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="mt-4 p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <FaHeadset className={brandBlue} />
                  <span className="text-sm font-bold text-gray-700">+91 98578474975</span>
                </div>
              </div>
              
              <div className="mt-auto text-[10px] text-gray-400 uppercase tracking-widest">
                TMR Exports © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;