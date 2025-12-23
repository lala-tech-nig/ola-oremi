"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ServiceCard({ icon, title, text }) {
  return (
    <motion.div variants={fadeUp} className="p-10 bg-[#F8FAFC] rounded-2xl hover:bg-white hover:shadow-2xl transition">
      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-8">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold mb-4 text-[#002B5B]">{title}</h3>
      <p className="text-gray-500 text-sm mb-8">{text}</p>
      <span className="text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">Learn More <ArrowRight size={12} /></span>
    </motion.div>
  );
}
