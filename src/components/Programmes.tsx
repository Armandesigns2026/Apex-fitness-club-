import React from 'react';
import { PROGRAMMES, ProgrammeItem } from '../data/gymData';
import { ArrowRight, Clock, Target, Gauge } from 'lucide-react';

interface ProgrammesProps {
  onSelectProgramme: (programmeName: string) => void;
}

export const Programmes: React.FC<ProgrammesProps> = ({ onSelectProgramme }) => {
  return (
    <section id="programmes" className="py-20 sm:py-28 bg-[#0E1015] border-t border-[#1C1F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
              <span>Coaching &amp; Frameworks</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400">Movement Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
              Training Programmes
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Structured movement pathways focused on biomechanical consistency, safe progression, and sustained fitness.
            </p>
          </div>
          <div className="text-xs text-slate-400 max-w-xs">
            * Note: Descriptions are educational and non-medical. Training adaptations vary individually.
          </div>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROGRAMMES.map((prog: ProgrammeItem) => (
            <div
              key={prog.id}
              className="bg-[#13151D] border border-[#212532] hover:border-[#383E52] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 group shadow-lg"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-4 text-xs text-slate-400 mb-3">
                  <span className="text-[#CCFF00] font-semibold uppercase tracking-wider">{prog.category}</span>
                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{prog.sessionDuration}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white uppercase font-display group-hover:text-[#CCFF00] transition-colors">
                  {prog.name}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {prog.summary}
                </p>

                {/* Key Focus Points */}
                <div className="mt-6 pt-5 border-t border-[#1F232F]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>Programme Focus</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {prog.focus.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Intensity & Best For */}
                <div className="mt-5 pt-4 border-t border-[#1F232F] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Gauge className="w-3.5 h-3.5 text-slate-400" />
                    <span>Pacing:</span>
                    <span className="text-slate-200 font-semibold">{prog.intensity}</span>
                  </div>
                  <div className="text-slate-400 text-right">
                    <span className="text-slate-400">Target: </span>
                    <span className="text-slate-300">{prog.bestFor}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#1F232F]">
                <button
                  type="button"
                  onClick={() => onSelectProgramme(prog.name)}
                  className="w-full py-2.5 px-4 bg-[#191D27] hover:bg-[#CCFF00] text-slate-200 hover:text-black text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Enquire for {prog.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
