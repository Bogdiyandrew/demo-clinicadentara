import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import Testimonials from './components/Testimonials';
import BeforeAfterGallery from './components/BeforeAfterGallery'; 
import FinalCTA from './components/FinalCTA'; 

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Testimonials />

      <BeforeAfterGallery /> 

      <FinalCTA />
    </>
  );
}