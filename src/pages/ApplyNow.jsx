import React, { useState } from 'react';

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', qualification: '', gender: 'Male',
    day: '', month: '', year: '', city: '', coverLetter: '', cv: null
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append('dob', `${formData.day}-${formData.month}-${formData.year}`);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/apply`, {
        method: 'POST',
        body: data,
      });
      const res = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', text: res.message || 'Application submitted successfully!' });
      } else {
        setStatus({ type: 'error', text: res.message || 'Failed to submit application.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Server error, try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-16 font-sans px-4">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center mb-2 text-cyan-400">Job Application Form</h1>
        <p className="text-center text-xs text-slate-400 mb-6">Fill out the form below to apply for your desired role.</p>
        
        {status.text && (
          <div className={`p-3 rounded-lg text-xs font-medium mb-4 text-center ${status.type === 'success' ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-red-950 text-red-400 border border-red-800'}`}>
            {status.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-slate-400 mb-1">Full Name *</label>
            <input type="text" name="name" required placeholder="Enter your full name" onChange={handleChange} value={formData.name} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Email *</label>
              <input type="email" name="email" required placeholder="name@example.com" onChange={handleChange} value={formData.email} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Mobile *</label>
              <input type="text" name="mobile" required placeholder="+91 XXXXX XXXXX" onChange={handleChange} value={formData.mobile} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Qualification *</label>
              <select name="qualification" required onChange={handleChange} value={formData.qualification} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <option value="">---Select Qualification---</option>
                <option value="B.Tech">B.Tech / B.E.</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="MBA">MBA</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 mb-1">City *</label>
              <input type="text" name="city" required placeholder="Current City" onChange={handleChange} value={formData.city} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Gender</label>
              <div className="flex gap-6 mt-2.5 text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="Male" defaultChecked onChange={handleChange} className="accent-cyan-400" /> Male</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="Female" onChange={handleChange} className="accent-cyan-400" /> Female</label>
              </div>
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Date of Birth</label>
              <div className="flex gap-2">
                <input type="text" name="day" placeholder="DD" onChange={handleChange} value={formData.day} className="w-1/3 bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white text-xs text-center focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <input type="text" name="month" placeholder="MM" onChange={handleChange} value={formData.month} className="w-1/3 bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white text-xs text-center focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <input type="text" name="year" placeholder="YYYY" onChange={handleChange} value={formData.year} className="w-1/3 bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white text-xs text-center focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Upload CV * (PDF, DOC, DOCX Only)</label>
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={handleChange} className="w-full text-xs text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer bg-slate-950 border border-slate-800 rounded-lg" />
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Cover Letter *</label>
            <textarea name="coverLetter" rows="4" required placeholder="Briefly write about why you are a good fit..." onChange={handleChange} value={formData.coverLetter} className="w-full bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-lg transition tracking-wider uppercase shadow-md cursor-pointer disabled:opacity-50 text-xs"
          >
            {loading ? 'Submitting Application...' : 'Apply Now'}
          </button>
        </form>
      </div>
    </div>
  );
}