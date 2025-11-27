'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ShieldCheck, Star, ArrowRight, PlayCircle } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

const stats = [
  { label: 'Pacienți Fericiți', value: '1k+' },
  { label: 'Ani de Excelență', value: '12+' },
  { label: 'Medici Specialiști', value: '7' },
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">


          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-sm mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase text-[11px]">
                Acceptăm pacienți noi
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
            >
              Zâmbetul tău, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-cyan-500 to-primary bg-size-[200%_auto] animate-gradient-x">
                prioritatea noastră.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-light"
            >
              Experimentează stomatologia modernă într-un mediu relaxant.
              Tehnologie de vârf, medici empatici și rezultate care îți vor reda încrederea.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Programează-te</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/servicii"
                className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <PlayCircle className="w-5 h-5 text-secondary" />
                Vezi servicii
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full grid grid-cols-3 gap-4 sm:gap-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>


          <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000 lg:flex">

            <motion.div
              style={{ y: y2, opacity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"
            />


            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border-8 border-white dark:border-slate-800 bg-white dark:bg-slate-900">
                <Image
                  src="/herosection.png"
                  alt="Clinica Dentara Modernă"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                  priority
                />


                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>


              <motion.div
                style={{ y: y1 }}
                className="absolute -right-12 top-24 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[200px]"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Garanție extinsǎ</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  Tratamente sigure și durabile pentru zâmbetul tău.
                </p>
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-32 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[220px]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 italic mb-3">
                  "Profesionalism și grijă deosebită. Recomand cu încredere!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-[10px] text-white font-bold">
                    MP
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Maria P. - Pacient</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}