import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serviceDatabase } from '../../../lib/serviceDatabase';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import type { Service } from '../../../lib/serviceDatabase';


interface ServicePageProps {
  params: {
    slug: string; 
  };
}

function getServiceBySlug(slug: string): Service | undefined {
  return serviceDatabase[slug];
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params; // AICI trebuie await
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      

      <div className="bg-gray-900 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-2xl text-gray-300">{service.shortDesc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ce este {service.title}?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.longDesc}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Etapele Tratamentului
              </h2>
              <ol className="relative border-l border-gray-300 space-y-8">
                {service.steps.map((step, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 text-sky-700 font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>

          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-24 h-fit">
            
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                Beneficii Cheie
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="shrink-0 w-6 h-6 text-green-500 mt-1" />
                    <span className="ml-3 text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-sky-700 text-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-3xl font-extrabold mb-4">
                Sunteți pregătit?
              </h3>
              <p className="text-lg text-sky-100 mb-6">
                Faceți primul pas către un zâmbet sănătos și frumos.
              </p>
              <Link
                href="/programari"
                className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-sky-700 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                Programează-te Acum
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}