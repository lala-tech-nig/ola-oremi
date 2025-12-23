"use client";

import Link from 'next/link';
import { Settings } from 'lucide-react';

export default function Header() {
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

        <Link href="/contact">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-blue-700 transition shadow-md">
            Request Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}
