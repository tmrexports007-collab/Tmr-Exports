// import React from 'react';
// import { motion } from 'framer-motion';
// import { GiPlantSeed, GiGlobe } from 'react-icons/gi';
// import about from "../assets/about.jpg"
// import rice from "../assets/rice.jpg"

// const About = () => {
//   return (
//     <section id="about" className="py-16 lg:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Side */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
           
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//             className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
//           >
//             <h3 className='font-extrabold text-[#004d2c]  text-4xl md:text-5xl'>About Us</h3>
   
//             <h2 className="text-2xl lg:text-3xl font-bold text-[#004d2c] leading-tight">
//               Pure Grains, Global Trust
//             </h2>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
//               TMR Agro is a growing rice export company committed to delivering premium-quality Indian rice to international markets.
//               Located in Nellore, one of India’s top rice belts, we work directly with farmers and mills to ensure purity, freshness, and consistent quality.
//             </p>

//             {/* Feature List  */}
//             <div className="space-y-8 pt-4">
           
//               <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5">
//                 <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
//                   <GiPlantSeed /> 
//                 </div>
//                 <div>
//                   <h4 className="text-[#004d2c] font-normal text-2xl leading-none">Superior Export</h4>
//                   <p className="text-[#004d2c] font-normal text-2xl">Quality</p>
//                 </div>
//               </div>

//               <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5">
//                 <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
//                   <GiGlobe />
//                 </div>
//                 <div>
//                   <h4 className="text-[#004d2c] font-normal text-2xl leading-none">Global</h4>
//                   <p className="text-[#004d2c] font-normal text-2xl">Representation</p>
//                 </div>
//               </div>
//             </div>

          
//             <div className="pt-8">
//               <button className="bg-[#004d2c] text-white rounded-md px-12 py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300">
//                 Know More
//               </button>
//             </div>
//           </motion.div>


//           {/* Right Side */}
         
//           <div className="hidden lg:flex justify-center items-center h-125 lg:h-150 relative">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
            
//               transition={{ duration: 1 }}
//               className="relative w-full h-full p-6 flex justify-center items-center"
//             >
//               <div 
//                 className="w-[90%] h-[90%] border-4 border-[#468e3d] overflow-hidden"
//                 style={{ borderRadius: "0% 100% 0% 100% / 0% 100% 0% 100%" }}
//               >
//                 <img 
//                   src={about} 
//                   alt="Rice Field" 
//                   className="w-full h-full object-cover shadow-inner"
//                 />
//               </div>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, x: 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               animate={{ y: [0, -15, 0] }}
//               transition={{ 
//                 y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//                 initial: { duration: 0.8 }
//               }}
//               className="absolute right-4 bottom-18 w-64 h-64 border-6 border-gray-200 overflow-hidden shadow-2xl z-20"
//               style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
//             >
//               <img src={rice} alt="Rice Bowl" className="w-full h-full object-cover" />
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { motion } from 'framer-motion';
import { GiPlantSeed, GiGlobe } from 'react-icons/gi';
import about from "../assets/about.jpg"
import rice from "../assets/rice.jpg"

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
           
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
          >
            <h3 className='font-extrabold text-[#004d2c]  text-4xl md:text-5xl'>About Us</h3>
   
            <h2 className="text-2xl lg:text-3xl font-bold text-[#004d2c] leading-tight">
              Pure Grains, Global Trust
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              TMR Agro is a growing rice export company committed to delivering premium-quality Indian rice to international markets.
              Located in Nellore, one of India’s top rice belts, we work directly with farmers and mills to ensure purity, freshness, and consistent quality.
            </p>

            {/* Feature List  */}
            <div className="space-y-8 pt-4">
           
              <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5">
                <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
                  <GiPlantSeed /> 
                </div>
                <div>
                  <h4 className="text-[#004d2c] font-normal text-2xl leading-none">Superior Export</h4>
                  <p className="text-[#004d2c] font-normal text-2xl">Quality</p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5">
                <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
                  <GiGlobe />
                </div>
                <div>
                  <h4 className="text-[#004d2c] font-normal text-2xl leading-none">Global</h4>
                  <p className="text-[#004d2c] font-normal text-2xl">Representation</p>
                </div>
              </div>
            </div>

          
            <div className="pt-8">
              <button className="bg-[#004d2c] text-white rounded-md px-12 py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300">
                Know More
              </button>
            </div>
          </motion.div>


          {/* Right Side */}
         
          <div className="hidden lg:flex justify-center items-center h-125 lg:h-150 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            
              transition={{ duration: 1 }}
              className="relative w-full h-full p-6 flex justify-center items-center"
            >
              <div 
                className="w-[90%] h-[90%] border-4 border-[#468e3d] overflow-hidden"
                style={{ borderRadius: "0% 100% 0% 100% / 0% 100% 0% 100%" }}
              >
                <img 
                  src={about} 
                  alt="Rice Field" 
                  className="w-full h-full object-cover shadow-inner"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                initial: { duration: 0.8 }
              }}
              className="absolute right-4 bottom-18 w-64 h-64 border-6 border-gray-200 overflow-hidden shadow-2xl z-20"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
            >
              <img src={rice} alt="Rice Bowl" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;



