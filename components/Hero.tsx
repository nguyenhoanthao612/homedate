'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Phone, Eye } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

export default function Hero() {
  const handleScrollToRooms = () => {
    const element = document.getElementById('phong');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${homedateData.brand.phone}`, '_blank');
  };

  return (
    <section
      id="trang-chu"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-950"
    >
      {/* Background Layer: Video or Image */}
      {homedateData.hero.isVideo ? (
        <div className="absolute inset-0 w-full h-full object-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src={homedateData.hero.videoUrl}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-65 scale-105"
          style={{ backgroundImage: `url('${homedateData.hero.imageUrl}')` }}
        />
      )}

      {/* Elegant dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/40 to-luxury-950/80" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold-400 font-semibold mb-4"
        >
          {homedateData.brand.slogan}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-8 tracking-tight"
        >
          {homedateData.brand.name}
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
            className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white font-display font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2.5 border border-gold-500 cursor-pointer rounded-full"
          >
            <Phone className="w-4 h-4" />
            {homedateData.hero.primaryCtaText}
          </button>
          
          <button
            onClick={handleScrollToRooms}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-display font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 border border-white/30 hover:border-white flex items-center justify-center gap-2.5 cursor-pointer rounded-full"
          >
            <Eye className="w-4 h-4" />
            {homedateData.hero.secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* Decorative Elegant bottom scroll guide */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.button
          onClick={handleScrollToRooms}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60 hover:text-gold-400 flex flex-col items-center gap-2 text-xs uppercase tracking-widest focus:outline-none cursor-pointer"
        >
          Cuộn để khám phá
          <ArrowDown className="w-4 h-4 text-gold-400" />
        </motion.button>
      </div>
    </section>
  );
}
