import React from 'react';
import { MapPin, Navigation, Train, Building2, Landmark as LandmarkIcon, Plane, Sparkles } from 'lucide-react';
import { HOTEL_CONFIG, NEARBY_LANDMARKS } from '../data/hotelData';

export const Location: React.FC = () => {
  const getLandmarkIcon = (name: string) => {
    if (name.includes('Railway')) return <Train className="w-4 h-4" />;
    if (name.includes('Airport')) return <Plane className="w-4 h-4" />;
    if (name.includes('Shrines')) return <LandmarkIcon className="w-4 h-4" />;
    return <Building2 className="w-4 h-4" />;
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Map &amp; Directions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-4">
            Hotel Location &amp; Proximity
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated on Railway Road, Grand Palace Hotel &amp; Restaurant is ideally positioned for train travelers, business guests, and tourists visiting Multan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 min-h-[380px] lg:min-h-[480px]">
            <iframe
              title="Grand Palace Hotel Multan Location on Railway Road"
              src={HOTEL_CONFIG.googleMapsEmbedUrl}
              className="w-full flex-1 border-0 min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <span className="font-medium">Railway Road, Multan (Postal Code: {HOTEL_CONFIG.postalCode})</span>
              </div>
              <a
                href={HOTEL_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B1528] hover:bg-[#1E3250] rounded-lg shadow-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Details & Landmark Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#0B1528] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C59A3F]" />
                <span>Verified Address</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium mb-3">
                {HOTEL_CONFIG.address}
              </p>
              <p className="text-xs text-slate-500">
                * Note: Specifically located on Railway Road (Railway Colony, Basti Saddu Hassan). Distinct from other unrelated Grand properties in the city.
              </p>
            </div>

            {/* Proximity Distances */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex-1 flex flex-col justify-center">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                Distance to Key Multan Landmarks:
              </h4>

              <div className="space-y-3.5">
                {NEARBY_LANDMARKS.map((lm, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-[#FAF9F6] text-[#C59A3F] mt-0.5 shrink-0 border border-slate-200/60">
                        {getLandmarkIcon(lm.name)}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                          {lm.name}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {lm.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#0B1528] block">
                        {lm.distance}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {lm.driveTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
