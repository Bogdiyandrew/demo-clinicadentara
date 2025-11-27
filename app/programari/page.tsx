'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail,
  Sparkles,
  ArrowLeft,
  Home
} from 'lucide-react';
import StepProgressBar from '../components/forms/StepProgressBar';
import Step1Services from '../components/forms/Step1Services';
import Step2DateTime from '../components/forms/Step2DateTime';
import Step3Details from '../components/forms/Step3Details';

export interface FormData {
  service: string | null;
  date: Date | null;
  timeSlot: string | null;
  name: string;
  phone: string;
  email: string;
}

export default function ProgramariPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: null,
    date: null,
    timeSlot: null,
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Date trimise:', formData);
    setIsSubmitted(true);
  };


  if (isSubmitted) {
    const formattedDate = formData.date
      ? format(formData.date, "EEEE, d MMMM yyyy", { locale: ro })
      : "Data neconfirmată";
      
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-sky-50 to-slate-50 flex items-center justify-center p-6">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
        >

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-emerald-400/30 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Programare trimisă cu succes!
            </h1>
            <p className="text-lg text-gray-600">
              Vă mulțumim, <span className="font-semibold text-gray-900">{formData.name}</span>! 
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-br from-sky-50 to-blue-50 rounded-2xl p-6 mb-8 border border-sky-100"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Detalii Programare
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Serviciu</p>
                  <p className="text-base font-semibold text-gray-900">{formData.service}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data</p>
                  <p className="text-base font-semibold text-gray-900 capitalize">{formattedDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center hrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Interval orar</p>
                  <p className="text-base font-semibold text-gray-900">{formData.timeSlot}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="text-base font-semibold text-gray-900">{formData.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-8"
          >
            <p className="text-sm text-gray-600 text-center">
              Vă vom contacta în <span className="font-semibold text-sky-700">cel mai scurt timp</span> pentru 
              a confirma programarea dumneavoastră.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Înapoi acasǎ
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-sky-50 to-slate-50">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 border border-sky-200 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">
              Programare online
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Rezervă-ți{' '}
            <span className="bg-linear-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              consultația
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Completează formularul în 3 pași simpli și te vom contacta pentru confirmare.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StepProgressBar currentStep={currentStep} totalSteps={3} />
        </motion.div>


        <motion.div
          className="mt-12 bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Step1Services 
                  onNext={nextStep} 
                  onSelectService={(service) => updateFormData('service', service)}
                  currentService={formData.service}
                />
              </motion.div>
            )}
            
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Step2DateTime 
                  onNext={nextStep} 
                  onBack={prevStep} 
                  onUpdateData={updateFormData}
                  formData={formData}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Step3Details 
                  onBack={prevStep} 
                  onSubmit={handleSubmit}
                  onUpdateData={updateFormData}
                  formData={formData}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
        </motion.div>
      </div>
    </div>
  );
}