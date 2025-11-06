import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'; // O pictogramă relevantă

// Datele pentru prețuri (ar veni dintr-un CMS)
// Grupăm prețurile pe categorii pentru o structură mai clară
const priceCategories = [
  {
    category: 'Consultații și Prevenție',
    services: [
      { name: 'Consultație inițială + Plan tratament', price: '150 RON' },
      { name: 'Igienizare completă (detartraj, periaj, airflow)', price: '350 RON' },
      { name: 'Sigilare șanțuri și fosete (per dinte)', price: '100 RON' },
    ],
  },
  {
    category: 'Tratament Odontal',
    services: [
      { name: 'Obturație (plombă) compozit - mică', price: '250 RON' },
      { name: 'Obturație (plombă) compozit - medie', price: '350 RON' },
      { name: 'Tratament endodontic (per canal)', price: '400 RON' },
    ],
  },
  {
    category: 'Implantologie și Protetică',
    services: [
      { name: 'Implant dentar (include manopera)', price: 'de la 2500 RON' },
      { name: 'Coroană metalo-ceramică', price: '700 RON' },
      { name: 'Coroană integral ceramică (E-max)', price: '1400 RON' },
    ],
  },
  {
    category: 'Estetică Dentară',
    services: [
      { name: 'Albire dentară profesională (în cabinet)', price: '1200 RON' },
      { name: 'Fațetă ceramică E-max (per dinte)', price: '1800 RON' },
    ],
  },
];

export default function PreturiPage() {
  return (
    // Folosim 'bg-white' pentru pagina de conținut
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Titlul PaginII */}
        <div className="text-center mb-16">
          <CurrencyDollarIcon className="w-12 h-12 text-sky-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Transparență și Prețuri
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Investiția în zâmbetul tău. Oferim planuri de tratament personalizate și opțiuni de finanțare.
          </p>
        </div>

        {/* Containerul pentru listele de prețuri */}
        <div className="space-y-12">
          {priceCategories.map((category) => (
            <div key={category.category}>
              {/* Titlul Categoriei */}
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-sky-500 pb-3 mb-6">
                {category.category}
              </h2>

              {/* Lista de servicii din categorie */}
              <ul className="divide-y divide-gray-500">
                {category.services.map((service) => (
                  // Fiecare rând din tabelul de prețuri
                  <li key={service.name} className="flex justify-between items-center py-5">
                    
                    {/* Numele Serviciului */}
                    <span className="text-lg text-gray-700">
                      {service.name}
                    </span>
                    
                    {/* Prețul Serviciului */}
                    <span className="text-lg font-semibold text-gray-900">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Notă de subsol */}
        <div className="mt-16 text-center text-gray-500 border-t border-stone-500 pt-8">
          <p>
            *Prețurile sunt informative și pot varia în funcție de complexitatea cazului.
            <br />
            Planul final de tratament va fi stabilit în urma consultației.
          </p>
        </div>
      </div>
    </div>
  );
}