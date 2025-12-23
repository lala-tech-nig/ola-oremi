"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Testimonial({ star = 5, text, name, role }) {
  return (
    <motion.div variants={fadeUp} className="bg-white p-10 rounded-xl shadow-2xl text-left">
      <div className="flex gap-1 mb-6">
        {[...Array(star)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
      <p className="italic text-gray-600 text-sm mb-8">"{text}"</p>
      <h4 className="font-bold text-sm text-[#002B5B]">{name}</h4>
      <p className="text-xs text-gray-400">{role}</p>
    </motion.div>
  );
}
