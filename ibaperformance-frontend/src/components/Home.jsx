import { memo } from "react";
import { SEO } from "./seo/SEO";
import { HeroSection } from "./home/HeroSection/HeroSection";
import { ServicesSection } from "./home/ServicesSection/ServicesSection";
import { ShowcaseSection } from "./home/ShowcaseSection/ShowcaseSection";
import { AboutSection } from "./home/AboutSection/AboutSection";
import { ContactSection } from "./home/ContactSection/ContactSection";
import { BlogCTA } from "./home/Blog/BlogCTA";
// import { BlogPreview } from "./home/Blog/BlogPreview";

const Home = memo(() => {
  return (
    <>
      <SEO 
        title="IBA Performance - Reprogrammation Moteur & Préparation Automobile"
        description="Spécialiste de la reprogrammation moteur et préparation automobile depuis 15 ans. Optimisation de performances, préparation circuit et stage personnalisé. +500 véhicules préparés à Paris."
        keywords="reprogrammation moteur, préparation automobile, optimisation performance, stage moteur, préparation circuit, chiptuning, garage performance, IBA Performance Paris"
        canonical="/"
      />
      
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <BlogCTA />
      <AboutSection />
      <ContactSection />
    </>
  );
});

export default Home;