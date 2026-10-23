import React, { useState } from 'react';
import { MapPin, Calendar, Users, BedDouble, ChevronRight, MessageCircle, Play, X, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG, ROOMS_DATA, REAL_HOTEL_ASSETS } from '../data/hotelData';
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
  const [quickRoom, setQuickRoom] = useState(ROOMS_DATA[0].name); // Deluxe Double
  const [quickGuests, setQuickGuests] = useState('2 Guests');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
    <section id="home" className="relative isolate min-h-[94vh] flex flex-col justify-between pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0B1528]">
      {/* Background Image with Fallback and Measured Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HOTEL_CONFIG.heroImage}
          alt="Grand Palace Hotel Multan Exterior Building & Courtyard on Railway Road"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-700"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/75 to-[#0B1528]/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          
          {/* Location & Real Verified Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-slate-200 text-xs sm:text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8AF55] shrink-0" />
              <span className="truncate">Railway Road, Multan, Pakistan</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#C59A3F]/20 backdrop-blur-sm border border-[#C59A3F]/40 text-[#F7EED8] text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8AF55] shrink-0" />
              <span>Verified Real Property &amp; Photos</span>
            </div>
          </div>

          {/* Main Heading with responsive font clamp */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.18] text-balance mb-4 break-words">
            Welcome to Grand Palace Hotel Multan
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Comfort, convenience, and a warm Multani welcome in the heart of Multan. Featuring air-conditioned rooms, secure on-site parking, and 24/7 dedicated security.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none" />
              <span>Book Your Stay</span>
            </a>

            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-sm border border-white/20 rounded-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Rooms</span>
              <ChevronRight className="w-4 h-4 text-[#D8AF55]" />
            </a>

            {/* Video Watch Button */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/15 rounded-lg transition-colors whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D8AF55] text-[#D8AF55]" />
              <span>Watch Grand Opening</span>
            </button>
          </div>

          {/* Direct Phone lines on Hero */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300">
            <span className="font-semibold text-white">Direct Reservations:</span>
            {HOTEL_CONFIG.additionalPhones.map((p, idx) => (
              <a
                key={idx}
                href={`tel:${p.number.replace(/\s+/g, '')}`}
                className="hover:text-white underline underline-offset-2 font-medium whitespace-nowrap"
              >
                {p.number}
              </a>
            ))}
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

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Grand Opening Video"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
            <div className="p-4 bg-[#0B1528] flex items-center justify-between border-b border-white/10 text-white">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold">
                  Grand Palace Hotel Inauguration Ceremony
                </h3>
                <p className="text-xs text-[#D8AF55]">
                  Multan · Ribbon-cutting with Syed Ali Musa Gillani
                </p>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close Video Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                src={REAL_HOTEL_ASSETS.inaugurationVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
