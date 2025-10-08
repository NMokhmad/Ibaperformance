import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ShowcaseSection from "../components/home/ShowcaseSection";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

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