import React from 'react';
import { 
  Search, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Settings 
} from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      category: 'PILING',
      title: 'Foundation Piling at Lekki Phase 1',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070',
    },
    {
      category: 'CONSTRUCTION',
      title: 'Commercial Complex Construction',
      location: 'Abuja, Nigeria',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    },
    {
      category: 'BOREHOLE',
      title: 'Industrial Borehole Drilling',
      location: 'Ogun, Nigeria',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070',
    },
    {
      category: 'DEVELOPMENT',
      title: 'Residential Estate Development',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    },
    {
      category: 'PILING',
      title: 'Bridge Piling Operations',
      location: 'Port Harcourt, Nigeria',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070',
    },
    {
      category: 'INFRASTRUCTURE',
      title: 'Road Construction Project',
      location: 'Kano, Nigeria',
      image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2070',
    },
  ];

  const categories = [
    'All Projects', 
    'Piling Operations', 
    'Civil Construction', 
    'Borehole Drilling', 
    'Property Development'
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A202C]">
      {/* --- Header/Nav --- */}
      <nav className="flex items-center justify-between px-8 md:px-20 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-[#0052CC] p-1 rounded">
            <Settings size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#003366]">OLA-OREMI</span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-semibold text-gray-500 uppercase tracking-widest">
          <a href="/" className="hover:text-[#0052CC]">Home</a>
          <a href="/about" className="hover:text-[#0052CC]">About Us</a>
          <a href="/services" className="hover:text-[#0052CC]">Services</a>
          <a href="/projects" className="text-[#0052CC]">Projects</a>
          <a href="/contact" className="hover:text-[#0052CC]">Contact</a>
        </div>
        <button className="bg-[#0052CC] text-white px-6 py-2.5 rounded-md text-[13px] font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[480px] md:h-[550px] mx-8 mt-6 rounded-[32px] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
            className="w-full h-full object-cover brightness-[0.35]" 
            alt="Engineering Excellence" 
          />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Engineering Excellence
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Showcasing our portfolio of infrastructure development and construction projects across Nigeria.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex bg-white rounded-xl p-2 shadow-2xl">
            <div className="flex items-center flex-1 px-4 text-gray-400">
              <Search size={20} className="mr-3" />
              <input 
                type="text" 
                placeholder="Search projects (e.g. Lekki, Borehole)..." 
                className="w-full py-3 outline-none text-[#1A202C] text-sm font-medium"
              />
            </div>
            <button className="bg-[#0052CC] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* --- Filter Tabs --- */}
      <section className="px-8 md:px-20 py-12">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition ${
                i === 0 
                ? 'bg-[#0052CC] text-white shadow-lg shadow-blue-100' 
                : 'bg-white text-gray-500 border border-gray-100 hover:border-blue-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- Projects Grid --- */}
      <section className="px-8 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-50">
              <div className="h-[240px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#002B5B] mt-2 mb-4 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
                  <MapPin size={14} className="text-blue-500" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center items-center gap-3 mt-16">
          <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-blue-600 transition">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#0052CC] text-white font-bold text-sm shadow-lg shadow-blue-100">1</button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-400 font-bold text-sm hover:text-blue-600 transition">2</button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-400 font-bold text-sm hover:text-blue-600 transition">3</button>
          <span className="text-gray-400 px-2">...</span>
          <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-blue-600 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-[#0A1D37] py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
           <Settings size={400} className="text-blue-400 rotate-12" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
            <Settings size={32} className="text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your next project?</h2>
          <p className="text-blue-100/70 text-lg mb-12 font-light">
            Our team of engineers is ready to deliver excellence on your next construction or drilling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0052CC] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
              Get a Quote
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-white/5 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white py-12 px-8 border-t border-gray-100 text-center">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          © 2024 OLA-OREMI NIGERIA LIMITED. All rights reserved.
        </p>
      </footer>
    </div>
  );
}