import React from 'react';

interface Props {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, name: 'Serviciu' },
  { id: 2, name: 'Data și ora' },
  { id: 3, name: 'Detalii' },
];

export default function StepProgressBar({ currentStep }: Props) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={`relative flex-1 ${stepIdx < steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            {currentStep > step.id ? (

              <div className="group flex items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-sky-600 rounded-full">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
              </div>
            ) : currentStep === step.id ? (

              <div className="flex items-center" aria-current="step">
                <span className="flex items-center justify-center w-10 h-10 border-2 border-sky-600 rounded-full">
                  <span className="text-sky-600">{`0${step.id}`}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-sky-600">{step.name}</span>
              </div>
            ) : (

              <div className="group flex items-center">
                <span className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                  <span className="text-gray-500">{`0${step.id}`}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-500">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}