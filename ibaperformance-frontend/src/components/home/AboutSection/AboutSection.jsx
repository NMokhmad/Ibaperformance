import { memo } from "react";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export const AboutSection = memo(() => {
  return (
    <section id="apropos" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  );
});