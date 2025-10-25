import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { useParallax } from "../../../hooks/useParallax";
import { HeroStats } from "./HeroStats";
import { ScrollIndicator } from "./ScrollIndicator";

export const HeroSection = memo(() => {
  const parallaxOffset = useParallax(0.5);

  const stats = useMemo(
    () => [
      { icon: Gauge, value: "500+", label: "Véhicules préparés" },
      { icon: Zap, value: "15 ans", label: "D'expérience" },
    ],
    [],
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section d'accueil"
    >
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        aria-hidden="true"
      >
        {/* Solid color placeholder to prevent layout shift */}
        <div className="absolute inset-0 bg-zinc-900" />
        <img
          src="/assets/Favorite4-desktop.webp"
          srcSet="/assets/Favorite4-mobile.webp 640w, /assets/Favorite4-tablet.webp 1024w, /assets/Favorite4-desktop.webp 1920w"
          sizes="100vw"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Performance et précision
            </span>
            <br />
            <span className="text-white">au service de votre moteur</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Spécialiste de la reprogrammation moteur, préparation circuit et optimisation de
            performances. Libérez le véritable potentiel de votre véhicule.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4">
            <Button size="default" variant="default" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#realisations" className="flex items-center justify-center gap-2">
                Voir mes réalisations
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button size="default" variant="default" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#services" className="flex items-center justify-center gap-2">
                Voir mes services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <HeroStats stats={stats} />
        </div>

        <ScrollIndicator />
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-15 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
});