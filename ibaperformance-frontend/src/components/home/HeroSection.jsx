import { Button } from "../ui/button";

import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  // Throttle scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize static data
  const stats = useMemo(
    () => [
      { icon: Gauge, value: "500+", label: "Véhicules préparés" },
      { icon: Zap, value: "15 ans", label: "D'expérience" },
    ],
    [],
  );

  // Memoize parallax transform
  const parallaxTransform = useMemo(() => `translateY(${scrollY * 0.5}px)`, [scrollY]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 + i * 0.1 },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section d'accueil"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: parallaxTransform }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Animated Grid Overlay */}
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
          {/* Badge 
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-xs px-4 py-2 rounded-full mb-6 border border-zinc-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-sm text-zinc-300">Garage de performance automobile</span>
          </div>
          */}

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Performance et précision
            </span>
            <br />
            <span className="text-white">au service de votre moteur</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Spécialiste de la reprogrammation moteur, préparation circuit et optimisation de
            performances. Libérez le véritable potentiel de votre véhicule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="default"
              variant="default"
              className=""
              asChild
            >
              <a href="#realisations">
                Voir mes réalisations
                <ArrowRight
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </Button>

            <Button
              size="default"
              variant="default"
              className=""
              asChild
            >
              <a href="#services">
                Voir mes services
                <ArrowRight
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </Button>
            
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            role="list"
            aria-label="Statistiques du garage"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-zinc-900/50 backdrop-blur-xs border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
                  role="listitem"
                >
                  <Icon className="w-8 h-8 text-zinc-300 mb-3 mx-auto" aria-hidden="true" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <div
          className="hidden lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-20 lg:flex"
          aria-hidden="true">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex items-start justify-center p-1">
            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent z-15 pointer-events-none"
        aria-hidden="true"
      />
      {/* Scroll Indicator */}
    </section>
  );
}
