'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  Users, 
  ChevronRight, 
  X, 
  Check, 
  ChevronLeft, 
  ChevronRight as ChevronRightIcon, 
  Play, 
  Pause,
  Phone,
  Calendar
} from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

interface Room {
  id: string;
  name: string;
  basePrice: number;
  priceDisplay: string;
  area: number;
  capacity: string;
  thumbnail: string;
  gallery: string[];
  videoUrl?: string;
  shortDesc: string;
  fullDesc: string;
  amenities: string[];
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Disable body scroll when modal is open using an effect
  React.useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRoom]);

  const openDetails = (room: Room) => {
    setSelectedRoom(room);
    setActiveImgIndex(0);
    setIsVideoPlaying(false);
  };

  const closeDetails = () => {
    setSelectedRoom(null);
    setIsVideoPlaying(false);
  };

  const nextModalImage = () => {
    if (!selectedRoom) return;
    setActiveImgIndex((prev) => (prev === selectedRoom.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevModalImage = () => {
    if (!selectedRoom) return;
    setActiveImgIndex((prev) => (prev === 0 ? selectedRoom.gallery.length - 1 : prev - 1));
  };

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${homedateData.brand.phone}`, '_blank');
  };

  return (
    <section id="phong" className="py-24 md:py-32 bg-luxury-50 text-luxury-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold block mb-3"
          >
            Nơi dừng chân hoàn hảo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-luxury-950 tracking-tight"
          >
            Danh Sách Phòng Nghỉ
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[3px] bg-gold-400 w-20 mx-auto mt-6"
          />
        </div>

        {/* Rooms Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {homedateData.rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-luxury-200 rounded-3xl overflow-hidden flex flex-col group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-3/2 overflow-hidden bg-luxury-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.thumbnail}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-luxury-950/80 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gold-400 tracking-wider rounded-full">
                  Chỉ từ {room.priceDisplay} / đêm
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-luxury-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {room.name}
                  </h3>
                  
                  {/* Basic Room Specs */}
                  <div className="flex items-center space-x-6 text-xs text-luxury-500 font-medium tracking-wide mb-4">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                      {room.area} m²
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-400" />
                      {room.capacity}
                    </span>
                  </div>

                  <p className="text-sm text-luxury-600 line-clamp-2 leading-relaxed mb-6">
                    {room.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => openDetails(room)}
                  className="mt-4 w-full bg-transparent hover:bg-gold-500 text-luxury-900 hover:text-white font-display font-bold text-xs tracking-widest uppercase py-3 border border-luxury-300 hover:border-gold-500 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Xem chi tiết
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-luxury-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-none md:h-auto rounded-3xl"
            >
              {/* Close Button */}
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 z-50 p-2.5 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-white transition-colors rounded-full focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Media Slider (6 Cols) */}
              <div className="md:col-span-7 bg-luxury-950 relative aspect-video md:aspect-auto md:h-full min-h-[250px] sm:min-h-[350px] md:min-h-[500px]">
                {/* Media Switch: Check if we show Video and is currently playing */}
                {selectedRoom.videoUrl && isVideoPlaying ? (
                  <div className="absolute inset-0 w-full h-full bg-black z-30">
                    <video
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                      src={selectedRoom.videoUrl}
                    />
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute bottom-4 left-4 z-40 bg-luxury-950/85 text-white hover:bg-gold-500 hover:text-white px-4 py-2 text-xs tracking-widest uppercase cursor-pointer rounded-full"
                    >
                      Xem ảnh phòng
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Image Slide */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedRoom.gallery[activeImgIndex]}
                        alt={`${selectedRoom.name} gallery ${activeImgIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
                      <button
                        onClick={prevModalImage}
                        className="p-2.5 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-white transition-colors cursor-pointer rounded-full"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="p-2.5 bg-luxury-950/80 hover:bg-gold-500 text-white hover:text-white transition-colors cursor-pointer rounded-full"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Left corner: Photo Counter & Video Launcher (if available) */}
                    <div className="absolute bottom-4 left-4 z-30 flex items-center space-x-2">
                      <span className="bg-luxury-950/80 backdrop-blur-sm px-3.5 py-1.5 text-xs text-white tracking-widest font-mono rounded-full">
                        {activeImgIndex + 1} / {selectedRoom.gallery.length}
                      </span>
                      {selectedRoom.videoUrl && (
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="bg-gold-500 hover:bg-gold-600 text-white px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg cursor-pointer rounded-full"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          Xem Video
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Right Column: Information & Actions (5 Cols) */}
              <div className="md:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-gold-600 font-bold block mb-2">
                    Chi tiết phòng nghỉ
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-luxury-950 tracking-tight leading-tight mb-4">
                    {selectedRoom.name}
                  </h3>

                  {/* Pricing and Parameters */}
                  <div className="border-y border-luxury-200 py-4 mb-6 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-luxury-400 uppercase tracking-wider font-semibold mb-1">
                        Giá thuê / Đêm
                      </p>
                      <p className="text-xl sm:text-2xl font-display font-black text-gold-500">
                        {selectedRoom.priceDisplay}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-luxury-400 uppercase tracking-wider font-semibold mb-1">
                        Diện tích & Sức chứa
                      </p>
                      <p className="text-sm font-semibold text-luxury-700">
                        {selectedRoom.area} m² — {selectedRoom.capacity}
                      </p>
                    </div>
                  </div>

                  {/* Core Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-sm text-luxury-600 leading-relaxed text-justify">
                      {selectedRoom.fullDesc}
                    </p>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <h4 className="font-display font-bold text-xs tracking-widest uppercase text-luxury-900 mb-4">
                      Tiện ích cao cấp của phòng:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center space-x-2.5 text-xs text-luxury-600 font-medium">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                            <Check className="w-2.5 h-2.5 stroke-[3px]" />
                          </span>
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Final Book Room Button */}
                <div className="mt-8 border-t border-luxury-200 pt-6">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-display font-bold text-sm tracking-widest uppercase py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Đặt phòng ngay hôm nay
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
