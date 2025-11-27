import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8 text-center">

        <div className="mb-8 border-b border-slate-800 pb-8">
          <h3 className="text-xs font-bold uppercase text-secondary tracking-widest mb-3">
            Notă importantă
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare.
            Nu reprezintă o clinică reală și nu reflectă întregul potențial al serviciilor oferite de
            <Link
              href="https://digitura.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-primary transition-colors ml-1"
            >
              digitura.ro
            </Link>.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold font-heading text-white tracking-tight">
            Clinic<span className="text-primary">Demo</span>
          </h2>
          <p className="text-sm text-slate-500">
            &copy; {currentYear} ClinicDemo. Toate drepturile rezervate.
          </p>
        </div>

      </div>
    </footer>
  );
}