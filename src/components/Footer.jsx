import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaChevronUp 
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        
        {/* Column 1: Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-wider text-white">
              MM <span className="text-cyan-400">MARINE</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            We have plenty of resources for all of your IT needs to fulfil, our IT services include Web Designing/Development, Desktop based application, Custom Software Development, e-Commerce websites.
          </p>
          
          {/* Social Icons using react-icons */}
          <div className="flex items-center gap-2.5 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition shadow-md">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white hover:opacity-90 transition shadow-md">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition shadow-md">
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition shadow-md">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition shadow-md">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700/50 pb-2">Our Services</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/service/software-development" className="hover:text-cyan-400 transition">Website Development</Link></li>
            <li><Link to="/service/mobile-apps-development" className="hover:text-cyan-400 transition">Mobile Apps Development</Link></li>
            <li><Link to="/service/ecommerce-development" className="hover:text-cyan-400 transition">Ecommerce Development</Link></li>
            <li><Link to="/service/digital-marketing" className="hover:text-cyan-400 transition">Digital Marketing</Link></li>
            <li><Link to="/service/google-adwords" className="hover:text-cyan-400 transition">Google Adwords</Link></li>
            <li><Link to="/service/seo" className="hover:text-cyan-400 transition">Search Engine Optimization</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700/50 pb-2">Quick Links</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/career" className="hover:text-cyan-400 transition">Career</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
            <li><Link to="/service/web-graphic-designing" className="hover:text-cyan-400 transition">Designing Services</Link></li>
            <li><Link to="/service/smart-board-solution" className="hover:text-cyan-400 transition">Smart Board Solution</Link></li>
          </ul>
        </div>

        {/* Column 4: Corporate Office with Icons */}
        <div className="space-y-4 text-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700/50 pb-2">Corporate Office</h3>
          <p className="leading-relaxed text-slate-400 flex items-start gap-2">
            <FaMapMarkerAlt className="text-cyan-400 shrink-0 mt-0.5 text-sm" />
            <span>Kashi Ram nagar Block "C" H/N-02 Near Dwarikadheesh Mandir, Moradabad(U.P.), India</span>
          </p>
          <p className="text-slate-300 flex items-center gap-2">
            <FaPhoneAlt className="text-cyan-400 shrink-0 text-xs" /> Telephone: +91 81 9393 8503
          </p>
          <p className="text-slate-300 flex items-center gap-2">
            <FaPhoneAlt className="text-cyan-400 shrink-0 text-xs" /> Telephone: +91 70 8827 9144
          </p>
          <p className="text-slate-300 flex items-center gap-2">
            <FaEnvelope className="text-cyan-400 shrink-0 text-xs" /> E-mail: info@mmmarine.in
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>Copyright © 2026 MM Marine. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-3 sm:mt-0">
          <Link to="/contact" className="hover:text-cyan-400 transition">Privacy Policy</Link>
          <button onClick={scrollToTop} className="w-8 h-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full flex items-center justify-center transition shadow-md" title="Scroll to top">
            <FaChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}