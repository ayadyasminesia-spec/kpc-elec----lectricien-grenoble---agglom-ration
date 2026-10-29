import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const EmergencyStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pointer-events-none p-3 pb-safe">
      <div className="max-w-md mx-auto bg-slate-900/95 backdrop-blur-md border border-amber-500/30 rounded-2xl p-2 shadow-2xl shadow-black/80 flex items-center gap-2 pointer-events-auto">
        <a
          href={BUSINESS_INFO.phoneRaw}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-tight shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
          <span className="truncate">Urgence : {BUSINESS_INFO.phoneFormatted}</span>
        </a>

        <a
          href="#devis"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs whitespace-nowrap active:scale-95 transition-transform"
        >
          <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Devis</span>
        </a>
      </div>
    </div>
  );
};
