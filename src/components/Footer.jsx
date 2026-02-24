// import React from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
// import logo from "../assets/logo.jpeg"

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer id="contact" className="bg-[#004d2c] text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
//           {/* Brand Column */}
//           <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
//             <div className="flex items-center gap-2">
//               <img src={logo} alt="TMR Exports Logo" className="h-10 w-10 object-cover rounded-full" />
//               <span className="text-2xl font-black tracking-tighter">TMR AGRO</span>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//               Leading the way in sustainable agriculture and premium rice production. From the heart of Nellore to the world.
//             </p>
//             <div className="flex gap-4">
//               {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
//                 <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#468e3d] transition-all">
//                   <Icon size={14} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col items-center lg:items-start">
//             <div className="w-fit"> 
//               <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 w-fit mx-auto lg:mx-0">Quick Links</h4>
//               <ul className="space-y-4 text-sm text-gray-300 text-left">
//                 <li><a href="#home" className="hover:text-[#468e3d] transition-colors">Home</a></li>
//                 <li><a href="#about" className="hover:text-[#468e3d] transition-colors">About Us</a></li>
//                 <li><a href="#mission" className="hover:text-[#468e3d] transition-colors">Our Mission</a></li>
//                 <li><a href="#product" className="hover:text-[#468e3d] transition-colors">Our Products</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Trust & Quality */}
//           <div className="flex flex-col items-center lg:items-start">
//             <div className="w-fit">
//               <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 w-fit mx-auto lg:mx-0">Trust & Quality</h4>
//               <ul className="space-y-4 text-sm text-gray-300 text-left">
//                 <li><a href="#quality" className="hover:text-[#468e3d] transition-colors">Quality Standards</a></li>
//                 <li><a href="#why-choose-us" className="hover:text-[#468e3d] transition-colors">Why Choose Us</a></li>
//                 <li><a href="#home" className="hover:text-[#468e3d] transition-colors">Export Process</a></li>
//                 <li><a href="#contact" className="hover:text-[#468e3d] transition-colors">Get a Quote</a></li>
//               </ul>
//             </div>
//           </div>

//           {/*  Reach Us */}
//           <div className="flex flex-col items-center lg:items-start">
//             <div className="w-fit">
//               <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 w-fit mx-auto lg:mx-0">Reach Us</h4>
//               <div className="space-y-4 text-sm text-gray-300 text-left">
                
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-[#468e3d] mt-1 shrink-0" />
//                   <span>Nellore Rice Belt, Andhra Pradesh, India.</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-[#468e3d] shrink-0" />
//                   <span>+91 91544 34281</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-[#468e3d] shrink-0" />
//                   <span>support@tmragro.com</span>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-400">
//           <p>© {currentYear} TMR AGRO. All rights reserved. Designed for a greener earth.</p>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-[#FCFAF5] border-t border-gray-100 pt-20 pb-10 font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="TMR AGRO" className="h-12 w-12 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full" />
              <span className="text-2xl font-light tracking-[0.2em] text-[#0A2540]">TMR AGRO</span>
            </div>
            <p className="text-gray-500 font-sans font-light leading-relaxed text-sm max-w-sm">
              Leading the global market in premium Indian rice exports. We bridge the gap between 
              local tradition and international standards of quality.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="text-[#0A2540] hover:text-[#C5A059] transition-colors duration-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-500">
              {['Home', 'About Us', 'Our Mission', 'Our Products'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#C5A059] transition-colors flex items-center group">
                    {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Quality (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Trust & Excellence</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-500">
              {['Quality Standards', 'Why Choose Us', 'Export Process', 'Get a Quote'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#C5A059] transition-colors flex items-center group">
                    {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Reach Us</h4>
            <div className="space-y-6 font-sans text-sm text-gray-500">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#C5A059] shrink-0" />
                <span className="leading-relaxed">Nellore Rice Belt, Andhra Pradesh, India.</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#C5A059] shrink-0" />
                <span>+91 91544 34281</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-[#C5A059] shrink-0" />
                <span>support@tmragro.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
            © {currentYear} TMR AGRO — All Rights Reserved
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
            Cultivating Excellence, Exporting Trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;