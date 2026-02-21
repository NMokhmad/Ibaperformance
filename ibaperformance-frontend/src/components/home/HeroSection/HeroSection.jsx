import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { useParallax } from "../../../hooks/useParallax";
import { HeroStats } from "./HeroStats";
import { ScrollIndicator } from "./ScrollIndicator";
import { MagneticButton } from "../../ui/MagneticButton";

const heroLines = [
  { text: "PERFORMANCE", color: "white" },
  { text: "& PRÉCISION", color: "rgba(255,255,255,0.62)" },
  { text: "AU SERVICE DE", color: "rgba(255,255,255,0.45)" },
  { text: "VOTRE MOTEUR", color: "rgba(255,255,255,0.45)" },
];

const h1Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const lineVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

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
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section d'accueil"
    >
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{ background: 'var(--color-charcoal)' }} />
        <img
          src="/assets/Favorite4-desktop.webp"
          srcSet="/assets/Favorite4-mobile.webp 640w, /assets/Favorite4-tablet.webp 1024w, /assets/Favorite4-desktop.webp 1920w"
          sizes="100vw"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        {/* Dramatic left-heavy overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(10,10,12,0.97) 0%, rgba(10,10,12,0.88) 40%, rgba(10,10,12,0.45) 70%, rgba(10,10,12,0.15) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(10,10,12,1) 0%, transparent 35%)'
        }} />
      </div>

      {/* Racing red left-edge bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10"
        style={{ width: '3px', background: 'var(--color-racing-red)' }}
        aria-hidden="true"
      />

      {/* Subtle horizontal line */}
      <div
        className="absolute left-0 right-0 z-10 hidden lg:block"
        style={{ top: '40%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Content - left aligned */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--color-racing-red)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              Reprogrammation &amp; Préparation Automobile
            </span>
          </div>

          {/* Main headline — staggered line-by-line reveal */}
          <motion.h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
              color: 'white',
              lineHeight: 0.92,
              letterSpacing: '0.01em',
            }}
            variants={h1Variants}
            initial="hidden"
            animate="visible"
          >
            {heroLines.map(({ text, color }, i) => (
              <span
                key={i}
                style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}
              >
                <motion.span
                  style={{ display: 'block', color }}
                  variants={lineVariants}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subline */}
          <p
            className="mb-10 max-w-xl leading-relaxed animate-fade-in"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              animationDelay: '0.8s',
            }}
          >
            Spécialiste de la reprogrammation moteur, préparation circuit et optimisation de
            performances. Libérez le véritable potentiel de votre véhicule.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16 animate-fade-in" style={{ animationDelay: '0.95s' }}>
            <MagneticButton>
              <a href="#realisations" className="btn-racing">
                Voir mes réalisations
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#services" className="btn-outline-racing">
                Nos services
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          <HeroStats stats={stats} />
        </div>
      </div>

      <ScrollIndicator />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, var(--color-charcoal), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
});
