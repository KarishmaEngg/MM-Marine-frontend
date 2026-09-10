import React from 'react';
import { Compass, ShieldAlert, Award } from 'lucide-react';

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-cyan-400 font-bold uppercase tracking-wider text-sm">Fleet & Operations</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold">Excellence in Vessel Management & Logistics</h3>
            <p className="text-slate-300 leading-relaxed">
              Our operational standards are shaped by decades of open-sea experience. From bulk carriers to specialized offshore service vessels, we maintain strict performance tracking.
            </p>
          </div>
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6">
            <h4 className="text-2xl font-bold">Operational Pillars</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-xl text-cyan-400"><Compass className="w-6 h-6" /></div>
                <div>
                  <h5 className="font-bold text-white">Navigation Accuracy</h5>
                  <p className="text-sm text-slate-400">Advanced monitoring systems ensuring optimal fuel usage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-xl text-cyan-400"><ShieldAlert className="w-6 h-6" /></div>
                <div>
                  <h5 className="font-bold text-white">Risk Mitigation</h5>
                  <p className="text-sm text-slate-400">Proactive safety measures designed to prevent delays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}