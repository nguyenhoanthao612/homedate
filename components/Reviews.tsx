'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === homedateData.reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-scroll every 5 seconds
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === homedateData.reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? homedateData.reviews.length - 1 : prev - 1));
  };

  return (
    <section id="danh-gia" className="py-24 md:py-32 bg-white text-slate-800 overflow-hidden relative border-t border-slate-100">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-slate-100/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-full mx-auto mb-16 md:mb-24">
          <span className="text-sm tracking-wide text-gold-600 font-bold block mb-3">
            Cảm nhận từ khách hàng
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-normal whitespace-nowrap">
            Khách hàng nói gì về chúng tôi
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] w-16 bg-gradient-to-l from-gold-500 to-transparent origin-right"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
              className="w-2.5 h-2.5 bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.85)]"
            />
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] w-16 bg-gradient-to-r from-gold-500 to-transparent origin-left"
            />
          </div>
        </div>

        {/* Carousel Slider Panel */}
        <div 
          className="relative max-w-4xl mx-auto bg-slate-50 border border-slate-200 p-8 sm:p-12 md:p-16 shadow-xl rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Quote icon accent */}
          <div className="absolute top-6 left-6 text-slate-200 pointer-events-none">
            <Quote className="w-16 h-16 stroke-[1px] rotate-180 opacity-50" />
          </div>

          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex space-x-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < homedateData.reviews[activeIndex].rating
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback Content */}
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic text-center sm:text-left">
                  &ldquo;{homedateData.reviews[activeIndex].content}&rdquo;
                </p>

                {/* User Bio */}
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={homedateData.reviews[activeIndex].avatar}
                    alt={homedateData.reviews[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-gold-300"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-display font-bold text-sm text-slate-900 tracking-wide">
                      {homedateData.reviews[activeIndex].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigations buttons */}
          <div className="absolute bottom-6 right-6 flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2.5 bg-white hover:bg-gold-500 text-slate-500 hover:text-white transition-colors border border-slate-200 rounded-full cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-white hover:bg-gold-500 text-slate-500 hover:text-white transition-colors border border-slate-200 rounded-full cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bullet Indicators */}
        <div className="flex justify-center space-x-2.5 mt-8">
          {homedateData.reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                idx === activeIndex ? 'w-8 bg-gold-500' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
