'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Reviews from '@/components/Reviews';
import ContactFloating from '@/components/ContactFloating';
import Footer from '@/components/Footer';
import RosePetalEffect from '@/components/RosePetalEffect';
import { homedateData } from '@/data/homedate-config';

export default function Home() {
  const [selectedBranchId, setSelectedBranchId] = useState(
    homedateData.branches && homedateData.branches.length > 0
      ? homedateData.branches[0].id
      : 'default'
  );

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Interactive Floating Rose Petal click effect */}
      <RosePetalEffect />

      {/* 1. Fixed Luxurious Navigation Bar with Branch Selector */}
      <Navbar selectedBranchId={selectedBranchId} setSelectedBranchId={setSelectedBranchId} />

      <main className="flex-grow">
        {/* 2. Hero Section (Welcome Cover Banner) */}
        <Hero selectedBranchId={selectedBranchId} />

        {/* 3. Detailed About Section (Introduction & Highlights) */}
        <About />

        {/* 4. Rooms Gallery & Detailed Cards Grid */}
        <Rooms selectedBranchId={selectedBranchId} setSelectedBranchId={setSelectedBranchId} />

        {/* 5. Customer Testimonial Slider */}
        <Reviews />
      </main>

      {/* 6. Contact Floating Quick Buttons Widget */}
      <ContactFloating selectedBranchId={selectedBranchId} />

      {/* 7. Footer details and embedded Map indicator */}
      <Footer selectedBranchId={selectedBranchId} setSelectedBranchId={setSelectedBranchId} />
    </div>
  );
}

