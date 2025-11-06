import React from 'react';
import Link from 'next/link';
import { serviceDatabase, Service } from '@/lib/serviceDatabase'; // Importăm "baza de date" și tipul
import { BriefcaseIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Extragem toate serviciile din "baza de date" într-un array
// Object.values() transformă un obiect de obiecte într-un array de obiecte
const services: Service[] = Object.values(serviceDatabase);

export default function ServiciiIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Titlul PaginII */}
        <div className="text-center mb-16">
          <BriefcaseIcon className="w-12 h-12 text-sky-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Serviciile Noastre
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            O gamă completă de tratamente stomatologice pentru un zâmbet sănătos și frumos.
          </p>
        </div>

        {/* Grid-ul cu Carduri de Servicii */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Verificăm dacă există servicii în baza de date */}
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                // Cardul
                className="group flex flex-col justify-between bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-xl hover:bg-sky-50 transition-all duration-300 ease-in-out"
              >
                <div>
                  <h3 className="text-2xl font-semibold leading-8 text-gray-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  {/* Folosim descrierea scurtă pe care am definit-o în baza de date */}
                  <p className="mt-4 text-lg leading-7 text-gray-600">
                    {service.shortDesc}
                  </p>
                </div>
                
                {/* Textul "Află mai mult" */}
                <div className="mt-6">
                  <span className="flex items-center text-lg font-semibold text-sky-600">
                    Detalii Tratament
                    <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-lg text-gray-500 col-span-2 text-center">
              Momentan nu sunt adăugate servicii în baza de date.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}