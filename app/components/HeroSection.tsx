'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';

// FIX 1: Adăugat 'as const' pentru ca TypeScript să știe că e un array fix (Bezier Curve)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: custom * 0.1, 
      ease: [0.22, 1, 0.36, 1] as const 
    }
  })
};

const stats = [
  { label: 'Pacienți', value: '15k+' },
  { label: 'Ani Experiență', value: '15+' },
  { label: 'Specialiști', value: '8' },
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-950">
      
      {/* --- Background Ambient Layer --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse duration-[4s]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-sky-500/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 pb-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- Left Content --- */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8 shadow-lg shadow-sky-900/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-sm font-medium text-sky-200">Acceptăm pacienți noi</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Zâmbetul tău, <br />
              {/* FIX 2: bg-gradient-to-r -> bg-linear-to-r */}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-400 to-sky-300 animate-gradient-x">
                Prioritatea noastră.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              Tehnologie de ultimă generație și o echipă empatică, pregătită să îți ofere tratamentul dentar pe care îl meriți. Fără durere, doar rezultate.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/programari"
                className="group relative px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                {/* FIX 2: bg-gradient-to-r -> bg-linear-to-r */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center justify-center gap-2">
                  Programează-te
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/servicii"
                className="px-8 py-4 bg-transparent border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Vezi Servicii
              </Link>
            </motion.div>

            {/* Mini Trust Indicators */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-slate-800/60 grid grid-cols-3 gap-8 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- Right Visual Content --- */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
             {/* Circle Background - FIX 2: bg-gradient-to-br -> bg-linear-to-br */}
             <motion.div 
               style={{ y: y2 }}
               className="absolute w-[500px] h-[500px] bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-full border border-slate-700/30 backdrop-blur-3xl -z-10"
             />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full max-w-md mx-auto"
            >
              {/* FIX 3: rounded-[2rem] -> rounded-4xl */}
              <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-slate-900/50">
                <Image
                  src="/herosection.png" 
                  alt="Clinica Dentara"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay Gradient bottom - FIX 2: bg-gradient-to-t -> bg-linear-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent" />
              </div>

              {/* Floating Elements (Cards) */}
              <motion.div
                style={{ y: y1 }}
                className="absolute -right-8 top-12 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl max-w-[180px]"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm font-bold text-white">Garanție</span>
                </div>
                <p className="text-xs text-slate-300">Toate lucrările beneficiază de garanție extinsă.</p>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl max-w-[200px]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-900">5.0</span>
                </div>
                <p className="text-xs font-medium text-slate-600">"Cea mai bună experiență la dentist!"</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200" />
                  <span className="text-[10px] text-slate-500">Maria P. - Pacient</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}