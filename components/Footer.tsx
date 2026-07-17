'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, MessageSquare, Send } from 'lucide-react';
import { homedateData } from '@/data/homedate-config';
import { FacebookIcon, MessengerIcon, ZaloIcon, TikTokIcon, InstagramIcon } from '@/components/BrandLogos';

const formatBranchName = (name: string) => {
  let cleaned = name.replace(/Alma Home - /g, '');
  cleaned = cleaned.replace(/\s*\(.*?\)\s*/g, '').trim();
  return cleaned;
};

interface FooterProps {
  selectedBranchId: string;
  setSelectedBranchId: (id: string) => void;
}

export default function Footer({ selectedBranchId, setSelectedBranchId }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const currentBranch = homedateData.branches?.find(b => b.id === selectedBranchId) || {
    name: homedateData.brand.name,
    address: homedateData.brand.address,
    phone: homedateData.brand.phone,
    phoneDisplay: homedateData.brand.phoneDisplay,
    email: homedateData.brand.email,
    mapEmbedUrl: homedateData.brand.mapEmbedUrl
  };

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${currentBranch.phone}`, '_blank');
  };

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        
        {/* Left Section: Brand Logo & Information Details (5 Columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            {homedateData.brand.logoImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={homedateData.brand.logoImage}
                alt={homedateData.brand.name}
                className="h-28 w-28 md:h-36 md:w-36 object-contain mb-4"
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-gold-600 block mb-3">
                {homedateData.brand.logoText}
              </span>
            )}
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mt-3 italic">
              {homedateData.brand.slogan}
            </p>
          </div>

          {/* Contact lists */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-sm text-slate-600">
              <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <span>{currentBranch.address}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-slate-600">
              <Phone className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <a href={`tel:${currentBranch.phone}`} className="hover:text-gold-600 transition-colors">
                {currentBranch.phoneDisplay}
              </a>
            </div>

            {currentBranch.email && (
              <div className="flex items-center space-x-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <a href={`mailto:${currentBranch.email}`} className="hover:text-gold-600 transition-colors">
                  {currentBranch.email}
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
          <h4 className="font-display font-bold text-sm tracking-wide text-gold-600">
            Bản đồ chỉ đường ({formatBranchName(currentBranch.name)})
          </h4>
          <div className="relative w-full aspect-16/9 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden min-h-[250px] sm:min-h-[300px] rounded-3xl">
            <iframe
              key={selectedBranchId}
              src={currentBranch.mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>

      </div>

      {/* Bottom Copyright details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-medium tracking-wide">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {currentYear} {homedateData.brand.name}. Tất cả các quyền được bảo lưu.
        </p>
        <p className="text-center md:text-right">
          Thiết kế bởi <span className="text-gold-600 font-bold">{homedateData.brand.logoText}</span> — Đơn giản hóa bởi file cấu hình.
        </p>
      </div>
    </footer>
  );
}
