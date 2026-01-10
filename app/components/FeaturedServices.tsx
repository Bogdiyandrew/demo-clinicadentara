'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Sparkles,
  Award,
  Smile,
  Stethoscope,
  Zap,
  ArrowRight,
  Activity
} from 'lucide-react';

const services = [
  {
    title: 'Implanturi dentare',
    description: 'Restaurare completă a funcționalității cu implanturi din titan de ultimă generație.',
    href: '/servicii/implant-dentar',
    icon: Stethoscope,
    color: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'group-hover:shadow-primary/20',
    border: 'group-hover:border-primary/30'
  },
  {
    title: 'Estetică dentară',
    description: 'Design personalizat al zâmbetului prin fațete ceramice și albire laser.',
    href: '/servicii/estetica-dentara',
    icon: Sparkles,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    glow: 'group-hover:shadow-secondary/20',
    border: 'group-hover:border-secondary/30'
  },
  {
    title: 'Ortodonție digitală',
    description: 'Alinierea dinților folosind alignere invizibile și scanare intraorală 3D.',
    href: '/servicii/ortodontie',
    icon: Smile,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    glow: 'group-hover:shadow-cyan-500/20',
    border: 'group-hover:border-cyan-500/30'
  },
  {
    title: 'Profilaxie & igienă',
    description: 'Menține sănătatea orală prin detartraj cu ultrasunete și airflow.',
    href: '/servicii/preventie',
    icon: Award,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    glow: 'group-hover:shadow-emerald-500/20',
    border: 'group-hover:border-emerald-500/30'
  },
  {
    title: 'Endodonție',
    description: 'Tratamente de canal asistate de microscop pentru salvarea dinților naturali.',
    href: '/servicii/stomatologie',
    icon: Activity,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    glow: 'group-hover:shadow-rose-500/20',
    border: 'group-hover:border-rose-500/30'
  },
  {
    title: 'Urgențe non-stop',
    description: 'Preluare prioritară a cazurilor acute și tratament imediat al durerii.',
    href: '/servicii/urgente',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    glow: 'group-hover:shadow-amber-500/20',
    border: 'group-hover:border-amber-500/30'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function FeaturedServices() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-slate-900">


      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-radial-gradient from-primary/5 to-transparent blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-radial-gradient from-secondary/5 to-transparent blur-3xl translate-x-1/3 translate-y-1/3" />


        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">


        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Excelență în stomatologie
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Soluții medicale <br className="hidden sm:block" />
            pentru un <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-500">zâmbet sănătos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Tehnologie avansată și o echipă de specialiști dedicați pentru a oferi tratamente durabile, fără durere și rezultate estetice superioare.
          </motion.p>
        </div>


        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full"
            >
              <Link
                href={service.href}
                className={`
                  relative flex flex-col h-full p-8 rounded-4xl
                  bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50
                  ${service.glow} ${service.border}
                `}
              >

                <div className="mb-8 relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${service.bg} group-hover:scale-110 duration-500 shadow-sm`}>
                    <service.icon className={`w-8 h-8 transition-colors duration-300 ${service.color}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 grow font-light">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    Detalii procedură
                  </span>
                  <div className={`p-2 rounded-full ${service.bg} opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                    <ArrowRight className={`w-4 h-4 ${service.color}`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href="/servicii"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span>Vezi toate tratamentele</span>
            <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-slate-900/20 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}