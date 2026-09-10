import React from 'react';
import { Link } from 'react-router-dom'; // <-- Yeh import missing tha
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function HostingShop() {
  return (
    <main className="bg-slate-950 text-white pt-24 overflow-x-hidden">
      
      {/* HERO SECTION WITH SLIDE ANIMATION */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              <span className="text-xs font-bold text-gray-400">HOME</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-xs font-bold text-gray-400">SHOP</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-[#FF6633] text-xs font-bold uppercase tracking-wide">
                WEB HOSTING & DOMAINS
              </span>
            </div>

            <span className="block text-[#FF6633] font-extrabold text-xs uppercase tracking-widest bg-[#FF6633]/10 w-max px-3 py-1 rounded-md border border-[#FF6633]/20">
              MARINE SOFT HOSTING
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Web <span className="text-[#FF6633] drop-shadow-sm">Designing & Hosting</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Much like a fingerprint. Select the right domain name and secure web hosting infrastructure to maximize your operational uptime, speed, and business growth.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center relative animate-slide-right">
            <div className="relative w-full max-w-lg p-3 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6633] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/736x/7f/3e/91/7f3e917785ffaec392739e0fbd6f3f81.jpg" 
                  alt="Web Hosting Mockup" 
                  className="w-200 h-100 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DOMAIN EXTENSIONS BAR */}
      <section className="py-12 bg-[#FF6633] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center animate-slide-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Much like a fingerprint. Select the right domain name
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Making progress diversification, amplify, promising development participatory monitoring investment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['.com', '.org', '.co.in', '.uk', '.us', '.memorial', '.band', '.uk.org', '.com', '.org', '.co.in'].map((ext, idx) => (
              <span key={idx} className="bg-slate-950/30 border border-white/20 px-5 py-2 rounded-xl font-bold text-sm tracking-wider hover:bg-slate-950 transition-colors shadow-lg">
                {ext}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOP FEATURES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "API integration",
              desc: "Two or more applications can communicate using APIs. We develop secure APIs to enrich business needs efficiently.",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Free Add-Ons",
              desc: "We provide additional free features for AffiliateWP with awesome add-ons to help you add custom functionality.",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Easy to use Control Panel",
              desc: "Control panel plays a key role in expanding your business by saving your valuable time with a user-friendly interface.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "DNS Management",
              desc: "Our DNS responds very quickly so that your business never suffers, ensuring prime management service.",
              img: "https://i.pinimg.com/1200x/72/36/36/7236361b6550694165802f7d8fce74e1.jpg"
            },
            {
              title: "SSL Certificate",
              desc: "We also provide SSL certificate services needed in modern MLM businesses with high security demands.",
              img: "https://i.pinimg.com/736x/39/71/5c/39715c31d6f333fb7d0c2b4b582ec64d.jpg"
            },
            {
              title: "Custom Server Program",
              desc: "As per business requirements, we provide several types of servers like dedicated, VPS, and shared servers with 99.9% uptime.",
              img: "https://i.pinimg.com/1200x/42/a4/45/42a445cb0d86a42fd4309f63cef4f67c.jpg"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/65 rounded-3xl border border-slate-800 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group overflow-hidden flex flex-col">
              <div className="relative h-48 w-full overflow-hidden border-b border-slate-800">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FF6633] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANAGED WEB HOSTING SERVICES PLANS */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Managed Web Hosting Services</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Easily enhance the performance, security, and reliability of your application services with one of our managed cloud hosting products.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              tag: "Shared Resources",
              title: "Managed Web Hosting",
              desc: "Our fully managed enterprise cloud hosting with failover support, load balancing, clustered email hosting, and advanced administration options.",
              features: ["Free setup and data migration included", "Administration powered by cPanel®", "24/7 Technical support agents"]
            },
            {
              tag: "Dynamic Resources",
              title: "Virtual Cloud Servers",
              desc: "High-performance, reliable, and durable servers designed to help you scale your business rapidly and easily.",
              features: ["Free setup and data migration included", "Administration powered by cPanel®", "24/7 Technical support agents"]
            },
            {
              tag: "Dedicated Resources",
              title: "Dedicated Private Cloud",
              desc: "Dedicated clouds where servers are completely isolated, giving you total control and customization over bandwidth and storage.",
              features: ["Free setup and data migration included", "Administration powered by cPanel®", "24/7 Technical support agents"]
            },
            {
              tag: "Custom Resources",
              title: "Server Colocation",
              desc: "Deploy your own servers within an existing datacenter facility where you manage OS and apps while we provide space and power.",
              features: ["Free setup and data migration included", "Administration powered by cPanel®", "24/7 Technical support agents"]
            }
          ].map((plan, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:border-[#FF6633]/50 transition-colors">
              <div>
                <span className="bg-[#FF6633]/20 text-[#FF6633] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#FF6633]/30 inline-block mb-4">
                  {plan.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">{plan.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.desc}</p>
              </div>
              <div className="border-t border-slate-800 pt-6 space-y-3">
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6633] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#FF6633]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Let's Work Together</h2>
            <p className="text-white/90 text-sm sm:text-base">Start your project with best pricing and attract your visitors</p>
          </div>
          <Link to="/contact" className="bg-slate-950 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl tracking-wider hover:bg-slate-900 transition shadow-2xl inline-flex items-center gap-2">
            START A PROJECT WITH US <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SLIDE ANIMATION STYLES */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(60px); }
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