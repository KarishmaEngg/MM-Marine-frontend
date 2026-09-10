import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Anchor, ChevronDown, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const servicesList = [
    { name: 'Website/Graphic Designing', slug: 'web-graphic-designing' },
    { name: 'Mobile Apps Development', slug: 'mobile-apps-development' },
    { name: 'Ecommerce Development', slug: 'ecommerce-development' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'Google Adwords', slug: 'google-adwords' },
    { name: 'Email Marketing', slug: 'email-marketing' },
    { name: 'Search Engine Optimization', slug: 'seo' },
    { name: 'Social Media Marketing', slug: 'social-media-marketing' },
    { name: 'Social Media Optimization', slug: 'smo' },
    { name: 'Smart Board Solution', slug: 'smart-board-solution' },
    { name: 'Software Development', slug: 'software-development' },
  ];

  const shopList = [
    { name: 'Web Hosting & Domains', slug: 'web-hosting' },
    { name: 'Promotion Email', slug: 'promotion-email' },
  ];

  return (
    <>
      <nav className="bg-slate-950/90 border-b border-slate-800 fixed w-full top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                MM <span className="text-cyan-400">MARINE</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link to="/" className="text-slate-300 hover:text-cyan-400 transition">HOME</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition uppercase">
                  Services <ChevronDown className="w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-20 left-0 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl py-2 z-50">
                    {servicesList.map((service, index) => (
                      <Link
                        key={index}
                        to={`/service/${service.slug}`}
                        className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Portfolio Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => setPortfolioOpen(true)}
                onMouseLeave={() => setPortfolioOpen(false)}
              >
                <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition uppercase">
                  Portfolio <ChevronDown className="w-4 h-4" />
                </button>

                {portfolioOpen && (
                  <div className="absolute top-20 left-0 w-52 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl py-2 z-50">
                    <Link to="/portfolio/responsive-website" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition">Responsive Website</Link>
                    <Link to="/portfolio/ecommerce" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition">E Commerce</Link>
                    <Link to="/portfolio/wordpress" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition">Wordpress</Link>
                  </div>
                )}
              </div>

              {/* SHOP DROPDOWN */}
              <div 
                className="relative py-8"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition uppercase">
                  Shop <ChevronDown className="w-4 h-4" />
                </button>

                {shopOpen && (
                  <div className="absolute top-20 left-0 w-56 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl py-2 z-50">
                    {shopList.map((item, index) => (
                      <Link
                        key={index}
                        to={`/shop/${item.slug}`}
                        className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition font-semibold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/demo" className="text-slate-300 hover:text-cyan-400 transition">DEMO</Link>
              <Link to="/career" className="text-slate-300 hover:text-cyan-400 transition">CAREER</Link>
              <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition">CONTACT</Link>
            </div>

            {/* Action Button */}
            <div className="hidden md:block">
              <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-orange-500/20 uppercase tracking-wider">
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">HOME</Link>
            
            <div className="py-2 text-slate-400 font-semibold text-xs uppercase tracking-wider">Services:</div>
            <div className="pl-4 space-y-1 border-l border-slate-800">
              {servicesList.map((service, index) => (
                <Link key={index} to={`/service/${service.slug}`} onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-cyan-400 text-xs py-1.5">{service.name}</Link>
              ))}
            </div>

            <div className="py-2 text-slate-400 font-semibold text-xs uppercase tracking-wider">Portfolio:</div>
            <div className="pl-4 space-y-1 border-l border-slate-800">
              <Link to="/portfolio/responsive-website" onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-cyan-400 text-xs py-1.5">Responsive Website</Link>
              <Link to="/portfolio/ecommerce" onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-cyan-400 text-xs py-1.5">E Commerce</Link>
              <Link to="/portfolio/wordpress" onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-cyan-400 text-xs py-1.5">Wordpress</Link>
            </div>

            <div className="py-2 text-slate-400 font-semibold text-xs uppercase tracking-wider">Shop:</div>
            <div className="pl-4 space-y-1 border-l border-slate-800">
              {shopList.map((item, index) => (
                <Link key={index} to={`/shop/${item.slug}`} onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-cyan-400 text-xs py-1.5">{item.name}</Link>
              ))}
            </div>

            <Link to="/demo" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">DEMO</Link>
            <Link to="/career" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">CAREER</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">CONTACT</Link>
          </div>
        )}
      </nav>

    </>
  );
}