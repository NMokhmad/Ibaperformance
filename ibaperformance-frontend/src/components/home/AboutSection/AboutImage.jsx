import { memo } from "react";
import { motion } from "framer-motion";

export const AboutImage = memo(() => {
  return (
    <div className="relative">
      {/* Decorative block behind image */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '-16px',
          right: '-16px',
          bottom: '16px',
          left: '16px',
          background: 'var(--color-accent-dark)',
          zIndex: 0,
        }}
      />

      {/* Image — clip-path reveal (gauche → droite) */}
      <motion.div
        className="relative overflow-hidden shadow-2xl"
        style={{ zIndex: 1 }}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
          alt="Atelier IbaPerformance - Préparation moteur professionnelle"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,12,0.4) 0%, transparent 60%)' }}
        />

        {/* Left stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '3px',
            background: 'var(--color-accent-dark)',
          }}
        />
      </motion.div>
    </div>
  );
});
