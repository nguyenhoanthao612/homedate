import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Reviews from '@/components/Reviews';
import ContactFloating from '@/components/ContactFloating';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* 1. Fixed Luxurious Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Welcome Cover Banner) */}
        <Hero />

        {/* 3. Detailed About Section (Introduction & Highlights) */}
        <About />

        {/* 4. Rooms Gallery & Detailed Cards Grid */}
        <Rooms />

        {/* 5. Customer Testimonial Slider */}
        <Reviews />
      </main>

      {/* 6. Contact Floating Quick Buttons Widget (Phone, Zalo, Messenger, Facebook) */}
      <ContactFloating />

      {/* 7. Footer details and embedded Map indicator */}
      <Footer />
    </div>
  );
}
