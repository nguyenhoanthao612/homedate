'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Petal {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  targetRotate: number;
  scale: number;
  duration: number;
  opacity: number;
  petalType: number;
}

export default function RosePetalEffect() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't spawn if clicking inside form inputs or buttons to avoid distracting UX on form fields
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      const newPetals: Petal[] = [];
      const petalCount = 6 + Math.floor(Math.random() * 5); // 6 to 10 petals per click

      for (let i = 0; i < petalCount; i++) {
        const id = `${Date.now()}-${Math.random()}`;
        
        // Random drift direction and falling distance
        const angle = (Math.random() * Math.PI * 2); // random angle in radians
        const speed = 30 + Math.random() * 60; // initial outward burst speed
        
        // Initial burst offset
        const initialX = e.clientX + Math.cos(angle) * speed * 0.15;
        const initialY = e.clientY + Math.sin(angle) * speed * 0.15;

        // Final floating targets (drifts down and slightly sideways)
        const targetX = initialX + (Math.random() - 0.5) * 120; // sideways drift
        const targetY = initialY + 80 + Math.random() * 150; // fall down

        const targetRotate = (Math.random() - 0.5) * 540; // rotate randomly
        const scale = 0.4 + Math.random() * 0.6; // tiny delicate sizes
        const duration = 1.2 + Math.random() * 1.3; // natural speed variation
        const petalType = Math.floor(Math.random() * 3); // 3 different petal paths

        newPetals.push({
          id,
          x: e.clientX,
          y: e.clientY,
          targetX,
          targetY,
          targetRotate,
          scale,
          duration,
          opacity: 0.85 + Math.random() * 0.15,
          petalType,
        });
      }

      setPetals((prev) => [...prev, ...newPetals]);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handlePetalComplete = (id: string) => {
    setPetals((prev) => prev.filter((p) => p.id !== id));
  };

  const getPetalSVG = (type: number) => {
    switch (type) {
      case 0:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="roseGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="60%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>
            <path
              d="M12 21C17 21 21 16 21 11C21 6.5 17 3.5 12 3C7 3.5 3 6.5 3 11C3 16 7 21 12 21Z"
              fill="url(#roseGrad0)"
            />
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="roseGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>
            <path
              d="M12 22C16.5 22 19.5 18 19.5 13C19.5 8 16 2 12 2C8 2 4.5 8 4.5 13C4.5 18 7.5 22 12 22Z"
              fill="url(#roseGrad1)"
            />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="roseGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="70%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            <path
              d="M12 21C16.5 21 20 16.5 18.5 11C17 5.5 13.5 3 12 3C10.5 3 7 5.5 5.5 11C4 16.5 7.5 21 12 21Z"
              fill="url(#roseGrad2)"
            />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{
              x: petal.x - 12, // center the 24px container
              y: petal.y - 12,
              rotate: 0,
              scale: 0.1,
              opacity: 1,
            }}
            animate={{
              x: petal.targetX - 12,
              y: petal.targetY - 12,
              rotate: petal.targetRotate,
              scale: petal.scale,
              opacity: [petal.opacity, petal.opacity, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: petal.duration,
              ease: [0.1, 0.45, 0.35, 1], // beautiful light float easing
            }}
            onAnimationComplete={() => handlePetalComplete(petal.id)}
            className="absolute w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
          >
            {getPetalSVG(petal.petalType)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
