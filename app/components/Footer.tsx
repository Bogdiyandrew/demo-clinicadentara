import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obținem anul curent automat

  return (
    // Folosim un fundal închis, textul centrat
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8 text-center">
        
        {/* ----- Blocul 1: ATENȚIE ----- */}
        {/* Folosim un 'border-b' (border-bottom) pentru a-l separa vizual */}
        <div className="mb-8 border-b border-gray-700 pb-8">
          <h3 className="text-sm font-semibold uppercase text-yellow-400 tracking-wider">
            ATENȚIE
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare. 
            Nu reprezintă o clinică reală și nu reflectă întregul potențial al serviciilor oferite de
            {/* Am făcut 'digitura.ro' un link care se deschide în tab nou */}
            <Link 
              href="https://digitura.ro" // Asumăm că acesta e link-ul
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-sky-400 transition-colors"
            >
              &nbsp;digitura.ro
            </Link>.
          </p>
        </div>

        {/* ----- Blocul 2: Brand & Copyright ----- */}
        <div className="mb-8">
          {/* Folosim logo-ul nostru text */}
          <h2 className="text-2xl font-bold text-white">
            Clinic<span className="text-sky-400">Demo</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {currentYear} ClinicDemo. Toate drepturile rezervate.
          </p>
        </div>

      </div>
    </footer>
  );
}