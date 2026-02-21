import { memo } from "react";
import { motion } from "framer-motion";
import { useCountUp, parseStatValue } from "../../../hooks/useCountUp";

const metrics = [
  { value: '15+', label: "Années d'expérience" },
  { value: '500+', label: 'Véhicules préparés' },
];

const MetricItem = ({ item, index }) => {
  const { num, suffix } = parseStatValue(item.value);
  const { count, ref } = useCountUp(num, 1200, index * 150);

  return (
    <div ref={ref}>
      <div style={{ width: '20px', height: '2px', background: 'var(--color-accent-dark)', marginBottom: '8px' }} />
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '2.25rem',
        color: '#0F0F11',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.7rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#9CA3AF',
        marginTop: '4px',
      }}>
        {item.label}
      </div>
    </div>
  );
};

export const AboutContent = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <div style={{ width: '36px', height: '2px', background: 'var(--color-accent-dark)' }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-accent-dark)',
        }}>
          À propos
        </span>
      </div>

      <h2
        className="mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#0F0F11',
          lineHeight: 0.95,
          letterSpacing: '0.01em',
        }}
      >
        IBAPERFORMANCE,
        <br />
        VOTRE PARTENAIRE
        <br />
        <span style={{ color: 'rgba(15,15,17,0.3)' }}>PERFORMANCE</span>
      </h2>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: '#6B7280',
        lineHeight: 1.8,
        marginBottom: '1.25rem',
      }}>
        Depuis plus de 15 ans, IbaPerformance accompagne les passionnés d'automobile
        dans l'optimisation et la préparation de leurs véhicules. Notre expertise couvre
        tous les aspects de la performance : du simple gain de puissance à la préparation
        complète pour la compétition.
      </p>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: '#6B7280',
        lineHeight: 1.8,
        marginBottom: '2.5rem',
      }}>
        Notre atelier est équipé des dernières technologies de diagnostic et de préparation
        moteur. Nous travaillons avec les plus grandes marques de pièces performance et
        développons des solutions sur mesure adaptées à chaque véhicule et à chaque usage.
      </p>

      {/* Key metrics row — animated counters */}
      <div className="flex gap-8">
        {metrics.map((item, i) => (
          <MetricItem key={i} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
});
