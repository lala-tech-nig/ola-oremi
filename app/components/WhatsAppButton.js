"use client";

import { Phone } from 'lucide-react';

export default function WhatsAppButton({ phone = '2347033332733' }) {
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1ebe57]"
    >
      <Phone size={20} />
    </a>
  );
}
