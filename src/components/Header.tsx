import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onOpenUrgentModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenUrgentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Dépannage d'urgence", href: "#depannage" },
    { label: "Nos services", href: "#services" },
    { label: "Engagements", href: "#engagements" },
    { label: "Avis (5.0★)", href: "#avis" },
    { label: "Zone & Devis", href: "#devis" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Subtle top notification ribbon */}
      <div className="bg-slate-900/90 backdrop-blur border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0/5 sur Google</span>
            </span>
            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-slate-400">53 avis certifiés</span>
            <span className="text-slate-500 hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-400">Électricien certifié à Grenoble depuis 2018</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dépannage actif Grenoble & agglo</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly obeying Top Bar Contract: 3 zones separated by gap-8 */}
      <div className={`transition-all duration-200 border-b ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 shadow-xl shadow-black/40 py-3' 
          : 'bg-slate-950/80 backdrop-blur-sm border-slate-800/50 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a 
              href="#" 
              className="text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:border-amber-400 transition-colors">
                ⚡
              </span>
              <span>KPC <span className="text-amber-400 font-bold">ELEC</span></span>
            </a>

            {/* Zone 2: 4-5 Nav Links (Single line, whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400/50 underline-offset-8"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action (Direct phone call) */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 whitespace-nowrap shrink-0 active:scale-95"
                title="Appeler immédiatement KPC ELEC"
              >
                <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span className="font-mono font-bold tracking-tight">{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs text-slate-400">Navigation rapide</span>
            <span className="text-xs text-amber-400 font-medium">⭐ 5.0/5 (53 avis Google)</span>
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.phoneRaw}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler le {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href="#devis"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-sm font-medium"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
