/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Facilities } from './components/Facilities';
import { Programmes } from './components/Programmes';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { OpeningHours } from './components/OpeningHours';
import { EnquiryForm } from './components/EnquiryForm';
import { WhatsAppModal } from './components/WhatsAppModal';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/BackToTop';

export default function App() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [customWhatsAppMsg, setCustomWhatsAppMsg] = useState<string | undefined>(undefined);
  const [selectedProgramme, setSelectedProgramme] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleOpenWhatsApp = (customMsg?: string) => {
    setCustomWhatsAppMsg(customMsg);
    setIsWhatsAppOpen(true);
  };

  const handleCloseWhatsApp = () => {
    setIsWhatsAppOpen(false);
    setCustomWhatsAppMsg(undefined);
  };

  const handleSelectProgramme = (programmeName: string) => {
    setSelectedProgramme(programmeName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-slate-100 flex flex-col selection:bg-[#CCFF00] selection:text-black">
      {/* 1. Concept Demo Top Announcement */}
      <Banner />

      {/* 2. Responsive Top Navigation */}
      <Navbar onOpenWhatsApp={() => handleOpenWhatsApp()} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onExploreProgrammes={() => scrollToSection('programmes')}
          onEnquireMembership={() => scrollToSection('membership')}
        />

        {/* 4. Facilities Section */}
        <Facilities />

        {/* 5. Training Programmes */}
        <Programmes onSelectProgramme={handleSelectProgramme} />

        {/* 6. Movement Guides & Sample Trainers */}
        <Trainers />

        {/* 7. Membership Plans with Illustrative Pricing */}
        <Membership onSelectPlan={handleSelectPlan} />

        {/* 8. Facilities Gallery with Lightbox */}
        <Gallery />

        {/* 9. Opening Hours & Location Panel */}
        <OpeningHours />

        {/* 10. Membership Enquiry Form */}
        <EnquiryForm
          initialProgramme={selectedProgramme}
          initialPlan={selectedPlan}
          onOpenWhatsAppWithMessage={handleOpenWhatsApp}
        />
      </main>

      {/* 11. Footer with Attribution and Disclaimers */}
      <Footer onOpenWhatsApp={() => handleOpenWhatsApp()} />

      {/* WhatsApp Modal with Safe Fallback */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={handleCloseWhatsApp}
        prefilledMessage={customWhatsAppMsg}
      />

      {/* Floating Back to Top & Quick Actions */}
      <FloatingActions onOpenWhatsApp={() => handleOpenWhatsApp()} />
    </div>
  );
}
