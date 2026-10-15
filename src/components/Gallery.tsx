import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Strength', 'Cardio', 'Functional', 'Studio'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0B0B0E] border-t border-[#1A1D26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
              <span>Visual Tour</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400">Club Atmosphere</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
              Facilities Gallery
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the architectural spaces, training floor layout, and ambient equipment zones of Apex Fitness Club.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#13151D] border border-[#212431] rounded-lg" role="tablist" aria-label="Gallery Filters">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#CCFF00] text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative bg-[#13151D] border border-[#212532] rounded-xl overflow-hidden cursor-pointer aspect-4/3 transition-all duration-300 hover:border-[#CCFF00]/50 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Card Meta Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#CCFF00] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold uppercase text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10">
            <div className="text-xs font-mono text-[#CCFF00] tracking-wider uppercase">
              {filteredItems[lightboxIndex].category} · Photo {lightboxIndex + 1} of {filteredItems.length}
            </div>
            <button
              onClick={handleCloseLightbox}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Image Stage with Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#CCFF00] text-white hover:text-black transition-colors z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#CCFF00] text-white hover:text-black transition-colors z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption */}
          <div
            className="max-w-2xl mx-auto w-full text-center text-slate-300 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold uppercase text-white font-display">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {filteredItems[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
