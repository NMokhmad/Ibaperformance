import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const RealisationsCTA = memo(() => {
  return (
    <section style={{ background: 'var(--color-charcoal)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.4)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}>
              Votre projet
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'white',
              lineHeight: 0.95,
              letterSpacing: '0.01em',
              marginBottom: '1.5rem',
            }}
          >
            PRÊT À TRANSFORMER
            <br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>VOTRE VÉHICULE ?</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.48)',
              maxWidth: '480px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            Contactez-nous pour discuter de votre projet et obtenir des conseils
            personnalisés pour votre véhicule.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/#contact" className="btn-racing">
              Me contacter
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/" className="btn-outline-racing">
              Retour à l'accueil
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
