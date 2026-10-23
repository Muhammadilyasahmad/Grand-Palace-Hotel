import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/hotelData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'exterior' | 'dining' | 'facilities'>('all');
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
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-3">
              Hotel Photo Gallery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore genuine images of Grand Palace Hotel &amp; Restaurant Multan, featuring our exterior, guest rooms, reception lobby, clean bathrooms, and dining hall.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Photos
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('rooms');
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'rooms'
                  ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Rooms
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('exterior');
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'exterior'
                  ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exterior
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('dining');
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'dining'
                  ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Restaurant
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('facilities');
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'facilities'
                  ? 'bg-white text-[#0B1528] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lobby &amp; Baths
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] text-left"
              aria-label={`View ${item.title} photo`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#D8AF55] tracking-wider block mb-0.5">
                  {item.category}
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
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar of Lightbox */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10">
            <div>
              <p className="font-serif text-base sm:text-lg font-bold">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs text-slate-400">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
            
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full overflow-hidden">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Next Image"
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
