import React from 'react';
import { ShieldCheck, Clock, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
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
          
          {/* Column 1: Genuine Hotel Reception / Lobby Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={HOTEL_CONFIG.receptionImage}
                alt="Grand Palace Hotel Multan 24-hour reception desk and lobby"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif text-lg font-semibold tracking-wide">
                  24-Hour Welcoming Front Desk
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Railway Road, Multan, Pakistan
                </p>
              </div>
            </div>

            {/* Quiet Trust Card - Zero Pill discipline */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#C59A3F]/30 flex items-center justify-center text-[#C59A3F] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Verified Hospitality</h4>
                  <p className="text-xs text-slate-500">Publicly listed property on Railway Road</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-semibold text-[#0B1528] block">24/7 Service</span>
                <span className="text-[11px] text-slate-400">Front Desk Support</span>
              </div>
            </div>
          </div>

          {/* Column 2: Authentic Hotel Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Clean Section Tag - unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About The Property</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-6">
              Warm Multani Hospitality & Convenient Stay on Railway Road
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Situated strategically on <strong>Railway Road in Multan</strong>, Grand Palace Hotel &amp; Restaurant welcomes business travelers, visiting families, and railway passengers seeking a reliable, comfortable haven in the City of Saints.
              </p>
              <p>
                Our property is dedicated to guest comfort and practical convenience. Whether you are arriving late from Multan Railway Station or setting out to explore historic shrines and vibrant bazaars, our 24-hour reception team is on hand to assist you every hour of the day.
              </p>
              <p>
                With air-conditioned guest rooms, secure on-site parking, dedicated room service, and an in-house restaurant serving wholesome meals, we ensure your stay in Multan remains peaceful and pleasant.
              </p>
            </div>

            {/* Verified Essential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0B1528] text-[#C59A3F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Prime Location</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Minutes from Multan Railway Station, Cantt, and historic landmarks.
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
                    Seamless round-the-clock check-in and friendly customer support.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Inquire with Front Desk</span>
              </a>
              <a
                href="#rooms"
                className="text-sm font-semibold text-slate-700 hover:text-[#0B1528] transition-colors underline underline-offset-4"
              >
                View Available Rooms →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
