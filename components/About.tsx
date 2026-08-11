'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { homedateData } from '@/data/homedate-config';
import { getIcon } from '@/lib/icons';

export default function About() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartY, setDragStartY] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === homedateData.about.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? homedateData.about.images.length - 1 : prev - 1));
  };

  return (
    <section id="gioi-thieu" className="py-24 md:py-32 bg-white text-luxury-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-full mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-wide text-gold-600 font-semibold block mb-3"
          >
            {homedateData.about.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-luxury-950 tracking-normal leading-tight"
          >
            {homedateData.about.title}
          </motion.h2>
          <div className="flex items-center gap-3 mt-6">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] w-28 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent origin-left"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 300, damping: 15 }}
              className="w-2 h-2 bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.85)]"
            />
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-luxury-700 leading-relaxed text-justify whitespace-pre-line"
            >
              {homedateData.about.description}
            </motion.p>
          </div>

          {/* Interactive Image Slideshow */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/3 w-full overflow-hidden shadow-2xl rounded-3xl cursor-ew-resize select-none touch-pan-y"
              onPointerDown={(e) => {
                if ((e.target as HTMLElement).closest('.progress-bar-container')) return;
                setDragStartX(e.clientX);
                setDragStartY(e.clientY);
              }}
              onPointerUp={(e) => {
                if (dragStartX === null || dragStartY === null) return;
                const diffX = e.clientX - dragStartX;
                const diffY = e.clientY - dragStartY;
                const rect = e.currentTarget.getBoundingClientRect();

                // If vertical movement is greater than horizontal movement, it is a scroll attempt, so ignore it
                if (Math.abs(diffY) > Math.abs(diffX)) {
                  setDragStartX(null);
                  setDragStartY(null);
                  return;
                }

                if (Math.abs(diffX) > 40) {
                  if (diffX > 0) {
                    prevImage();
                  } else {
                    nextImage();
                  }
                } else if (Math.abs(diffX) <= 10 && Math.abs(diffY) <= 10) {
                  // Click gesture
                  const clickX = e.clientX - rect.left;
                  if (clickX < rect.width / 2) {
                    prevImage();
                  } else {
                    nextImage();
                  }
                }
                setDragStartX(null);
                setDragStartY(null);
              }}
              onPointerCancel={() => {
                setDragStartX(null);
                setDragStartY(null);
              }}
            >
              {homedateData.about.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`Không gian homestay ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              ))}

              {/* Dot Indicators */}
              <div className="progress-bar-container absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                {homedateData.about.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImgIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentImgIndex 
                        ? 'w-5 bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.6)]' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="border-t border-slate-100 pt-20 mb-24">
          <div className="flex flex-col items-start gap-1 mb-12">
            <h3 className="font-display font-bold text-sm text-gold-600 uppercase tracking-widest">
              Vì sao chọn chúng tôi
            </h3>
            <div className="flex items-center gap-2.5 mt-2">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1.5px] w-20 bg-gradient-to-r from-gold-500 to-transparent origin-left"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 300, damping: 12 }}
                className="w-1.5 h-1.5 bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.85)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {homedateData.about.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-gradient-to-br from-gold-50/60 via-white to-slate-50/50 border border-gold-300/80 shadow-[0_10px_30px_-6px_rgba(37,99,235,0.12)] hover:shadow-[0_18px_45px_-8px_rgba(37,99,235,0.2)] rounded-3xl p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-default flex flex-col justify-between min-h-[220px]"
              >
                {/* Background ambient light flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Top left decorative line indicator */}
                <div className="absolute top-0 left-8 w-16 h-[3px] bg-gradient-to-r from-gold-500 via-gold-400 to-transparent transition-transform duration-500 origin-left" />

                <div className="relative space-y-4">
                  {/* Floating Giant Number */}
                  <span className="font-display font-black text-6xl lg:text-7xl text-gold-400/60 absolute -right-4 -top-6 select-none pointer-events-none transition-all duration-500">
                    0{idx + 1}
                  </span>

                  <div className="flex items-center space-x-3 pt-2">
                    {/* Glowing Accent Bullet */}
                    <div className="relative w-2.5 h-2.5 rounded-full bg-gold-500 transition-all duration-300">
                      <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping inline-flex" />
                    </div>
                    <h4 className="font-display font-bold text-lg lg:text-xl text-gold-600 tracking-tight transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed text-sm pl-5 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Amenities Grid */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-100/80 text-slate-800 p-10 md:p-16 shadow-[0_8px_32px_-6px_rgba(0,0,0,0.02)] rounded-3xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mb-12 relative z-10">
            <span className="text-xs md:text-sm tracking-widest text-gold-600 font-bold uppercase block mb-3">
              Tiện ích lưu trú
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-slate-900 mb-4">
              Sẵn sàng phục vụ trải nghiệm trọn vẹn nhất
            </h3>
            
            <div className="flex items-center gap-2 mt-2">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1.5px] w-24 bg-gradient-to-r from-gold-500 to-transparent origin-left"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 300, damping: 12 }}
                className="w-1.5 h-1.5 bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.85)]"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
            {homedateData.about.amenities.map((item, idx) => {
              const IconComp = getIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center p-5 md:p-6 bg-gradient-to-b from-white via-slate-50/30 to-gold-50/40 border border-gold-300/70 shadow-[0_6px_20px_-6px_rgba(37,99,235,0.1)] rounded-2xl relative overflow-hidden w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.25rem)] min-w-[150px] sm:min-w-[180px] max-w-[240px] cursor-default"
                >
                  {/* Tiny decorative luxury rivet at top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                  </div>

                  <div className="relative mb-4 flex items-center justify-center">
                    {/* Double Outer Rings for Realistic Craftsmanship */}
                    <div className="w-16 h-16 rounded-full border border-gold-200/70 flex items-center justify-center bg-gold-50/60 relative shadow-sm">
                      {/* Inner gold plate wrapper */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white border border-gold-400 flex items-center justify-center shadow-md overflow-hidden">
                        {item.icon.startsWith('http') || item.icon.startsWith('/') || item.icon.includes('.') ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="w-6 h-6 object-contain transition-all duration-300"
                          />
                        ) : (
                          <IconComp className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs md:text-sm font-bold tracking-wide text-gold-600 relative z-10">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
