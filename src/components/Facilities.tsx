import React from 'react';
import {
  Wifi,
  Car,
  Wind,
  Clock,
  UtensilsCrossed,
  Users,
  Coffee,
  Zap,
  Sparkles
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
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
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
            <span>Hotel Amenities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-4">
            Verified Hotel Facilities &amp; Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We focus on genuine hospitality essentials that matter most to our guests: clean air-conditioned comfort, continuous power backup, high-speed internet, secure parking, and round-the-clock service.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-slate-200 group-hover:bg-[#0B1528] text-[#C59A3F] group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                  {getIcon(facility.iconName)}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-2 group-hover:text-[#A87D26] transition-colors">
                  {facility.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              {facility.highlight && (
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {facility.highlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note on Verified Amenities */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            * All listed facilities are verified for Grand Palace Hotel &amp; Restaurant Multan. We do not advertise unverified amenities (such as swimming pools or gyms) to maintain honest, dependable service for every guest.
          </p>
        </div>

      </div>
    </section>
  );
};
