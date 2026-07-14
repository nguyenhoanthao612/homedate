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
    <section id="danh-gia" className="py-24 md:py-32 bg-luxury-950 text-white overflow-hidden relative">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-luxury-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-bold block mb-3">
            Cảm nhận từ khách hàng
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <div className="h-[3px] bg-gold-400 w-20 mx-auto mt-6" />
        </div>

        {/* Carousel Slider Panel */}
        <div 
          className="relative max-w-4xl mx-auto bg-luxury-900 border border-luxury-800 p-8 sm:p-12 md:p-16 shadow-2xl rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Quote icon accent */}
          <div className="absolute top-6 left-6 text-luxury-800 pointer-events-none">
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
                          ? 'text-gold-400 fill-gold-400'
                          : 'text-luxury-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback Content */}
                <p className="text-base sm:text-lg md:text-xl text-luxury-200 leading-relaxed font-medium italic text-center sm:text-left">
                  &ldquo;{homedateData.reviews[activeIndex].content}&rdquo;
                </p>

                {/* User Bio */}
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-luxury-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={homedateData.reviews[activeIndex].avatar}
                    alt={homedateData.reviews[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-gold-400/30"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-display font-bold text-sm text-white tracking-wide">
                      {homedateData.reviews[activeIndex].name}
                    </p>
                    <p className="text-xs text-luxury-400 font-mono tracking-wider">
                      Đã lưu trú vào {homedateData.reviews[activeIndex].date}
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
              className="p-2.5 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-white transition-colors border border-luxury-800 rounded-full cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-white transition-colors border border-luxury-800 rounded-full cursor-pointer"
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
                idx === activeIndex ? 'w-8 bg-gold-400' : 'w-2 bg-luxury-800 hover:bg-luxury-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
