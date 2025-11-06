import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider'; // Importăm componenta client

export default function BeforeAfterGallery() {
  return (
    // Folosim un fundal alb, similar cu secțiunea de Servicii
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Titlul Secțiunii */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">Rezultate Reale</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transformări care vorbesc de la sine
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vezi diferența pe care o pot face experiența și tehnologia noastră. 
            (Trageți slider-ul pentru a compara.)
          </p>
        </div>

        {/* Componenta Slider */}
        <div className="mt-16">
          <BeforeAfterSlider />
        </div>

        {/* Într-un site real, ai putea avea mai multe slidere aici:
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <BeforeAfterSlider />
            <BeforeAfterSlider />
          </div>
        */}

      </div>
    </section>
  );
}