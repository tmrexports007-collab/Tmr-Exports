import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFileDownload, FaChevronRight } from 'react-icons/fa';
import video from '../assets/video.mp4'; 

const Home = () => {
  const videoRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 lg:bg-linear-to-r lg:from-[#004d2c]/80 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-2xl text-center lg:text-left"
        >
        
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Premium Indian Rice <br />
            <span className="text-[#468e3d]">Exported Worldwide</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-200 text-sm md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            TMR Agro is a trusted rice export company from Nellore, 
            delivering high-quality <span className="font-semibold text-white">Sona Masuri, Basmati, and Ponni</span> rice to global importers.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <button className="bg-[#468e3d] hover:bg-white hover:text-[#004d2c] text-white px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg">
              Get Quote <FaChevronRight size={12} />
            </button>
            
            <a className="bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
              <FaWhatsapp size={18} /> WhatsApp
            </a>

            <button className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#004d2c] transition-all flex items-center gap-2 backdrop-blur-sm">
              <FaFileDownload size={14} /> Catalog
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;