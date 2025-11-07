'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Award, Shield, Clock } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      delay: 0.5,
    },
  },
};

const benefitsData = [
  { icon: Award, text: '15+ Ani Experiență', color: 'from-sky-400 to-blue-500' },
  { icon: Shield, text: 'Garanție Extinsă', color: 'from-emerald-400 to-teal-500' },
  { icon: Clock, text: 'Program Flexibil', color: 'from-purple-400 to-pink-500' },
];

const particlePositions = [
  { left: 15, top: 20 },
  { left: 85, top: 30 },
  { left: 25, top: 60 },
  { left: 70, top: 15 },
  { left: 45, top: 80 },
  { left: 90, top: 50 },
  { left: 10, top: 75 },
  { left: 60, top: 40 },
  { left: 35, top: 25 },
  { left: 75, top: 70 },
  { left: 50, top: 10 },
  { left: 20, top: 90 },
  { left: 80, top: 60 },
  { left: 40, top: 35 },
  { left: 65, top: 85 },
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-sky-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      {isMounted && particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sky-400/30 rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-400/30 rounded-full backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-semibold text-sky-300 uppercase tracking-wider">
                Tehnologie. Confort. Încredere.
              </span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8"
            >
              <span className="bg-linear-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                Zâmbetul pe care
              </span>
              <br />
              <span className="bg-linear-to-r from-sky-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                îl meriți
              </span>
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              De la consultații de rutină la implanturi dentare avansate, echipa noastră de experți 
              este aici pentru a-ți reda <span className="text-sky-400 font-semibold">sănătatea și strălucirea</span> zâmbetului.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-12"
            >
              <Link
                href="/programari"
                className="group relative w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl shadow-2xl shadow-sky-500/50 hover:shadow-sky-500/80 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Programează-te Online</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/servicii"
                className="group w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-white/5 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 hover:scale-105"
              >
                Vezi Serviciile
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Benefits cards - Hidden on mobile, shown on lg+ */}
            <motion.div
              variants={childVariants}
              className="hidden lg:grid grid-cols-3 gap-4"
            >
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex p-2 bg-linear-to-br ${benefit.color} rounded-xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-200">{benefit.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            {/* Decorative elements around image */}
            <div className="absolute -inset-4 bg-linear-to-r from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="absolute -inset-2 bg-linear-to-br from-sky-400/10 to-blue-600/10 rounded-3xl" />
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
              <Image
                src="/herosection.png"
                alt="Clinică Dentară Modernă"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
              
              {/* Floating badge on image */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-sky-400 to-blue-500 border-2 border-white/20" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-500 border-2 border-white/20" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 border-2 border-white/20" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">520+ Pacienți Fericiți</p>
                    <p className="text-sky-300 text-xs">Rating mediu 4.6 ⭐</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative shapes */}
            {isMounted && (
              <>
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-linear-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-linear-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </>
            )}
          </motion.div>

        </div>

        {/* Benefits cards - Mobile version below */}
        <motion.div
          variants={childVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12 lg:hidden"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 bg-linear-to-br ${benefit.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-base font-semibold text-gray-200">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-sky-400 rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}