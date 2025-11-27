'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Filter } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FinalCTA from '../components/FinalCTA';


const caseStudies = [
  {
    id: 1,
    title: 'Reabilitare Estetică Complexă',
    category: 'Estetică',
    description: 'Fațete ceramice E-MAX pentru corectarea formei și culorii.',
    before: { image: '/images/case1-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case1-after.png', label: 'DUPĂ' },
  },
  {
    id: 2,
    title: 'Implant Dentar Zona Frontală',
    category: 'Implantologie',
    description: 'Înlocuirea unui dinte lipsă cu implant și coroană ceramică.',
    before: { image: '/images/case2-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case2-after.png', label: 'DUPĂ' },
  },
  {
    id: 3,
    title: 'Albire Profesională Laser',
    category: 'Estetică',
    description: 'Tratament de albire într-o singură ședință.',
    before: { image: '/images/case3-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case3-after.png', label: 'DUPĂ' },
  },
  {
    id: 4,
    title: 'Tratament Ortodontic',
    category: 'Ortodonție',
    description: 'Aliniere dentară cu aparat invizibil Spark.',
    before: { image: '/images/case4-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case4-after.png', label: 'DUPĂ' },
  },
  {
    id: 5,
    title: 'Coroane Zirconiu',
    category: 'Protetica',
    description: 'Restaurarea funcționalității și esteticii.',
    before: { image: '/images/case5-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case5-after.png', label: 'DUPĂ' },
  },
  {
    id: 6,
    title: 'Reconstrucție Totală',
    category: 'Implantologie',
    description: 'Sistem Fast & Fixed - dinți ficși în 24 de ore.',
    before: { image: '/images/case6-before.png', label: 'ÎNAINTE' },
    after: { image: '/images/case6-after.png', label: 'DUPĂ' },
  },
];

const filterCategories = ['Toate', ...new Set(caseStudies.map(item => item.category))];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState('Toate');

  const filteredCases = activeFilter === 'Toate'
    ? caseStudies
    : caseStudies.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50">

      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Portofoliu cazuri
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6">
              Transformări <span className="text-gradient">spectaculoase</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Descoperă rezultatele muncii noastre. Fiecare zâmbet spune o poveste despre pasiune,
              tehnologie și atenție la detalii.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">


          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300
                  ${activeFilter === category
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>


          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCases.map((study) => (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-colors"
                >
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-inner">
                    <BeforeAfterSlider
                      beforePlaceholder={study.before}
                      afterPlaceholder={study.after}
                    />
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-500">
                      {study.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Filter className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-lg text-slate-500">
                Nu s-au găsit rezultate pentru această categorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}