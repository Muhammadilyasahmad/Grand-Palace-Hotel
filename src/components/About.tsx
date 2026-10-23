import React from 'react';
import { ShieldCheck, Clock, MapPin, Sparkles, MessageCircle, Car, CheckCircle } from 'lucide-react';
import { HOTEL_CONFIG, REAL_HOTEL_ASSETS } from '../data/hotelData';
import { formatWhatsAppUrl } from '../utils/booking';

export const About: React.FC = () => {
  const whatsAppUrl = formatWhatsAppUrl(
    HOTEL_CONFIG.verifiedWhatsAppNumber,
    "Assalam-o-Alaikum, I would like to learn more about Grand Palace Hotel Multan and room reservations."
  );

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Real Hotel Photography Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Real Reception Desk Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={REAL_HOTEL_ASSETS.receptionDeskStaff}
                alt="Grand Palace Hotel Multan real front desk with reception staff attending guest"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B1528]/80 text-[#D8AF55] text-xs font-semibold mb-1 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour Active Reception</span>
                </div>
                <p className="font-serif text-lg font-bold">
                  Professional Reception Staff in Uniform
                </p>
                <p className="text-xs text-slate-300">
                  Ready to serve you day and night at Railway Road, Multan
                </p>
              </div>
            </div>

            {/* Secondary Dual Real Photos: Security Guard + Grand Lobby */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-900 aspect-[4/3] group">
                <img
                  src={REAL_HOTEL_ASSETS.securityEntrance}
                  alt="Grand Palace Hotel 24/7 dedicated security guard at main entrance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">24/7 Security Guard</p>
                  <p className="text-[10px] text-slate-300">Stationed at entrance</p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-900 aspect-[4/3] group">
                <img
                  src={REAL_HOTEL_ASSETS.mainLobbyLounge}
                  alt="Grand Palace Hotel Multan reception lounge and chandelier"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">Grand Reception Lobby</p>
                  <p className="text-[10px] text-slate-300">Chandelier &amp; sofa lounge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Authentic Hotel Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Clean Section Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Genuine Hospitality · Multan</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-6">
              Authentic Comfort &amp; Hospitality on Railway Road
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Located right on <strong>Railway Road in Multan</strong>, Grand Palace Hotel &amp; Restaurant is designed to provide guests, families, and train commuters with safe, hygienic, and affordable lodging in Multan.
              </p>
              <p>
                Our premises boast an expansive courtyard, covered car parking area, around-the-clock uniformed security guard at the gate, and an active front desk counter where our courteous staff assists you promptly at any hour.
              </p>
              <p>
                Every room is equipped with split air conditioning, clean white bedding, high-speed Wi-Fi, and attached bathrooms. We offer specialized accommodations including <strong>4-Bed Family Quad Rooms</strong>, <strong>Triple Rooms</strong>, and <strong>Deluxe Double Rooms</strong>.
              </p>
            </div>

            {/* Verified Essential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0B1528] text-[#C59A3F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Railway Road Location</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Just 3–5 minutes from Multan Railway Station and Cantt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0B1528] text-[#C59A3F] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">24/7 Armed Security</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Active security guard stationed at gate for family peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0B1528] text-[#C59A3F] shrink-0 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Courtyard &amp; Covered Parking</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Secure on-site parking for guest cars, SUVs, and vans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0B1528] text-[#C59A3F] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">24/7 Front Desk</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Check in smoothly any time of day or night.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact & WhatsApp */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Message Front Desk on WhatsApp</span>
              </a>
              <a
                href="#rooms"
                className="text-sm font-semibold text-slate-700 hover:text-[#0B1528] transition-colors underline underline-offset-4"
              >
                View Rooms &amp; Bed Options →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
