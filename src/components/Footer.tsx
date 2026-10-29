import React from 'react';
import { Phone, MapPin, Shield, Star, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onOpenLegal: (type: 'mentions' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & core claim (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="text-xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="text-amber-400">⚡</span>
              <span>KPC <span className="text-amber-400">ELEC</span></span>
            </a>
            
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              KPC ELEC – Électricien qualifié à Grenoble depuis 2018.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dépannage d’urgence, mise aux normes NF C 15-100, rénovation de tableaux électriques et installations complètes pour particuliers et professionnels sur tout le bassin grenoblois.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">5.0 / 5 sur Google</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">53 avis clients certifiés</span>
            </div>
          </div>

          {/* Contact Direct & Urgence (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Dépannage
            </div>

            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono font-bold text-base transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="text-xs text-slate-400">
                {BUSINESS_INFO.hours}
              </div>
            </div>
          </div>

          {/* Garanties & Assurances (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Garanties & Normes
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Garantie Décennale obligatoire en cours de validité</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Conformité stricte norme NF C 15-100</span>
              </div>
              <div className="pt-1 text-[11px] text-slate-500 font-mono">
                SIRET : {BUSINESS_INFO.siret}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar with legal & copyright */}
      <div className="border-t border-slate-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} KPC ELEC. Tous droits réservés. Électricien à Grenoble, Meylan, Échirolles et alentours.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => onOpenLegal('mentions')}
              className="text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-4"
            >
              Mentions légales
            </button>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-4"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
