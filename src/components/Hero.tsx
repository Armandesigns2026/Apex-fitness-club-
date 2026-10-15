import React from 'react';
import { ArrowDown, Dumbbell, Compass, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProgrammes: () => void;
  onEnquireMembership: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProgrammes, onEnquireMembership }) => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0B0B0E]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_gym_apex_1792073019888.jpg"
          alt="Apex Fitness Club interior showing barbell racks and electric lime ambient lighting"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Graceful CSS fallback if image fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Subtle radial & linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/60 to-[#0B0B0E]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0B0E]/40 to-[#0B0B0E]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker (No Pill) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#CCFF00] uppercase mb-4">
            <span>Apex Fitness Club</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Concept Portfolio Demo</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-display leading-[1.05] text-balance">
            Build Strength. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#CCFF00]">
              Find Your Momentum.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Movement is built on consistency, progressive intention, and sustainable habits. 
            Apex Fitness Club brings together dedicated lifting stations, free weights, an athletic turf track, 
            and mindful recovery in a purpose-built environment.
          </p>

          {/* CTA Group */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onExploreProgrammes}
              className="px-6 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold text-sm tracking-wider uppercase rounded-md transition-all shadow-lg hover:shadow-[#CCFF00]/20 flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Explore Programmes</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={onEnquireMembership}
              className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold text-sm tracking-wider uppercase rounded-md border border-slate-600 hover:border-slate-300 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
            >
              Enquire About Membership
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            * Illustrative concept showcase. No medical claims or guaranteed physical transformations.
          </p>
        </div>
      </div>

      {/* Full-width Athletic Features Ribbon */}
      <div className="relative z-10 border-t border-[#1E222D] bg-[#0E1015]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#171922] text-[#CCFF00] shrink-0">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 font-medium">Facility</p>
                <p className="text-sm font-semibold text-white">5 Training Zones</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#171922] text-[#CCFF00] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 font-medium">Disciplines</p>
                <p className="text-sm font-semibold text-white">4 Core Programmes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#171922] text-[#CCFF00] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 font-medium">Weekly Schedule</p>
                <p className="text-sm font-semibold text-white">Open 7 Days</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#171922] text-[#CCFF00] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 font-medium">Location</p>
                <p className="text-sm font-semibold text-white">Tohana, Haryana (Demo)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
