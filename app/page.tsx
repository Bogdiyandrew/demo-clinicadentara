import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import Testimonials from './components/Testimonials';

function BeforeAfterGallery() {
  return (
    <section aria-label="Before and after gallery">
      <h2>Before &amp; After</h2>
      <p>Gallery coming soon.</p>
    </section>
  );
}

export default function Home() {
  // Am scos tag-ul <main> care învelea componentele.
  // Folosim un fragment <>...</>
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <Testimonials />
      <BeforeAfterGallery />
    </>
  );
}