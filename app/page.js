"use client";

import React from 'react';
import { CheckCircle, Settings, Users, Globe, HardHat, Building2, ClipboardCheck, Quote } from 'lucide-react';
import Hero from './components/Hero';
import Stat from './components/Stat';
import MissionCard from './components/MissionCard';
import ServiceCard from './components/ServiceCard';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A202C] overflow-x-hidden">
      <Hero />

      <section className="-mt-16 relative z-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
          <Stat icon={<CheckCircle />} title="IRC Registered" sub="Our firmly compliant" />
          <Stat icon={<Settings />} title="Modern Rigs" sub="Latest Technology" />
          <Stat icon={<Users />} title="Expert Engineers" sub="Industry Veterans" />
          <Stat icon={<Globe />} title="Nationwide" sub="Serving All States" />
        </div>

        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-12">Why Industry Leaders Trust Us</p>
      </section>

      <section className="py-24 px-6 text-center">
        <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase">Who We Are</span>
        <h2 className="text-3xl font-bold mt-3 mb-16 text-[#002B5B]">Driving Engineering Excellence</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <MissionCard icon={<Globe size={32} />} title="Our Vision" text="To be the foremost indigenous construction and engineering firm in Nigeria, recognized globally for innovation, structural integrity and sustainable development practices." />
          <MissionCard icon={<HardHat size={32} />} title="Our Mission" text="To deliver safe, reliable and cost-effective foundation and construction solutions through the use of modern technology and highly skilled workforce, ensuring best results for every project." />
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase">Our Expertise</span>
              <h2 className="text-3xl font-bold mt-3 text-[#002B5B] max-w-md">Comprehensive Construction Solutions</h2>
              <p className="text-gray-400 mt-4 text-sm">We offer end-to-end engineering services tailored to meet the unique challenges of the Nigerian terrain.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<Building2 />} title="Pile Foundation" text="Specialized drilling and installation using multi-rise building bridges, and structures on reclaimed lands..." />
            <ServiceCard icon={<HardHat />} title="Civil Construction" text="General building construction, from residential complexes to commercial centers executed with precision." />
            <ServiceCard icon={<ClipboardCheck />} title="Engineering Consultancy" text="Expert structural analysis, soil testing, interpretation, and project management services to ensure cost..." />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070" className="w-full aspect-square object-cover" alt="Soil Layers" />
          </div>

          <div>
            <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-600" /> Knowledge Hub</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-[#002B5B]">What is Foundation Piling?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Foundation piling involves driving structural columns deep into the ground bypassing weak soil layers and transfer loads to stronger bedrock. This technique is essential for the marshy and lagoonal land across Nigeria.</p>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">Our diagrams illustrate how different piles are used to distribute the load, preventing structural failure and ensuring longevity.</p>
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-bold text-sm hover:bg-blue-700 transition">Learn More →</button>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-28 px-6 relative overflow-hidden">
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

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5">
          <div className="bg-blue-700 text-white p-12 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-blue-100 mb-12">Ready to start your project? Contact our engineering team for a consultation today.</p>

            <div className="space-y-6">
              <div className="flex gap-4">15, Engineering Close, Victoria Island, Lagos</div>
              <div className="flex gap-4">+234 800 123 4567</div>
              <div className="flex gap-4">info@ola-oremi.com.ng</div>
            </div>

            <div className="flex gap-4 mt-12">
              <div className="w-6 h-6 rounded bg-white/20" />
              <div className="w-6 h-6 rounded bg-white/20" />
              <div className="w-6 h-6 rounded bg-white/20" />
            </div>
          </div>

          <div className="p-12 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
