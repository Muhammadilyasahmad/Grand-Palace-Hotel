import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { formatWhatsAppUrl } from '../utils/booking';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsAppUrl = formatWhatsAppUrl(
    HOTEL_CONFIG.verifiedWhatsAppNumber,
    HOTEL_CONFIG.defaultInquiryText
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1528]/95 backdrop-blur-md shadow-md py-3 border-b border-white/10'
          : 'bg-gradient-to-b from-[#0B1528]/90 via-[#0B1528]/60 to-transparent py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white group whitespace-nowrap shrink-0 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] rounded"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#C59A3F] flex items-center justify-center text-[#0B1528] font-serif font-bold text-sm sm:text-lg shadow-sm shrink-0">
              GP
            </span>
            <span className="font-serif text-base sm:text-lg xl:text-xl font-bold tracking-tight text-white group-hover:text-[#D8AF55] transition-colors truncate max-w-[160px] xs:max-w-[220px] sm:max-w-none">
              Grand Palace Hotel
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#D8AF55] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_CONFIG.verifiedPhone.replace(/\s+/g, '')}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors py-1.5 px-2.5 rounded border border-white/15"
              aria-label={`Call Grand Palace Hotel at ${HOTEL_CONFIG.verifiedPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>{HOTEL_CONFIG.verifiedPhone}</span>
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Book Your Stay</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on WhatsApp"
              className="sm:hidden p-2 text-white bg-[#25D366] rounded-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1528] border-b border-white/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 py-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#D8AF55] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${HOTEL_CONFIG.verifiedPhone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C59A3F]" />
              <span>Call: {HOTEL_CONFIG.verifiedPhone}</span>
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Book Your Stay on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
