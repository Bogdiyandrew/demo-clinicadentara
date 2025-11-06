import React from 'react';
import type { FormData } from '../../programari/page';
import { DayPicker } from 'react-day-picker';
import { ro } from 'date-fns/locale'; // Pentru localizare în Română
import { format } from 'date-fns';

// Simulare intervale orare
const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdateData: (field: keyof FormData, value: string | Date) => void;
  formData: FormData;
}

export default function Step2DateTime({ onNext, onBack, onUpdateData, formData }: Props) {
  const { date, timeSlot } = formData;
  const canContinue = date && timeSlot; // Verificăm dacă AMBELE sunt selectate

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      onUpdateData('date', selectedDate);
      onUpdateData('timeSlot', ''); 
    }
  };

  const handleTimeSelect = (selectedTime: string) => {
    onUpdateData('timeSlot', selectedTime);
  };

  const footer = date ? (
    <p className="mt-4 text-center text-lg">
      Ați selectat: <strong className="text-sky-600">{format(date, 'd MMMM yyyy', { locale: ro })}</strong>.
    </p>
  ) : (
    <p className="mt-4 text-center text-gray-600">Vă rugăm selectați o zi.</p> // SCHIMBARE: Culoare mai închisă
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 text-center">Alegeți data și ora</h2>

      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
        {/* Partea 1: Calendarul */}
        <div className="flex justify-center">
          <DayPicker
            mode="single"
            selected={date || undefined}
            onSelect={handleDateSelect}
            locale={ro} 
            fromDate={new Date()} 
            footer={footer}
            // SCHIMBARE: Am scos 'border' și am lăsat doar umbra
            className="rounded-lg shadow-md p-4 bg-white"
            classNames={{
              caption_label: 'text-xl font-bold text-gray-900', // Text negru
              head_cell: 'text-gray-700 font-semibold uppercase', // SCHIMBARE: Text mai închis
              head: 'border-t-0', // SCHIMBARE: Am scos linia interioară
              day: 'w-10 h-10 transition-colors rounded-full hover:bg-sky-100 text-gray-900', // SCHIMBARE: Adăugat 'text-gray-900'
              day_today: 'font-bold text-sky-600',
              day_selected: 'bg-sky-600 text-white hover:bg-sky-700',
              day_disabled: 'text-gray-400 line-through', // SCHIMBARE: Puțin mai închis
            }}
          />
        </div>

        {/* Partea 2: Intervalele Orare */}
        {date && (
          <div className="min-w-[250px]">
            <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
              Alegeți ora
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    p-4 rounded-lg border-2 text-center font-semibold
                    ${timeSlot === time 
                      ? 'border-sky-600 bg-sky-50 shadow-md text-sky-700' // Stil Activ
                      : 'border-gray-300 bg-gray-50 text-gray-900 hover:bg-white' // SCHIMBARE: Adăugat 'text-gray-900'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
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
          type="button"
          onClick={onNext}
          disabled={!canContinue} 
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 disabled:bg-gray-400"
        >
          Continuă
        </button>
      </div>
    </div>
  );
}