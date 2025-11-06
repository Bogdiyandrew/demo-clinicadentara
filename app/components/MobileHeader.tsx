'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Briefcase,
  MessageSquare,
  Mail,
  Sparkles,
  DollarSign,
  Calendar,
  Phone,
  Clock,
  ChevronRight
} from 'lucide-react';

const navigation = [
  { name: 'Acasă', href: '/', icon: Home },
  { name: 'Servicii', href: '/servicii', icon: Briefcase },
  { name: 'Testimoniale', href: '/testimoniale', icon: MessageSquare },
  { name: 'Prețuri', href: '/preturi', icon: DollarSign },
  { name: 'Galerie', href: '/galerie', icon: Sparkles },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const contactInfo = [
  { icon: Phone, text: '0740 123 456', href: 'tel:0740123456' },
  { icon: Clock, text: 'Lun-Vin: 9:00-18:00', href: null },
];

export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header principal */}
      <motion.header 
        className="lg:hidden sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-black leading-none">
                Clinic<span className="text-sky-400">Demo</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium">Zâmbetul perfect</span>
            </div>
          </Link>

          {/* Hamburger Button */}
          <motion.button
            type="button"
            className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative h-full flex flex-col p-6">
                
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/50">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-lg font-black leading-none">
                        Clinic<span className="text-sky-400">Demo</span>
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Zâmbetul perfect</span>
                    </div>
                  </Link>
                  
                  <motion.button
                    type="button"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2 mb-6">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`group relative flex items-center gap-4 rounded-2xl p-4 text-base font-semibold transition-all duration-300 border ${
                            isActive
                              ? 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-white border-sky-400/50 shadow-lg shadow-sky-500/20'
                              : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileTab"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-sky-400 to-blue-600 rounded-r-full"
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}
                          
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-br from-sky-400 to-blue-600 text-white'
                              : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          
                          <span className="flex-1">{item.name}</span>
                          
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Contact Info Card */}
                <motion.div
                  className="mb-6 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">Contact rapid</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <info.icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <span className="text-gray-400">{info.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href="/programari"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative block w-full px-6 py-4 text-center text-base font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg shadow-sky-500/50 hover:shadow-sky-500/80 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Programează-te Online
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>

                {/* Status indicator */}
                <motion.div
                  className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span>Disponibili acum</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}