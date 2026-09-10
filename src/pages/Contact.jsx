import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaUser, 
  FaPhone, 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaClock, 
  FaHeadset 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', text: res.message || 'Message successfully sent!' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', text: res.message || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Server error, try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans pt-20">
      
      {/* HERO BANNER */}
      <div className="relative py-12 px-4 text-center overflow-hidden border-b border-slate-600">
        <img 
          src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Contact Header Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-3">
            We’d Love To Hear From You
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Anything on your mind? Send us a message and our expert team will respond promptly.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Cards & Office Image */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Image Banner Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-800 h-40 group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Workspace" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-cyan-400 text-[10px] font-bold tracking-wider uppercase">Global Development Center</span>
                <h4 className="text-white font-bold text-sm">MM Marine Workspace</h4>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <FaHeadset className="text-cyan-400" /> Contact Details
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Our Office</h4>
                    <p className="mt-0.5 text-slate-400">Kashi Ram nagar Block "C" H/N-02 Near Dwarikadheesh Mandir, Moradabad (U.P.), India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                    <FaPhone className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Call Us</h4>
                    <p className="mt-0.5 text-slate-400">+91 81 9393 8503 / +91 70 8827 9144</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email Us</h4>
                    <p className="mt-0.5 text-slate-400">info@mmmarine.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Working Hours</h4>
                    <p className="mt-0.5 text-slate-400">Mon - Sat: 9:00 AM - 6:30 PM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Backend Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800 space-y-4"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" /> Send Us A Message
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill in your details below to submit your query directly to our team.
              </p>

              {status.text && (
                <div className={`p-3 rounded-lg text-xs font-medium ${status.type === 'success' ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
                  {status.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full pl-9 p-3 text-xs bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-950 transition text-white placeholder-slate-500"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full pl-9 p-3 text-xs bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-950 transition text-white placeholder-slate-500"
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    className="w-full pl-9 p-3 text-xs bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-950 transition text-white placeholder-slate-500"
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-950 transition text-white placeholder-slate-500"
                  value={formData.subject} 
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <textarea 
                placeholder="Your Message..." 
                rows="4" 
                required 
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-950 transition text-white placeholder-slate-500"
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-xs uppercase tracking-wider"
              >
                <FaPaperPlane /> {loading ? 'Sending Request...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        {/* MAP EMBED SECTION */}
        <div className="mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-64 w-full">
            <iframe 
              title="Office Location"
              src="https://maps.google.com/maps?q=Moradabad%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 filter invert hue-rotate-180 contrast-125"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  );
}