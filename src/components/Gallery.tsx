import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Play, Video } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/hotelData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'exterior' | 'lobby' | 'parking' | 'video'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Hotel Media</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-3">
              Genuine Photo &amp; Video Gallery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real photographs and video of Grand Palace Hotel &amp; Restaurant Multan. View our exterior courtyard, reception desk, lobby lounge, family rooms, triple bedrooms, and 24/7 security.
            </p>
          </div>

          {/* Filter Tabs (Smooth horizontal swipe on mobile, right-aligned on desktop) */}
          <div className="w-full md:w-auto overflow-hidden">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-full overflow-x-auto no-scrollbar scroll-smooth">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Media ({GALLERY_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('rooms');
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeCategory === 'rooms'
                    ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Guest Rooms
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('lobby');
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeCategory === 'lobby'
                    ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Reception &amp; Lobby
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('parking');
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeCategory === 'parking'
                    ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Parking &amp; Security
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('video');
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                  activeCategory === 'video'
                    ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] text-left"
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
              
              {/* If Video, show prominent Play button overlay */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#C59A3F] text-[#0B1528] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-[#0B1528] ml-0.5" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#D8AF55] tracking-wider block mb-0.5">
                  {item.isVideo ? 'Featured Video' : item.category}
                </span>
                <p className="font-serif text-sm font-semibold leading-tight line-clamp-1">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Media Lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar of Lightbox */}
          <div className="flex items-center justify-between gap-4 text-white max-w-7xl mx-auto w-full z-10">
            <div className="min-w-0 flex-1">
              <p className="font-serif text-base sm:text-lg font-bold truncate">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs text-slate-400">
                Media {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
            
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] shrink-0"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Media Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full overflow-hidden">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Previous Media"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {filteredItems[lightboxIndex].isVideo && filteredItems[lightboxIndex].videoUrl ? (
              <div className="w-full max-w-3xl aspect-[9/16] sm:aspect-video max-h-[75vh] flex items-center justify-center bg-black rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={filteredItems[lightboxIndex].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML video.
                </video>
              </div>
            ) : (
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            )}

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Next Media"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption of Lightbox */}
          <div className="max-w-3xl mx-auto text-center text-slate-300 text-xs sm:text-sm px-4">
            <p>{filteredItems[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
