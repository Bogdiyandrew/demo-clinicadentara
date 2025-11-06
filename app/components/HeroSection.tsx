import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    // Am înlocuit <Image> cu un fundal gradient.
    // 'bg-gradient-to-br' = gradient de la 'top-left' (by default) la 'bottom-right'
    // 'from-gray-900' = culoarea de start
    // 'via-sky-900' = o culoare de mijloc pentru profunzime
    // 'to-gray-900' = culoarea de final
    <section className="relative w-full min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900">
      
      {/* Conținutul text - acum nu mai are nevoie de z-index sau overlay-uri */}
      <div className="max-w-4xl mx-auto text-center p-8">
        
        {/* Tagline */}
        <span className="text-lg font-semibold text-sky-300 uppercase tracking-wider">
          Tehnologie. Confort. Încredere.
        </span>

        {/* Titlul principal */}
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-7xl !leading-tight">
          Zâmbetul pe care îl meriți.
          <br />
          Experiența pe care o cauți.
        </h1>

        {/* Descrierea */}
        <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
          De la consultații de rutină la implanturi dentare avansate, echipa noastră de experți este aici pentru a-ți reda sănătatea și strălucirea zâmbetului.
        </p>

        {/* Butoanele Call-to-Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Butonul Principal (CTA Primar) */}
          <Link
            href="/programari"
            className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 transition-colors duration-300"
          >
            Programează-te Online
          </Link>

          {/* Butonul Secundar (CTA Secundar) */}
          <Link
            href="/servicii"
            className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-sky-900 transition-colors duration-300"
          >
            Vezi Serviciile
          </Link>
        </div>
      </div>
    </section>
  );
}