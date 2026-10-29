import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  Home, 
  Building2, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  AlertTriangle,
  Flame,
  Lightbulb,
  Clock
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

interface ServicesGridProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {
  const [selectedIssue, setSelectedIssue] = useState<string>('panne');

  const interactiveSimulations: Record<string, {
    title: string;
    delay: string;
    severity: string;
    action: string;
    recommendation: string;
    formCategory: string;
  }> = {
    panne: {
      title: "Panne totale ou coupure partielle",
      delay: "30 à 45 minutes",
      severity: "Urgence immédiate",
      action: "Appel direct recommandé pour départ immédiat",
      recommendation: "Ne touchez pas aux fils dénudés. Notre technicien teste l'isolement au mégohmmètre et isole le circuit en défaut sans couper l'ensemble de votre habitat.",
      formCategory: "depannage",
    },
    eauchaude: {
      title: "Panne de ballon d'eau chaude / Chauffe-eau",
      delay: "Intervention dans la journée",
      severity: "Priorité confort",
      action: "Diagnostic contacteur jour/nuit et résistance",
      recommendation: "Vérification de l'alimentation du disjoncteur 20A, du relais heures creuses et du thermostat de sécurité réarmable.",
      formCategory: "depannage",
    },
    tableau: {
      title: "Vieux tableau électrique à fusibles (porcelaine)",
      delay: "Devis sous 24h · Pose en 1/2 journée",
      severity: "Sécurité incendie",
      action: "Remplacement complet par coffret 30mA aux normes",
      recommendation: "Élimination des plombs/fusibles obsolètes. Protection des personnes par différentiels 30mA types AC et A, barrette de terre mesurée.",
      formCategory: "tableau",
    },
    cuisine: {
      title: "Projet rénovation cuisine & électroménager",
      delay: "Visite technique gratuite sous 48h",
      severity: "Projet planifié",
      action: "Création des lignes dédiées (32A plaque, 20A four/lave-vaisselle)",
      recommendation: "Implantation sur plan des prises de plan de travail, sorties de câble dédiées et éclairages sous meubles hauts.",
      formCategory: "renovation",
    },
    pro: {
      title: "Commerces, bureaux & réseaux tertiaires",
      delay: "Intervention rapide ou contrat maintenance",
      severity: "Continuité d'activité",
      action: "Câblage informatique RJ45, éclairage LED & conformité ERP",
      recommendation: "Audit des blocs de secours (BAES), maintenance préventive des armoires électriques et sécurisation des postes informatiques.",
      formCategory: "tertiaire",
    },
  };

  const handleApplySimulator = (categoryId: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(categoryId);
    }
    const element = document.getElementById('devis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSim = interactiveSimulations[selectedIssue] || interactiveSimulations.panne;

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>Prestations certifiées</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 normal-case font-normal">Grenoble, Meylan et toute l'agglomération</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            Nos 4 pôles d'expertise électrique
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            De la panne d'électricité en urgence à la réfection totale de votre installation, chaque intervention est exécutée avec rigueur selon la norme NF C 15-100.
          </p>
        </div>

        {/* 4 Main Service Blocks Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          
          {/* Bloc 1: Dépannage d'urgence (Spans 7 cols on LG) */}
          <div id="depannage" className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Priorité 1 · Dépannage Express</span>
                </span>
                <span className="text-xs text-amber-300 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>30 à 45 min</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                01. Dépannage d’urgence électrique
              </h3>
              <p className="text-sm font-medium text-amber-300 mb-4">
                Panne de courant totale, court-circuit ou panne d'eau chaude
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Une coupure inexpliquée ? Notre véhicule d'intervention embarque tous les appareils de mesure et pièces de rechange courantes pour sécuriser et réparer sans délai.
              </p>

              <div className="space-y-2.5 mb-8">
                {SERVICES[0].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Appeler pour un dépannage ({BUSINESS_INFO.phoneFormatted})</span>
              </a>

              <button
                type="button"
                onClick={() => handleApplySimulator('depannage')}
                className="text-xs font-medium text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-center gap-1"
              >
                <span>Ou remplir une demande</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bloc 2: Rénovation de tableau électrique (Spans 5 cols on LG) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-lg">
            {/* Visual slot with zero broken image fallback */}
            <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
              <img
                src="/src/assets/images/service_panel_renovation_1793279342772.jpg"
                alt="Tableau électrique moderne aux normes NF C 15-100 posé par KPC ELEC"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700 text-xs font-mono text-amber-400">
                02. Tableau électrique
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Rénovation de tableau électrique
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  Remplacement complet de vieux tableaux à fusibles ou porcelaine. Mise en conformité 30mA pour protéger votre famille contre l'électrisation.
                </p>

                <div className="space-y-2 mb-6">
                  {SERVICES[1].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleApplySimulator('tableau')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <span>Demander un devis tableau électrique</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bloc 3: Rénovation complète & Électricité générale (Spans 6 cols on LG) */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
              <img
                src="/src/assets/images/service_home_renovation_1793279343434.jpg"
                alt="Appartement et cuisine rénovés avec spots LED et prises aux normes à Grenoble"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700 text-xs font-mono text-cyan-400">
                03. Rénovation générale
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Rénovation complète, appartements & cuisines
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  Création de lignes dédiées gros électroménager, déplacement de cloisons, ajout d'interrupteurs et éclairages contemporains LED.
                </p>

                <div className="space-y-2 mb-6">
                  {SERVICES[2].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleApplySimulator('renovation')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <span>Devis rénovation complète</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bloc 4: Solutions Professionnels & Tertiaire (Spans 6 cols on LG) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>04. Professionnels & Entreprises</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">Bureaux & Commerces</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Solutions Tertiaires & Maintenance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Installations fiables et conformes pour les commerçants, professions libérales et PME grenobloises. Zéro arrêt d'exploitation.
              </p>

              <div className="space-y-2.5 mb-6">
                {SERVICES[3].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleApplySimulator('tertiaire')}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Contacter pour un local professionnel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Quick Diagnostic Helper */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-1">
                Diagnostic express interactif
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Quelle est votre situation actuelle ?
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Cliquez pour voir le délai d'intervention recommandé
            </span>
          </div>

          {/* Interactive buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 my-6">
            {[
              { id: 'panne', label: 'Panne totale / Court-circuit', icon: '⚡' },
              { id: 'eauchaude', label: 'Chauffe-eau sans eau chaude', icon: '🚿' },
              { id: 'tableau', label: 'Tableau ancien à fusibles', icon: '🎛️' },
              { id: 'cuisine', label: 'Rénovation cuisine / prises', icon: '🏠' },
              { id: 'pro', label: 'Bureaux / Local pro', icon: '🏢' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedIssue(tab.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedIssue === tab.id
                    ? 'bg-amber-500/10 border-amber-500/50 text-white shadow-sm ring-1 ring-amber-500/30'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-lg mb-1.5">{tab.icon}</div>
                <div className="text-xs font-medium leading-tight">{tab.label}</div>
              </button>
            ))}
          </div>

          {/* Result card */}
          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/90 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold text-white text-sm">{currentSim.title}</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-amber-400 font-mono font-medium">Délai estimé : {currentSim.delay}</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300 font-medium">{currentSim.severity}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                {currentSim.recommendation}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleApplySimulator(currentSim.formCategory)}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>Pré-remplir ma demande</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
