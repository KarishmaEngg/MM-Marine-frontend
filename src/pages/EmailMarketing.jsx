import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Target, TrendingUp, BarChart3, DollarSign, Layers } from 'lucide-react';

export default function EmailMarketing() {
  return (
    <main className="bg-slate-950 text-white pt-24 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              <span className="text-xs font-bold text-gray-400">HOME</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-xs font-bold text-gray-400">SERVICES</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-[#FF6633] text-xs font-bold uppercase tracking-wide">
                EMAIL MARKETING
              </span>
            </div>

            <span className="block text-[#FF6633] font-extrabold text-xs uppercase tracking-widest bg-[#FF6633]/10 w-max px-3 py-1 rounded-md border border-[#FF6633]/20">
              MARINE SOFT SERVICES
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Email <span className="text-[#FF6633] drop-shadow-sm">Marketing</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Email marketing is one of the pillars of the complete digital marketing strategy. It is the implementation of the email to boost the products & services and create connections via the database of the current & future customers to meet the marketing objectives.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center relative animate-slide-right">
            <div className="relative w-full max-w-lg p-3 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6633] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/736x/0a/e5/9e/0ae59e3d7fce26afdda0d0ba7a90f2d1.jpg" 
                  alt="Email Marketing Mockup" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-slide-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Creating Valuable, Personal Touches
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We at Marinesoft establish effective communication assisting our clients to gain success in their relevant industry. Our team of experts creates and implements HTML email marketing projects to reach your target audience and keep them occupied through latest updates of news and events.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Marinesoft encircles all of the different skills that create a successful e-mail marketing campaign. Our team brings innovative ideas and design templates that are sure to get maximum attention.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl animate-slide-right">
            <h3 className="text-xl font-bold mb-4 text-[#FF6633]">Key Objective</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We at Marinesoft, develop eMailers that are assisted by the brand image and enable us to create the latest guidelines for your direct outreach campaigns.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6633]" /> Target audience segmentation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6633]" /> High conversion rate templates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6633]" /> Detailed measurement & metrics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY SELECT EMAIL MARKETING */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why Select Email Marketing</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Leverage personalized touch points to scale your customer outreach effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Target Audience",
              desc: "Email contents can be personalized for each client to meet their individual needs. It is all based on the need to promote a huge conversion rate.",
              icon: Target
            },
            {
              title: "Enhanced Brand Awareness",
              desc: "Tactical planning, influential design, and aimed content, you can generate awareness of your brand. Every email sent to your clients exposes them more to your brand and business.",
              icon: TrendingUp
            },
            {
              title: "Classification at Scale",
              desc: "Subscribers can easily promote your deals, offerings, and updates within their friend circle acting as your brand ambassador. Each time they share your offers, your brand gets more exposed and win great reliability.",
              icon: Layers
            },
            {
              title: "Measurement",
              desc: "Email marketing creates significant insights like delivery cost, open costs, click to delivery costs and the cost of keeping the subscribers hitched.",
              icon: BarChart3
            },
            {
              title: "Cost-Efficient",
              desc: "Email marketing is feasible and does not involve any printing, postage and advertising expense.",
              icon: DollarSign
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-slate-900/65 rounded-3xl border border-slate-800 p-8 hover:border-[#FF6633]/50 transition-all duration-300 shadow-xl hover:-translate-y-2 group flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FF6633]/10 border border-[#FF6633]/20 flex items-center justify-center text-[#FF6633] mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6633] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center animate-slide-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">How We Work</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Our systematic process to deliver top-tier campaign results.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { step: "Step 1", title: "Analysis", desc: "We audit and analyze your website first and check for any discrepancies to fix." },
            { step: "Step 2", title: "Implementation", desc: "We finalize keywords and develop off-page strategies to generate back links." },
            { step: "Step 3", title: "Results", desc: "Our results speak for ourselves, we ensure that you get good quality traffic and leads." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-[#FF6633]/50 transition-colors">
              <span className="text-[#FF6633] text-xs font-bold uppercase tracking-widest bg-[#FF6633]/10 px-3 py-1 rounded-md border border-[#FF6633]/20 inline-block mb-4">
                {item.step}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES WE OFFER */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Services We Offer:</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Writing content for the eMailer.",
            "Planning and constructing for continuous communication.",
            "Design competencies.",
            "HTML coding",
            "Managing eMailer",
            "Apprehending"
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center font-bold text-gray-200 hover:border-[#FF6633] hover:text-[#FF6633] transition-all shadow-md">
              {service}
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