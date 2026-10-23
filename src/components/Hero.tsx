import React, { useState } from 'react';
import { MapPin, Calendar, Users, BedDouble, ChevronRight, MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG, ROOMS_DATA } from '../data/hotelData';
import { formatWhatsAppUrl, getTodayDateString, getTomorrowDateString } from '../utils/booking';

interface HeroProps {
  onSelectBookingPreferences?: (prefs: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectBookingPreferences }) => {
  const [quickCheckIn, setQuickCheckIn] = useState(getTodayDateString());
  const [quickCheckOut, setQuickCheckOut] = useState(getTomorrowDateString());
  const [quickRoom, setQuickRoom] = useState(ROOMS_DATA[1].name); // Deluxe Double
  const [quickGuests, setQuickGuests] = useState('2 Guests');

  const whatsAppBookingUrl = formatWhatsAppUrl(
    HOTEL_CONFIG.verifiedWhatsAppNumber,
    HOTEL_CONFIG.defaultInquiryText
  );

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSelectBookingPreferences) {
      onSelectBookingPreferences({
        checkIn: quickCheckIn,
        checkOut: quickCheckOut,
        roomType: quickRoom,
        guests: quickGuests,
      });
    }
    const target = document.getElementById('booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative isolate min-h-[92vh] flex flex-col justify-between pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0B1528]">
      {/* Background Image with Fallback and Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_CONFIG.heroImage}
          alt="Grand Palace Hotel Multan Exterior Building on Railway Road"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/70 to-[#0B1528]/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Location Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-slate-200 text-xs sm:text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-[#D8AF55] shrink-0" />
            <span>Railway Road, Multan, Pakistan</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] text-balance mb-5">
            Welcome to Grand Palace Hotel Multan
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl">
            Comfort, convenience, and a warm welcome in the heart of Multan.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Book Your Stay</span>
            </a>

            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-sm border border-white/20 rounded-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Rooms</span>
              <ChevronRight className="w-4 h-4 text-[#D8AF55]" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Search & Reservation Strip Floating at Base of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <form
          onSubmit={handleQuickInquiry}
          className="bg-white/95 dark:bg-[#132238]/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-2xl border border-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end"
        >
          {/* Check-In */}
          <div>
            <label htmlFor="hero-checkin" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Check-In</span>
            </label>
            <input
              id="hero-checkin"
              type="date"
              min={getTodayDateString()}
              value={quickCheckIn}
              onChange={(e) => {
                setQuickCheckIn(e.target.value);
                if (e.target.value >= quickCheckOut) {
                  setQuickCheckOut(getTomorrowDateString(e.target.value));
                }
              }}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C59A3F]"
            />
          </div>

          {/* Check-Out */}
          <div>
            <label htmlFor="hero-checkout" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Check-Out</span>
            </label>
            <input
              id="hero-checkout"
              type="date"
              min={getTomorrowDateString(quickCheckIn)}
              value={quickCheckOut}
              onChange={(e) => setQuickCheckOut(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C59A3F]"
            />
          </div>

          {/* Room Type */}
          <div>
            <label htmlFor="hero-room" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Room Category</span>
            </label>
            <select
              id="hero-room"
              value={quickRoom}
              onChange={(e) => setQuickRoom(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C59A3F]"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="hero-guests" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Guests</span>
            </label>
            <select
              id="hero-guests"
              value={quickGuests}
              onChange={(e) => setQuickGuests(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C59A3F]"
            >
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4 Guests">4 Guests</option>
              <option value="5+ Family Guests">5+ Family Guests</option>
            </select>
          </div>

          {/* Check Availability CTA */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-900 bg-[#C59A3F] hover:bg-[#D8AF55] active:bg-[#A87D26] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1528]"
            >
              <span>Check Availability</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
