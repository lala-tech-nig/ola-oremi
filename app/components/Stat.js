"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Stat({ icon, title, sub }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center p-4">
      <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-3">{icon}</div>
      <p className="font-bold text-sm text-[#002B5B]">{title}</p>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{sub}</p>
    </motion.div>
  );
}
