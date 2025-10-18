import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { useParallax } from "../../../hooks/useParallax";
import { HeroStats } from "./HeroStats";
import { ScrollIndicator } from "./ScrollIndicator";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = memo(function HeroSection() {
  const parallaxOffset = useParallax(0.5);

  const stats = useMemo(
    () => [
      { icon: Gauge, value: "500+", label: "Véhicules préparés" },
      { icon: Zap, value: "15 ans", label: "D'expérience" },
    ],
    []
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
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 z-10" />
        <img
          src="/mockup/Favorite4.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Performance et précision
            </span>
            <br />
            <span className="text-white">au service de votre moteur</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Spécialiste de la reprogrammation moteur, préparation circuit et optimisation de
            performances. Libérez le véritable potentiel de votre véhicule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="default" variant="default" asChild>
              <a href="#realisations">
                Voir mes réalisations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button size="default" variant="default" asChild>
              <a href="#services">
                Voir mes services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <HeroStats stats={stats} />
        </motion.div>

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