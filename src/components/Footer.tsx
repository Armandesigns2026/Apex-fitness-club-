import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { ArrowUp, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-[#181B24] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A1D27]">
          
          {/* Brand & Studio Attribution */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#CCFF00] skew-x-[-15deg] inline-block" aria-hidden="true" />
              <span className="text-xl font-bold uppercase text-white font-display tracking-tight">
                {GYM_INFO.clubName}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A high-performance modern fitness club digital experience designed and engineered by <strong>{GYM_INFO.creatorStudio}</strong> as a portfolio concept showcase.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#12141C] border border-[#202534] rounded text-slate-300 font-mono">
                Weblith Studio Portfolio Concept
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#CCFF00] transition-colors">Home &amp; Overview</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#CCFF00] transition-colors">Facilities &amp; Zones</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#CCFF00] transition-colors">Training Programmes</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#CCFF00] transition-colors">Movement Guides</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#CCFF00] transition-colors">Membership Tiers</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#CCFF00] transition-colors">Club Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#CCFF00] transition-colors">Enquiry Form</a>
              </li>
            </ul>
          </div>

          {/* Illustrative Contact Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Illustrative Coordinates
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <span className="font-mono">{GYM_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <span>{GYM_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141620] hover:bg-[#1E2332] text-slate-200 hover:text-[#CCFF00] border border-[#232838] rounded text-xs transition-colors cursor-pointer"
              >
                <span>Launch WhatsApp Modal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-[11px] text-slate-400 leading-relaxed">
            <div className="flex items-center gap-1.5 text-slate-400 font-semibold mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Concept Disclaimer</span>
            </div>
            <p>
              {GYM_INFO.disclaimer}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[11px] text-slate-400">
              Crafted by <strong>{GYM_INFO.creatorStudio}</strong>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 bg-[#12141C] hover:bg-[#CCFF00] text-slate-300 hover:text-black rounded-lg border border-[#222736] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
