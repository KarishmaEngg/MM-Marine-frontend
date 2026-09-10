import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, ShoppingBag, Globe, Cpu, Layers } from 'lucide-react';

export default function DemoPage() {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default Demo2 selected like image

  const demos = [
    { id: 1, title: "Demo1", icon: Code, desc: "We believe in uniqueness. Our team creates custom designs that align perfectly with your brand identity, ensuring your website stands out among competitors." },
    { id: 2, title: "Demo2", icon: Smartphone, desc: "In today's mobile-driven world, your website must be accessible on all devices. We create responsive designs that adapt seamlessly to various screen sizes, providing an optimal user experience." },
    { id: 3, title: "Demo3", icon: ShoppingBag, desc: "Whether you're starting an online store or looking to enhance your existing platform, we offer e-commerce solutions that prioritize user-friendliness, security, and scalability." },
    { id: 4, title: "Demo4", icon: Globe, desc: "User experience is paramount. We focus on creating intuitive interfaces that engage visitors and guide them through your website effortlessly, enhancing user satisfaction and conversion rates." },
    { id: 5, title: "Demo5", icon: Cpu, desc: "Our designs are optimized for search engines, incorporating best practices to improve your website's visibility and ranking, ultimately driving organic traffic to your site." },
    { id: 6, title: "Demo6", icon: Layers, desc: "We work with various CMS platforms, including WordPress, Shopify, and others, empowering you with easy-to-manage websites tailored to your specific requirements." }
  ];

  return (
    <main className="bg-slate-950 text-white pt-24 min-h-screen overflow-x-hidden pb-20">
      
      {/* HEADER TITLE SECTION */}
      <section className="py-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl pointer-events-none"></div>
        <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 inline-block mb-4 animate-pulse">
          INTERACTIVE SHOWCASE
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          What We <span className="text-emerald-500">Offer</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Click on any card below to dynamically switch themes, view content, and trigger smooth sliding animations.
        </p>
      </section>

      {/* GRID SECTION WITH LEFT/RIGHT SLIDE ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, idx) => {
            const IconComponent = demo.icon;
            const isSelected = selectedIndex === idx;

            // Alternate entry animation: even index slides from left, odd index slides from right
            const animationClass = idx % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

            return (
              <div
                key={demo.id}
                onClick={() => setSelectedIndex(idx)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 relative group border ${animationClass} ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-2xl shadow-emerald-900/50 scale-105'
                    : 'bg-slate-900/80 text-gray-300 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900'
                }`}
              >
                {/* Glow effect on selected */}
                {isSelected && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur opacity-30 -z-10"></div>
                )}

                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon Container with color toggle */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-inner ${
                    isSelected 
                      ? 'bg-white text-emerald-600' 
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className={`text-2xl font-bold tracking-wide ${isSelected ? 'text-white' : 'text-gray-100'}`}>
                    {demo.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isSelected ? 'text-emerald-50' : 'text-gray-400'}`}>
                    {demo.desc}
                  </p>

                  <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-gray-400'
                  }`}>
                    {isSelected ? 'Active Demo' : 'Click to Select'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STYLING & ANIMATIONS */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </main>
  );
}