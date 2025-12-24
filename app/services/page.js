import React from 'react';
import { Microscope, Hammer, LayoutGrid, Home, Handshake, Map as MapIcon, ArrowRight, Users, ShieldCheck, CheckCircle, Settings, Facebook, Linkedin } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A5568]">
      {/* --- Hero Section --- */}
      <section className="relative bg-[#001A3D] text-white py-32 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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

    </div>
  );
}

function CommitmentItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#0052CC]">{icon}</div>
      <h4 className="font-bold text-[#002B5B] text-base">{title}</h4>
      <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
}