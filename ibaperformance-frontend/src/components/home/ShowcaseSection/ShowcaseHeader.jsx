import { memo } from "react";
import { motion } from "framer-motion";

export const ShowcaseHeader = memo(() => {
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
        <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.55)' }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>
          Portfolio
        </span>
      </div>

      {/* Title */}
      <h2
        className="mb-5"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '0.01em',
        }}
      >
        MES RÉALISATIONS
        <br />
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>EN IMAGES</span>
      </h2>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.45)',
        maxWidth: '500px',
        lineHeight: 1.7,
      }}>
        Découvrez quelques-unes de nos préparations. Chaque projet est unique et
        reflète notre passion pour la performance automobile.
      </p>
    </motion.div>
  );
});
