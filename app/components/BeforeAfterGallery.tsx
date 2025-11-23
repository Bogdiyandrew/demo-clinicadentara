'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function BeforeAfterGallery() {
  return (
    <section className="bg-white dark:bg-slate-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Rezultate Reale
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Transformări care <br className="hidden sm:block" />
            vorbesc de la sine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light"
          >
            Vezi diferența pe care o pot face experiența și tehnologia noastră.
            <span className="block mt-2 text-sm font-semibold text-primary">
              (Trageți slider-ul pentru a compara)
            </span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800"
        >
          <BeforeAfterSlider
            beforePlaceholder={{ color: 'bg-gradient-to-br from-slate-300 to-slate-400', label: 'ÎNAINTE' }}
            afterPlaceholder={{ color: 'bg-gradient-to-br from-primary to-cyan-600', label: 'DUPĂ' }}
          />
        </motion.div>

      </div>
    </section>
  );
}