import React, { useEffect, useRef, useState } from 'react';
import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaHeadset, 
  FaCalendarAlt, 
  FaUsers, 
  FaSmile, 
  FaRocket 
} from 'react-icons/fa';

const WorkflowData = [
  {
    step: '01',
    title: 'Strategy & Concept',
    icon: <FaLightbulb className="text-amber-400 text-3xl" />,
  },
  {
    step: '02',
    title: 'Creative Designing',
    icon: <FaPaintBrush className="text-pink-400 text-3xl" />,
  },
  {
    step: '03',
    title: 'Development',
    icon: <FaCode className="text-cyan-400 text-3xl" />,
  },
  {
    step: '04',
    title: 'Testing & Supporting',
    icon: <FaHeadset className="text-emerald-400 text-3xl" />,
  },
];

const statsData = [
  { count: 12, suffix: '+', label: 'Years Of Existence', icon: <FaCalendarAlt className="text-amber-400 text-3xl" /> },
  { count: 50, suffix: '+', label: 'Team Of Software Experts', icon: <FaUsers className="text-pink-400 text-3xl" /> },
  { count: 800, suffix: '+', label: 'Satisfied Clients', icon: <FaSmile className="text-cyan-400 text-3xl" /> },
  { count: 1000, suffix: '+', label: 'Projects Successfully Delivered', icon: <FaRocket className="text-emerald-400 text-3xl" /> },
];

export default function WorkflowAndStats() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            if (entry.target.id === 'stats-container') {
              setStartCount(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* 1. WORKFLOW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-12">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Workflow
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Our workflow is inclusive for all, from conceptualization to post production we follow an agile and iterative development approach to provide you with solutions that will boost your business development.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WorkflowData.map((item, index) => (
            <div
              key={item.step}
              className="animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-12 flex flex-col items-center text-center group relative p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 shadow-lg"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Circle Card */}
              <div className="w-24 h-24 rounded-2xl bg-slate-950 shadow-inner border border-slate-800 flex items-center justify-center relative mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400">
                <span className="absolute -top-3 -right-3 text-3xl font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <div className="z-10">{item.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. CTA BANNER */}
      <section className="bg-gradient-to-r from-cyan-900 via-blue-950 to-slate-900 text-white py-16 px-4 text-center relative overflow-hidden border-y border-slate-800">
        <div className="animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-12 max-w-4xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-cyan-400 uppercase">
            Delivering beyond expectation
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">
            Take your business to the next level
          </p>
        </div>
      </section>

      {/* 3. STATS COUNTER SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div
          id="stats-container"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-12"
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 bg-slate-900/60 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-4">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                {startCount ? (
                  <Counter target={stat.count} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Sub-component for Smooth Live Number Counter
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}