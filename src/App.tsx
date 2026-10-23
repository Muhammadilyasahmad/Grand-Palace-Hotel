/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HOTEL_CONFIG } from './data/hotelData';

export default function App() {
  const [bookingPreferences, setBookingPreferences] = useState<{
    checkIn?: string;
    checkOut?: string;
    roomType?: string;
    guests?: string;
  }>({});

  const handleSelectBookingPreferences = (prefs: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: string;
  }) => {
    setBookingPreferences(prefs);
  };

  const handleSelectRoomForBooking = (roomName: string) => {
    setBookingPreferences((prev) => ({
      ...prev,
      roomType: roomName,
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 flex flex-col selection:bg-[#C59A3F]/25 selection:text-[#0B1528]">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectBookingPreferences={handleSelectBookingPreferences} />

        {/* About Grand Palace Hotel */}
        <About />

        {/* Rooms & Suites Showcase */}
        <Rooms onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* Verified Hotel Facilities */}
        <Facilities />

        {/* Genuine Hotel Photo Gallery with Lightbox */}
        <Gallery />

        {/* Direct WhatsApp Booking Inquiry Form */}
        <BookingForm
          initialRoomType={bookingPreferences.roomType}
          initialCheckIn={bookingPreferences.checkIn}
          initialCheckOut={bookingPreferences.checkOut}
          initialGuests={bookingPreferences.guests}
        />

        {/* Location & Directions */}
        <Location />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mandatory Floating WhatsApp Click-to-Chat Button (Always visible on all scroll positions) */}
      <WhatsAppButton
        variant="floating"
        message={HOTEL_CONFIG.defaultInquiryText}
      />
    </div>
  );
}
