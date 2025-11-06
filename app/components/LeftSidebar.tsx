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
  Calendar,
  Phone,
  Clock
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 xl:w-80 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-300 sticky top-0 border-r border-white/5 shadow-2xl">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col h-full p-6">
        
        {/* Logo Section */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex flex-col">
            <span className="text-white text-2xl font-black leading-none">
              Clinic<span className="text-sky-400">Demo</span>
            </span>
            <span className="text-xs text-gray-400 font-medium mt-1">Zâmbetul perfect</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2 mb-8">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={classNames(
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-white border-sky-400/50 shadow-lg shadow-sky-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10',
                    'group relative flex items-center gap-4 rounded-2xl p-4 text-base font-semibold transition-all duration-300 border'
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-sky-400 to-blue-600 rounded-r-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={classNames(
                    isActive
                      ? 'bg-gradient-to-br from-sky-400 to-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10',
                    'p-2 rounded-xl transition-all duration-300 group-hover:scale-110'
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <span className="flex-1">{item.name}</span>
                  
                  {/* Arrow indicator on hover */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  </motion.div>
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
          transition={{ duration: 0.5, delay: 0.6 }}
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
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            href="/programari"
            className="group relative block w-full px-6 py-4 text-center text-base font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg shadow-sky-500/50 hover:shadow-sky-500/80 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Programează-te Online
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>Disponibili acum</span>
        </motion.div>
      </div>
    </aside>
  );
}