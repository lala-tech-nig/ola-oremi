import React from 'react';
import { 
  Microscope, 
  Hammer, 
  LayoutGrid, 
  Home, 
  Handshake, 
  Map as MapIcon, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  CheckCircle,
  Settings,
  Facebook,
  Linkedin
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A5568]">
      {/* --- Navigation Bar --- */}
      <nav className="flex items-center justify-between px-8 md:px-20 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-[#0052CC] p-1.5 rounded-md">
            <Settings size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#003366]">OLA-OREMI NIGERIA LTD</span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-semibold text-gray-500 uppercase tracking-widest">
          <a href="/" className="hover:text-[#0052CC] transition">Home</a>
          <a href="/services" className="text-[#0052CC]">Services</a>
          <a href="/projects" className="hover:text-[#0052CC] transition">Projects</a>
          <a href="/about" className="hover:text-[#0052CC] transition">About Us</a>
          <a href="/contact" className="hover:text-[#0052CC] transition">Contact</a>
        </div>
        <button className="bg-[#0052CC] text-white px-6 py-2.5 rounded-md text-[13px] font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100">
          Request Quote
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative bg-[#001A3D] text-white py-32 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Background" 
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block border border-blue-400/30 bg-blue-400/10 px-4 py-1 rounded text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1]">
            Building Tomorrow's <br /> Infrastructure
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Comprehensive construction, engineering, and property solutions delivered with precision across Nigeria.
          </p>
          <button className="bg-[#0052CC] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-blue-600 transition shadow-xl shadow-black/20">
            Start Your Project
          </button>
        </div>
      </section>

      {/* --- Main Services Grid --- */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Our Services</h2>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            From initial soil analysis to the final coat of paint, we provide end-to-end engineering and construction services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Microscope />} 
            title="Soil Testing" 
            desc="Geotechnical investigation and soil analysis to ensure safe, stable, and durable structural foundations for any terrain." 
          />
          <ServiceCard 
            icon={<Hammer />} 
            title="Foundation Piling" 
            desc="Expert pile driving and deep foundation solutions designed for stability in difficult terrains and swampy areas." 
          />
          <ServiceCard 
            icon={<LayoutGrid />} 
            title="Raft Foundation" 
            desc="High strength reinforced concrete slab foundations providing uniform stability on loose or shifting soil." 
          />
          <ServiceCard 
            icon={<Home />} 
            title="Building Construction" 
            desc="End-to-end execution of residential, commercial, and industrial buildings, ensuring quality from blueprint to handover." 
          />
          <ServiceCard 
            icon={<Handshake />} 
            title="Property Sales" 
            desc="Premium finished properties ready for residential living or commercial use, built to modern standards." 
          />
          <ServiceCard 
            icon={<MapIcon />} 
            title="Land Sales" 
            desc="Verified, litigation-free, and secure land acquisition services in prime locations across the country." 
          />
        </div>
      </section>

      {/* --- Commitment Section --- */}
      <section className="py-24 px-8 md:px-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Our Commitment</h2>
          <p className="text-gray-500 text-sm mb-16 max-w-2xl leading-relaxed">
            We deliver excellence by adhering to the highest standards of safety, quality control, and engineering expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <CommitmentItem 
              icon={<Users size={24} />} 
              title="Certified Engineers" 
              desc="Our team consists of COREN certified engineers ensuring structural integrity and professional oversight on every project." 
            />
            <CommitmentItem 
              icon={<ShieldCheck size={24} />} 
              title="Safety First" 
              desc="We prioritize strict safety protocols on every site to protect lives, property, and the environment." 
            />
            <CommitmentItem 
              icon={<CheckCircle size={24} />} 
              title="Quality Assurance" 
              desc="Rigorous quality control measures at every stage of development, using only premium materials." 
            />
          </div>
        </div>
      </section>

      {/* --- CTA / Ready to Start --- */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-12 text-center">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Ready to start your project?</h2>
          <p className="text-gray-500 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
            Contact our engineering team today for a consultation or request a detailed quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#0052CC] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-100">
              Request a Quote
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white px-8 md:px-20 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#0052CC] p-1 rounded-sm">
                <Settings size={14} className="text-white" />
              </div>
              <span className="font-bold text-lg text-[#003366]">OLA-OREMI NIGERIA LTD</span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Building the future with integrity, quality, and engineering excellence across Nigeria.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#002B5B]">Services</h4>
              <ul className="space-y-3 text-[13px] text-gray-500">
                <li className="hover:text-[#0052CC] cursor-pointer">Soil Testing</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Piling</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Construction</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Real Estate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 text-[#002B5B]">Company</h4>
              <ul className="space-y-3 text-[13px] text-gray-500">
                <li className="hover:text-[#0052CC] cursor-pointer">About Us</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Projects</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Careers</li>
                <li className="hover:text-[#0052CC] cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest">
            © 2023 OLA-OREMI NIGERIA LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Facebook size={16} className="text-gray-400 hover:text-[#0052CC] cursor-pointer" />
            <Linkedin size={16} className="text-gray-400 hover:text-[#0052CC] cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* --- Reusable Components --- */}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="p-10 bg-white border border-gray-100 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all group">
      <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg text-[#0052CC] mb-8 group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-[#002B5B] mb-4">{title}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-8">
        {desc}
      </p>
      <a href="#" className="inline-flex items-center gap-2 text-[#0052CC] font-bold text-[10px] uppercase tracking-[0.2em] group/link">
        Learn More 
        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

function CommitmentItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#0052CC]">
        {icon}
      </div>
      <h4 className="font-bold text-[#002B5B] text-base">{title}</h4>
      <p className="text-gray-500 text-[13px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}