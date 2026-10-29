import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'mentions' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              {type === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {type === 'mentions' ? (
            <>
              <div>
                <h4 className="font-bold text-white mb-1">1. Éditeur du site</h4>
                <p>
                  Le présent site est édité par l'entreprise <strong>KPC ELEC</strong>, entreprise artisanale immatriculée au Répertoire des Métiers de l'Isère.<br />
                  Siège social : 66 Avenue Jean Perrot, 38100 Grenoble, France.<br />
                  Téléphone : 06 50 83 31 85.<br />
                  Courriel : contact@kpc-elec-grenoble.fr.<br />
                  Numéro SIRET : 841 893 214 00018.<br />
                  Activité principale : Travaux d'installation électrique dans tous locaux (Code NAF 4321A).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. Assurance et Responsabilité Décennale</h4>
                <p>
                  Conformément aux articles L. 241-1 et suivants du Code des assurances, KPC ELEC est titulaire d'un contrat d'Assurance Responsabilité Décennale et de Responsabilité Civile Professionnelle couvrant l'ensemble des travaux réalisés sur le territoire français.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Normes et conformité</h4>
                <p>
                  Toutes les interventions électriques sont exécutées en conformité stricte avec la norme française homologuée NF C 15-100 en vigueur.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">4. Hébergement</h4>
                <p>
                  Le site est hébergé sur une infrastructure Cloud sécurisée avec protocole HTTPS et certificat SSL actif.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-white mb-1">1. Collecte et finalité des données</h4>
                <p>
                  Les données personnelles recueillies via le formulaire de contact (nom, numéro de téléphone, ville, nature de la panne ou du projet) sont collectées exclusivement dans le but d'établir un devis ou d'organiser une intervention de dépannage demandée par l'utilisateur.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. Non-cession et confidentialité</h4>
                <p>
                  KPC ELEC s'engage formellement à ne jamais vendre, louer ni céder vos coordonnées à des tiers à des fins de prospection commerciale.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Vos droits (RGPD)</h4>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant KPC ELEC au 06 50 83 31 85 ou par courrier à l'adresse 66 Av. Jean Perrot, 38100 Grenoble.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
