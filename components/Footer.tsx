'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, MessageSquare, Send } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';
import { FacebookIcon, MessengerIcon, ZaloIcon, TikTokIcon, InstagramIcon } from '@/components/BrandLogos';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${homedateData.brand.phone}`, '_blank');
  };

  return (
    <footer className="bg-luxury-950 text-white border-t border-luxury-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        
        {/* Left Section: Brand Logo & Information Details (5 Columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            {homedateData.brand.logoImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={homedateData.brand.logoImage}
                alt={homedateData.brand.name}
                className="h-12 w-auto object-contain mb-4"
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-display font-extrabold tracking-widest text-gold-400 block mb-3">
                {homedateData.brand.logoText}
              </span>
            )}
            <p className="text-sm text-luxury-300 leading-relaxed max-w-sm mt-3 italic">
              {homedateData.brand.slogan}
            </p>
          </div>

          {/* Contact lists */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-sm text-luxury-300">
              <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>{homedateData.brand.address}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-luxury-300">
              <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <a href={`tel:${homedateData.brand.phone}`} className="hover:text-gold-400 transition-colors">
                {homedateData.brand.phoneDisplay}
              </a>
            </div>

            {homedateData.brand.email && (
              <div className="flex items-center space-x-3 text-sm text-luxury-300">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${homedateData.brand.email}`} className="hover:text-gold-400 transition-colors">
                  {homedateData.brand.email}
                </a>
              </div>
            )}
          </div>

          {/* Social Channels Channels */}
          <div className="flex space-x-3.5">
            <a
              href={homedateData.brand.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#1877F2]/10 hover:shadow-[#1877F2]/30 flex items-center justify-center cursor-pointer hover:scale-105"
              aria-label="Visit Facebook Page"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href={homedateData.brand.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-tr from-[#00c6ff] via-[#0072ff] to-[#f857a6] text-white rounded-full transition-all duration-300 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/30 flex items-center justify-center cursor-pointer hover:scale-105"
              aria-label="Chat via Messenger"
            >
              <MessengerIcon className="w-5 h-5" />
            </a>
            <a
              href={homedateData.brand.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0068FF] hover:bg-[#005AE0] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#0068FF]/10 hover:shadow-[#0068FF]/30 flex items-center justify-center cursor-pointer hover:scale-105"
              aria-label="Chat via Zalo"
            >
              <ZaloIcon className="w-5 h-5" />
            </a>
            {homedateData.brand.tiktok && (
              <a
                href={homedateData.brand.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#000000] hover:bg-[#111111] text-white rounded-full transition-all duration-300 shadow-lg shadow-black/15 hover:shadow-black/35 flex items-center justify-center cursor-pointer hover:scale-105"
                aria-label="Visit TikTok Profile"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            )}
            {homedateData.brand.instagram && (
              <a
                href={homedateData.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full transition-all duration-300 shadow-lg shadow-purple-500/15 hover:shadow-purple-500/35 flex items-center justify-center cursor-pointer hover:scale-105"
                aria-label="Visit Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Right Section: Embedded Google Maps Iframe (7 Columns) */}
        <div className="lg:col-span-7 w-full space-y-4">
          <h4 className="font-display font-extrabold text-xs tracking-[0.25em] uppercase text-gold-400">
            Bản đồ chỉ đường
          </h4>
          <div className="relative w-full aspect-16/9 bg-luxury-900 border border-luxury-800 shadow-2xl overflow-hidden min-h-[250px] sm:min-h-[300px] rounded-3xl">
            <iframe
              src={homedateData.brand.mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-none grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>

      </div>

      {/* Bottom Copyright details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-luxury-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-luxury-500 font-medium tracking-wide">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {currentYear} {homedateData.brand.name}. Tất cả các quyền được bảo lưu.
        </p>
        <p className="text-center md:text-right">
          Thiết kế bởi <span className="text-gold-500 font-bold">{homedateData.brand.logoText}</span> — Đơn giản hóa bởi file cấu hình.
        </p>
      </div>
    </footer>
  );
}
