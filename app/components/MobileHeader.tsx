// Marcăm ca 'use client' pentru a folosi useState
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon, // Pictograma "Hamburger"
  XMarkIcon, // Pictograma "X" pentru închidere
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'; // Folosim varianta 'outline' pentru consistență

// Definim link-urile de navigație (le putem refolosi pe cele din Sidebar)
const navigation = [
  { name: 'Acasă', href: '/', icon: HomeIcon },
  { name: 'Servicii', href: '/servicii', icon: BriefcaseIcon },
  { name: 'Testimoniale', href: '/testimoniale', icon: ChatBubbleLeftRightIcon },
  { name: 'Galerie', href: '/galerie', icon: SparklesIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
];

export default function MobileHeader() {
  // Starea pentru a controla deschiderea/închiderea meniului
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Pentru a evidenția link-ul activ

  return (
    // Header-ul principal
    // 'md:hidden' = vizibil DOAR pe mobil (și tabletă portrait)
    // 'sticky top-0 z-40' = Rămâne fixat în partea de sus la scroll
    <header className="md:hidden sticky top-0 z-40 bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Logo-ul */}
        <div>
          <Link href="/" className="text-white text-xl font-bold">
            Clinic<span className="text-sky-400">Demo</span>
          </Link>
        </div>

        {/* Butonul "Hamburger" */}
        <div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(true)} // Deschide meniul modal
          >
            <span className="sr-only">Deschide meniul</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Meniul Modal (Dialog)
        Acesta acoperă tot ecranul când este deschis.
      */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        {/* Fundalul întunecat (overlay) */}
        <div className="fixed inset-0 z-50 bg-black/30" />
        
        {/* Panoul meniului */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          
          {/* Partea de sus a panoului (Logo + Buton Închidere) */}
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white text-xl font-bold">
              Clinic<span className="text-sky-400">Demo</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)} // Închide meniul
            >
              <span className="sr-only">Închide meniul</span>
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Conținutul meniului (Link-uri + Buton CTA) */}
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              
              {/* Link-urile de navigație */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)} // Închide meniul la click
                      className={`-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${
                        isActive ? 'bg-gray-800 text-sky-400' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Butonul CTA */}
              <div className="py-6">
                <Link
                  href="/programari"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-lg font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 transition-colors"
                >
                  Programează-te
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}