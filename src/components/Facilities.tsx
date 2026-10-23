import React from 'react';
import {
  Wifi,
  Car,
  Wind,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  Coffee
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/hotelData';

export const Facilities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wifi':
        return <Wifi className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Hotel Amenities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-4">
            Verified Hotel Facilities &amp; Security
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Genuine hospitality backed by real photographic evidence: secure on-site parking, 24/7 armed security guard at entrance, air-conditioned rooms, welcoming reception, and spotless guest corridors.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {facility.realImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={facility.realImage}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-[#0B1528]/85 text-[#D8AF55] backdrop-blur-xs">
                    {getIcon(facility.iconName)}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {!facility.realImage && (
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-slate-200 text-[#C59A3F] flex items-center justify-center mb-4">
                      {getIcon(facility.iconName)}
                    </div>
                  )}

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1528] mb-1.5 group-hover:text-[#A87D26] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {facility.description}
                  </p>
                </div>

                {facility.highlight && (
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {facility.highlight}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
