// app/page.tsx

// 1. Asigură-te că imporți componentele corecte
import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import Testimonials from './components/Testimonials';
import BeforeAfterGallery from './components/BeforeAfterGallery'; // <-- Importul acesta
import FinalCTA from './components/FinalCTA'; 

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Testimonials />
      
      {/* 2. Aici trebuie să folosești componenta, 
           NU textul "coming soon".
      */}
      <BeforeAfterGallery /> 

      <FinalCTA />
    </>
  );
}