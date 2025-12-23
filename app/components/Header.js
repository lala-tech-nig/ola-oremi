"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-md">
            <Settings size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#003366]">OLA OREMI</span>
        </div>

        <div className="hidden md:flex gap-10 text-[13px] font-semibold uppercase tracking-wider text-gray-500">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/property">Property Sales</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-block">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-blue-700 transition shadow-md">Request Quote</button>
          </Link>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-md">
                <Settings size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#003366]">OLA OREMI</span>
            </div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-semibold">
            <Link href="/" onClick={() => setOpen(false)} className="text-[#002B5B]">Home</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="text-[#002B5B]">Services</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="text-[#002B5B]">Projects</Link>
            <Link href="/property" onClick={() => setOpen(false)} className="text-[#002B5B]">Property Sales</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-[#002B5B]">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-[#002B5B]">Contact</Link>
          </nav>

          <div className="mt-8">
            <Link href="/contact">
              <button onClick={() => setOpen(false)} className="w-full bg-blue-600 text-white px-5 py-3 rounded-md text-[15px] font-bold hover:bg-blue-700 transition">Request Quote</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
