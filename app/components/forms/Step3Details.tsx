import React from 'react';
import type { FormData } from '../../programari/page';

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  onUpdateData: (field: keyof FormData, value: string) => void;
  formData: FormData;
}

export default function Step3Details({ onSubmit, onBack, onUpdateData, formData }: Props) {
  const { name, phone, email } = formData;
  const canSubmit = name && phone && email; // Validare simplă

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-semibold text-gray-900 text-center">Aproape gata!</h2>
      <p className="mt-2 text-center text-gray-600">Confirmați detaliile de contact.</p>

      <div className="mt-8 space-y-6">
        {/* Nume */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nume și Prenume
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => onUpdateData('name', e.target.value)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => onUpdateData('phone', e.target.value)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => onUpdateData('email', e.target.value)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-gray-900"
          />
        </div>
      </div>

      {/* Butoane de Navigare */}
      <div className="mt-12 flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300"
        >
          Înapoi
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          Trimite Programarea
        </button>
      </div>
    </form>
  );
}