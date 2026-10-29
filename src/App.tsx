/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Engagements } from './components/Engagements';
import { ServicesGrid } from './components/ServicesGrid';
import { ReviewsSection } from './components/ReviewsSection';
import { InterventionZone } from './components/InterventionZone';
import { ContactForm } from './components/ContactForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { EmergencyStickyBar } from './components/EmergencyStickyBar';
import { LegalModal } from './components/LegalModal';
import { PhoneCall, Zap, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('depannage');
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'mentions' | 'privacy';
  }>({
    isOpen: false,
    type: 'mentions',
  });

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
  };

  const handleOpenLegal = (type: 'mentions' | 'privacy') => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Floating Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Urgent Flash Bar (Direct conversion strip for active outages) */}
        <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/25 to-amber-500/15 border-y border-amber-500/30 py-3.5 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5 text-amber-200">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span className="font-semibold text-white">
                Panne totale de courant ou disjoncteur général qui saute ?
              </span>
              <span className="text-amber-300 hidden md:inline">
                Technicien de permanence joignable à Grenoble et environs.
              </span>
            </div>

            <a
              href={BUSINESS_INFO.phoneRaw}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold tracking-tight shadow-sm transition-all whitespace-nowrap active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 fill-slate-950" />
              <span>Dépannage direct : {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* 3. Les 3 Engagements KPC ELEC (Ponctualité, Propreté rigoureuse, Sécurité & Normes) */}
        <Engagements />

        {/* 4. Grille des Services (Dépannage, Tableau, Rénovation, Tertiaire) + Diagnostic interactif */}
        <ServicesGrid onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 5. Preuve Sociale (Avis Google 5.0/5 certifiés) */}
        <ReviewsSection />

        {/* 6. Zone d'intervention & Carte Grenoble */}
        <InterventionZone />

        {/* 7. Formulaire de contact / Devis gratuit sous 24h */}
        <ContactForm initialService={selectedServiceForQuote} />

        {/* 8. Questions fréquentes (FAQ) */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Mobile Sticky Bottom Action Bar (Capped <= 15% viewport height) */}
      <EmergencyStickyBar />

      {/* Legal / RGPD Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={handleCloseLegal}
        type={legalModalState.type}
      />
    </div>
  );
}
