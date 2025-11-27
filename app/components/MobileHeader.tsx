'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Users,
  Sparkles,
  Gem,
  Building,
  Image as ImageIcon,
  Phone,
  Calendar,
  ChevronRight
} from 'lucide-react';

const navigation = [
  { name: 'Acasă', href: '/', icon: Home },
  { name: 'Servicii', href: '/servicii', icon: Sparkles },
  { name: 'Echipa', href: '/echipa', icon: Users },
  { name: 'Preturi', href: '/preturi', icon: Gem },
  { name: 'Galerie', href: '/galerie', icon: ImageIcon },
  { name: 'Contact', href: '/contact', icon: Phone },
  {name: 'Programare directǎ', href: '/programari', icon: Building },

];

export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header

        className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 text-lg font-bold font-heading leading-none">
                Clinic<span className="text-primary">Demo</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Dental Care</span>
            </div>
          </Link>

          <motion.button
            type="button"
            className="relative p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />


            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl md:hidden overflow-y-auto border-l border-slate-100"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Meniu</span>
                  <motion.button
                    type="button"
                    className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-900 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="space-y-2">
                    {navigation.map((item, index) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`group flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 ${isActive
                              ? 'bg-primary/5 text-primary'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                          >
                            <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} />
                            <span className="flex-1">{item.name}</span>
                            <ChevronRight className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-slate-300'}`} />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Programează-te</span>
                  </Link>

                  <div className="mt-4 flex justify-center">
                    <a href="tel:0740123456" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      0740 123 456
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}