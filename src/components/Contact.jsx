import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-cyan-400 font-bold uppercase tracking-wider text-sm">Contact MM Marine</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold">Connect With Our Global Desk</h3>
            <p className="text-slate-300">Reach out for vessel operations, port agency services, or general consultancy inquiries.</p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-cyan-400"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-semibold text-white">Direct Line</h4>
                  <p className="text-sm text-slate-400">+1 (800) MM-MARINE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-cyan-400"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-semibold text-white">Official Email</h4>
                  <p className="text-sm text-slate-400">operations@mmmarine.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <h4 className="text-2xl font-bold">Inquiry Received</h4>
                <p className="text-slate-300">We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <h4 className="text-xl font-bold mb-2">Send an Inquiry</h4>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Full Name</label>
                  <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Email</label>
                  <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400" placeholder="john@example.com" />
                </div>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-lg transition flex items-center justify-center gap-2">
                  Submit <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}