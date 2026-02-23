import React from 'react';
import { motion } from 'framer-motion';
import { GiCheckedShield, GiFactory, GiTruck, GiFarmer, GiFiles } from 'react-icons/gi';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Consistent Quality",
      desc: "Every batch undergoes rigorous testing for grain length and aroma.",
      icon: <GiCheckedShield />,
    },
    {
      title: "Modern Processing",
      desc: "State-of-the-art milling preserves nutritional value and purity.",
      icon: <GiFactory />,
    },
    {
      title: "On-time Delivery",
      desc: "Optimized logistics ensuring reliable global shipping schedules.",
      icon: <GiTruck />,
    },
    {
      title: "Farmer Network",
      desc: "Sourced directly from fertile Nellore belts for fresh harvests.",
      icon: <GiFarmer />,
    },
    {
      title: "Export Compliance",
      desc: "Expert handling of documentation for seamless customs clearance.",
      icon: <GiFiles />,
    },
  ];

 
  const duplicatedFeatures = [...features, ...features];

  return (
    <section  id="why-choose-us" className="py-20  overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h3 className="text-[#0535a4] font-bold uppercase tracking-widest text-sm mb-2">Our Advantages</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#004d2c]">Why Choose TMR Agro?</h2>
        </div>
      </div>

      {/*  Marquee Containter */}
      <div className=" hidden relative md:flex overflow-hidden">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: [0, -1300],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, 
              ease: "linear",
            },
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
             className="bg-white cursor-pointer p-6 shadow-lg border-b-4 border-[rgb(17,17,154)]  hover:border-[rgb(212,28,28)] transition-all duration-300 rounded-xl w-64 shrink-0 flex flex-col items-center text-center">
              <div className="text-[rgb(17,17,154)] text-center justify-center flex text-5xl mb-6">
                {feature.icon}
              </div>
              <h4 className="text-[#004d2c] text-xl font-bold mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600  leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
 
      
      </div>
      
       {/* Mobile View */}
      <div className="flex flex-col items-center gap-8 px-6 md:hidden">
        {features.map((feature, index) => (
          <div
            key={`mobile-${index}`}
            className="bg-white p-6 shadow-md border-b-4 border-[rgb(17,17,154)] rounded-xl w-full max-w-[320px] flex flex-col items-center text-center"
          >
            <div className="text-[rgb(17,17,154)] text-5xl mb-4">{feature.icon}</div>
            <h4 className="text-[#004d2c] text-lg font-bold mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;