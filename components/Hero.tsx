'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Phone, Eye } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

interface HeroProps {
  selectedBranchId: string;
}

export default function Hero({ selectedBranchId }: HeroProps) {
  const handleScrollToRooms = () => {
    const element = document.getElementById('phong');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeBranch = homedateData.branches?.find(b => b.id === selectedBranchId) || {
    name: homedateData.brand.name,
    phone: homedateData.brand.phone,
  };

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${activeBranch.phone}`, '_blank');
  };


  return (
    <section
      id="trang-chu"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Layer: Video or Image */}
      {homedateData.hero.isVideo ? (
        <div className="absolute inset-0 w-full h-full object-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            src={homedateData.hero.videoUrl}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100 scale-105"
          style={{ backgroundImage: `url('${homedateData.hero.imageUrl}')` }}
        />
      )}

      {/* Elegant soft light overlay to fade into the next white section smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/15 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            borderColor: ["rgba(226, 232, 240, 0.8)", "rgba(212, 175, 55, 0.7)", "rgba(226, 232, 240, 0.8)"],
            boxShadow: [
              "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)",
              "0 10px 25px -5px rgba(212, 175, 55, 0.2), 0 8px 10px -6px rgba(212, 175, 55, 0.1)",
              "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)"
            ]
          }}
          transition={{ 
            opacity: { duration: 0.8, ease: 'easeOut' },
            y: { duration: 0.8, ease: 'easeOut' },
            borderColor: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            boxShadow: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          whileHover={{ scale: 1.05 }}
          className="text-xs md:text-sm tracking-widest text-gold-600 bg-white/90 backdrop-blur-md border px-5 py-2.5 rounded-full font-bold uppercase mb-6 cursor-default select-none transition-transform"
        >
          {homedateData.brand.slogan}
        </motion.span>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold leading-tight mb-8 tracking-tight select-none flex justify-center flex-wrap"
        >
          {homedateData.brand.name.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex mx-2 md:mx-4">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0, y: 50, filter: "blur(12px)", scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + (wordIdx * 4 + charIdx) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    color: "#d4af37",
                    transition: { duration: 0.2 } 
                  }}
                  className="inline-block bg-gradient-to-br from-slate-900 via-gold-600 to-slate-950 bg-clip-text text-transparent cursor-pointer transition-shadow"
                  style={{
                    textShadow: "0 0 30px rgba(212, 175, 55, 0.15)",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none"
        >
          <button
            onClick={handleBooking}
            className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white font-display font-semibold text-sm tracking-normal px-8 py-3.5 transition-all duration-300 shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2.5 border border-gold-500 cursor-pointer rounded-full"
          >
            <Phone className="w-4 h-4" />
            {homedateData.hero.primaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* Decorative Elegant bottom scroll guide */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.button
          onClick={handleScrollToRooms}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-800/80 hover:text-gold-600 flex flex-col items-center gap-2 text-xs tracking-normal focus:outline-none cursor-pointer font-semibold bg-white/70 backdrop-blur-sm px-3.5 py-2 rounded-full border border-slate-200/50 shadow-sm"
        >
          Cuộn để khám phá
          <ArrowDown className="w-4 h-4 text-gold-600" />
        </motion.button>
      </div>
    </section>
  );
}
