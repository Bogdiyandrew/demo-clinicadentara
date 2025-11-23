"use client";
import HeroSection from "./components/HeroSection";
import FeaturedServices from "./components/FeaturedServices";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 pb-10">
      <HeroSection />
      <FeaturedServices />
      <BeforeAfterGallery />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}