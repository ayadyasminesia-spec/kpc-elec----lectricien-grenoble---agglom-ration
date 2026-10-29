import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Shield, Clock, Zap, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden circuit-bg">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Context line with quiet editorial styling */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Intervention Express & Rénovation</span>
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 normal-case font-normal text-xs">Avenue Jean Perrot, Grenoble</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Électricien à Grenoble & Agglomération <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Dépannage urgent
              </span> & Rénovation électrique
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Particuliers et professionnels. Des interventions rapides, un travail certifié aux normes et des chantiers rendus impeccables depuis 2018.
            </p>

            {/* Badges de réassurance immédiate (Clean unboxed typographic markers with icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 pt-2 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Note Google 5.0 / 5</div>
                  <div className="text-slate-400">53 avis clients réels</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Grenoble & Meylan</div>
                  <div className="text-slate-400">Déplacement rapide alentours</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Devis gratuit sous 24h</div>
                  <div className="text-slate-400">Garantie décennale & NF C 15-100</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Bouton 1: Rouge/Orange Appeler pour un dépannage */}
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all active:scale-[0.98]"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-950/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide opacity-80 font-semibold">Urgence en cours ?</div>
                  <div className="text-base font-extrabold tracking-tight">Appeler pour un dépannage</div>
                </div>
              </a>

              {/* Bouton 2: Gris clair Demander un devis gratuit */}
              <a
                href="#devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all active:scale-[0.98]"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro reassurance strip */}
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Intervention sous 30–45 min</span>
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Aucun frais caché</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Lundi au vendredi jusqu'à 18h</span>
            </div>
          </motion.div>

          {/* Right Column: High-fidelity image showcase */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-slate-800/40 to-cyan-500/20 blur-md" />

              {/* Card wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                
                {/* Image slot with zero-broken-image policy fallback */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-slate-800 overflow-hidden">
                  <img
                    src="/src/assets/images/hero_electrician_grenoble_1793279342080.jpg"
                    alt="Artisan électricien KPC ELEC intervenant sur un tableau électrique à Grenoble"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating verification badge on image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="text-xs font-semibold text-white">Technicien KPC d'astreinte</div>
                        <div className="text-[11px] text-slate-400">Équipement de diagnostic embarqué</div>
                      </div>
                    </div>
                    <a
                      href={BUSINESS_INFO.phoneRaw}
                      className="px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors"
                    >
                      Appeler
                    </a>
                  </div>
                </div>

                {/* Bottom trust bar */}
                <div className="p-4 bg-slate-950 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-base font-bold text-amber-400 font-mono">2018</div>
                    <div className="text-[11px] text-slate-400">Artisan à Grenoble</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-base font-bold text-emerald-400 font-mono">100%</div>
                    <div className="text-[11px] text-slate-400">Conforme NF C 15-100</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
