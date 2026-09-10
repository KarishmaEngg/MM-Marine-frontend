import React from 'react';
import { Link } from 'react-router-dom';

export default function Career() {
  const jobs = [
    { title: "MERN STACK DEVELOPER", exp: "1+ Yrs", positions: "2", date: "January 15 2026", desc: "Strong expertise in MongoDB, Express.js, React, Node.js, REST APIs, and building scalable full-stack applications." },
    { title: "FRONTEND DEVELOPER (NEXT.JS)", exp: "1+ Yrs", positions: "2", date: "February 01 2026", desc: "Proficiency in React, Next.js, Tailwind CSS, TypeScript, and delivering high-performance responsive UI/UX designs." },
    { title: "PYTHON & AI DEVELOPER", exp: "1-2 Yrs", positions: "1", date: "March 10 2026", desc: "Experience in Python, Django/Flask, machine learning model integration, data processing, and conversational AI tools." }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-16 font-sans">
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-12 text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Join Our Team</h1>
        <p className="text-slate-400 mt-2 text-sm">HOME &gt; CAREER</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center bg-cyan-500 py-3 rounded-lg text-slate-950 font-bold tracking-widest uppercase text-xs shadow-md">
          ◆ Current Job Openings ◆
        </div>

        {jobs.map((job, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-cyan-400">{job.title}</h2>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-300">No. of Position : {job.positions}</span>
                <Link to="/apply" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition">
                  APPLY
                </Link>
              </div>
            </div>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Min Exp. Required: {job.exp}</span>
              <span>{job.date}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{job.desc}</p>
          </div>
        ))}

        {/* Work Culture Section */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold">Our Work Culture</h3>
          <p className="text-xs text-cyan-400 italic">"Happy Employees make Happy Customers" is what we believe.</p>
          <p className="text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our employees are not just revenue earners for us, but they are our actual assets, on whom we rely to make our business a success. 
            So, if that appeals you to work in our organization, send us your resume at <span className="text-cyan-400">info@mmmarine.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}