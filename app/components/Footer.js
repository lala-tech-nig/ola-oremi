"use client";

import { Settings, MapPin, Phone, Mail } from 'lucide-react';

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">{title}</h4>
    <ul className="space-y-4">
      {links.map(link => (
        <li key={link}>
          <a className="text-gray-400 text-sm hover:text-blue-600 transition">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-1 rounded"><Settings size={14} className="text-white" /></div>
            <span className="font-bold text-lg text-[#003366]">OLA OREMI</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">Building the future of Nigeria with strength, precision, and integrity.</p>
        </div>

        <FooterLinks title="Quick Links" links={[ 'Home','Services','Projects','About Us' ]} />
        <FooterLinks title="Services" links={[ 'Pile Drilling','Foundation Design','Soil Testing','Consultancy' ]} />

        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Contact</h4>
          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex gap-3"><MapPin size={16} /> Lagos, Nigeria</div>
            <div className="flex gap-3"><Phone size={16} /> +234 800 123 4567</div>
            <div className="flex gap-3"><Mail size={16} /> info@ola-oremi.com.ng</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row justify-between text-xs uppercase tracking-widest text-gray-400">
        <p>© 2024 OLA OREMI ENGINEERING. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="hover:text-blue-600">Privacy Policy</a>
          <a className="hover:text-blue-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
