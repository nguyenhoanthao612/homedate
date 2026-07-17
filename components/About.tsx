'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';
import { getIcon } from '@/lib/icons';

export default function About() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

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
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-luxury-950 tracking-normal leading-tight whitespace-nowrap"
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
              className="text-base sm:text-lg text-luxury-700 leading-relaxed text-justify"
            >
              {homedateData.about.description}
            </motion.p>

            {/* Design Style Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-luxury-100 border border-luxury-200 rounded-3xl p-6 md:p-8 mt-8 shadow-sm"
            >
              <h4 className="font-display font-semibold text-luxury-500 tracking-normal text-sm mb-2">
                Phong cách thiết kế
              </h4>
              <p className="font-display font-bold text-lg text-gold-500 mb-2">
                {homedateData.about.designStyle.name}
              </p>
              <p className="text-sm text-luxury-600 leading-relaxed">
                {homedateData.about.designStyle.description}
              </p>
            </motion.div>
          </div>

          {/* Interactive Image Slideshow */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/3 w-full overflow-hidden shadow-2xl rounded-3xl"
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
                  />
                </div>
              ))}

              {/* Slider Arrows */}
              <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                <button
                  onClick={prevImage}
                  className="p-3 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-luxury-950 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-luxury-950 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Counter Indicator */}
              <div className="absolute top-4 left-4 z-20 bg-luxury-950/80 backdrop-blur-sm px-3.5 py-1.5 text-xs text-white tracking-widest font-mono">
                {currentImgIndex + 1} / {homedateData.about.images.length}
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
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-slate-50/50 to-white hover:from-white hover:to-slate-50 border border-slate-100/80 hover:border-gold-300/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_-8px_rgba(212,175,55,0.12)] rounded-3xl p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-default flex flex-col justify-between min-h-[220px]"
              >
                {/* Background ambient light flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-all duration-500 pointer-events-none" />

                {/* Top left decorative line indicator */}
                <div className="absolute top-0 left-8 w-12 h-[3px] bg-gradient-to-r from-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative space-y-4">
                  {/* Floating Giant Number */}
                  <span className="font-display font-black text-6xl lg:text-7xl text-slate-300 absolute -right-4 -top-6 select-none pointer-events-none transition-all duration-500 group-hover:text-gold-400/70 group-hover:scale-110 group-hover:-translate-y-1">
                    0{idx + 1}
                  </span>

                  <div className="flex items-center space-x-3 pt-2">
                    {/* Glowing Accent Bullet */}
                    <div className="relative w-2 h-2 rounded-full bg-gold-500 group-hover:scale-125 transition-all duration-300">
                      <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping group-hover:inline-flex hidden" />
                    </div>
                    <h4 className="font-display font-bold text-lg lg:text-xl text-slate-900 tracking-tight group-hover:text-gold-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 leading-relaxed text-sm pl-5 transition-colors duration-300">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {homedateData.about.amenities.map((item, idx) => {
              const IconComp = getIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover="hover"
                  className="flex flex-col items-center text-center p-6 bg-white border border-slate-100/80 rounded-2xl hover:border-gold-300/60 hover:shadow-[0_12px_30px_-8px_rgba(212,175,55,0.12)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Glass shine sweep effect */}
                  <motion.div
                    initial={{ x: '-150%', opacity: 0 }}
                    variants={{
                      hover: {
                        x: '200%',
                        opacity: [0, 0.4, 0.4, 0],
                        transition: { duration: 0.9, ease: "easeInOut" }
                      }
                    }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                  />

                  {/* Tiny decorative luxury rivet at top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/20 group-hover:bg-gold-500/60 transition-colors duration-300 shadow-[0_0_4px_rgba(212,175,55,0.2)]" />
                  </div>

                  <div className="relative mb-4 flex items-center justify-center">
                    {/* Double Outer Rings for Realistic Craftsmanship */}
                    <div className="w-16 h-16 rounded-full border border-slate-100/80 flex items-center justify-center bg-slate-50/50 group-hover:border-gold-200/50 group-hover:bg-gold-50/30 transition-all duration-500 relative">
                      {/* Inner gold plate wrapper */}
                      <div className="w-12 h-12 rounded-full bg-white border border-slate-200/60 group-hover:border-gold-400 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 text-gold-600 group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-6">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <span className="text-xs md:text-sm font-bold tracking-wide text-slate-700 group-hover:text-gold-600 transition-colors duration-300 relative z-10">
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
