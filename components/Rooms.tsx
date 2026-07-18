'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  Users, 
  ChevronLeft,
  ChevronRight, 
  X, 
  Check, 
  Play, 
  Pause,
  Phone,
  Calendar
} from 'lucide-react';
import { homedateData } from '@/data/homedate-config';

const formatBranchName = (name: string) => {
  let cleaned = name.replace(/Alma Home - /g, '');
  cleaned = cleaned.replace(/\s*\(.*?\)\s*/g, '').trim();
  return cleaned;
};

interface Room {
  id: string;
  branchId: string;
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

interface RoomsProps {
  selectedBranchId: string;
}

const chunkRooms = (rooms: Room[], size: number) => {
  const chunks = [];
  for (let i = 0; i < rooms.length; i += size) {
    chunks.push(rooms.slice(i, i + size));
  }
  return chunks;
};

export default function Rooms({ selectedBranchId }: RoomsProps) {
  const [prevSelectedBranchId, setPrevSelectedBranchId] = useState(selectedBranchId);
  const [activeBranchId, setActiveBranchId] = useState(selectedBranchId);
  const [prevActiveBranchId, setPrevActiveBranchId] = useState(selectedBranchId);
  const [currentPage, setCurrentPage] = useState(0);

  if (selectedBranchId !== prevSelectedBranchId) {
    setPrevSelectedBranchId(selectedBranchId);
    setActiveBranchId(selectedBranchId);
    setPrevActiveBranchId(selectedBranchId);
    setCurrentPage(0);
  }

  if (activeBranchId !== prevActiveBranchId) {
    setPrevActiveBranchId(activeBranchId);
    setCurrentPage(0);
  }

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    if (cardWidth > 0) {
      const newPage = Math.round(scrollPosition / cardWidth);
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

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

  const activeBranch = homedateData.branches?.find(b => b.id === activeBranchId) || {
    id: activeBranchId,
    name: homedateData.brand.name,
    phone: homedateData.brand.phone,
  };

  const filteredRooms = homedateData.rooms.filter(room => room.branchId === activeBranchId);
  const roomPages = chunkRooms(filteredRooms, 3);

  const handleBooking = () => {
    window.open(homedateData.brand.zalo || `tel:${activeBranch.phone}`, '_blank');
  };

  return (
    <section id="phong" className="py-24 md:py-32 bg-luxury-50 text-luxury-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-wide text-gold-600 font-semibold block mb-3"
          >
            Nơi dừng chân hoàn hảo ({formatBranchName(activeBranch.name)})
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-luxury-950 tracking-normal"
          >
            Danh sách phòng nghỉ
          </motion.h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] w-16 bg-gradient-to-l from-gold-500 to-transparent origin-right"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
              className="w-2.5 h-2.5 bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.85)]"
            />
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1.5px] w-16 bg-gradient-to-r from-gold-500 to-transparent origin-left"
            />
          </div>
        </div>

        {/* Branch Selection Segmented Control */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-luxury-100/80 p-1.5 rounded-full inline-flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-none border border-luxury-200/50">
            {homedateData.branches?.map((branch) => {
              const isActive = branch.id === activeBranchId;
              const branchRoomCount = homedateData.rooms.filter(r => r.branchId === branch.id).length;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-display font-semibold text-sm md:text-base tracking-normal transition-colors duration-300 flex items-center gap-2 cursor-pointer relative whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-luxury-700 hover:text-gold-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBranchSegment"
                      className="absolute inset-0 bg-gold-500 rounded-full shadow-[0_4px_12px_rgba(212,175,55,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <span className="relative z-10">{formatBranchName(branch.name)}</span>
                  <span className={`relative z-10 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-sans transition-colors duration-300 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-luxury-200 text-luxury-500'
                  }`}>
                    {branchRoomCount} phòng
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Slider Area with arrows */}
        <div className="relative w-full group">
          {/* Left Arrow Button (Desktop only) */}
          {filteredRooms.length > 3 && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-[-20px] xl:left-[-40px] top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-luxury-200 text-luxury-800 shadow-md hover:text-gold-600 hover:border-gold-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Slide left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow Button (Desktop only) */}
          {filteredRooms.length > 3 && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-[-20px] xl:right-[-40px] top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-luxury-200 text-luxury-800 shadow-md hover:text-gold-600 hover:border-gold-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Slide right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Rooms Carousel Container (No Line Wrap) */}
          <div
            key={activeBranchId}
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 w-full scrollbar-none [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {roomPages.map((page, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full flex-shrink-0 snap-center px-4 md:px-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                  {page.map((room, idx) => (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="w-full bg-white border border-luxury-200 rounded-3xl overflow-hidden flex flex-col group/card shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      {/* Thumbnail Container */}
                      <div className="relative aspect-3/2 overflow-hidden bg-luxury-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={room.thumbnail}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-luxury-950/80 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gold-400 tracking-wider rounded-full">
                          Chỉ từ {room.priceDisplay} / đêm
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-display font-bold text-lg md:text-xl text-luxury-950 mb-3 group-hover/card:text-gold-600 transition-colors line-clamp-1">
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
                          className="mt-4 w-full bg-transparent hover:bg-gold-500 text-luxury-900 hover:text-white font-display font-medium text-sm tracking-normal py-2.5 border border-luxury-300 hover:border-gold-500 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          Xem chi tiết
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          {roomPages.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {roomPages.map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => {
                    const container = scrollContainerRef.current;
                    if (container) {
                      container.scrollTo({
                        left: pageIdx * container.clientWidth,
                        behavior: 'smooth'
                      });
                      setCurrentPage(pageIdx);
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === pageIdx ? 'bg-gold-500 w-6' : 'bg-luxury-200 hover:bg-gold-300 w-2.5'
                  }`}
                  aria-label={`Go to page ${pageIdx + 1}`}
                />
              ))}
            </div>
          )}
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
                      className="absolute bottom-4 left-4 z-40 bg-luxury-950/85 text-white hover:bg-gold-500 hover:text-white px-4 py-2 text-sm font-medium tracking-normal cursor-pointer rounded-full"
                    >
                      Xem ảnh phòng
                    </button>
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full cursor-ew-resize select-none touch-pan-y"
                    onPointerDown={(e) => {
                      if ((e.target as HTMLElement).closest('.progress-bar-container') || (e.target as HTMLElement).closest('.video-launcher-btn')) return;
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
                          prevModalImage();
                        } else {
                          nextModalImage();
                        }
                      } else if (Math.abs(diffX) <= 10 && Math.abs(diffY) <= 10) {
                        // Click gesture
                        const clickX = e.clientX - rect.left;
                        if (clickX < rect.width / 2) {
                          prevModalImage();
                        } else {
                          nextModalImage();
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
                    {/* Image Slide */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedRoom.gallery[activeImgIndex]}
                        alt={`${selectedRoom.name} gallery ${activeImgIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                        draggable="false"
                      />
                    </div>

                    {/* Dot Indicators */}
                    <div className="progress-bar-container absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                      {selectedRoom.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImgIndex(idx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === activeImgIndex 
                              ? 'w-5 bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.6)]' 
                              : 'w-2 bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Video Launcher (if available) - positioned higher than progress bar */}
                    {selectedRoom.videoUrl && (
                      <div className="video-launcher-btn absolute bottom-6 left-4 z-30">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVideoPlaying(true);
                          }}
                          className="bg-gold-500 hover:bg-gold-600 text-white px-3.5 py-1.5 text-xs font-semibold tracking-normal flex items-center gap-1 shadow-lg cursor-pointer rounded-full"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          Xem video
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Information & Actions (5 Cols) */}
              <div className="md:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
                <div>
                  <span className="text-sm tracking-wide text-gold-600 font-semibold block mb-2">
                    Chi tiết phòng nghỉ
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-luxury-950 tracking-normal leading-tight mb-4">
                    {selectedRoom.name}
                  </h3>

                  {/* Pricing and Parameters */}
                  <div className="border-y border-luxury-200 py-4 mb-6 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-luxury-400 tracking-normal font-semibold mb-1">
                        Giá thuê / Đêm
                      </p>
                      <p className="text-xl sm:text-2xl font-display font-black text-gold-500">
                        {selectedRoom.priceDisplay}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-luxury-400 tracking-normal font-semibold mb-1">
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
                    <h4 className="font-display font-semibold text-sm tracking-normal text-luxury-900 mb-4">
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
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-display font-medium text-base tracking-normal py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2 cursor-pointer"
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
