import React from 'react';
import { CheckCircle2, ShieldCheck, Sliders, Award } from 'lucide-react';

export default function ResponsiveWebsite() {
  return (
    <main className="bg-slate-950 text-white pt-24 overflow-x-hidden">
      {/* HERO SECTION WITH SLIDE-IN ANIMATIONS */}
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
                RESPONSIVE WEBSITE
              </span>
            </div>

            <span className="block text-[#FF6633] font-extrabold text-xs uppercase tracking-widest bg-[#FF6633]/10 w-max px-3 py-1 rounded-md border border-[#FF6633]/20">
              RESPONSIVE WEB DESIGN
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Creating, Rejuvenating, <span className="text-[#FF6633] drop-shadow-sm">Repositioning Brands.</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Responsive web design is a conceptual approach that defines and encodes a website to optimize the viewing experience across a wide range of devices (desktops to mobile phones). A well-designed responsive website ensures that navigation items, layouts, text, images, media players, and other elements of the user interface automatically adjust to various devices. 
            </p>
          </div>

          {/* Right Image Mockup Area (Slides in from Right) */}
          <div className="lg:col-span-5 flex justify-center relative animate-slide-right">
            <div className="relative w-full max-w-lg p-3 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6633] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/736x/e6/8c/42/e68c42c5a2de16c8388891247d98e103.jpg" 
                  alt="Responsive Web Design Mockup" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center tracking-tight">
            Benefits Of Responsive Web Design Services:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Grids and flexible content structures",
              "Optimal user experience across all screen sizes",
              "Profitable design architecture and fast loading",
              "Recommended by Google and essential for SEO",
              "Easy to manage and maintain single codebase",
              "Higher Conversion Rates"
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl flex items-start gap-4 hover:border-[#FF6633]/60 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <div className="p-2 bg-[#FF6633]/10 rounded-xl border border-[#FF6633]/20 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6633]" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center tracking-tight">
          Why Choose Us For Responsive Web Design?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-[#FF6633] transition-colors">
              <ShieldCheck className="w-7 h-7 text-[#FF6633]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6633] transition-colors">We Have An Ethics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We maintain long-term relationships with our customers and deliver transparent solutions.</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-[#FF6633] transition-colors">
              <Sliders className="w-7 h-7 text-[#FF6633]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6633] transition-colors">We Are Flexible</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We adapt to project specifications with speed, agility, and absolute flexibility.</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-[#FF6633] transition-colors">
              <Award className="w-7 h-7 text-[#FF6633]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6633] transition-colors">100% Focused On Quality</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Rigorous quality checks for design, performance, code standards, and usability.</p>
          </div>
        </div>
      </section>

      {/* CUSTOM ANIMATION STYLES (Add these to your global CSS or Tailwind configuration if needed) */}
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