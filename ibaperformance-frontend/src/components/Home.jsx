import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";
import ShowcaseSection from "./home/ShowcaseSection";
import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}