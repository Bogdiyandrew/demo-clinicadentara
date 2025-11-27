import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (

    <div className="bg-white min-h-screen">
      

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        

        <div className="text-center mb-16">
          <EnvelopeIcon className="w-12 h-12 text-sky-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contactați-ne
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Aveți o întrebare sau doriți o consultație? Echipa noastră vă stă la dispoziție.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          

          <div className="space-y-10">
            

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Informații rapide</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <PhoneIcon className="shrink-0 w-6 h-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Telefon programări</h3>
                    <a href="tel:0740123456" className="text-lg text-gray-700 hover:text-sky-600">0740 123 456</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="shrink-0 w-6 h-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:contact@clinicdemo.ro" className="text-lg text-gray-700 hover:text-sky-600">contact@clinicdemo.ro</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="hrink-0 w-6 h-6 text-sky-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Adresă</h3>
                    <p className="text-lg text-gray-700">Str. Zâmbetului Nr. 10, București</p>
                  </div>
                </div>
              </div>
            </div>


            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program</h2>
              <div className="flex items-start">
                <ClockIcon className="shrink-0 w-6 h-6 text-sky-600 mt-1" />
                <div className="ml-4">
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li><span className="font-semibold text-gray-900">Luni - Vineri:</span> 09:00 - 20:00</li>
                    <li><span className="font-semibold text-gray-900">Sâmbătă:</span> 10:00 - 15:00</li>
                    <li><span className="font-semibold text-gray-900">Duminică:</span> Închis</li>
                  </ul>
                </div>
              </div>
            </div>


            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hartă</h2>
        
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.998450176813!2d26.10018621541018!3d44.43792227910118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff46c0b7c1c7%3A0x8f7f139f86f2b2b!2sPalatul%20Parlamentului!5e0!3m2!1sro!2sro!4v1678886000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>

          </div>


          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
            <form action="#" method="POST" className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nume și prenume
                </label>
                <input
                    type="text"
                    id="name"
                     name="name"
                     required
                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
/>

              </div>
              

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                />
              </div>


              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajul tău
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                />
              </div>
              

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-sky-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors cursor-pointer"
                >
                  Trimite Mesajul
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}