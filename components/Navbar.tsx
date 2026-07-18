'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

const formatBranchName = (name: string) => {
  let cleaned = name.replace(/Alma Home - /g, '');
  cleaned = cleaned.replace(/\s*\(.*?\)\s*/g, '').trim();
  return cleaned;
};

const branchThemes: Record<string, {
  accentClass: string;
  textClass: string;
  hoverBgClass: string;
  activeBgClass: string;
  borderClass: string;
  pingClass: string;
  bulletClass: string;
  glowClass: string;
  badgeBorderClass: string;
  shadowColor: string;
  rgbColor: string;
}> = {
  'branch-alma-1': {
    accentClass: 'text-sky-600 group-hover:text-sky-500',
    textClass: 'text-sky-600',
    hoverBgClass: 'hover:bg-sky-50/60 hover:text-sky-600',
    activeBgClass: 'bg-sky-50/70 border-sky-100 text-sky-600',
    borderClass: 'border-sky-200/50',
    pingClass: 'bg-sky-400',
    bulletClass: 'bg-sky-500',
    glowClass: 'shadow-[0_0_12px_rgba(14,165,233,0.4)]',
    badgeBorderClass: 'border-sky-200',
    shadowColor: 'rgba(14,165,233, 0.4)',
    rgbColor: '14, 165, 233'
  },
  'branch-alma-2': {
    accentClass: 'text-emerald-600 group-hover:text-emerald-500',
    textClass: 'text-emerald-600',
    hoverBgClass: 'hover:bg-emerald-50/60 hover:text-emerald-600',
    activeBgClass: 'bg-emerald-50/70 border-emerald-100 text-emerald-600',
    borderClass: 'border-emerald-200/50',
    pingClass: 'bg-emerald-400',
    bulletClass: 'bg-emerald-500',
    glowClass: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]',
    badgeBorderClass: 'border-emerald-200',
    shadowColor: 'rgba(16,185,129, 0.4)',
    rgbColor: '16, 185, 129'
  },
  'branch-alma-3': {
    accentClass: 'text-rose-600 group-hover:text-rose-500',
    textClass: 'text-rose-600',
    hoverBgClass: 'hover:bg-rose-50/60 hover:text-rose-600',
    activeBgClass: 'bg-rose-50/70 border-rose-100 text-rose-600',
    borderClass: 'border-rose-200/50',
    pingClass: 'bg-rose-400',
    bulletClass: 'bg-rose-500',
    glowClass: 'shadow-[0_0_12px_rgba(244,63,94,0.4)]',
    badgeBorderClass: 'border-rose-200',
    shadowColor: 'rgba(244,63,94, 0.4)',
    rgbColor: '244, 63, 94'
  }
};

const defaultTheme = {
  accentClass: 'text-gold-600 group-hover:text-gold-500',
  textClass: 'text-gold-600',
  hoverBgClass: 'hover:bg-amber-50/40 hover:text-gold-600',
  activeBgClass: 'bg-amber-50/50 border-amber-100 text-gold-600',
  borderClass: 'border-gold-200/30',
  pingClass: 'bg-gold-400',
  bulletClass: 'bg-gold-500',
  glowClass: 'shadow-[0_0_12px_rgba(212,175,55,0.4)]',
  badgeBorderClass: 'border-gold-200',
  shadowColor: 'rgba(212,175,55, 0.4)',
  rgbColor: '212, 175, 55'
};

interface NavbarProps {
  selectedBranchId: string;
  setSelectedBranchId: (id: string) => void;
}

export default function Navbar({ selectedBranchId, setSelectedBranchId }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('trang-chu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const activeBranch = homedateData.branches?.find(b => b.id === selectedBranchId) || {
    name: homedateData.brand.name,
    address: homedateData.brand.address,
    phone: homedateData.brand.phone,
    phoneDisplay: homedateData.brand.phoneDisplay,
  };

  const currentTheme = branchThemes[selectedBranchId] || defaultTheme;

  const handleBooking = () => {
    // Open Zalo or phone for booking corresponding to selected branch
    window.open(homedateData.brand.zalo || `tel:${activeBranch.phone}`, '_blank');
  };


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/40 py-1.5'
          : 'bg-white/40 backdrop-blur-md border-b border-transparent py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.button
          onClick={() => handleScrollTo('trang-chu')}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center justify-center focus:outline-none cursor-pointer relative group"
        >
          {homedateData.brand.logoImage ? (
            <div className={`rounded-full bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_15px_rgba(212,175,55,0.15)] flex items-center justify-center transition-all duration-500 overflow-hidden ${
              isScrolled ? 'h-12 w-12 md:h-14 md:w-14' : 'h-18 w-18 md:h-22 md:w-22'
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={homedateData.brand.logoImage}
                alt={homedateData.brand.name}
                className="h-[75%] w-[75%] object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-gold-600">
              {homedateData.brand.logoText}
            </span>
          )}
        </motion.button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`text-base tracking-normal transition-all duration-500 focus:outline-none relative py-1 cursor-pointer font-semibold ${
                activeSection === item.id
                  ? 'text-gold-600'
                  : 'text-slate-600 hover:text-gold-600'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-600"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Right Actions (Branch Selector Dropdown + Book Button) */}
        <div className="hidden md:flex items-center space-x-4">
          {homedateData.branches && homedateData.branches.length > 0 && (
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                animate={{
                  boxShadow: [
                    `0 0 0 0 rgba(${currentTheme.rgbColor}, 0.1)`,
                    `0 0 18px 5px rgba(${currentTheme.rgbColor}, 0.45)`,
                    `0 0 0 0 rgba(${currentTheme.rgbColor}, 0.1)`
                  ],
                  borderColor: [
                    `rgba(${currentTheme.rgbColor}, 0.3)`,
                    `rgba(${currentTheme.rgbColor}, 1)`,
                    `rgba(${currentTheme.rgbColor}, 0.3)`
                  ],
                  backgroundColor: [
                    "rgba(255, 255, 255, 0.95)",
                    `rgba(${selectedBranchId === 'branch-alma-1' ? '240, 246, 255' : selectedBranchId === 'branch-alma-2' ? '240, 253, 250' : '255, 241, 242'}, 1)`,
                    "rgba(255, 255, 255, 0.95)"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-full border bg-white/90 text-slate-800 transition-all duration-300 text-sm font-extrabold cursor-pointer focus:outline-none shadow-md relative group"
              >
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentTheme.pingClass} opacity-80`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${currentTheme.bulletClass} ${currentTheme.glowClass} border border-white`}></span>
                </span>
                <MapPin className={`w-4 h-4 ${currentTheme.textClass} transition-transform group-hover:scale-110`} />
                <span>Chi nhánh: <span className={`${currentTheme.textClass} font-black`}>{formatBranchName(activeBranch.name)}</span></span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-slate-500 group-hover:${currentTheme.textClass} ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white border border-slate-200/80 rounded-2xl shadow-2xl py-2.5 z-50 text-slate-800"
                  >
                    <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-2 flex items-center justify-between">
                      <span>Hệ thống chi nhánh</span>
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentTheme.pingClass} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTheme.bulletClass}`}></span>
                      </span>
                    </div>
                    {homedateData.branches.map((branch) => {
                      const bTheme = branchThemes[branch.id] || defaultTheme;
                      const isActive = selectedBranchId === branch.id;
                      return (
                        <button
                          key={branch.id}
                          onClick={() => {
                            setSelectedBranchId(branch.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 transition-all duration-300 flex flex-col gap-1 cursor-pointer relative border-l-4 overflow-hidden group ${
                            isActive
                              ? `${bTheme.activeBgClass} border-l-current font-semibold`
                              : `border-l-transparent text-slate-600 ${bTheme.hoverBgClass}`
                          }`}
                          style={{
                            borderLeftColor: isActive ? `rgb(${bTheme.rgbColor})` : undefined
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${bTheme.bulletClass} ${isActive ? 'scale-125' : 'scale-75 group-hover:scale-110'} transition-transform duration-300 ${isActive ? bTheme.glowClass : ''}`} />
                            <span className={`text-sm font-bold ${isActive ? bTheme.textClass : 'text-slate-700 group-hover:' + bTheme.textClass}`}>{formatBranchName(branch.name)}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-normal pl-4.5 line-clamp-1">{branch.address}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <button
            onClick={handleBooking}
            className="font-display font-medium text-sm tracking-normal px-6 py-2 rounded-full transition-all duration-500 flex items-center gap-2 cursor-pointer bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/20"
          >
            <Phone className="w-3.5 h-3.5" />
            Đặt phòng
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 hover:text-gold-600 focus:outline-none p-2 cursor-pointer transition-colors duration-500"
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left text-base tracking-normal py-2 border-b border-slate-100 focus:outline-none cursor-pointer ${
                    activeSection === item.id ? 'text-gold-600 font-bold' : 'text-slate-600 font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Branch Selector */}
              {homedateData.branches && homedateData.branches.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs text-slate-400 font-bold tracking-widest flex items-center gap-2 uppercase">
                    <span>Hệ thống chi nhánh</span>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentTheme.pingClass} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTheme.bulletClass} ${currentTheme.glowClass}`}></span>
                    </span>
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {homedateData.branches.map((branch) => {
                      const bTheme = branchThemes[branch.id] || defaultTheme;
                      const isActive = selectedBranchId === branch.id;
                      return (
                        <button
                          key={branch.id}
                          onClick={() => {
                            setSelectedBranchId(branch.id);
                          }}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-1 cursor-pointer ${
                            isActive
                              ? `${branch.id === 'branch-alma-1' ? 'bg-sky-500/10 border-sky-500/30' : branch.id === 'branch-alma-2' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'} text-slate-800`
                              : 'bg-slate-50/50 border-slate-100 text-slate-600'
                          }`}
                        >
                          <span className="text-sm font-bold flex items-center gap-1.5">
                            <span className={`w-2.5 h-2.5 rounded-full ${bTheme.bulletClass} ${isActive ? bTheme.glowClass : ''}`} />
                            <span className={isActive ? bTheme.textClass : 'text-slate-700'}>{formatBranchName(branch.name)}</span>
                          </span>
                          <span className="text-xs text-slate-400 pl-4 line-clamp-1">{branch.address}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                onClick={handleBooking}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-display font-medium text-base tracking-normal py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/20"
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
