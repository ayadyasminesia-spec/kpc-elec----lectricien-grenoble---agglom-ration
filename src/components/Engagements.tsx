import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Sparkles, ShieldCheck, Quote, CheckCircle } from 'lucide-react';
import { ENGAGEMENTS } from '../data/content';

export const Engagements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [
    <Clock className="w-6 h-6 text-amber-400" key="clock" />,
    <Sparkles className="w-6 h-6 text-amber-400" key="sparkles" />,
    <ShieldCheck className="w-6 h-6 text-amber-400" key="shield" />,
  ];

  const hygieneCommitments = [
    "Protection intégrale des zones d'accès et meubles sensibles",
    "Port systématique de surchaussures propres à l'intérieur",
    "Outillage professionnel raccordé à aspiration haute filtration",
    "Nettoyage et coup de balai / aspirateur industriel avant départ",
    "Reprise et recyclage des anciens matériels et câblages",
  ];

  return (
    <section id="engagements" className="py-20 md:py-28 bg-slate-900/50 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>La promesse KPC ELEC</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 normal-case font-normal">Basée sur 53 retours d'expérience clients</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            3 engagements stricts qui répondent exactement à vos exigences
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Faire intervenir un artisan chez soi exige une confiance totale. Voici comment nous transformons chaque intervention en expérience sereine.
          </p>
        </div>

        {/* 3 Main Engagement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ENGAGEMENTS.map((item, index) => (
            <motion.div
              key={item.number}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                activeTab === index 
                  ? 'bg-slate-900 border-amber-500/40 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/20' 
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
              whileHover={{ y: -4 }}
              onClick={() => setActiveTab(index)}
            >
              <div>
                {/* Header row: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-amber-400/90 tracking-tight">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    {icons[index]}
                  </div>
                </div>

                {/* Title & Lead */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-amber-300/90 mb-4">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {item.details}
                </p>
              </div>

              {/* Quote from real Google review */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <div className="flex items-start gap-2 text-xs italic text-slate-300">
                  <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item.quote}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus on Propreté Rigoureuse (The star argument from their reviews) */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>L'argument star de nos avis clients</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                « Un chantier laissé d'une propreté rigoureuse »
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Beaucoup redoutent la poussière de plâtre et le désordre après l'intervention d'un électricien. Chez KPC ELEC, nous appliquons un protocole de propreté strict pour que votre maison reste impeccable.
              </p>
              <div className="text-xs text-slate-400 font-mono">
                Jean-Pierre S., client certifié à Grenoble
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950/60 rounded-xl p-5 border border-slate-800/80">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                Protocole de propreté systématique KPC ELEC :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {hygieneCommitments.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
