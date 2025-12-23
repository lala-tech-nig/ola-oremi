"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Simple typewriter hook
function useTypewriter(text = string, speed = 70) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function Hero() {
  const headline = useTypewriter(
    "Building Strong Foundations for Lasting Structures"
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Simple overlay for readability */}
        <div className="absolute inset-0 bg-blue-950/50" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 max-w-5xl px-6"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          {headline}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-blue-100 text-base md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Expert pile drilling and property development services in Nigeria.
          We ensure stability and precision for every project using modern
          engineering techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 px-10 py-4 rounded-md font-bold text-sm hover:bg-gray-100 transition">
            Explore Our Services
          </button>

          <button className="border border-white/40 text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-white/10 transition">
            Talk to an Engineer
          </button>
        </div>
      </motion.div>
    </section>
  );
}
