import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-md border-b border-[#1E212B] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white uppercase font-display whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] rounded"
          >
            <span className="w-2.5 h-6 bg-[#CCFF00] skew-x-[-15deg] inline-block" aria-hidden="true" />
            <span>Apex Fitness Club</span>
          </a>

          {/* Zone 2: 5 Concise Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#CCFF00]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-[#CCFF00] transition-colors py-2 px-3 border border-slate-700 hover:border-[#CCFF00] rounded-md whitespace-nowrap shrink-0"
              aria-label="Enquire on WhatsApp (Demo)"
            >
              WhatsApp Demo
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black text-xs font-bold tracking-wider uppercase rounded-md transition-colors whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232733] bg-[#0E1015] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#CCFF00] hover:bg-[#161922] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#1F232D] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 px-4 text-center border border-slate-700 text-slate-200 hover:text-[#CCFF00] text-xs font-bold uppercase tracking-wider rounded-md"
            >
              WhatsApp Enquiry (Demo)
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 px-4 text-center bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#b8e600] transition-colors"
            >
              Enquire About Membership
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
