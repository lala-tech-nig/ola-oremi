"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function MissionCard({ icon, title, text }) {
  return (
    <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-12 rounded-2xl border hover:shadow-xl transition">
      <div className="text-blue-600 mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-5 text-[#002B5B]">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{text}</p>
    </motion.div>
  );
}
