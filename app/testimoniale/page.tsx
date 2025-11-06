import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Pictogramă relevantă

// Datele pentru testimoniale (o listă mai lungă, ar veni dintr-un CMS)
const testimonials = [
  {
    name: "Maria Ionescu",
    role: "Pacientă Estetică Dentară",
    initials: "MI",
    quote: "Echipa a fost incredibil de profesionistă și atentă. Mi-au explicat fiecare pas, iar rezultatul... zâmbetul meu este complet transformat. Recomand 100%!"
  },
  {
    name: "Alexandru Vasile",
    role: "Pacient Implantologie",
    initials: "AV",
    quote: "Aveam o teamă teribilă de dentist, dar aici am fost tratat fără pic de durere. Tehnologia pe care o folosesc este uimitoare. Mă simt din nou încrezător."
  },
  {
    name: "Ioana Georgescu",
    role: "Pacientă Ortodonție",
    initials: "IG",
    quote: "Am terminat tratamentul cu aparatul invizibil și sunt extrem de mulțumită. Întregul proces a fost mult mai simplu decât mă așteptam. Mulțumesc echipei!"
  },
  {
    name: "Dan Popescu",
    role: "Pacient Consultație",
    initials: "DP",
    quote: "O clinică unde ești tratat cu respect. Foarte curat, personal amabil și prețuri transparente. Am primit un plan de tratament explicat pe înțelesul meu."
  },
  {
    name: "Elena Marin",
    role: "Pacientă Igienizare",
    initials: "EM",
    quote: "Cea mai bună experiență de igienizare pe care am avut-o vreodată. Fără durere, iar rezultatul se simte imediat. Voi reveni cu siguranță."
  },
  {
    name: "Mihai Constantinescu",
    role: "Pacient Protetică",
    initials: "MC",
    quote: "Mi-am pus o coroană ceramică și arată exact ca un dinte natural. Nu pot să fac diferența. Profesionalism de top."
  },
];

export default function TestimonialePage() {
  return (
    // Folosim 'bg-white' pentru pagina de conținut
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Titlul PaginII */}
        <div className="text-center mb-16">
          <ChatBubbleLeftRightIcon className="w-12 h-12 text-sky-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Ce spun pacienții noștri
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Încrederea și rezultatele pacienților sunt cea mai bună carte a noastră de vizită.
          </p>
        </div>

        {/* Grid-ul cu Testimoniale */}
        {/* 'lg:grid-cols-3' = 3 coloane pe desktop, 'md:grid-cols-2' = 2 pe tabletă */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {testimonials.map((testimonial) => (
            // Cardul de testimonial (stil ușor diferit, pe fundal deschis)
            <div key={testimonial.name} className="flex flex-col bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100">
              
              {/* Pictograma Ghilimele */}
              <div>
                <svg className="w-10 h-10 text-sky-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 8c-2.2 0-4 1.8-4 4v10.667c0 2.2 1.8 4 4 4h4v-8H9.333V12h4V8H9.333zM22.667 8c-2.2 0-4 1.8-4 4v10.667c0 2.2 1.8 4 4 4h4v-8h-4V12h4V8h-4z" />
                </svg>
              </div>
              
              {/* Citatul */}
              <blockquote className="mt-6 flex-grow text-lg font-medium leading-7 text-gray-700">
                <p>"{testimonial.quote}"</p>
              </blockquote>

              {/* Autorul */}
              <footer className="mt-8 flex items-center gap-4">
                {/* Avatar cu Inițiale */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white text-lg font-bold">
                  {testimonial.initials}
                </div>
                
                <div className="text-left">
                  <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-sky-600">{testimonial.role}</div>
                </div>
              </footer>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}