'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Briefcase,
  MessageSquare,
  Mail,
  Sparkles,
  DollarSign,
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
  { icon: Phone, text: '0740 123 456', href: 'tel:0740123456', label: 'Sună acum' },
  { icon: Clock, text: '09:00 - 18:00', href: null, label: 'Luni - Vineri' },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-80 h-screen sticky top-0 z-50">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-950 border-r border-white/5" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-64 bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col h-full px-6 py-8">
        {/* Logo Area */}
        <motion.div 
          className="mb-12 pl-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              {/* FIX: bg-gradient-to-br -> bg-linear-to-br */}
              <div className="h-8 w-8 rounded-xl bg-linear-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Clinic<span className="text-sky-400">Demo</span>
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium mt-2 ml-1 tracking-wide uppercase">
              Stomatologie Premium
            </span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-4 px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {/* Active State Background (Floating Pill) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    // FIX: bg-gradient-to-r -> bg-linear-to-r
                    className="absolute inset-0 bg-linear-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.1)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className={`relative p-1.5 rounded-lg transition-colors duration-300 ${
                  isActive ? 'text-sky-400' : 'group-hover:text-sky-400'
                }`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                
                <span className="relative z-10 flex-1">{item.name}</span>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact Card Compact */}
        <div className="mt-auto space-y-6">
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-sky-400 group-hover:bg-slate-800/80 transition-colors">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-slate-200 font-semibold hover:text-sky-400 transition-colors">
                        {info.text}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200 font-semibold">{info.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/programari"
            className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-950 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
          >
            <span className="relative z-10">Programare Online</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            {/* FIX: bg-gradient-to-r -> bg-linear-to-r */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-sky-400 via-blue-500 to-sky-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </Link>
        </div>
      </div>
    </aside>
  );
}