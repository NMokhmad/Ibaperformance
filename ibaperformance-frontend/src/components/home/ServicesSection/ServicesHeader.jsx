import { memo } from "react";
import { motion } from "framer-motion";

export const ServicesHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <div style={{ width: '36px', height: '2px', background: 'var(--color-accent-dark)' }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-accent-dark)',
        }}>
          Mes expertises
        </span>
      </div>

      {/* Title */}
      <h2
        className="mb-5"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          color: '#0F0F11',
          lineHeight: 0.95,
          letterSpacing: '0.01em',
        }}
      >
        SERVICES DE PERFORMANCE
        <br />
        <span style={{ color: 'rgba(15,15,17,0.3)' }}>AUTOMOBILE</span>
      </h2>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: '#6B7280',
        maxWidth: '520px',
        lineHeight: 1.7,
      }}>
        Des solutions sur mesure pour optimiser les performances de votre véhicule,
        de la simple reprogrammation à la préparation complète circuit.
      </p>
    </motion.div>
  );
});
