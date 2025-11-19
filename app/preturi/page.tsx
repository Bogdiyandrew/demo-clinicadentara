'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Gem, 
  Info, 
  ArrowRight,
  CreditCard,
  Wallet
} from 'lucide-react';

const priceCategories = [
  {
    category: 'Consultații și Prevenție',
    description: 'Primul pas către o sănătate orală perfectă.',
    icon: ShieldCheck,
    theme: 'emerald', // pentru culori dinamice
    services: [
      { name: 'Consultație inițială + Plan tratament', price: '150 RON' },
      { name: 'Igienizare completă (detartraj, periaj, airflow)', price: '350 RON' },
      { name: 'Sigilare șanțuri și fosete (per dinte)', price: '100 RON' },
    ],
  },
  {
    category: 'Tratament Odontal',
    description: 'Soluții durabile pentru carii și tratamente de canal.',
    icon: Activity,
    theme: 'blue',
    services: [
      { name: 'Obturație (plombă) compozit - mică', price: '250 RON' },
      { name: 'Obturație (plombă) compozit - medie', price: '350 RON' },
      { name: 'Tratament endodontic (per canal)', price: '400 RON' },
    ],
  },
  {
    category: 'Implantologie și Protetică',
    description: 'Reconstrucția zâmbetului cu materiale premium.',
    icon: Gem,
    theme: 'purple',
    services: [
      { name: 'Implant dentar (include manopera)', price: 'de la 2500 RON' },
      { name: 'Coroană metalo-ceramică', price: '700 RON' },
      { name: 'Coroană integral ceramică (E-max)', price: '1400 RON' },
    ],
  },
  {
    category: 'Estetică Dentară',
    description: 'Pentru un zâmbet de revistă.',
    icon: Sparkles,
    theme: 'sky',
    services: [
      { name: 'Albire dentară profesională (în cabinet)', price: '1200 RON' },
      { name: 'Fațetă ceramică E-max (per dinte)', price: '1800 RON' },
    ],
  },
];

// Helper pentru clase de culoare dinamice
const getThemeClasses = (theme: string) => {
  const themes: Record<string, { icon: string; bg: string; border: string }> = {
    emerald: { icon: 'text-emerald-600', bg: 'bg-emerald-500/10', border: 'group-hover:border-emerald-500/30' },
    blue: { icon: 'text-blue-600', bg: 'bg-blue-500/10', border: 'group-hover:border-blue-500/30' },
    purple: { icon: 'text-purple-600', bg: 'bg-purple-500/10', border: 'group-hover:border-purple-500/30' },
    sky: { icon: 'text-sky-600', bg: 'bg-sky-500/10', border: 'group-hover:border-sky-500/30' },
  };
  return themes[theme] || themes.blue;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PreturiPage() {
  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      
      {/* Background Decorativ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-sky-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.4] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:px-8 lg:py-24">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Wallet className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              Investiție transparentă
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Costuri clare, <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">fără surprize</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Credem în transparență totală. Mai jos găsești lista de prețuri pentru cele mai comune proceduri. Pentru un plan exact, te așteptăm la o consultație.
          </p>
        </motion.div>

        {/* --- Price Categories Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {priceCategories.map((category, index) => {
            const theme = getThemeClasses(category.theme);
            
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className={`group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 ${theme.border}`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Category Header (Left side on Desktop) */}
                  <div className="md:w-1/3 flex flex-col items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${theme.bg}`}>
                      <category.icon className={`w-6 h-6 ${theme.icon}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      {category.category}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Services List (Right side) */}
                  <div className="md:w-2/3 w-full">
                    <ul className="space-y-4">
                      {category.services.map((service, sIndex) => (
                        <li key={sIndex} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors rounded-lg px-2 -mx-2">
                          <span className="text-slate-700 font-medium">
                            {service.name}
                          </span>
                          <span className={`text-lg font-bold whitespace-nowrap ml-4 ${theme.icon}`}>
                            {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- Footer Info / Disclaimer --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-slate-100/50 rounded-2xl p-6 flex items-start gap-4 border border-slate-200/50">
            <Info className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
            <div className="text-sm text-slate-500 leading-relaxed">
              <p className="mb-2"><strong>Notă importantă:</strong> Prețurile afișate sunt informative și pot suferi modificări în funcție de complexitatea cazului clinic.</p>
              <p>Planul final de tratament și costul exact vor fi stabilite de medicul stomatolog în urma consultației și a analizei radiografiilor.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Vrei să afli costul exact pentru cazul tău?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/programari"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/20"
              >
                Programează o Consultație
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                Întreabă-ne
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
               <CreditCard className="w-4 h-4" />
               <span>Acceptăm plata cu cardul și în rate fără dobândă</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}