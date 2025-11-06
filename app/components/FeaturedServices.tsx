import React from 'react';
import Link from 'next/link';

// Definim o structură pentru datele serviciilor
// Într-un proiect real, acestea ar veni dintr-un CMS
const services = [
  {
    title: 'Implanturi Dentare',
    description: 'Soluții moderne și durabile pentru înlocuirea dinților lipsă, redându-vă zâmbetul complet.',
    href: '/servicii/implant-dentar',
    // Exemplu de pictogramă SVG (un dinte)
    icon: (
      <svg className="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.513c.47 0 .682.559.342.886l-4.438 3.326a.563.563 0 0 0-.182.557l1.636 5.031c.119.366-.3.695-.628.451L12 16.34l-4.773 3.57c-.329.245-.748-.085-.628-.451l1.636-5.031a.563.563 0 0 0-.182-.557l-4.438-3.326c-.34-.327-.128-.886.342-.886h5.513a.563.563 0 0 0 .475-.31L11.48 3.5Z" clipRule="evenodd" />
        {/* Placeholder - Am folosit o stea, dar poți înlocui cu un SVG pentru un dinte */}
      </svg>
    ),
  },
  {
    title: 'Estetică Dentară',
    description: 'Albire profesională, fațete dentare și coroane pentru un zâmbet strălucitor și aliniat perfect.',
    href: '/servicii/estetica-dentara',
    // Exemplu de pictogramă SVG (o baghetă magică/strălucire)
    icon: (
      <svg className="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 3.104 5.25 5.25m-5.25 0 5.25 5.25M9.75 3.104l-5.25 5.25m5.25 0-5.25 5.25m9.75-9.75 5.25 5.25m-5.25 0 5.25 5.25m-9.75 9.75 5.25-5.25m-5.25 0L9.75 15.6m-2.25 2.25 5.25-5.25m-5.25 0 5.25-5.25M12 3.896l5.25 5.25" />
        {/* Placeholder - Am folosit o pictogramă de scânteie */}
      </svg>
    ),
  },
  {
    title: 'Ortodonție (Aparate)',
    description: 'Corectarea poziției dinților cu aparate dentare moderne, invizibile (Invisalign) sau clasice.',
    href: '/servicii/ortodontie',
    // Exemplu de pictogramă SVG (niște acolade)
    icon: (
      <svg className="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h3.75" />
         {/* Placeholder - Am folosit o pictogramă de ajustare */}
      </svg>
    ),
  },
];

export default function FeaturedServices() {
  return (
    // Folosim o culoare de fundal ușor diferită (alb-murdar) pentru a contrasta cu Hero
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Titlul Secțiunii */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">Serviciile Noastre</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tratamente complete pentru zâmbetul tău
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferim o gamă largă de servicii stomatologice, de la prevenție la intervenții complexe, folosind cea mai nouă tehnologie.
          </p>
        </div>

        {/* Grid-ul cu Carduri de Servicii */}
        {/* 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' = 1 coloană pe mobil, 2 pe tabletă, 3 pe desktop */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            // Fiecare card este un Link către pagina serviciului
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl hover:bg-sky-50 transition-all duration-300 ease-in-out"
            >
              {/* Pictograma */}
              <div className="mb-4">
                {service.icon}
              </div>

              {/* Titlul */}
              <h3 className="text-xl font-semibold leading-8 text-gray-900 group-hover:text-sky-700 transition-colors">
                {service.title}
              </h3>

              {/* Descrierea */}
              <p className="mt-3 text-base leading-7 text-gray-600">
                {service.description}
              </p>
              
              {/* Textul "Află mai mult" */}
              <div className="mt-6">
                <span className="text-base font-semibold text-sky-600">
                  Află mai mult 
                  {/* Săgeată care apare la hover pe card */}
                  <span aria-hidden="true" className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}