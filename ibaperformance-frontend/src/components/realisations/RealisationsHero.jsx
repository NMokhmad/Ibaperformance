import { memo } from "react";
import { motion } from "framer-motion";

export const RealisationsHero = memo(({ projectsCount, totalPower }) => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--color-charcoal)', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      {/* Left vertical bar */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{ width: '3px', background: 'var(--color-racing-red)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div style={{ width: '40px', height: '2px', background: 'var(--color-racing-red)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            Portfolio
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: 'white',
            lineHeight: 0.92,
            letterSpacing: '0.01em',
            marginBottom: '1.5rem',
          }}
        >
          MES RÉALISATIONS
          <br />
          <span style={{ color: 'rgba(255,255,255,0.22)' }}>EN IMAGES</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.48)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          Découvrez nos projets de préparation automobile. Chaque véhicule est unique
          et bénéficie d'une approche personnalisée pour atteindre vos objectifs.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex gap-12 sm:gap-20"
        >
          {[
            { value: projectsCount, suffix: '', label: 'Projets réalisés' },
            { value: `+${totalPower}`, suffix: ' ch', label: 'Puissance gagnée' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ width: '28px', height: '2px', background: 'rgba(255,255,255,0.4)', marginBottom: '10px' }} />
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'white',
                lineHeight: 1,
                letterSpacing: '0.02em',
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.32)',
                marginTop: '4px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }}
        aria-hidden="true"
      />
    </section>
  );
});
