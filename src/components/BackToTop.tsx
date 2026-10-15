import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenWhatsApp: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsApp }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Quick Actions"
    >
      {/* WhatsApp Quick Launcher */}
      <button
        type="button"
        onClick={onOpenWhatsApp}
        className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
        aria-label="Enquire on WhatsApp (Demo)"
        title="WhatsApp Enquiry (Demo)"
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#13151D] hover:bg-[#CCFF00] text-slate-300 hover:text-black border border-[#252A3A] shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
