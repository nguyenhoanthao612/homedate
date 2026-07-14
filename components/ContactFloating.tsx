'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';
import { FacebookIcon, MessengerIcon, ZaloIcon, TikTokIcon, InstagramIcon } from '@/components/BrandLogos';

export default function ContactFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      id: 'phone',
      label: 'Gọi điện thoại',
      icon: Phone,
      color: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 text-white rounded-full',
      link: `tel:${homedateData.brand.phone}`,
    },
    homedateData.brand.zalo && {
      id: 'zalo',
      label: 'Chat Zalo',
      icon: ZaloIcon,
      color: 'bg-[#0068FF] hover:bg-[#005AE0] shadow-[#0068FF]/30 text-white rounded-full',
      link: homedateData.brand.zalo,
    },
    homedateData.brand.messenger && {
      id: 'messenger',
      label: 'Chat Messenger',
      icon: MessengerIcon,
      color: 'bg-gradient-to-tr from-[#00c6ff] via-[#0072ff] to-[#f857a6] shadow-pink-500/30 text-white rounded-full',
      link: homedateData.brand.messenger,
    },
    homedateData.brand.facebook && {
      id: 'facebook',
      label: 'Trang Facebook',
      icon: FacebookIcon,
      color: 'bg-[#1877F2] hover:bg-[#166FE5] shadow-[#1877F2]/30 text-white rounded-full',
      link: homedateData.brand.facebook,
    },
    homedateData.brand.tiktok && {
      id: 'tiktok',
      label: 'Kênh TikTok',
      icon: TikTokIcon,
      color: 'bg-black hover:bg-zinc-900 shadow-black/35 text-white rounded-full',
      link: homedateData.brand.tiktok,
    },
    homedateData.brand.instagram && {
      id: 'instagram',
      label: 'Instagram',
      icon: InstagramIcon,
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-purple-500/35 text-white rounded-full',
      link: homedateData.brand.instagram,
    },
  ].filter(Boolean) as {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    link: string;
  }[];

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Contacts Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end space-y-3 mb-1">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="flex items-center space-x-3 group"
                >
                  {/* Tooltip */}
                  <span className="bg-luxury-950 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1.5 shadow-xl border border-luxury-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {contact.label}
                  </span>
                  
                  {/* Centered Circular Button Container */}
                  <div className="w-14 flex items-center justify-center">
                    <button
                      onClick={() => handleOpenLink(contact.link)}
                      className={`${contact.color} w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none cursor-pointer`}
                      aria-label={contact.label}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Toggle Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 flex items-center justify-center shadow-xl focus:outline-none relative cursor-pointer rounded-full ${
          isOpen ? 'bg-luxury-950 text-gold-400 border border-luxury-800' : 'bg-gold-500 hover:bg-gold-600 text-white shadow-gold-500/30'
        }`}
        aria-label="Contact options"
      >
        {/* Pulsating Ring Indicator (when menu is closed) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold-500/40 animate-ping" />
        )}
        
        {isOpen ? (
          <motion.div
            initial={{ rotate: -90, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            className="flex items-center justify-center text-gold-400"
          >
            <X className="w-5 h-5 stroke-[2px]" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center justify-center space-y-0.5"
          >
            <MessageCircle className="w-6 h-6 stroke-[2.5px]" />
            <span className="text-[9px] font-display font-extrabold tracking-widest uppercase">
              CHAT
            </span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
