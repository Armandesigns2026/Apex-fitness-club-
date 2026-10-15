import React, { useState } from 'react';
import { FACILITIES, FacilityItem } from '../data/gymData';
import { Check, Layers } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeFacilityId, setActiveFacilityId] = useState<string>(FACILITIES[0].id);

  const activeFacility: FacilityItem =
    FACILITIES.find((f) => f.id === activeFacilityId) || FACILITIES[0];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#0B0B0E] border-t border-[#1A1D26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
            <span>Facility Infrastructure</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Engineered Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Built for Serious Focus.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every square foot is organized with ample spacing between lifting stations, dedicated sprint turf, and acoustic-treated recovery zones.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#14161E] border border-[#232734] rounded-lg mb-8 max-w-3xl" role="tablist" aria-label="Facility Zones">
          {FACILITIES.map((facility) => {
            const isActive = facility.id === activeFacilityId;
            return (
              <button
                key={facility.id}
                role="tab"
                id={`tab-${facility.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${facility.id}`}
                onClick={() => setActiveFacilityId(facility.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#CCFF00] text-black shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#1E222D]'
                }`}
              >
                {facility.title}
              </button>
            );
          })}
        </div>

        {/* Active Facility Card Presentation */}
        <div
          id={`panel-${activeFacility.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeFacility.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#12131A] border border-[#202430] rounded-xl overflow-hidden shadow-xl"
        >
          {/* Facility Media */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-[#171922] overflow-hidden">
            <img
              src={activeFacility.image}
              alt={`${activeFacility.title} at Apex Fitness Club`}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#CCFF00] uppercase tracking-wider">
              {activeFacility.specs}
            </div>
          </div>

          {/* Facility Details */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#CCFF00] font-semibold mb-1">
                {activeFacility.subtitle}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-display">
                {activeFacility.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeFacility.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#222634]">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Equipment &amp; Zone Highlights</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeFacility.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="p-0.5 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#222634] flex items-center justify-between text-xs text-slate-400">
              <span>Member Floor Access</span>
              <span className="font-mono text-slate-300">Clean footwear required</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
