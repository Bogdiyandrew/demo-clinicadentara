'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Sparkles, 
  Award, 
  Smile, 
  Stethoscope,
  Heart,
  Zap,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Implanturi Dentare',
    description: 'Soluții moderne și durabile pentru înlocuirea dinților lipsă cu tehnologie avansată.',
    href: '/servicii/implant-dentar',
    icon: Stethoscope,
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'group-hover:from-blue-600 group-hover:to-cyan-600',
  },
  {
    title: 'Estetică Dentară',
    description: 'Albire profesională, fațete dentare și coroane pentru un zâmbet de vis.',
    href: '/servicii/estetica-dentara',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'group-hover:from-purple-600 group-hover:to-pink-600',
  },
  {
    title: 'Ortodonție',
    description: 'Corectarea poziției dinților cu aparate moderne și invizibile.',
    href: '/servicii/ortodontie',
    icon: Smile,
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'group-hover:from-emerald-600 group-hover:to-teal-600',
  },
  {
    title: 'Tratamente Preventive',
    description: 'Igienizări profesionale și consulturi pentru menținerea sănătății dentare.',
    href: '/servicii/preventie',
    icon: Award,
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'group-hover:from-orange-600 group-hover:to-red-600',
  },
  {
    title: 'Stomatologie Generală',
    description: 'Tratamente complete pentru carii, obturații și problemele dentare comune.',
    href: '/servicii/stomatologie',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-500',
    hoverGradient: 'group-hover:from-rose-600 group-hover:to-pink-600',
  },
  {
    title: 'Urgențe Dentare',
    description: 'Asistență rapidă pentru dureri și probleme dentare care necesită tratament imediat.',
    href: '/servicii/urgente',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    hoverGradient: 'group-hover:from-yellow-600 group-hover:to-orange-600',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

// Poziții fixe pentru floating shapes
const floatingShapes = [
  { size: 400, left: 10, top: 15, color: 'bg-sky-300/10', delay: 0 },
  { size: 300, left: 75, top: 10, color: 'bg-blue-400/10', delay: 2 },
  { size: 350, left: 50, top: 60, color: 'bg-purple-300/10', delay: 4 },
  { size: 250, left: 85, top: 70, color: 'bg-cyan-300/10', delay: 1 },
  { size: 200, left: 20, top: 75, color: 'bg-indigo-300/10', delay: 3 },
];

// Poziții pentru particule mici
const smallParticles = [
  { left: 15, top: 25, size: 8, color: 'bg-sky-400/40' },
  { left: 30, top: 45, size: 6, color: 'bg-blue-400/30' },
  { left: 65, top: 30, size: 10, color: 'bg-purple-400/40' },
  { left: 80, top: 55, size: 7, color: 'bg-cyan-400/35' },
  { left: 45, top: 70, size: 9, color: 'bg-indigo-400/30' },
  { left: 90, top: 20, size: 6, color: 'bg-pink-400/40' },
  { left: 10, top: 60, size: 8, color: 'bg-teal-400/35' },
  { left: 55, top: 15, size: 7, color: 'bg-sky-400/30' },
];

export default function FeaturedServices() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      className="relative bg-gradient-to-b from-white via-sky-50/30 to-white py-20 sm:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(14, 165, 233) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(14, 165, 233) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }} />
      </div>

      {/* Large floating shapes with blur - render doar după mount */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute ${shape.color} rounded-full blur-3xl`}
              style={{
                width: shape.size,
                height: shape.size,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                delay: shape.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Radial gradient spots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-sky-200/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-blue-200/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-200/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Small animated particles - render doar după mount */}
      {isMounted && smallParticles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Geometric shapes */}
      {isMounted && (
        <>
          <motion.div
            className="absolute top-20 right-20 w-20 h-20 border-2 border-sky-300/20 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-16 h-16 border-2 border-blue-300/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 right-32 w-12 h-12 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-lg"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm border border-sky-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">
              Serviciile Noastre
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-6"
          >
            Tratamente complete pentru{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              zâmbetul tău
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Oferim o gamă largă de servicii stomatologice, de la prevenție la intervenții complexe, 
            folosind cea mai nouă tehnologie și tehnici moderne.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <Link
                href={service.href}
                className="relative flex flex-col h-full p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} ${service.hoverGradient} p-[2px]`}>
                    <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-3xl" />
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <motion.div
                    variants={iconVariants}
                    className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA with arrow */}
                  <div className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>Află mai mult</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Nu găsești ceea ce cauți?
          </p>
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Vezi toate serviciile
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}