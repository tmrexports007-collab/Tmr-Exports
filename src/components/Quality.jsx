import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Pipette, Search, Filter, Box, Award, FileText } from 'lucide-react';

const Quality = () => {
  const steps = [
    {
      title: "Raw Material Inspection",
      desc: "Initial assessment of grain length and purity directly from the harvest.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "Cleaning & Grading",
      desc: "Removal of impurities and separation of grains based on uniform size.",
      icon: <Filter className="w-5 h-5" />,
    },
    {
      title: "Polishing & Sortex",
      desc: "Advanced color sorting and polishing to ensure a flawless visual profile.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Moisture Testing",
      desc: "Strict laboratory analysis to ensure the ideal 12-14% moisture content for shelf life.",
      icon: <Pipette className="w-5 h-5" />,
    },
    {
      title: "Final Packaging Inspection",
      desc: "Visual and weight verification before the bags are sealed and stamped.",
      icon: <Box className="w-5 h-5" />,
    },
  ];

  const certificates = [
    { name: "FSSAI", subtitle: "Food Safety & Standards Authority" },
    { name: "APEDA", subtitle: "Export Development Authority" },
    { name: "Phytosanitary", subtitle: "Plant Health Compliance" },
    { name: "Origin", subtitle: "Certificate of Authenticity" },
  ];

  return (
    <div className="bg-white min-h-screen font-serif text-[#1A1A1A] overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <section className="py-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#C5A059] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold">Standard of Excellence</span>
          <h1 className="text-4xl md:text-6xl font-light italic mt-4 text-[#0A2540]">Quality Assurance</h1>
          <p className="max-w-xl mx-auto mt-6 text-gray-400 font-sans text-[10px] md:text-xs uppercase tracking-widest leading-loose px-4">
            Precision in every grain. Our 5-step control process ensures 
            that only the finest harvest reaches the global market.
          </p>
        </motion.div>
      </section>

      {/* --- QUALITY STEPS --- */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="relative">
          {/* Central Vertical Line: Left-aligned on mobile, center-aligned on desktop */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-100" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Circle: Positioned on the line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border border-[#C5A059] rounded-full flex items-center justify-center z-10 shadow-sm">
                <span className="text-[10px] font-bold text-[#C5A059]">{index + 1}</span>
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"
              }`}>
                <div className={`flex items-center gap-3 mb-2 ${
                  index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                }`}>
                  <span className="text-[#C5A059] opacity-60 shrink-0">{step.icon}</span>
                  <h3 className="text-lg md:text-xl font-medium text-[#0A2540]">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {/* Spacer for Desktop (Empty half) */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section className="bg-[#FCFAF5] py-16 md:py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center lg:text-left">
              <Award className="text-[#C5A059] w-10 h-10 mb-6 mx-auto lg:mx-0" />
              <h2 className="text-2xl md:text-3xl font-light italic text-[#0A2540] mb-4">Certified for Global Export</h2>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">
                Our facilities and processes are fully compliant with international 
                food safety standards. We provide all necessary documentation to 
                ensure smooth customs clearance in any nation.
              </p>
            </div>

            {/* Responsive Grid for certificates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-5 md:p-6 border border-gray-100 flex items-center gap-4 shadow-sm rounded-sm"
                >
                  <div className="p-3 bg-[#FCFAF5] text-[#C5A059] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-[#0A2540] tracking-wider uppercase">{cert.name}</h4>
                    <p className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-tighter mt-1">{cert.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL QUOTE --- */}
      <section className="py-16 md:py-24 text-center">
        <div className="w-16 h-[1px] bg-gray-200 mx-auto mb-8" />
        <p className="text-gray-400 font-sans text-[10px] uppercase tracking-[0.4em]">
          End-to-End Excellence
        </p>
      </section>

    </div>
  );
};

export default Quality;