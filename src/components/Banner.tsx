import React, { useState } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Banner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <aside aria-label="Concept Demo Notice" className="bg-[#14161C] border-b border-[#232733] text-xs text-slate-300 py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#CCFF00] rounded-sm" aria-hidden="true" />
            <span className="font-semibold tracking-wider text-slate-100 uppercase">
              {GYM_INFO.conceptLabel}
            </span>
            <span className="hidden sm:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-slate-400">
              Fictional Fitness Club &amp; Illustrative Pricing
            </span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-1.5 text-xs text-[#CCFF00] hover:text-white transition-colors cursor-pointer underline underline-offset-2"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Demo Details</span>
          </button>
        </div>
      </aside>

      {/* Info Dialog */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#14151B] border border-[#272B38] text-slate-200 max-w-lg w-full rounded-xl p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#CCFF00]/10 text-[#CCFF00] shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 id="demo-modal-title" className="text-xl font-bold text-white tracking-wide uppercase font-display">
                  Concept Portfolio Demo
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Designed &amp; Built by Weblith Studio</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-[#232733] pt-4">
              <p>
                <strong className="text-white">Apex Fitness Club</strong> is a fictional gym brand developed as a high-performance web experience demonstration by <strong>Weblith Studio</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                <li>All membership rates (₹999, ₹1,499, ₹1,999) are strictly illustrative.</li>
                <li>No real financial transactions or memberships are processed.</li>
                <li>Trainer profiles are fictional examples illustrating interface layout.</li>
                <li>Contact phone number, timings, and address are demo placeholders.</li>
              </ul>
              <p className="text-xs text-slate-400 pt-2 border-t border-[#232733]">
                For actual client inquiries regarding custom web engineering and branding, contact Weblith Studio.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold text-xs tracking-wider uppercase rounded-md transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
