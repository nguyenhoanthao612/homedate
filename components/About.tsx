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
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold block mb-3"
          >
            {homedateData.about.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-luxury-950 tracking-tight leading-tight"
          >
            {homedateData.about.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-gold-400 mt-6"
          />
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
              <h4 className="font-display font-bold text-luxury-500 uppercase tracking-widest text-xs mb-2">
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
        <div className="border-t border-luxury-200 pt-16 mb-24">
          <h3 className="font-display font-extrabold text-xs tracking-[0.3em] uppercase text-gold-600 mb-12">
            Vì sao chọn chúng tôi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {homedateData.about.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-display font-extrabold text-3xl text-gold-200 leading-none">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-lg text-luxury-950 tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-luxury-600 leading-relaxed text-sm pl-8">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Amenities Grid */}
        <div className="bg-luxury-950 text-white p-12 md:p-20 shadow-2xl rounded-3xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-bold block mb-2">
              Tiện ích lưu trú
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
              Sẵn sàng phục vụ trải nghiệm trọn vẹn nhất
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12">
            {homedateData.about.amenities.map((item, idx) => {
              const IconComp = getIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex flex-col items-start space-y-3 group"
                >
                  <div className="p-3 bg-luxury-900 border border-luxury-800 text-gold-400 group-hover:bg-gold-500 group-hover:text-luxury-950 transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-luxury-200 group-hover:text-white transition-colors">
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
