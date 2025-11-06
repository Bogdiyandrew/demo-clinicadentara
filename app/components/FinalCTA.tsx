import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    // Folosim un gradient similar cu HeroSection pentru un aspect premium
    <section className="bg-gradient-to-r from-gray-900 via-sky-900 to-gray-900 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ești pregătit să-ți transformi zâmbetul?
        </h2>
        <p className="mt-6 text-xl leading-8 text-gray-300">
          Nu mai amâna. Programează o consultație astăzi și descoperă planul de tratament personalizat pentru tine.
        </p>
        <div className="mt-10">
          <Link
            href="/programari"
            className="px-12 py-4 text-lg font-semibold text-sky-900 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Programează-te Online
          </Link>
        </div>
      </div>
    </section>
  );
}