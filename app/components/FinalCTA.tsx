'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            Începe Astăzi
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-8 leading-tight"
        >
          Ești pregătit să-ți transformi{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
            zâmbetul?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto font-light"
        >
          Nu mai amâna. Programează o consultație astăzi și descoperă planul de tratament personalizat pentru tine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-primary rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Programează-te Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>

          <Link
            href="tel:0740123456"
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            Sună-ne acum
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span>Răspuns în 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(14,116,144,0.5)]" />
            <span>Consultație gratuită</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(192,160,98,0.5)]" />
            <span>Echipament modern</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}