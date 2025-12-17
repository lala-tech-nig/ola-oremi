import React from 'react';
import { 
  CheckCircle, 
  Settings, 
  Users, 
  Globe, 
  ArrowRight, 
  HardHat, 
  Building2, 
  ClipboardCheck,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Quote
} from 'lucide-react';

export default function ConstructionLanding() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A202C] selection:bg-blue-100">
      {/* --- Nav Bar --- */}
      <nav className="flex items-center justify-between px-12 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1 rounded">
            <Settings size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#003366]">OLA OREMI</span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/services" className="hover:text-blue-600 transition">Services</a>
          <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="/property" className="hover:text-blue-600 transition">Property Sales</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
        <button className="bg-[#0052CC] text-white px-6 py-2.5 rounded text-[13px] font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200">
          Request Quote
        </button>
      </nav>

      {/* --- Hero --- */}
      <section className="relative h-[720px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
            alt="Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60" />
        </div>
        <div className="relative z-10 max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.15] mb-8">
            Building Strong <br/> Foundations for Lasting <br/> Structures
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Expert pile drilling and property development services in Nigeria. We ensure stability and precision for every project using modern engineering techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0052CC] px-10 py-4 rounded font-bold text-sm hover:bg-gray-100 transition">
              Explore Our Services
            </button>
            <button className="border border-white/40 text-white px-10 py-4 rounded font-bold text-sm hover:bg-white/10 transition">
              Talk to an Engineer
            </button>
          </div>
        </div>
      </section>

      {/* --- Trust Stats --- */}
      <div className="max-w-6xl mx-auto -mt-16 relative z-20 px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <Stat icon={<CheckCircle className="text-blue-600"/>} title="IRC Registered" sub="Our firmly compliant" />
          <Stat icon={<Settings className="text-blue-600"/>} title="Modern Rigs" sub="Latest Technology" />
          <Stat icon={<Users className="text-blue-600"/>} title="Expert Engineers" sub="Industry Veterans" />
          <Stat icon={<Globe className="text-blue-600"/>} title="Nationwide" sub="Serving All States" />
        </div>
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-12">Why Industry Leaders Trust Us</p>
      </div>

      {/* --- Mission Section --- */}
      <section className="py-24 px-6 text-center">
        <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase">Who We Are</span>
        <h2 className="text-3xl font-bold mt-3 mb-16 text-[#002B5B]">Driving Engineering Excellence</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <MissionCard 
            icon={<Globe size={32} />} 
            title="Our Vision" 
            text="To be the foremost indigenous construction and engineering firm in Nigeria, recognized globally for innovation, structural integrity and sustainable development practices." 
          />
          <MissionCard 
            icon={<HardHat size={32} />} 
            title="Our Mission" 
            text="To deliver safe, reliable and cost-effective foundation and construction solutions through the use of modern technology and highly skilled workforce, ensuring best results for every project." 
          />
        </div>
      </section>

      {/* --- Services --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase">Our Expertise</span>
              <h2 className="text-3xl font-bold mt-3 text-[#002B5B] max-w-md leading-snug">Comprehensive Construction Solutions</h2>
              <p className="text-gray-400 mt-4 text-sm">We offer end-to-end engineering services tailored to meet the unique challenges of the Nigerian terrain.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider group">
              View All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<Building2 />} title="Pile Foundation" text="Specialized drilling and installation using multi-rise building bridges, and structures on reclaimed lands..." />
            <ServiceCard icon={<HardHat />} title="Civil Construction" text="General building construction, from residential complexes to commercial centers executed with precision." />
            <ServiceCard icon={<ClipboardCheck />} title="Engineering Consultancy" text="Expert structural analysis, soil testing, interpretation, and project management services to ensure cost..." />
          </div>
        </div>
      </section>

      {/* --- Knowledge Hub --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
             <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070" 
                  alt="Soil Layers" 
                  className="w-full aspect-square object-cover"
                />
             </div>
          </div>
          <div className="flex-1">
            <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600" /> Knowledge Hub
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-[#002B5B]">What is Foundation Piling?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Foundation piling involves driving structural columns deep into the ground bypassing weak soil layers and transfer loads to stronger bedrock. This technique is essential for the marshy and lagoonal land across Nigeria, particularly in swampy or reclaimed lands.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Our diagrams illustrate how different piles are used to distribute the load through process-built strength, and concrete-superior material selection, preventing structural failure and ensuring longevity.
            </p>
            <button className="bg-[#0052CC] text-white px-8 py-3.5 rounded font-bold text-sm">Learn More →</button>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="bg-[#0052CC] py-28 px-6 relative overflow-hidden">
        <Quote size={300} className="absolute -right-20 -top-20 text-blue-500/20 rotate-12" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Clients</h2>
          <p className="text-blue-100 text-sm mb-16 font-light">See what our partners and clients have to say about our commitment to quality and engineering approach.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial star={5} name="Engr. Adebayo" role="Project Manager, Build West" text="OLA OREMI's team displayed exceptional professionalism. Their piling work on our latest project was completed ahead of schedule and passed all integrity tests perfectly." />
            <Testimonial star={5} name="Sarah Danjuma" role="Architectural Developer" text="Reliable and technically sound. We needed a deep foundation for a marshy terrain site, and their soil test analysis and execution were flawless." />
            <Testimonial star={5} name="Chief Nnamdi" role="CEO, Prime Structures" text="A construction partner you can trust. Their transparency in pricing and modern equipment set them apart from others we have worked with in the past." />
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-blue-700 text-white p-12 md:w-2/5">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-blue-100 mb-12">Ready to start your project? Contact our engineering team for a consultation today.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-blue-300 shrink-0" />
                <p>Head Office: 15, Engineering Close, Victoria Island, Lagos, Nigeria.</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-blue-300 shrink-0" />
                <p>+234 800 123 4567<br/><span className="text-sm opacity-70">Mon - Fri: 8am - 5pm</span></p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-blue-300 shrink-0" />
                <p>info@ola-oremi.com.ng</p>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <Facebook className="cursor-pointer hover:text-blue-300" />
              <Twitter className="cursor-pointer hover:text-blue-300" />
              <Linkedin className="cursor-pointer hover:text-blue-300" />
            </div>
          </div>
          
          <div className="p-12 md:w-3/5">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Full Name</label>
                  <input type="text" className="w-full mt-1 border-gray-200 border rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Email Address</label>
                  <input type="email" className="w-full mt-1 border-gray-200 border rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Service Interested In</label>
                <select className="w-full mt-1 border-gray-200 border rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
                  <option>Pile Foundation Drilling</option>
                  <option>Civil Construction</option>
                  <option>Engineering Consultancy</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Message</label>
                <textarea rows="4" className="w-full mt-1 border-gray-200 border rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white px-12 pt-24 pb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1 rounded"><Settings size={14} className="text-white" /></div>
              <span className="font-bold text-lg tracking-tight text-[#003366]">OLA OREMI</span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[200px]">
              Building the future of Nigeria with strength, precision, and integrity. Your trusted partner in structural engineering.
            </p>
          </div>
          <FooterLinks title="Quick Links" links={['Home', 'Services', 'Projects', 'About Us']} />
          <FooterLinks title="Services" links={['Pile Drilling', 'Foundation Design', 'Soil Testing', 'Consultancy']} />
          <div className="col-span-1">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Contact</h4>
            <div className="space-y-4 text-gray-400 text-[13px]">
              <div className="flex gap-3"><MapPin size={16} className="text-blue-600 shrink-0"/> Lagos, Nigeria</div>
              <div className="flex gap-3"><Phone size={16} className="text-blue-600 shrink-0"/> +234 800 123 4567</div>
              <div className="flex gap-3"><Mail size={16} className="text-blue-600 shrink-0"/> info@ola-oremi.com.ng</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:row items-center justify-between text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          <p>© 2024 OLA OREMI ENGINEERING. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Component Library ---

const Stat = ({ icon, title, sub }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="mb-3 bg-blue-50 p-2 rounded-full">{icon}</div>
    <p className="font-extrabold text-[#002B5B] text-sm">{title}</p>
    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{sub}</p>
  </div>
);

const MissionCard = ({ icon, title, text }) => (
  <div className="bg-[#F8FAFC] p-12 rounded-2xl border border-gray-100 text-center">
    <div className="text-blue-600 mb-6 flex justify-center">{icon}</div>
    <h3 className="text-2xl font-bold mb-5 text-[#002B5B]">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-light">{text}</p>
  </div>
);

const ServiceCard = ({ icon, title, text }) => (
  <div className="p-10 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
    <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-8 shadow-lg shadow-blue-200">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold mb-4 text-[#002B5B]">{title}</h3>
    <p className="text-gray-500 text-[13px] leading-relaxed mb-8">{text}</p>
    <a href="#" className="text-blue-600 font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
      Learn More
    </a>
  </div>
);

const Testimonial = ({ star, text, name, role }) => (
  <div className="bg-white p-10 rounded-xl text-left shadow-2xl">
    <div className="flex gap-1 mb-6">
      {[...Array(star)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}
    </div>
    <p className="text-gray-600 text-[13px] leading-relaxed italic mb-8">"{text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-xs uppercase">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <h4 className="font-bold text-[#002B5B] text-[13px]">{name}</h4>
        <p className="text-gray-400 text-[11px] font-medium">{role}</p>
      </div>
    </div>
  </div>
);

const ContactInfo = ({ icon, label, detail, subDetail }) => (
  <div className="flex gap-5">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[14px] font-medium leading-relaxed">{detail}</p>
      {subDetail && <p className="text-[11px] text-blue-300/60 mt-1">{subDetail}</p>}
    </div>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div className="col-span-1">
    <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">{title}</h4>
    <ul className="space-y-4">
      {links.map(link => (
        <li key={link}><a href="#" className="text-gray-400 text-[13px] hover:text-blue-600 transition">{link}</a></li>
      ))}
    </ul>
  </div>
);