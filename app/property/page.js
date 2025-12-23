import React from 'react';
import { Building2, Home, Map as MapIcon, Briefcase, Truck, Settings, MapPin, BedDouble, Bath, Square, FileText, Car, Cpu, Phone, Mail, Globe, Share2 } from 'lucide-react';
import FooterNav from '../components/FooterNav';

export default function PropertySalesPage() {
  const assets = [
    {
      type: 'Residential',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      title: '4-Bedroom Detached Duplex',
      location: 'Lekki Phase 1, Lagos',
      specs: [
        { icon: <BedDouble size={14} />, text: '4 Bed' },
        { icon: <Bath size={14} />, text: '5 Bath' },
        { icon: <Square size={14} />, text: '400 sqm' }
      ],
      price: '₦120,000,000'
    },
    {
      type: 'Land',
      badgeColor: 'bg-green-600',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070',
      title: 'Dry Land (600sqm)',
      location: 'Epe Axis, Lagos State',
      specs: [
        { icon: <Square size={14} />, text: '600 sqm' },
        { icon: <FileText size={14} />, text: 'C of O' }
      ],
      price: '₦5,000,000'
    },
    {
      type: 'Commercial',
      badgeColor: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      title: 'Office Complex Space',
      location: 'Ikeja, Lagos',
      specs: [
        { icon: <Square size={14} />, text: '1200 sqm' },
        { icon: <Cpu size={14} />, text: 'Elevator' },
        { icon: <Car size={14} />, text: 'Parking' }
      ],
      price: 'Contact for Price'
    },
    {
      type: 'Vehicle',
      badgeColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070',
      title: 'Toyota Hilux 2022',
      location: 'Fleet Sale',
      specs: [
        { icon: <MapPin size={14} />, text: '0 km' },
        { icon: <Settings size={14} />, text: 'Automatic' },
        { icon: <Briefcase size={14} />, text: 'Diesel' }
      ],
      price: '₦42,000,000'
    },
    {
      type: 'Residential',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1600607687940-4e524cb35a3a?q=80&w=2070',
      title: 'Luxury 5-Bed Terrace',
      location: 'Ikoyi, Lagos',
      specs: [
        { icon: <BedDouble size={14} />, text: '5 Bed' },
        { icon: <Bath size={14} />, text: '6 Bath' },
        { icon: <Square size={14} />, text: 'Pool' }
      ],
      price: '₦350,000,000'
    },
    {
      type: 'Heavy Duty',
      badgeColor: 'bg-orange-600',
      image: 'https://images.unsplash.com/photo-1579482451515-95079a838392?q=80&w=2070',
      title: 'CAT 320 Excavator',
      location: 'Pre-owned',
      specs: [
        { icon: <Settings size={14} />, text: '2019' },
        { icon: <Cpu size={14} />, text: '4000 hrs' }
      ],
      price: '₦85,000,000'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#4A5568]">
      {/* --- Hero Section --- */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070" className="w-full h-full object-cover brightness-[0.25]" alt="Property Hero" />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Premium Properties & Assets</h1>
          <p className="text-blue-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Invest in quality developments and verifiable assets by OLA-OREMI NIGERIA LIMITED. Secure your future with trusted engineering excellence.
          </p>
        </div>
      </section>

      {/* --- Filter Tabs --- */}
      <section className="px-8 md:px-20 py-12 border-b border-gray-50">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          <FilterTab icon={<Building2 size={18} />} label="All Properties" active />
          <FilterTab icon={<Home size={18} />} label="Residential" />
          <FilterTab icon={<MapIcon size={18} />} label="Land" />
          <FilterTab icon={<Briefcase size={18} />} label="Commercial" />
          <FilterTab icon={<Truck size={18} />} label="Vehicles" />
        </div>
      </section>

      {/* --- Property Grid --- */}
      <section className="px-8 md:px-20 py-20 bg-[#FBFBFC]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              {/* Image Container */}
              <div className="relative h-[240px]">
                <img src={asset.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={asset.title} />
                <span className={`absolute top-4 left-4 ${asset.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest`}>
                  {asset.type}
                </span>
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">{asset.title}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-2 mb-6">
                  <MapPin size={14} className="text-blue-600" /> {asset.location}
                </p>
                
                {/* Specs */}
                <div className="flex items-center gap-6 border-y border-gray-50 py-4 mb-8 overflow-x-auto">
                  {asset.specs.map((spec, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-gray-500 text-xs whitespace-nowrap">
                      <span className="text-blue-600">{spec.icon}</span> {spec.text}
                    </div>
                  ))}
                </div>
                
                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <span className="text-[#0052CC] font-bold text-lg">{asset.price}</span>
                  <button className="bg-[#0052CC] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Sales Help Section --- */}
      <section className="px-8 md:px-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto bg-[#F1F4F9] rounded-[32px] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Can't find what you are looking for?</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Contact our sales team directly for specialized requests and off-market listings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#002B5B] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-sm border border-gray-100">
              <Phone size={20} className="text-blue-600" /> Call Us
            </button>
            <button className="bg-[#0052CC] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg shadow-blue-100">
              <Mail size={20} /> Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

function FilterTab({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-2 py-3 px-2 border-b-2 cursor-pointer transition-all ${active ? 'border-blue-600 text-[#0052CC]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
      <span className={active ? 'text-blue-600' : 'text-gray-300'}>{icon}</span>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-[#002B5B] mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer">{link}</li>
        ))}
      </ul>
    </div>
  );
}