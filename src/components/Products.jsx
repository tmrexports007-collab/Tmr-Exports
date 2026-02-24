import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import basmathi from "../assets/basmathi.jpg"
import ponni from "../assets/ponni.jpg"
import nonbasmathi from "../assets/nonbasmathi.jpg"
import sonamasuri from "../assets/sonamasuri.jpg"
// Subtle Counter for a touch of life without being "flashy"
const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, parseInt(value), { duration: 2, ease: "circOut" });
    return controls.stop;
  }, [value, count]);
  return <motion.span>{rounded}</motion.span>;
};

const Products = () => {
  const riceVarieties = [
    {
      id: 1,
      name: "Sona Masuri",
      desc: "Lightweight, aromatic, and low in starch. The gold standard for daily healthy consumption.",
      image: sonamasuri,
    },
    {
      id: 2,
      name: "Basmati Rice",
      desc: "Long-grain, aged to perfection with a premium nutty aroma. Ideal for festive feasts.",
      image: basmathi,
    },
    {
      id: 3,
      name: "Ponni Rice",
      desc: "A staple in South Indian households. Known for its distinct texture and high nutrition.",
      image: ponni,
    },
    {
      id: 4,
      name: "Non-Basmati",
      desc: "High-yield, affordable bulk varieties optimized for the international export markets.",
      image: nonbasmathi,
    },
  ];

  const stats = [
    { label: "Years of Legacy", val: "112", suffix: "+" },
    { label: "Global Nations", val: "19", suffix: "+" },
    { label: "Quality Awards", val: "99", suffix: "+" },
    { label: "Major Markets", val: "Asia & Africa", isText: true },
  ];

  return (
    <div id="product" className="min-h-screen bg-[#FCFAF5] font-serif text-[#1A1A1A]">
      
      {/* --- ELEGANT HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
          src="https://i.pinimg.com/1200x/fe/8f/93/fe8f93d900be9068f862f1745e9aa18f.jpg"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
             viewport={{ once: false }}
            className="uppercase tracking-[0.5em] text-xs mb-4 text-[#C5A059]"
             
          >
            Since 1912
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
             viewport={{ once: false }}
            className="text-5xl md:text-7xl font-light italic tracking-tight"
          >
            The Soul of Our Grains
          </motion.h1>
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "100px" }}
             transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: false }}
             className="h-[1px] bg-[#C5A059] mx-auto mt-8"
          />
        </div>
      </section>

      {/* --- MINIMALIST STATS --- */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <h4 className="text-[#C5A059] text-3xl font-light mb-1">
                {stat.isText ? stat.val : <><Counter value={stat.val} />{stat.suffix}</>}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-600 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRODUCT GALLERY --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl font-light italic text-[#0A2540]">Our Varieties</h2>
            <p className="text-gray-400 mt-2 font-sans text-sm tracking-widest uppercase">Select Export Quality</p>
          </div>
          <p className="max-w-xs text-gray-500 text-xs leading-relaxed font-sans mt-4 md:mt-0">
            Sourced from the most fertile regions, our rice undergoes 24 rigorous quality checks before reaching your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {riceVarieties.map((rice, index) => (
            <motion.div
              key={rice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-8 items-center group cursor-pointer"
            >
              <div className="w-full sm:w-48 h-64 overflow-hidden  hover:grayscale-0 transition-all duration-700">
                <img src={rice.image} alt={rice.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-[#0A2540] mb-3">{rice.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                  {rice.desc}
                </p>
                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold group-hover:gap-5 transition-all">
                  Details <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ELEGANT FOOTER QUOTE --- */}
      {/* <section className="bg-[#0A2540] py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto px-6"
        >
          <span className="text-[#C5A059] text-4xl font-serif">“</span>
          <h2 className="text-2xl md:text-3xl font-light italic mb-8">
            Quality is the silent language of our heritage.
          </h2>
          <button className="border border-[#C5A059] text-[#C5A059] px-10 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-white transition-all">
            Inquire for Export
          </button>
        </motion.div>
      </section> */}

    </div>
  );
};

export default Products;