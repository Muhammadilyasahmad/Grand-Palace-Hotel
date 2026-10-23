import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, ArrowUp } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { formatWhatsAppUrl } from '../utils/booking';

export const Footer: React.FC = () => {
  const whatsAppUrl = formatWhatsAppUrl(
    HOTEL_CONFIG.verifiedWhatsAppNumber,
    HOTEL_CONFIG.defaultInquiryText
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B1528] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-md bg-[#C59A3F] flex items-center justify-center text-[#0B1528] font-serif font-bold text-xl shadow-sm">
                GP
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  Grand Palace Hotel
                </h3>
                <p className="text-[11px] text-[#D8AF55] tracking-wider uppercase font-semibold">
                  Hotel &amp; Restaurant · Multan
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing hospitable, secure, and comfortable accommodation for railway commuters, tourists, and families in Multan. Featuring air-conditioned rooms, free Wi-Fi, and round-the-clock service.
            </p>

            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Chat with Front Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-4 text-[#D8AF55]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Rooms &amp; Suites</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location &amp; Map</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Book Your Stay</a>
              </li>
            </ul>
          </div>

          {/* Room Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-4 text-[#D8AF55]">
              Room Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Deluxe Single Room (Solo &amp; Business)</li>
              <li>Deluxe Double Room (King Bed / Couples)</li>
              <li>Deluxe Twin Room (Two Single Beds)</li>
              <li>Executive Triple Room (Group Comfort)</li>
              <li>Deluxe Family Room (Spacious Suite)</li>
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-2 text-white font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>Reception Hours: 24/7</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Check-in: 2:00 PM · Check-out: 12:00 PM
              </p>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-4 text-[#D8AF55]">
              Contact Details
            </h4>

            <div className="flex items-start gap-3 text-xs">
              <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
              <p className="text-slate-300 leading-snug">
                {HOTEL_CONFIG.address}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
              <a
                href={`tel:${HOTEL_CONFIG.verifiedPhone.replace(/\s+/g, '')}`}
                className="text-white hover:text-[#D8AF55] transition-colors font-medium"
              >
                {HOTEL_CONFIG.verifiedPhone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D8AF55] transition-colors font-medium"
              >
                WhatsApp: {HOTEL_CONFIG.whatsappDisplay}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D8AF55] hover:text-white transition-colors underline underline-offset-4"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {HOTEL_CONFIG.name}, Multan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Railway Road, Multan, Punjab, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
