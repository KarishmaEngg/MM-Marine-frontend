import React from 'react';

export default function Wordpress() {
  return (
    <main className="bg-slate-950 text-white pt-24 overflow-x-hidden">
      {/* HERO SECTION WITH TOP BREADCRUMB BANNER & RIGHT-SIDE IMAGE (WITH SLIDE ANIMATIONS) */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Area (Slides in from Left) */}
          <div className="lg:col-span-7 space-y-6 animate-slide-left">
            {/* Top Small Breadcrumb Banner */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              <span className="text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">HOME</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">SERVICES</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-[#FF6633] text-xs font-bold uppercase tracking-wide">
                WORDPRESS
              </span>
            </div>

            <span className="block text-[#FF6633] font-extrabold text-xs uppercase tracking-widest bg-[#FF6633]/10 w-max px-3 py-1 rounded-md border border-[#FF6633]/20">
              WORDPRESS DEVELOPMENT
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Custom WordPress <span className="text-[#FF6633] drop-shadow-sm">Development & Design</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Empower your content management with lightning-fast, secure, and tailor-made WordPress themes, plugins, and enterprise configurations designed to elevate your brand presence and user engagement.
            </p>
          </div>

          {/* Right Image Mockup Area (Slides in from Right) */}
          <div className="lg:col-span-5 flex justify-center relative animate-slide-right">
            <div className="relative w-full max-w-lg p-3 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6633] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/736x/0d/17/f1/0d17f12a8bf2fcd155f9b53062dd9bb7.jpg" 
                  alt="WordPress Development Mockup" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES (USING IMAGES INSTEAD OF ICONS) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center tracking-tight">
          WordPress Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Custom Themes", 
              desc: "Pixel-perfect theme development built from scratch for speed and SEO.",
              img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Plugin Integration", 
              desc: "Custom plugin creation and API configurations to extend functionality.",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Speed & Security", 
              desc: "Advanced hardening, caching layers, and optimization for fast page loads.",
              img: "https://i.pinimg.com/736x/b5/43/13/b54313545f04fd639445611e2187969d.jpg" 
            },
            { 
              title: "WooCommerce", 
              desc: "Powerful online store management using specialized WordPress e-commerce.",
              img: "https://i.pinimg.com/1200x/c9/68/49/c968493a6a179d73d100e7390f6d51aa.jpg" 
            }
          ].map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group overflow-hidden flex flex-col"
            >
              {/* Image Box replacing Icons */}
              <div className="relative h-44 w-full overflow-hidden border-b border-slate-800">
                <img 
                  src={feat.img} 
                  alt={feat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FF6633] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM ANIMATION STYLES */}
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
          animation: slideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-right {
          animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}