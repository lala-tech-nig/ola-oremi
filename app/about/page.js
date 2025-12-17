import React from 'react';
import { 
  ShieldCheck, 
  Flag, 
  Wrench, 
  Clock, 
  Download, 
  ChevronRight, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- Nav Bar --- */}
      <nav className="flex items-center justify-between px-12 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          {/* <div className="bg-blue-600 p-1 rounded">
            <Settings size={18} className="text-white" />
          </div> */}
          <span className="font-bold text-xl tracking-tight text-[#003366]">OLA OREMI</span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/services" className="hover:text-blue-600 transition">Services</a>
          <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
        <button className="bg-[#0052CC] text-white px-6 py-2.5 rounded text-[13px] font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200">
          Request Quote
        </button>
      </nav>

      {/* --- Breadcrumb & Header --- */}
      <header className="px-8 md:px-20 py-12 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <span>Home</span> <ChevronRight size={12} /> <span className="text-gray-600">About Us</span>
        </nav>
        <h1 className="text-5xl font-bold text-[#0A1D37] mb-4">About Us</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          Building the Future of Nigeria with integrity, innovation, and engineering precision.
        </p>
      </header>

      {/* --- Company Overview Section --- */}
      <section className="px-8 md:px-20 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80" 
            alt="Engineers on site" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block uppercase tracking-widest">On Site</span>
            <p className="text-white font-bold text-lg italic">Precision Piling & Foundation Works</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A1D37] mb-6">Company Overview</h2>
          <div className="space-y-6 text-sm leading-relaxed text-gray-600">
            <p>
              <span className="font-bold text-blue-700">OLA-OREMI NIGERIA LIMITED</span> is a premier indigenous construction firm dedicated to transforming the Nigerian landscape. We combine deep local expertise with global technology standards to deliver world-class infrastructure projects.
            </p>
            <p>
              With a focus on civil engineering, piling, and property development, we have established a reputation for reliability. Our approach is simple: safety first, quality always, and timely delivery on every project.
            </p>
            <p>
              Registered under <span className="font-bold">RC NO: 8032136</span>, we are fully compliant with all regulatory standards and pride ourselves on being a 100% Nigerian-owned entity contributing to national development.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <button className="bg-[#1E56C8] text-white px-8 py-3 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition">
              View Our History <ChevronRight size={16} />
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition">
              Download Profile <Download size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- At a Glance Section --- */}
      <section className="px-8 md:px-20 py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="text-3xl font-bold text-[#0A1D37] mt-2 mb-12">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlanceCard icon={<ShieldCheck className="text-blue-600" />} label="Registration" value="RC: 8032136" />
            <GlanceCard icon={<Flag className="text-blue-600" />} label="Ownership" value="100% Nigerian" />
            <GlanceCard icon={<Wrench className="text-blue-600" />} label="Equipment" value="Local & Imported" />
            <GlanceCard icon={<Clock className="text-blue-600" />} label="Experience" value="15+ Years" />
          </div>
        </div>
      </section>

      {/* --- Leadership Quote Section --- */}
      <section className="px-8 md:px-20 py-24">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
          <div className="flex-shrink-0 text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-8 border-gray-50 mx-auto">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#0A1D37]">Oke Ibrahim</h3>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">CEO / Managing Director</p>
            <div className="flex justify-center gap-4 text-gray-400">
              <Mail size={18} className="cursor-pointer hover:text-blue-600" />
              <Phone size={18} className="cursor-pointer hover:text-blue-600" />
            </div>
          </div>

          <div className="relative">
            <div className="text-blue-100 absolute -top-10 -left-6">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56889 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56889 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3L3.0166 3H10.0166V15C10.0166 18.3137 7.3303 21 4.0166 21H3.0166Z" /></svg>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-[#0A1D37] leading-relaxed mb-8 italic">
              "Our foundation is built on integrity and engineering precision. We don't just construct buildings; we build trust that stands the test of time."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-600"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Leadership Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="mx-8 md:mx-20 mb-20">
        <div className="max-w-7xl mx-auto bg-[#1E56C8] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(48)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
             </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
            <p className="text-blue-100 font-light">Let's discuss how we can bring your vision to life.</p>
          </div>
          <button className="relative z-10 bg-white text-[#1E56C8] px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-50 transition">
            Get a Quote <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white px-8 md:px-20 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-blue-600 font-bold text-lg tracking-tighter">OLA-OREMI</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Premier indigenous construction firm delivering world-class infrastructure with local expertise.
            </p>
          </div>
          
          <FooterColumn title="Company" links={['About Us', 'Our Team', 'Careers', 'News & Media']} />
          <FooterColumn title="Services" links={['Civil Engineering', 'Piling Works', 'Property Development', 'Consultancy']} />
          
          <div>
            <h4 className="font-bold text-sm mb-6 text-[#0A1D37]">Contact</h4>
            <div className="space-y-4 text-xs text-gray-500">
              <p className="flex items-center gap-3"><MapPinIcon /> Lagos, Nigeria</p>
              <p className="flex items-center gap-3"><Phone size={14} className="text-blue-600" /> +234 800 123 4567</p>
              <p className="flex items-center gap-3"><Mail size={14} className="text-blue-600" /> info@ola-oremi.com.ng</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <p>© 2024 OLA-OREMI NIGERIA LIMITED. RC: 8032136. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* --- Sub-Components --- */}

function GlanceCard({ icon, label, value }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-6">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[#0A1D37] font-bold text-lg">{value}</p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-sm mb-6 text-[#0A1D37]">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-xs text-gray-500 hover:text-blue-600 transition">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}