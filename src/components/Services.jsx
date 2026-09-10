import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, Smartphone, TrendingUp } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: "website-designing",
      step: "01",
      title: "Website Designing",
      desc: "Our Web Design Services are focused on the creation of beautiful and professional layouts with designs and layouts which are sure to represent your business...",
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
      tagColor: "text-cyan-400"
    },
    {
      id: "web-development",
      step: "02",
      title: "Web Development",
      desc: "At MarineSoft, we provide our clients with top-class web development services, providing them with the quality web applications they can use...",
      icon: <Code className="w-10 h-10 text-cyan-400" />,
      tagColor: "text-emerald-400"
    },
    {
      id: "mobile-development",
      step: "03",
      title: "Mobile Development",
      desc: "Providing users with the quality mobile applications they can use to leverage mobile technology and, in so doing, take their business to greater heights...",
      icon: <Smartphone className="w-10 h-10 text-cyan-400" />,
      tagColor: "text-cyan-400"
    },
    {
      id: "digital-marketing",
      step: "04",
      title: "Digital Marketing",
      desc: "Our digital marketing services include a suite of services aimed at promoting your business on the various digital platforms available...",
      icon: <TrendingUp className="w-10 h-10 text-cyan-400" />,
      tagColor: "text-orange-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Our Expertise</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Services We Are Offering</h3>
          <p className="text-slate-400 text-sm sm:text-base">Explore our structured timeline of elite capabilities designed for modern operations.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 via-slate-800 to-cyan-500/50"></div>

          <div className="space-y-16 lg:space-y-24">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col lg:flex-row items-center justify-between relative">
                  
                  <div className={`w-full lg:w-[45%] text-center ${isEven ? 'lg:text-right' : 'lg:text-left order-first lg:order-last'} space-y-3`}>
                    <div className="flex items-center justify-center lg:justify-end gap-4">
                      {isEven && <span className={`text-6xl sm:text-7xl font-black ${service.tagColor}`}>{service.step}</span>}
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold tracking-wide">{service.title}</h4>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {service.desc}
                    </p>
                    <div className="pt-2">
                      <Link to={`/service/${service.id}`} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-1 transition">
                        Read more →
                      </Link>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-slate-900 border-2 border-cyan-500/60 items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
                    {service.icon}
                  </div>

                  <div className={`w-full lg:w-[45%] text-center ${isEven ? 'lg:text-left' : 'lg:text-right order-last lg:order-first'} space-y-3 mt-6 lg:mt-0`}>
                    {!isEven && <span className={`text-6xl sm:text-7xl font-black ${service.tagColor}`}>{service.step}</span>}
                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 backdrop-blur inline-block text-left max-w-md shadow-xl">
                      <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Core Feature</span>
                      <p className="text-sm text-slate-300 mt-1">Delivered with elite industry standards and professional execution protocols.</p>
                      <div className="mt-4">
                        {!isEven && (
                          <Link to={`/service/${service.id}`} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-1 transition">
                            Read more →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}