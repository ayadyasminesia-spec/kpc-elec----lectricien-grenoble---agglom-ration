import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ShieldCheck, ThumbsUp, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/content';

export const ReviewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'depannage' | 'tableau' | 'renovation'>('all');

  const filteredReviews = selectedFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.serviceType === selectedFilter);

  return (
    <section id="avis" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Avis Google vérifiés</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 normal-case font-normal">Fiche Google My Business KPC ELEC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Pourquoi nos clients grenoblois nous font confiance (5,0 / 5)
            </h2>
          </div>

          {/* Aggregate rating card */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center gap-5 shrink-0 shadow-xl">
            <div className="text-center border-r border-slate-800 pr-5">
              <div className="text-4xl font-black text-white font-mono leading-none mb-1">
                5,0
              </div>
              <div className="text-[11px] text-slate-400">sur 5</div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-200">
                53 avis clients Google
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>100% d'avis 5 étoiles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Buttons allowed for interactive filtering per Rule 1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          {[
            { id: 'all', label: 'Tous les avis (53)' },
            { id: 'depannage', label: "Dépannage d'urgence" },
            { id: 'tableau', label: 'Tableau électrique' },
            { id: 'renovation', label: 'Rénovation & Cuisine' },
          ].map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === filter.id
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Header: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Star phrase highlight */}
                <div className="text-xs font-semibold text-amber-300/90 mb-3 flex items-center gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{review.highlight}</span>
                </div>

                {/* Comment body */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {review.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Avis certifié</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Avis authentiques consultables publiquement sur Google</span>
            </span>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">·</span>
            <span>Artisan de proximité indépendant</span>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">·</span>
            <span>0 intervention sous-traitée</span>
          </div>
        </div>

      </div>
    </section>
  );
};
