'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-liniar-to-br from-slate-950 via-sky-950 to-slate-900 py-24 sm:py-32 overflow-hidden">
      

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>


      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(56, 189, 248) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(56, 189, 248) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8">
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-400/30 rounded-full backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-semibold text-sky-300 uppercase tracking-wider">
            Începe Astăzi
          </span>
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          Ești pregătit să-ți transformi{' '}
          <span className="bg-liniar-to-r from-sky-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            zâmbetul?
          </span>
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto"
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
            href="/programari"
            className="group relative w-full sm:w-auto px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-2xl shadow-2xl shadow-white/20 hover:shadow-white/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Programează-te Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-liniar-to-r from-sky-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            Sună-ne acum
          </Link>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span>Răspuns în 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full" />
            <span>Consultație gratuită</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span>Echipament modern</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}