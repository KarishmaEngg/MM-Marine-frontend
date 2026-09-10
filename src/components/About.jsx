import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Laptop, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: About Text & Button */}
        <div className="space-y-6">
          <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-cyan-500/30">
            About MM Marine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
            We Are A Software Development Company & We Love Solving Business Problems
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            MM Marine is a Professional Software company. We provide Software Development, Web Designing & Digital Marketing services in Moradabad. We provide Effective Services in Software Development, Web Development, Digital Marketing, SEO, and Custom Enterprise Solutions across India.
          </p>
          <div className="pt-2">
            <Link to="/AboutDetails" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase px-6 py-3 rounded-xl transition shadow-lg shadow-orange-500/25">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Image 2 Style Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Top-Right Box: What We Do */}
          <div className="bg-blue-600 text-white p-6 rounded-3xl space-y-3 flex flex-col justify-between shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Laptop className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold">What We Do?</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              We provide realistic, customized solutions and consultation support for Website, Softwares, Mobile Applications and Digital Marketing.
            </p>
          </div>

          {/* Top-Right Image Mockup Box */}
          <div className="bg-blue-600 border border-slate-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-100 flex items-center justify-center font-bold text-lg">
              10+
            </div>
            <h4 className="font-bold text-sm">Years of Excellence</h4>
            <p className="text-xs text-blue-100">Delivering high-performance software and digital products globally.</p>
          </div>

          {/* Bottom-Right Orange Box: We Make Creative Projects */}
          <div className="sm:col-span-2 bg-orange-500 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <h3 className="text-lg font-bold">We Make Creative Projects</h3>
              <p className="text-xs text-orange-100">We are the best in the industry with over 10 years of experience and a learned team.</p>
            </div>
            <ShieldCheck className="w-12 h-12 text-white/80 shrink-0" />
          </div>

        </div>

      </div>
    </section>
  );
}