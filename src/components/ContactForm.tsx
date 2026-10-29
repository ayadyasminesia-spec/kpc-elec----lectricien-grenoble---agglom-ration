import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileCheck,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = 'depannage' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Grenoble',
    requestType: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  const requestOptions = [
    { value: 'depannage', label: 'Urgence / Dépannage panne de courant' },
    { value: 'tableau', label: 'Remplacement de tableau électrique' },
    { value: 'renovation', label: 'Rénovation complète / Cuisine / Prises' },
    { value: 'tertiaire', label: 'Professionnels, commerces & tertiaire' },
    { value: 'autre', label: 'Autre demande électrique' },
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez renseigner votre nom.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire.';
    } else {
      // Basic phone check (at least 9 digits)
      const cleaned = formData.phone.replace(/[\s.-]/g, '');
      if (cleaned.length < 9) {
        newErrors.phone = 'Veuillez saisir un numéro de téléphone valide.';
      }
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Veuillez indiquer la commune du chantier.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedTicket = 'KPC-' + Math.floor(1000 + Math.random() * 9000);
      setTicketId(generatedTicket);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="devis" className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Réponse garantie sous 24h</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 normal-case font-normal">Sans engagement · Devis gratuit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            Un projet ou une panne ? Contactez-nous
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Remplissez ce formulaire court ou appelez-nous directement. Nous étudions votre demande et vous recontactons dans les meilleurs délais.
          </p>
        </div>

        {/* 2-Column Split: Form & Coordonnées */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Demande enregistrée · Réf : {ticketId}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                    Merci {formData.name}, votre demande est bien reçue !
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Notre électricien à Grenoble étudie votre projet pour la commune de <strong className="text-white">{formData.city}</strong> et vous rappellera au <strong className="text-white">{formData.phone}</strong> sous 24h maximum.
                  </p>
                </div>

                {formData.requestType === 'depannage' && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 max-w-md mx-auto text-left flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-300 mb-0.5">S'il s'agit d'une panne bloquante :</strong>
                      N'attendez pas le rappel écrit, contactez directement notre technicien au{' '}
                      <a href={BUSINESS_INFO.phoneRaw} className="underline font-bold text-white">
                        {BUSINESS_INFO.phoneFormatted}
                      </a>.
                    </div>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.phoneRaw}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler immédiatement</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        city: 'Grenoble',
                        requestType: 'depannage',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Emergency notification if dépannage is selected */}
                {formData.requestType === 'depannage' && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
                    <PhoneCall className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-amber-300">Urgence en cours ? </span>
                      Pour un départ immédiat dans Grenoble et agglomération, appelez directement le{' '}
                      <a href={BUSINESS_INFO.phoneRaw} className="underline font-bold text-white">
                        {BUSINESS_INFO.phoneFormatted}
                      </a>.
                    </div>
                  </div>
                )}

                {/* Nom & Téléphone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Votre nom <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex : M. Bernard / Mme Thomas"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all ${
                        errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-500/60'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Numéro de téléphone <span className="text-amber-400">* (obligatoire)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 XX XX XX XX"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all ${
                        errors.phone ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-500/60'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Ville du chantier & Type de demande */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ville du chantier <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Grenoble, Meylan, Échirolles..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all ${
                        errors.city ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-500/60'
                      }`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.city}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="requestType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Type de demande
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60 transition-all"
                    >
                      {requestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message court */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message court (précisez vos symptômes ou votre projet)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ex : Disjoncteur qui saute dès qu'on allume le four / Remplacement vieux tableau avec fusibles..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-tight shadow-xl shadow-amber-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande de devis gratuit</span>
                </button>

                <div className="text-center text-[11px] text-slate-500">
                  Vos coordonnées restent strictement confidentielles et ne sont utilisées que pour votre devis.
                </div>
              </form>
            )}

          </div>

          {/* Coordonnées & Direct Call Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary call card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border border-amber-500/30 p-6 sm:p-7 shadow-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md inline-block mb-3">
                Ligne directe technicien
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Besoin d'un électricien tout de suite ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Pour une urgence, un disjoncteur général bloqué ou une fuite de courant, appelez-nous directement.
              </p>

              <a
                href={BUSINESS_INFO.phoneRaw}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span className="font-mono tracking-tight text-lg">{BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Official contact information */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Coordonnées de l'entreprise :
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Adresse du siège</strong>
                  <span className="text-slate-300">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Horaires d'ouverture</strong>
                  <span className="text-slate-300">{BUSINESS_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Assurance & Garanties</strong>
                  <span className="text-slate-300">{BUSINESS_INFO.decennale}</span>
                  <span className="block text-slate-400 text-xs mt-0.5">Norme {BUSINESS_INFO.norm}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
