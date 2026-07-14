'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('trang-chu');

  // Listen to scroll to update background and active sections
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['trang-chu', 'gioi-thieu', 'phong', 'danh-gia'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ' },
    { id: 'gioi-thieu', label: 'Giới thiệu' },
    { id: 'phong', label: 'Phòng' },
    { id: 'danh-gia', label: 'Đánh giá' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    // Open Messenger or phone for booking
    window.open(homedateData.brand.zalo || `tel:${homedateData.brand.phone}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-luxury-950/95 backdrop-blur-md shadow-lg border-b border-luxury-800 py-4'
          : 'bg-gradient-to-b from-luxury-950/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleScrollTo('trang-chu')}
          className="flex items-center space-x-2 focus:outline-none cursor-pointer"
        >
          {homedateData.brand.logoImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={homedateData.brand.logoImage}
              alt={homedateData.brand.name}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-gold-400">
              {homedateData.brand.logoText}
            </span>
          )}
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 focus:outline-none relative py-1 cursor-pointer font-medium ${
                activeSection === item.id
                  ? 'text-gold-400'
                  : 'text-luxury-200 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-400"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={handleBooking}
            className="bg-gold-500 hover:bg-gold-600 text-white font-display font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-gold-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            Đặt phòng
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gold-400 focus:outline-none p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-luxury-950 border-b border-luxury-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left text-base tracking-widest uppercase py-2 border-b border-luxury-900 focus:outline-none cursor-pointer ${
                    activeSection === item.id ? 'text-gold-400 font-bold' : 'text-luxury-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBooking}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-display font-semibold text-sm tracking-widest uppercase py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/20"
              >
                <Phone className="w-4 h-4" />
                Đặt phòng
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
