// Marcăm ca 'use client' pentru a folosi hook-ul usePathname
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  SparklesIcon, // Pentru Galerie
} from '@heroicons/react/24/solid'; // Pictograme pline
import {
  HomeIcon as HomeOutline,
  BriefcaseIcon as BriefcaseOutline,
  ChatBubbleLeftRightIcon as ChatOutline,
  EnvelopeIcon as EnvelopeOutline,
  SparklesIcon as SparklesOutline,
} from '@heroicons/react/24/outline'; // Pictograme contur

// Lista de link-uri
const navigation = [
  { name: 'Acasă', href: '/', icon: HomeOutline, currentIcon: HomeIcon },
  { name: 'Servicii', href: '/servicii', icon: BriefcaseOutline, currentIcon: BriefcaseIcon },
  { name: 'Testimoniale', href: '/testimoniale', icon: ChatOutline, currentIcon: ChatBubbleLeftRightIcon },
  { name: 'Galerie', href: '/galerie', icon: SparklesOutline, currentIcon: SparklesIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeOutline, currentIcon: EnvelopeIcon },
];

// O funcție ajutătoare pentru a gestiona clasele CSS
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LeftSidebar() {
  const pathname = usePathname(); // Obținem calea curentă

  return (
    // Containerul Sidebar-ului
    // 'hidden md:flex' = Ascuns pe mobil, afișat ca flex (vertical) pe desktop (breakpoint 'md')
    // 'md:w-64' = Lățime fixă pe desktop
    // 'h-screen sticky top-0' = Înalțimea completă a ecranului și "lipit" de partea de sus
    <aside className="hidden md:flex md:flex-col md:w-64 h-screen bg-gray-900 text-gray-300 p-6 sticky top-0">
      
      {/* Container flexibil pentru a împinge CTA-ul în jos */}
      <div className="flex-1 flex flex-col gap-y-7">
        
        {/* Logo (text) */}
        <div className="flex h-16 shrink-0 items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Clinic<span className="text-sky-400">Demo</span>
          </Link>
        </div>

        {/* Navigația */}
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-5">
            
            {/* Iterăm prin link-urile de navigație */}
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = isActive ? item.currentIcon : item.icon; // Alegem pictograma corectă

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      isActive
                        ? 'bg-gray-800 text-sky-400' // Stil pentru link activ
                        : 'text-gray-400 hover:text-white hover:bg-gray-800', // Stil pentru link inactiv
                      'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold transition-colors'
                    )}
                  >
                    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Butonul CTA (Call To Action) - fixat în partea de jos */}
      <div className="mt-auto">
        <Link
          href="/programari"
          className="block w-full px-4 py-3 text-center text-lg font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 transition-colors duration-300"
        >
          Programează-te
        </Link>
      </div>
    </aside>
  );
}