// Marcăm ca 'use client' pentru a folosi filtrele (useState)
'use client';

import React, { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import BeforeAfterSlider from '../components/BeforeAfterSlider'; // Importăm componenta actualizată

// Datele pentru galerie (ar veni dintr-un CMS)
// Folosim culori diferite pentru placeholdere ca să arătăm că sunt cazuri diferite
const caseStudies = [
  {
    id: 1,
    title: 'Caz 1: Implanturi multiple',
    category: 'Implantologie',
    before: { color: 'bg-red-400', label: 'ÎNAINTE' },
    after: { color: 'bg-green-400', label: 'DUPĂ' },
  },
  {
    id: 2,
    title: 'Caz 2: Fațete E-max',
    category: 'Estetică',
    before: { color: 'bg-blue-400', label: 'ÎNAINTE' },
    after: { color: 'bg-teal-400', label: 'DUPĂ' },
  },
  {
    id: 3,
    title: 'Caz 3: Albire profesională',
    category: 'Estetică',
    before: { color: 'bg-yellow-600', label: 'ÎNAINTE' },
    after: { color: 'bg-yellow-300', label: 'DUPĂ' },
  },
  {
    id: 4,
    title: 'Caz 4: Aparat dentar (adult)',
    category: 'Ortodonție',
    before: { color: 'bg-indigo-400', label: 'ÎNAINTE' },
    after: { color: 'bg-purple-400', label: 'DUPĂ' },
  },
  {
    id: 5,
    title: 'Caz 5: Coroane ceramice',
    category: 'Estetică',
    before: { color: 'bg-gray-500', label: 'ÎNAINTE' },
    after: { color: 'bg-gray-200', label: 'DUPĂ' },
  },
  {
    id: 6,
    title: 'Caz 6: Reabilitare completă',
    category: 'Implantologie',
    before: { color: 'bg-orange-600', label: 'ÎNAINTE' },
    after: { color: 'bg-lime-400', label: 'DUPĂ' },
  },
];

// Extragem categoriile pentru filtre
const filterCategories = ['Toate', ...new Set(caseStudies.map(item => item.category))];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState('Toate');

  // Filtrăm cazurile pe baza butonului activ
  const filteredCases = activeFilter === 'Toate'
    ? caseStudies
    : caseStudies.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Titlul PaginII */}
        <div className="text-center mb-16">
          <SparklesIcon className="w-12 h-12 text-sky-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Galerie de Transformări
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Rezultate reale. Pacienți fericiți. Vedeți diferența pe care o putem face.
          </p>
        </div>

        {/* Butoanele de Filtrare */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 text-base font-semibold rounded-full transition-colors
                ${activeFilter === category
                  ? 'bg-sky-600 text-white shadow' // Stil Activ
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Stil Inactiv
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grila cu Slidere */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {filteredCases.map((study) => (
            <div key={study.id}>
              {/* Componenta Slider Interactivă */}
              <BeforeAfterSlider
                beforePlaceholder={study.before}
                afterPlaceholder={study.after}
              />
              {/* Titlul Cazului */}
              <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                {study.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Notă: Dacă nu s-au găsit rezultate */}
        {filteredCases.length === 0 && (
          <p className="text-center text-lg text-gray-500">
            Nu s-au găsit rezultate pentru această categorie.
          </p>
        )}

      </div>
    </div>
  );
}