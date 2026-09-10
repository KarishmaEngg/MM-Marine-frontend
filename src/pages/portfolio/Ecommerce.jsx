import React from 'react';
import { ShieldCheck, Sliders, Award } from 'lucide-react';

export default function Ecommerce() {
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
                E-COMMERCE
              </span>
            </div>

            <span className="block text-[#FF6633] font-extrabold text-xs uppercase tracking-widest bg-[#FF6633]/10 w-max px-3 py-1 rounded-md border border-[#FF6633]/20">
              E-COMMERCE DEVELOPMENT
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Scalable E-Commerce <span className="text-[#FF6633] drop-shadow-sm">Development Solutions</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Build high-converting online storefronts equipped with secure checkout flows, advanced inventory tracking, and custom payment gateway integration to scale your retail business efficiently across all digital channels.
            </p>
          </div>

          {/* Right Image Mockup Area (Slides in from Right) */}
          <div className="lg:col-span-5 flex justify-center relative animate-slide-right">
            <div className="relative w-full max-w-lg p-3 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6633] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/1200x/fb/a8/4a/fba84acdef28fa06706156d73211a01c.jpg" 
                  alt="E-Commerce Development Mockup" 
                  className="w-auto h-150 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES GRID SECTION (USING IMAGES INSTEAD OF ICONS) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center tracking-tight">
          E-Commerce Features & Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Product Catalog", 
              desc: "Dynamic product listings with filters, variations, and advanced search functionality.",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Secure Checkout", 
              desc: "Frictionless checkout paths engineered to reduce cart abandonment rates.",
              img: "https://i.pinimg.com/736x/9d/39/6f/9d396f3d08c8c19e56eb4f1b5228f1e8.jpg" 
            },
            { 
              title: "Payment Gateways", 
              desc: "Integrated with Stripe, PayPal, Razorpay, and UPI payment infrastructures.",
              img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Inventory Control", 
              desc: "Real-time stock synchronization and alert systems for low quantities.",
              img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Order Management", 
              desc: "Comprehensive admin dashboard for fulfillment, invoicing, and tracking.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
            },
            { 
                title:"Shopping Cart",
                desc:"Lets users add, remove, and manage products before checkout.",
                img:"https://i.pinimg.com/736x/49/57/9d/49579d3f983348742b5f7ad542003c41.jpg"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group overflow-hidden flex flex-col"
            >
              {/* Image Box replacing Icons */}
              <div className="relative h-48 w-full overflow-hidden border-b border-slate-800">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FF6633] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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