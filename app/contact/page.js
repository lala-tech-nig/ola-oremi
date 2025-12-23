import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import ContactMethodCard from '../components/ContactMethodCard';
import FormGroup from '../components/FormGroup';
import SocialIcon from '../components/SocialIcon';
import FooterNav from '../components/FooterNav';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans text-[#4A5568]">
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" className="w-full h-full object-cover brightness-[0.3]" alt="Contact Hero" />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-blue-100 text-lg font-light max-w-2xl mx-auto leading-relaxed">Reach out to our engineering team for consultations, project quotes, or general inquiries. We are ready to build your vision.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 md:px-20 py-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Contact Information</h2>
          <p className="text-gray-500 text-sm mb-12 leading-relaxed">Visit our head office in Ogun State or reach out directly via phone or email for immediate assistance.</p>

          <div className="space-y-6 mb-12">
            <ContactMethodCard icon={<MapPin size={20} />} title="Head Office" value="27, Ijoko Road, Nigeria" />
            <ContactMethodCard icon={<Phone size={20} />} title="Phone Support" value="0703 333 2733" action="CALL NOW" />
            <ContactMethodCard icon={<Mail size={20} />} title="Email Inquiries" value="info@olaoremi.ng" action="SEND EMAIL" />
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-[#002B5B] mb-6 text-sm uppercase tracking-widest"><Clock size={16} className="text-blue-600" /> Operating Hours</h4>
            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Monday - Friday</span><span className="text-[#002B5B]">8:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Saturday</span><span className="text-[#002B5B]">9:00 AM - 4:00 PM</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Sunday</span><span className="text-red-500 font-bold">Closed</span></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#002B5B] mb-2">Send us a Message</h3>
            <p className="text-gray-400 text-sm mb-10">Fill out the form below and we will get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-1 gap-6">
                <FormGroup label="Full Name" placeholder="Enter your full name" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Email Address" type="email" placeholder="you@company.com" />
                <FormGroup label="Phone Number" placeholder="0703 000 0000" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#002B5B] uppercase tracking-widest mb-3">Service Interest</label>
                <select className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-500 transition appearance-none">
                  <option>Select a service</option>
                  <option>Pile Foundation</option>
                  <option>Civil Construction</option>
                  <option>Property Sales</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#002B5B] uppercase tracking-widest mb-3">Project Details</label>
                <textarea rows={4} placeholder="Tell us about your project or inquiry..." className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-500 transition resize-none"></textarea>
              </div>
              <button className="w-full bg-[#0052CC] text-white py-5 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-blue-700 transition shadow-lg shadow-blue-100">Send Message <Send size={18} /></button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 pb-24">
        <h2 className="text-3xl font-bold text-[#002B5B] mb-10">Locate Us</h2>
        <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden bg-[#0A4A4A] border-8 border-white shadow-2xl">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Location Map" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white relative z-10"></div>
              <div className="mt-4 bg-white px-4 py-2 rounded-lg shadow-xl text-[10px] font-bold text-[#002B5B] uppercase tracking-widest border border-gray-100">Ola-Oremi HQ</div>
            </div>
          </div>
          <div className="absolute bottom-6 right-8">
            <a href="#" className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold text-blue-600 flex items-center gap-2 hover:bg-white transition shadow-lg">View on Google Maps <ExternalLink size={14} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
  );
} 