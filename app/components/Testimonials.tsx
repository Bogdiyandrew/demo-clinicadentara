'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Datele pentru testimoniale
const testimonials = [
  { name: "Maria Ionescu", role: "Pacientă Estetică Dentară", initials: "MI", quote: "Echipa a fost incredibil de profesionistă și atentă. Mi-au explicat fiecare pas, iar rezultatul... zâmbetul meu este complet transformat. Recomand 100%!" },
  { name: "Alexandru Vasile", role: "Pacient Implantologie", initials: "AV", quote: "Aveam o teamă teribilă de dentist, dar aici am fost tratat fără pic de durere. Tehnologia pe care o folosesc este uimitoare. Mă simt din nou încrezător." },
  { name: "Ioana Georgescu", role: "Pacientă Ortodonție", initials: "IG", quote: "Am terminat tratamentul cu aparatul invizibil și sunt extrem de mulțumită. Întregul proces a fost mult mai simplu decât mă așteptam. Mulțumesc echipei!" }
];

// Variantele de animație
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
  hidden: { opacity: 0, y: 30 }, // Încep de jos
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Testimonials() {
  return (
    // 'section' devine 'motion.section' cu 'whileInView'
    <motion.section
      className="bg-gray-900 py-20 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animă când 20% e vizibil
      variants={containerVariants} // Aplicăm varianta containerului
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Titlul Secțiunii */}
        <motion.div variants={cardVariants} className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Încredere și Rezultate</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nu ne credeți pe cuvânt
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Aflați de ce pacienții noștri aleg să revină și ne recomandă cu încredere prietenilor și familiei.
          </p>
        </motion.div>

        {/* Grid-ul devine 'motion.div' */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            // Fiecare card devine 'motion.div'
            <motion.div key={testimonial.name} variants={cardVariants} className="flex flex-col bg-gray-800 rounded-2xl shadow-lg p-8">
              
              <div>
                <svg className="w-10 h-10 text-sky-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 8c-2.2 0-4 1.8-4 4v10.667c0 2.2 1.8 4 4 4h4v-8H9.333V12h4V8H9.333zM22.667 8c-2.2 0-4 1.8-4 4v10.667c0 2.2 1.8 4 4 4h4v-8h-4V12h4V8h-4z" />
                </svg>
              </div>
              
              <blockquote className="mt-6 flex-grow text-lg font-medium leading-7 text-gray-300">
                <p>"{testimonial.quote}"</p>
              </blockquote>

              <footer className="mt-8 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white text-lg font-bold">
                  {testimonial.initials}
                </div>
                
                <div className="text-left">
                  <div className="text-base font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-sky-400">{testimonial.role}</div>
                </div>
              </footer>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}