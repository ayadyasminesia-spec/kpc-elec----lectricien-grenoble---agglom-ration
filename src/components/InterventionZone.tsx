import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldAlert, PhoneCall, Check } from 'lucide-react';
import { COMMUNES, BUSINESS_INFO } from '../data/content';

export const InterventionZone: React.FC = () => {
  const [selectedCommuneIndex, setSelectedCommuneIndex] = useState<number>(0);

  const activeCommune = COMMUNES[selectedCommuneIndex];

  return (
    <section id="zone" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Mobilité & Référencement Isère</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 normal-case font-normal">Basé au 66 Av. Jean Perrot, 38100 Grenoble</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            Zone de déplacement rapide dans tout le bassin grenoblois
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Grâce à un positionnement stratégique sur l'Avenue Jean Perrot, KPC ELEC rejoint rapidement chaque quartier de Grenoble et les communes de la métropole.
          </p>
        </div>

        {/* 2-Column Split: Map & Commune Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Commune selector (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Sélectionnez votre commune pour voir le délai d'arrivée :
            </div>

            <div className="space-y-2.5">
              {COMMUNES.map((commune, index) => {
                const isSelected = selectedCommuneIndex === index;
                return (
                  <button
                    key={commune.name}
                    type="button"
                    onClick={() => setSelectedCommuneIndex(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-amber-500/50 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                        <span className="text-sm font-bold text-white">{commune.name}</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {commune.sector}
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <span className="font-mono text-xs font-semibold text-amber-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{commune.estimatedArrival}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Commune Detailed Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/20 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">
                  Secteur {activeCommune.name} ({activeCommune.postalCode})
                </span>
                <span className="text-xs text-emerald-400 font-medium">Intervention garantie</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCommune.description} Déplacement possible pour urgence ou sur rendez-vous pour devis.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Délai estimé : {activeCommune.estimatedArrival}</span>
                <a
                  href={BUSINESS_INFO.phoneRaw}
                  className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Demander passage</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Alpine View (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Real embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
              <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-white">Atelier & Siège KPC ELEC</span>
                  <span className="text-slate-500" aria-hidden="true">·</span>
                  <span className="text-slate-400">66 Avenue Jean Perrot, 38100 Grenoble</span>
                </div>
                <a
                  href="https://maps.google.com/?q=66+Avenue+Jean+Perrot+38100+Grenoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:underline"
                >
                  Ouvrir l'itinéraire
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-800">
                <iframe
                  title="Localisation KPC ELEC à Grenoble"
                  src="https://maps.google.com/maps?q=66+Avenue+Jean+Perrot+38100+Grenoble&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full filter invert-[88%] hue-rotate-180 contrast-90 brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Map footer highlights */}
              <div className="p-4 bg-slate-950/95 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Stationnement aisé</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Accès rocade immédiat</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Véhicule équipé outillé</span>
                </div>
              </div>
            </div>

            {/* Scenic image of Grenoble & Belledonne */}
            <div className="rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 relative">
              <div className="relative aspect-[21/9] sm:aspect-[16/6] bg-slate-800 overflow-hidden">
                <img
                  src="/src/assets/images/grenoble_service_area_1793279342718.jpg"
                  alt="Vue panoramique de Grenoble et de la chaîne de Belledonne"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent flex items-center p-6">
                  <div className="max-w-md">
                    <div className="text-xs font-mono uppercase text-amber-400 font-semibold mb-1">
                      Rayon d'action
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">
                      Tout le bassin grenoblois couvert
                    </div>
                    <div className="text-xs text-slate-300">
                      Du centre historique jusqu'aux coteaux du Grésivaudan et du Vercors.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
