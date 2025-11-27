import React from 'react';
import { SparklesIcon, CheckBadgeIcon, WrenchScrewdriverIcon, BoltIcon } from '@heroicons/react/24/outline';

const services = [
  { name: 'Consultație Generală', icon: CheckBadgeIcon },
  { name: 'Implantologie', icon: WrenchScrewdriverIcon },
  { name: 'Estetică Dentară', icon: SparklesIcon },
  { name: 'Urgență', icon: BoltIcon },
];

interface Props {
  onNext: () => void;
  onSelectService: (service: string) => void;
  currentService: string | null;
}

export default function Step1Services({ onNext, onSelectService, currentService }: Props) {
  const handleSelect = (serviceName: string) => {
    onSelectService(serviceName);

    setTimeout(() => {
      onNext();
    }, 300); 
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900">Ce serviciu vă interesează?</h2>
      <p className="mt-2 text-gray-600">Alegeți o opțiune pentru a continua.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.name}
            type="button"
            onClick={() => handleSelect(service.name)}
            className={`
              flex flex-col items-center justify-center p-8 rounded-lg border-2 
              transition-all duration-200 cursor-pointer  
              ${currentService === service.name
                ? 'border-sky-600 bg-sky-50 shadow-lg' // Stil activ
                : 'border-gray-300 bg-gray-50 hover:border-sky-500 hover:bg-white' // Stil inactiv
              }
            `}
          >
            <service.icon className="w-12 h-12 text-sky-600" />
            <span className="mt-4 text-lg font-semibold text-gray-900">{service.name}</span>
          </button>
        ))}
      </div>
      {/* Nu avem nevoie de buton "Next" explicit, deoarece click-ul pe card ne trece mai departe */}
    </div>
  );
}