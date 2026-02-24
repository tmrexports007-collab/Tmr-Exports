import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHeadset, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/logo.jpeg'; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isManualScroll = React.useRef(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'OurMission', href: '#mission' },
    { name: 'Product', href: '#product' },
    { name: 'Quality', href: '#quality' },
    { name: 'WhyChooseUs', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];



 React.useEffect(() => {
  const handleScroll = () => {
    if (isManualScroll.current) return;
   
    const sections = navLinks.map(link => link.href.replace('#', ''));
    
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
       
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [[navLinks, isManualScroll]]);


  // Specific Brand Colors based on your request
  const brandBlue = 'text-[#000033]';
  const brandBgBlue = 'bg-[#C00707]';
  const brandGreen = 'text-[#002200]';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-1000 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[90px]">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">

       <img src={logo} alt="TMR Exports Logo" className="h-20 w-20 object-cover rounded-full" />
        </div>

       
        {/* 2. Desktop Navigation Links */}
<div className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => {
   
    const isActive = activeSection === link.href.replace('#', '');

    return (
      <a 
        key={link.name} 
        href={link.href}
       
       onClick={() => {
  
  setActiveSection(link.href.replace('#', ''));
  
 
  isManualScroll.current = true;
  
 
  setTimeout(() => {
    isManualScroll.current = false;
  }, 1000);
}}
        className={`text-sm font-medium flex items-center transition-colors duration-200 ${
          isActive ? 'text-blue-950 font-bold' : 'text-gray-600 hover:text-blue-950'
        }`}
      >
       
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.span 
              key="dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.1 }} 
              className="mr-1.5 text-[8px] text-blue-950"
            >
              ●
            </motion.span>
          )}
        </AnimatePresence>
        {link.name}
      </a>
    );
  })}
</div>


     
        {/* 3. Right Action Section */}
        <div className="hidden lg:flex items-center gap-5">
         
  <a 
    href="#contact" 
  onClick={() => {
    setActiveSection('contact');
    isManualScroll.current = true;
    setTimeout(() => { isManualScroll.current = false; }, 1000);
  }}
    className={`bg-blue-950 text-white px-6 py-3 rounded-lg flex items-center gap-2.5 font-semibold hover:opacity-90 transition-all active:scale-95`}
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








