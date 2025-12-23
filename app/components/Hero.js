"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" className="w-full h-full object-cover" alt="Construction" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60" />
      </div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-5xl px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          Building Strong <br /> Foundations for Lasting <br /> Structures
        </h1>

        <p className="text-blue-100 text-base md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Expert pile drilling and property development services in Nigeria. We ensure stability and precision for every project using modern engineering techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 px-10 py-4 rounded-md font-bold text-sm hover:bg-gray-100 transition">Explore Our Services</button>
          <button className="border border-white/40 text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-white/10 transition">Talk to an Engineer</button>
        </div>
      </motion.div>
    </section>
  );
}
