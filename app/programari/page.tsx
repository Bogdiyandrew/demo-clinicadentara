// Marcăm ca 'use client' pentru a gestiona starea (step, formData)
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns'; // 1. IMPORTĂ 'format'
import { ro } from 'date-fns/locale'; // 2. IMPORTĂ localizarea în Română
import StepProgressBar from '../components/forms/StepProgressBar';
import Step1Services from '../components/forms/Step1Services';
import Step2DateTime from '../components/forms/Step2DateTime';
import Step3Details from '../components/forms/Step3Details';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Definim tipurile pentru datele din formular
export interface FormData {
  service: string | null;
  date: Date | null; // <-- 3. MODIFICARE: din string în Date
  timeSlot: string | null;
  name: string;
  phone: string;
  email: string;
}

export default function ProgramariPage() {
  // Starea pentru pasul curent
  const [currentStep, setCurrentStep] = useState(1);
  // Starea pentru datele colectate
  const [formData, setFormData] = useState<FormData>({
    service: null,
    date: null, // <-- Valoarea inițială e tot 'null'
    timeSlot: null,
    name: '',
    phone: '',
    email: '',
  });
  // Stare pentru a arăta mesajul de succes
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Funcție pentru a actualiza datele (acum acceptă și Date)
  const updateFormData = (field: keyof FormData, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ... (restul funcțiilor nextStep, prevStep, handleSubmit rămân la fel) ...
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Date trimise:', formData);
    setIsSubmitted(true);
  };


  // Afișăm ecranul de succes
  if (isSubmitted) {
    // 4. ACTUALIZĂM AFIȘAREA DATEI
    const formattedDate = formData.date
      ? format(formData.date, "EEEE, d MMMM yyyy", { locale: ro })
      : "Data neconfirmată";
      
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
        <CheckCircleIcon className="w-24 h-24 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Programare trimisă!</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-lg text-center">
          Vă mulțumim, {formData.name}. Vă vom contacta în cel mai scurt timp pe 
          numărul {formData.phone} pentru a confirma programarea pentru
          <br/>
          <strong className="text-gray-900">{formattedDate}</strong>
          , intervalul <strong className="text-gray-900">{formData.timeSlot}</strong>.
        </p>
        <Link href="/" className="mt-8 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700">
          Înapoi Acasă
        </Link>
      </div>
    );
  }

  // ... (restul componentei de la 'return' în jos rămâne la fel) ...
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Programare Online
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Simplu și rapid, în 3 pași.
          </p>
        </div>

        <StepProgressBar currentStep={currentStep} totalSteps={3} />

        <div className="mt-12">
          {currentStep === 1 && (
            <Step1Services 
              onNext={nextStep} 
              onSelectService={(service) => updateFormData('service', service)}
              currentService={formData.service}
            />
          )}
          
          {currentStep === 2 && (
            <Step2DateTime 
              onNext={nextStep} 
              onBack={prevStep} 
              onUpdateData={updateFormData} // Trimitem funcția actualizată
              formData={formData}
            />
          )}

          {currentStep === 3 && (
            <Step3Details 
              onBack={prevStep} 
              onSubmit={handleSubmit}
              onUpdateData={updateFormData}
              formData={formData}
            />
          )}
        </div>
      </div>
    </div>
  );
}