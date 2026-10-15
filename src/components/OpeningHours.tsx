import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Clock, MapPin, Phone, Mail, Copy, Check, Navigation, Info } from 'lucide-react';

export const OpeningHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0E1015] border-t border-[#1C1F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
            <span>Operating Schedule &amp; Access</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Placeholder Details</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Opening Hours &amp; Location
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Illustrative schedule and contact coordinates for the Apex Fitness Club facility in Tohana.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-amber-300/90 bg-amber-950/20 border border-amber-900/40 px-3 py-1.5 rounded-md">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>All operating hours, phone numbers, and street addresses are demo placeholders.</span>
          </div>
        </div>

        {/* Schedule & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Opening Hours Card */}
          <div className="lg:col-span-5 bg-[#14161F] border border-[#232734] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#CCFF00] mb-4">
                <Clock className="w-4 h-4" />
                <span>Weekly Facility Timetable</span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase text-white font-display mb-6">
                Hours of Operation
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-[#1B1E2B] border border-[#272C3E] rounded-lg">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-semibold mb-1">
                    <span>Monday to Friday</span>
                    <span className="text-[#CCFF00]">Full Floor</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                    {GYM_INFO.hoursWeekday}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Lifting stations, cardio suite &amp; locker rooms open</p>
                </div>

                <div className="p-4 bg-[#1B1E2B] border border-[#272C3E] rounded-lg">
                  <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-semibold mb-1">
                    <span>Saturday &amp; Sunday</span>
                    <span className="text-[#CCFF00]">Weekend Hours</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                    {GYM_INFO.hoursWeekend}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Open training &amp; weekend recovery sessions</p>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-400 space-y-1">
                <p>• Floor entry closes 45 minutes prior to session shutdown.</p>
                <p>• Towel and indoor training shoes required at all times.</p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#222736] text-xs text-slate-400">
              <span className="text-slate-400">Status: </span>
              <span className="text-slate-300">Illustrative Schedule (Concept Demo)</span>
            </div>
          </div>

          {/* Contact Coordinates & Map Schematic */}
          <div className="lg:col-span-7 bg-[#14161F] border border-[#232734] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#CCFF00] mb-4">
                <Navigation className="w-4 h-4" />
                <span>Facility Coordinates</span>
              </div>

              <h3 className="text-2xl font-bold uppercase text-white font-display mb-6">
                Club Location &amp; Contact
              </h3>

              {/* Coordinates List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#1A1D28] border border-[#262B3B] rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-[#CCFF00] font-semibold uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Address (Placeholder)</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {GYM_INFO.address}
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#CCFF00] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#CCFF00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Address Copied' : 'Copy Demo Address'}</span>
                  </button>
                </div>

                <div className="p-4 bg-[#1A1D28] border border-[#262B3B] rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-[#CCFF00] font-semibold uppercase mb-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone (Placeholder)</span>
                  </div>
                  <p className="text-sm font-mono font-semibold text-white">
                    {GYM_INFO.phoneDisplay}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{GYM_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Stylized Architectural Location Schematic Card */}
              <div className="relative rounded-lg overflow-hidden border border-[#262B3B] bg-[#0E1016] p-6 text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 max-w-md mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#181C26] border border-[#2A3142] flex items-center justify-center mx-auto mb-3 text-[#CCFF00]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold uppercase text-white font-display">
                    Tohana Facility Campus
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Centrally situated in Tohana with dedicated ground-level bicycle stands, member vehicle parking, and direct arterial road transit access.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 bg-[#171A24] border border-[#242A38] rounded">Dedicated Parking</span>
                    <span className="px-2.5 py-1 bg-[#171A24] border border-[#242A38] rounded">Bike Racks</span>
                    <span className="px-2.5 py-1 bg-[#171A24] border border-[#242A38] rounded">Ground Floor Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#222736] text-[11px] text-slate-400">
              * Demonstration only: not connected to actual navigation GPS coordinates.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
