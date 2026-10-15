import React, { useState } from 'react';
import { validateEnquiryForm, EnquiryFormData, ValidationErrors, formatWhatsAppMessage } from '../utils/enquiry';
import { PROGRAMMES, MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { Send, CheckCircle2, RotateCcw, MessageSquare, AlertCircle, Shield } from 'lucide-react';

interface EnquiryFormProps {
  initialProgramme?: string;
  initialPlan?: string;
  onOpenWhatsAppWithMessage?: (msg: string) => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialProgramme = '',
  initialPlan = '',
  onOpenWhatsAppWithMessage,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredProgramme: initialProgramme || PROGRAMMES[0].name,
    preferredPlan: initialPlan || MEMBERSHIP_PLANS[1].name,
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  // Update when prop changes
  React.useEffect(() => {
    if (initialProgramme) {
      setFormData((prev) => ({ ...prev, preferredProgramme: initialProgramme }));
    }
  }, [initialProgramme]);

  React.useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, preferredPlan: initialPlan }));
    }
  }, [initialPlan]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredProgramme: PROGRAMMES[0].name,
      preferredPlan: MEMBERSHIP_PLANS[1].name,
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0B0E] border-t border-[#1A1D26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CCFF00] uppercase mb-2">
            <span>Membership &amp; Programme Enquiry</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Concept Demo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Start Your Enquiry
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions regarding facility tours, programme suitability, or membership tiers? 
            Submit a sample enquiry below.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400 bg-[#141620] border border-[#242838] px-3.5 py-1.5 rounded-md">
            <Shield className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Interactive front-end demo: no membership contract is created, and no payments are taken.</span>
          </div>
        </div>

        {/* Confirmation State or Form Card */}
        <div className="bg-[#12141C] border border-[#212534] rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {submittedData ? (
            /* Success / Demo Submission State */
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-display">
                Demo Enquiry Recorded
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{submittedData.fullName}</strong>. In an actual deployment, this enquiry would be routed to the Apex front-desk management console.
              </p>

              {/* Summary Card */}
              <div className="mt-6 p-5 bg-[#171924] border border-[#242939] rounded-lg max-w-lg mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#242939] pb-2">
                  <span className="text-slate-400">Preferred Programme:</span>
                  <span className="font-semibold text-[#CCFF00]">{submittedData.preferredProgramme}</span>
                </div>
                <div className="flex justify-between border-b border-[#242939] pb-2">
                  <span className="text-slate-400">Membership Tier:</span>
                  <span className="font-semibold text-white">{submittedData.preferredPlan}</span>
                </div>
                <div className="flex justify-between border-b border-[#242939] pb-2">
                  <span className="text-slate-400">Email Address:</span>
                  <span className="font-mono text-slate-200">{submittedData.email}</span>
                </div>
                {submittedData.phone && (
                  <div className="flex justify-between border-b border-[#242939] pb-2">
                    <span className="text-slate-400">Phone:</span>
                    <span className="font-mono text-slate-200">{submittedData.phone}</span>
                  </div>
                )}
                {submittedData.message && (
                  <div className="pt-1">
                    <span className="text-slate-400 block mb-1">Your Note:</span>
                    <p className="text-slate-300 italic bg-[#0F1118] p-2.5 rounded border border-[#1E2230]">
                      &ldquo;{submittedData.message}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {onOpenWhatsAppWithMessage && (
                  <button
                    type="button"
                    onClick={() => {
                      const msg = formatWhatsAppMessage({
                        clubName: GYM_INFO.clubName,
                        programme: submittedData.preferredProgramme,
                        plan: submittedData.preferredPlan,
                        senderName: submittedData.fullName,
                      });
                      onOpenWhatsAppWithMessage(msg);
                    }}
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp (Demo)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#1C202B] hover:bg-[#2A3142] text-slate-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 bg-[#171924] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#262B3B] focus:border-[#CCFF00]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 bg-[#171924] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#262B3B] focus:border-[#CCFF00]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Phone (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 bg-[#171924] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#262B3B] focus:border-[#CCFF00]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Programme */}
                <div>
                  <label htmlFor="preferredProgramme" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Interested Programme <span className="text-[#CCFF00]">*</span>
                  </label>
                  <select
                    id="preferredProgramme"
                    name="preferredProgramme"
                    value={formData.preferredProgramme}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171924] border border-[#262B3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                  >
                    {PROGRAMMES.map((p) => (
                      <option key={p.id} value={p.name} className="bg-[#171924] text-white">
                        {p.name}
                      </option>
                    ))}
                    <option value="General Facility Tour" className="bg-[#171924] text-white">
                      General Facility Tour
                    </option>
                  </select>
                </div>

                {/* Preferred Membership Plan */}
                <div>
                  <label htmlFor="preferredPlan" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Target Tier (Illustrative)
                  </label>
                  <select
                    id="preferredPlan"
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#171924] border border-[#262B3B] rounded-lg text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                  >
                    {MEMBERSHIP_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.name} className="bg-[#171924] text-white">
                        {plan.name} (₹{plan.monthlyPrice}/mo)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Questions or Training Objectives
                  </label>
                  <span className="text-[11px] text-slate-500">
                    {formData.message.length}/500 chars
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current movement background or when you would like to arrange an introductory walk-through..."
                  className={`w-full px-4 py-3 bg-[#171924] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#262B3B] focus:border-[#CCFF00]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Submitting validates form state. No account or payment agreement is generated.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Sample Enquiry</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
