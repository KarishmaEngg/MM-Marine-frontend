import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections & Pages
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkflowAndStats from './components/WorkflowandStates';
import Fleet from './components/Fleet';
import ContactSection from './components/Contact';

import ServiceDetail from './pages/ServiceDetail';
import Career from './pages/Career';
import ApplyNow from './pages/ApplyNow';
import ContactPage from './pages/Contact';
import AboutDetails from './pages/AboutDetails';

// Portfolio Pages
import ResponsiveWebsite from './pages/portfolio/ResponsiveWebsite';
import Ecommerce from './pages/portfolio/Ecommerce';
import Wordpress from './pages/portfolio/Wordpress';

// Shop / Hosting Pages
import HostingShop from './pages/HostingShop';
import EmailMarketing from './pages/EmailMarketing';
import DemoPage from './pages/DemoPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkflowAndStats />
      <Fleet />
      
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutDetails />} />
            <Route path="/aboutdetails" element={<AboutDetails />} />

            {/* Portfolio Sub-Routes */}
            <Route path="/portfolio/responsive-website" element={<ResponsiveWebsite />} />
            <Route path="/portfolio/ecommerce" element={<Ecommerce />} />
            <Route path="/portfolio/wordpress" element={<Wordpress />} />

            {/* Shop / Hosting Sub-Routes */}
            <Route path="/shop/web-hosting" element={<HostingShop />} />
            <Route path="/shop/promotion-email" element={<EmailMarketing />} /> 
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}