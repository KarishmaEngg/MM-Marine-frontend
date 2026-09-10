import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Cpu, Monitor } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();

  // Unique data for every single service option with specific image URLs replacing the icons
  const serviceData = {
    'web-graphic-designing': {
      title: "Website & Graphic Designing",
      category: "Creative & Development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      desc: "Transform your brand identity with stunning UI/UX layouts, responsive website architectures, and high-impact visual graphics tailored for maximum user engagement.",
      features: [
        "Custom UI/UX Wireframing & Prototyping",
        "Fully Responsive Mobile-First Layouts",
        "Brand Identity & Logo Design Kits",
        "Vector Graphics & Marketing Banners",
        "High-Speed Optimized Frontend Code",
        "Cross-Browser Compatibility Testing"
      ]
    },
    'mobile-apps-development': {
      title: "Mobile Apps Development",
      category: "Engineering & Apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      desc: "Build high-performance native and cross-platform mobile applications for Android and iOS engineered with robust backend synchronization and sleek interfaces.",
      features: [
        "React Native & Flutter Cross-Platform Apps",
        "Native Android (Java/Kotlin) Integration",
        "Secure RESTful API & Database Linking",
        "Real-Time Push Notifications",
        "App Store & Google Play Deployment Support",
        "Optimized Battery & Memory Performance"
      ]
    },
    'ecommerce-development': {
      title: "Ecommerce Development",
      category: "Retail Tech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      desc: "Launch a feature-rich, conversion-optimized online store with secure payment gateways, inventory management, and intuitive cart workflows.",
      features: [
        "Secure Payment Gateway Integration (Stripe/Razorpay)",
        "Advanced Product & Inventory Management",
        "Customer Account & Order Tracking Dashboards",
        "Discount Coupon & Promo Code Engines",
        "SEO-Optimized Product Catalog Structure",
        "High-Security SSL & Data Encryption"
      ]
    },
    'digital-marketing': {
      title: "Digital Marketing",
      category: "Growth & Strategy",
      image: "https://i.pinimg.com/736x/6a/ea/ce/6aeace85ed4081878b7dc79014b87a55.jpg",
      desc: "Scale your digital presence, capture targeted leads, and maximize your return on ad spend (ROAS) through comprehensive multi-channel marketing campaigns.",
      features: [
        "Comprehensive Multi-Channel Strategy",
        "Targeted Audience Persona Research",
        "Conversion Rate Optimization (CRO)",
        "Lead Generation & Funnel Building",
        "Monthly Performance & Analytics Reports",
        "Brand Awareness Campaigns"
      ]
    },
    'google-adwords': {
      title: "Google Adwords (PPC)",
      category: "Paid Advertising",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      desc: "Drive instant, high-intent traffic to your website through precision-targeted Google Search, Display, and Performance Max advertising campaigns.",
      features: [
        "High-Intent Keyword Research & Bidding",
        "Compelling Ad Copywriting & A/B Testing",
        "Landing Page Performance Tracking",
        "Display & Remarketing Banner Ads",
        "Budget Control & ROAS Maximization",
        "Detailed Conversion Tracking Setup"
      ]
    },
    'email-marketing': {
      title: "Email Marketing",
      category: "Direct Outreach",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      desc: "Nurture customer relationships, automate promotional newsletters, and drive repeat sales through personalized and high-converting email sequences.",
      features: [
        "Automated Drip & Welcome Sequences",
        "Custom HTML Newsletter Templates",
        "Subscriber Segmentation & Tagging",
        "A/B Testing for Open & Click Rates",
        "Spam Score & Deliverability Optimization",
        "Detailed Engagement Analytics"
      ]
    },
    'seo': {
      title: "Search Engine Optimization (SEO)",
      category: "Organic Growth",
      image: "https://i.pinimg.com/736x/8b/fa/5c/8bfa5ccc08134bdea5b0f00742ea3bc0.jpg",
      desc: "Rank higher on Google search results, build organic authority, and drive long-term sustainable traffic with advanced on-page and off-page SEO strategies.",
      features: [
        "In-Depth Technical SEO Audits",
        "Strategic Keyword Ranking Optimization",
        "High-Quality Authority Link Building",
        "On-Page Meta & Content Enhancement",
        "Local SEO & Google Business Profile Setup",
        "Core Web Vitals Speed Optimization"
      ]
    },
    'social-media-marketing': {
      title: "Social Media Marketing",
      category: "Social Reach",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
      desc: "Engage your audience across Instagram, Facebook, LinkedIn, and Twitter with creative campaigns, paid social ads, and consistent community building.",
      features: [
        "Paid Social Ad Campaigns (Meta/LinkedIn)",
        "Community Management & Interaction",
        "Influencer Outreach & Partnerships",
        "Viral Campaign Conceptualization",
        "Audience Growth Strategy",
        "Detailed ROI & Engagement Tracking"
      ]
    },
    'smo': {
      title: "Social Media Optimization (SMO)",
      category: "Profile Tuning",
      image: "https://i.pinimg.com/736x/72/91/76/729176467bece09b83d62b41027b539e.jpg",
      desc: "Optimize your social media profiles to enhance brand visibility, improve cross-channel linkage, and foster organic community engagement.",
      features: [
        "Profile Bio & Visual Branding Tune-up",
        "Consistent Posting Schedule & Calendar",
        "Hashtag & Keyword Research for Social",
        "Cross-Platform Integration with Website",
        "Audience Sentiment Analysis",
        "Story & Reel Content Structuring"
      ]
    },
    'smart-board-solution': {
      title: "Smart Board Solution",
      category: "Hardware & Tech",
      image: "https://i.pinimg.com/1200x/20/ef/63/20ef630addbca87e1925f48c141caa4a.jpg",
      desc: "Empower modern corporate boardrooms and digital classrooms with state-of-the-art interactive smart boards and touch-enabled presentation systems.",
      features: [
        "Ultra HD Touch Display Panels",
        "Interactive Whiteboard & Collaboration Software",
        "Wireless Screen Mirroring & Casting",
        "Multi-User Pen & Touch Support",
        "Enterprise Grade Security & OS Integration",
        "On-Site Installation & Technical Training"
      ]
    },
    'software-development': {
      title: "Software Development",
      category: "Enterprise Tech",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      desc: "Develop robust, scalable, and secure enterprise-grade custom software solutions designed to automate complex business workflows and operations.",
      features: [
        "Custom Enterprise Architecture Design",
        "Scalable MERN/Full-Stack Backend Systems",
        "Cloud Deployment (AWS, Vercel, Render)",
        "Database Design & Secure Migration",
        "Rigorous QA & Automated Testing",
        "Ongoing Maintenance & API Versioning"
      ]
    }
  };

  // Default fallback if slug doesn't match
  const currentService = serviceData[id] || {
    title: "Professional Service",
    category: "Enterprise Solution",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    desc: "Explore our specialized industrial solutions designed to elevate your business performance and technological edge.",
    features: ["Customized Approach", "Dedicated Expert Team", "24/7 Support", "Secure Architecture"]
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen pt-28 pb-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Section with Slide Animations */}
        <section className="bg-gradient-to-r from-orange-500/10 via-slate-900 to-cyan-500/10 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Left Content Area (Slides in from Left) */}
          <div className="space-y-4 max-w-xl animate-slide-left">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-orange-500/30">
              {currentService.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{currentService.title}</h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {currentService.desc}
            </p>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase px-6 py-3 rounded-xl transition shadow-lg shadow-orange-500/25">
                Inquire About This Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Area replacing Icon (Slides in from Right) */}
          <div className="w-full md:w-72 h-70 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group animate-slide-right shrink-0">
            <img 
              src={currentService.image} 
              alt={currentService.title} 
              className="w-full h-full  transform group-hover:scale-110 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Unique Feature Highlights List */}
        <section className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-xl">
          <h3 className="text-xl font-bold text-slate-200">What's Included in {currentService.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {currentService.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-slate-300 shadow-sm hover:border-[#FF6633]/50 transition-colors">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" /> 
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CUSTOM ANIMATION STYLES */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(50px); }
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