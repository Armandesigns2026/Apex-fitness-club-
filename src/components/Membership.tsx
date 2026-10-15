import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="membership" className="py-20 sm:py-28 bg-[#0E1015] border-t border-[#1C1F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
            <span>Illustrative Membership</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Concept Rates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Transparent Club Tiers
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose a tier suited to your weekly routine. All prices and benefits displayed here are purely illustrative sample figures for this concept demo.
          </p>

          {/* Interactive Billing View Toggle (Functional Buttons) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#14161F] border border-[#232735] rounded-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                billingCycle === 'monthly'
                  ? 'bg-[#CCFF00] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                billingCycle === 'quarterly'
                  ? 'bg-[#CCFF00] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quarterly View (3 Months)
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>No surprise fees · Illustrative pricing demo · No payments processed</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice;
            const cadence = billingCycle === 'monthly' ? '/ month' : '/ quarter';

            return (
              <div
                key={plan.id}
                className={`relative bg-[#13151D] border rounded-xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl ${
                  plan.popular
                    ? 'border-[#CCFF00] ring-1 ring-[#CCFF00]/40'
                    : 'border-[#212533] hover:border-[#383F52]'
                }`}
              >
                {/* Popular Marker */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black text-[11px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full shadow">
                    Most Popular Tier
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold uppercase text-white font-display">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Illustrative
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 min-h-[32px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="my-6 pt-5 pb-5 border-y border-[#202432]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-400">₹</span>
                      <span className="text-4xl sm:text-5xl font-bold text-white font-mono tabular-nums tracking-tight">
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider ml-1">
                        {cadence}
                      </span>
                    </div>
                    {billingCycle === 'quarterly' && (
                      <p className="mt-1 text-[11px] text-slate-400">
                        Approx. ₹{Math.round(plan.quarterlyPrice / 3).toLocaleString('en-IN')}/mo equivalent
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Included In This Plan:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Enquiry Action */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-md'
                        : 'bg-[#1C202B] hover:bg-[#2A3040] text-white hover:text-[#CCFF00]'
                    }`}
                  >
                    <span>Enquire For {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="mt-2 text-[10px] text-center text-slate-400">
                    * Concept enquiry only. No automated billing.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
