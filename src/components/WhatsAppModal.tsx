import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { buildWhatsAppUrl } from '../utils/enquiry';
import { MessageSquare, X, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledMessage,
}) => {
  const defaultMsg =
    prefilledMessage ||
    `Hello ${GYM_INFO.clubName}, I am enquiring about membership options and programmes at the Tohana club. (Concept Demo)`;

  const [message, setMessage] = useState(defaultMsg);
  const [testNumber, setTestNumber] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync when prop changes
  React.useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  if (!isOpen) return null;

  const targetNumber = testNumber.trim() || GYM_INFO.phone;
  const { url, isConfigured } = buildWhatsAppUrl(targetNumber, message);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#13151D] border border-[#252A3A] text-slate-200 max-w-lg w-full rounded-xl p-6 sm:p-7 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-[#25D366]/15 text-[#25D366] shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 id="whatsapp-modal-title" className="text-xl font-bold uppercase text-white font-display">
              WhatsApp Enquiry Integration
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Direct Messaging Architecture &amp; Fallback</p>
          </div>
        </div>

        {/* Notice about placeholder number */}
        <div className="p-3 bg-[#1A1E2B] border border-[#272D3E] rounded-lg text-xs text-slate-300 mb-5 flex items-start gap-2">
          <HelpCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">Concept Demo Safe Fallback</p>
            <p className="text-slate-400 mt-0.5">
              The gym phone is set to placeholder <code className="text-[#CCFF00] font-mono">{GYM_INFO.phone}</code>. You can copy the prefilled enquiry message below, or enter your own number to test the link.
            </p>
          </div>
        </div>

        {/* Prefilled Message Box */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-semibold mb-2">
            <span>Prefilled Enquiry Text</span>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="text-xs text-[#CCFF00] hover:text-white inline-flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>
          </div>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#0F1118] border border-[#232838] rounded-md text-xs font-mono text-slate-200 focus:outline-none focus:border-[#CCFF00] resize-none"
          />
        </div>

        {/* Optional Test Number Field */}
        <div className="mb-6">
          <label htmlFor="testNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Test With Real Phone Number (Optional)
          </label>
          <input
            type="text"
            id="testNumber"
            value={testNumber}
            onChange={(e) => setTestNumber(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-[#0F1118] border border-[#232838] rounded-md text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#CCFF00]"
          />
          <p className="mt-1 text-[11px] text-slate-500">
            {isConfigured
              ? `Ready to launch WhatsApp to: ${targetNumber}`
              : 'Fallback mode active: will launch WhatsApp generic message draft.'}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#232838]">
          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#1C202B] hover:bg-[#282E3E] text-slate-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#CCFF00]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Message'}</span>
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <span>Open in WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
