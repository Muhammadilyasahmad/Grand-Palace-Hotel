import React, { useState } from 'react';
import { Bed, Users, Maximize2, Check, MessageCircle, Sparkles } from 'lucide-react';
import { ROOMS_DATA, RoomCategory, HOTEL_CONFIG } from '../data/hotelData';
import { formatWhatsAppUrl, buildRoomInquiryMessage } from '../utils/booking';

interface RoomsProps {
  onSelectRoomForBooking?: (roomName: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.id === selectedCategory);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-4">
            Rooms &amp; Suites at Grand Palace Hotel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose from five tailored room categories suited for solo visitors, couples, business travelers, and families visiting Multan. All rooms feature individual air conditioning, free Wi-Fi, and attentive room service.
          </p>
        </div>

        {/* Category Filter Buttons (Smooth horizontal swipe on mobile, wrap on tablet/desktop) */}
        <div className="w-full overflow-hidden mb-8 sm:mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-full overflow-x-auto no-scrollbar scroll-smooth">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#0B1528] shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Categories ({ROOMS_DATA.length})
            </button>
            {ROOMS_DATA.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedCategory(r.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  selectedCategory === r.id
                    ? 'bg-white text-[#0B1528] shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r.name.replace(' Room', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => {
            const whatsAppUrl = formatWhatsAppUrl(
              HOTEL_CONFIG.verifiedWhatsAppNumber,
              buildRoomInquiryMessage(room.name)
            );

            return (
              <div
                key={room.id}
                className="group flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Room Image with Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={room.image}
                    alt={`${room.name} at Grand Palace Hotel Multan`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Capacity indicator */}
                  <div className="absolute bottom-3 left-3 bg-[#0B1528]/85 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 border border-white/10">
                    <Users className="w-3.5 h-3.5 text-[#D8AF55]" />
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0B1528] group-hover:text-[#A87D26] transition-colors mb-1.5">
                      {room.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mb-3">
                      {room.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {room.description}
                    </p>

                    {/* Quick Specs - unboxed metadata */}
                    <div className="flex items-center gap-4 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#C59A3F]" />
                        <span>{room.bedType}</span>
                      </div>
                      <span className="text-slate-300">·</span>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C59A3F]" />
                        <span>{room.roomSize}</span>
                      </div>
                    </div>

                    {/* Verified Room Features List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                        Confirmed Features:
                      </h4>
                      <ul className="space-y-1.5">
                        {room.verifiedFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                      <span>Rate &amp; Availability:</span>
                      <span className="font-semibold text-slate-800">Inquire via WhatsApp</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                      >
                        <MessageCircle className="w-4 h-4 fill-white stroke-none shrink-0" />
                        <span className="truncate">Check Availability</span>
                      </a>
                      
                      {onSelectRoomForBooking && (
                        <button
                          type="button"
                          onClick={() => {
                            onSelectRoomForBooking(room.name);
                            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap text-center cursor-pointer"
                        >
                          Fill Form
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <strong>Note on Tariff:</strong> As per verified hospitality standards, room tariffs are updated per season and booking duration. We do not display unverified fixed rates. Contact our front desk directly on WhatsApp for real-time rates and deals.
          </p>
          <a
            href={formatWhatsAppUrl(HOTEL_CONFIG.verifiedWhatsAppNumber, "Assalam-o-Alaikum, please share today's room rates for Grand Palace Hotel Multan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0B1528] hover:text-[#C59A3F] transition-colors whitespace-nowrap underline shrink-0"
          >
            Ask for Today's Rates →
          </a>
        </div>

      </div>
    </section>
  );
};
