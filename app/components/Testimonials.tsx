'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Ionescu",
    role: "Pacientă Estetică Dentară",
    initials: "MI",
    image: "/images/testimonial-1.png",
    quote: "Echipa a fost incredibil de profesionistă și atentă. Mi-au explicat fiecare pas, iar rezultatul... zâmbetul meu este complet transformat. Recomand 100%!"
  },
  {
    name: "Alexandru Vasile",
    role: "Pacient Implantologie",
    initials: "AV",
    quote: "Aveam o teamă teribilă de dentist, dar aici am fost tratat fără pic de durere. Tehnologia pe care o folosesc este uimitoare. Mă simt din nou încrezător."
  },
  {
    name: "Ioana Georgescu",
    role: "Pacientă Ortodonție",
    initials: "IG",
    quote: "Am terminat tratamentul cu aparatul invizibil și sunt extrem de mulțumită. Întregul proces a fost mult mai simplu decât mă așteptam. Mulțumesc echipei!"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div variants={cardVariants} className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Încredere și Rezultate
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
            Nu ne credeți pe cuvânt
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto font-light">
            Aflați de ce pacienții noștri aleg să revină și ne recomandă cu încredere prietenilor și familiei.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              <blockquote className="grow">
                <p className="text-lg text-slate-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-700/50">
                <div className="shrink-0 relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-cyan-600 shadow-lg shadow-primary/20">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.initials}
                    </div>
                  )}
                </div>

                <div className="text-left">
                  <div className="text-base font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}