import React from 'react';
import { SAMPLE_TRAINERS, TrainerProfile } from '../data/gymData';
import { UserCheck, Shield, Sparkles } from 'lucide-react';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 sm:py-28 bg-[#0B0B0E] border-t border-[#1A1D26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
            <span>Coaching Staff</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Sample Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Movement Guides
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Coaching at Apex focuses on biomechanical guidance, mindful repetition, and creating a supportive training environment.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-amber-300/90 bg-amber-950/20 border border-amber-900/40 px-3 py-1.5 rounded-md">
            <Shield className="w-3.5 h-3.5" />
            <span>Note: These are fictional sample profiles created for this portfolio demo. No real certifications or degrees are claimed.</span>
          </div>
        </div>

        {/* Trainer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SAMPLE_TRAINERS.map((trainer: TrainerProfile) => (
            <div
              key={trainer.id}
              className="bg-[#12141C] border border-[#212431] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[#343A4E]"
            >
              <div>
                {/* Sample Badge */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-[#1E212D]">
                  <span className="text-[#CCFF00] font-mono font-medium">{trainer.sampleBadge}</span>
                  <UserCheck className="w-4 h-4 text-slate-400" />
                </div>

                {/* Trainer Initial Mark & Name */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1B1E2B] border border-[#282D3F] flex items-center justify-center font-display text-xl font-bold text-[#CCFF00]">
                    {trainer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase font-display">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{trainer.role}</p>
                  </div>
                </div>

                {/* Coaching Philosophy */}
                <div className="mb-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#CCFF00]" />
                    <span>Approach</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{trainer.coachingPhilosophy}&rdquo;
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-4 border-t border-[#1E212D]">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Guidance Areas
                  </p>
                  <ul className="space-y-1.5">
                    {trainer.focusAreas.map((focus, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#CCFF00] rounded-full" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Session Format */}
              <div className="mt-6 pt-4 border-t border-[#1E212D] text-xs text-slate-400">
                <span className="text-slate-400">Format: </span>
                <span className="text-slate-200">{trainer.sessionFormat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
