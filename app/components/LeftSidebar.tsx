'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Sparkles,
  Image as ImageIcon,
  Phone,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Acasă', href: '/', icon: Home },
  { name: 'Servicii', href: '/servicii', icon: Sparkles },
  { name: 'Echipa', href: '/echipa', icon: Users },
  { name: 'Galerie', href: '/galerie', icon: ImageIcon },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    // MODIFICARE AICI: md:w-64 în loc de md:w-72
    <aside className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50">
      <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Logo Area */}
        <div className="flex items-center justify-center h-24 border-b border-slate-100/50">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-slate-900 tracking-tight">
                Clinic<span className="text-primary">Demo</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Dental Care
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col flex-1 overflow-y-auto py-8 px-4 space-y-2">
          <div className="px-4 mb-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Meniu Principal
            </p>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden
                    ${isActive
                      ? 'text-white shadow-lg shadow-primary/25'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <item.icon
                    className={`
                      mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-300 relative z-10
                      ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary'}
                    `}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{item.name}</span>

                  {!isActive && (
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Card */}
          <div className="mt-auto pt-8 px-2">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-center">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Programare Online</h3>
                <p className="text-slate-400 text-xs mb-4">
                  Rezervă-ți locul rapid și simplu.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 px-4 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-lg shadow-white/5"
                >
                  Programează-te
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile / Footer Area */}
        <div className="p-4 border-t border-slate-100/50 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-bold text-sm">
              CD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Clinic Demo</span>
              <span className="text-xs text-slate-500">București, RO</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}