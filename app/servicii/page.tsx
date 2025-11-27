'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { serviceDatabase, Service } from '@/lib/serviceDatabase';
import { 
  ArrowRight, 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Award, 
  HeartPulse, 
  Zap,
  Activity,
  Microscope
} from 'lucide-react';

const services: Service[] = Object.values(serviceDatabase);


const getIconForSlug = (slug: string) => {
  switch (true) {
    case slug.includes('implant'): return Stethoscope;
    case slug.includes('estetic'): return Sparkles;
    case slug.includes('ortodo'): return Smile;
    case slug.includes('prevent'): return Award;
    case slug.includes('urgent'): return Zap;
    case slug.includes('endo'): return Microscope;
    default: return Activity;
  }
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

export default function ServiciiIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.3] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8 lg:py-24">
        

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <HeartPulse className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              Tratamente Premium
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Serviciile <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">Noastre</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Descoperă gama noastră completă de intervenții stomatologice, realizate cu tehnologie de ultimă generație pentru confortul și siguranța ta.
          </p>
        </motion.div>


        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.length > 0 ? (
            services.map((service) => {
              const Icon = getIconForSlug(service.slug);
              
              return (
                <motion.div key={service.slug} variants={cardVariants} className="h-full">
                  <Link
                    href={`/servicii/${service.slug}`}
                    className="group relative flex flex-col h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >

                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-50 rounded-full blur-2xl group-hover:bg-sky-100 transition-colors duration-300" />

                    <div className="relative z-10 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-sky-500 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-8 grow">
                      {service.shortDesc}
                    </p>

                    <div className="relative z-10 mt-auto pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-sky-600 uppercase tracking-wide">
                      <span>Vezi detalii</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-lg">Nu există servicii momentan.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}