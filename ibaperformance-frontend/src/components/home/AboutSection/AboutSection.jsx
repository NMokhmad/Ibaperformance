import { memo } from "react";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export const AboutSection = memo(() => {
  return (
    <section id="apropos" className="relative py-24" style={{ background: 'var(--color-warm-white)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  );
});