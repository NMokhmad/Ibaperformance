import { memo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export const BlogHero = memo(({ searchQuery, onSearchChange }) => {
  return (
    <section style={{ background: 'var(--color-charcoal)', paddingTop: '4rem', paddingBottom: '3.5rem' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: '28px', height: '2px', background: 'rgba(255,255,255,0.4)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}>
              Actualités & Conseils
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: 'white',
            lineHeight: 0.92,
            letterSpacing: '0.01em',
            marginBottom: '1.5rem',
          }}>
            LE BLOG
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
            Guides, tutoriels et actualités sur la préparation automobile. Expertise technique pour optimiser votre véhicule.
          </p>

          {/* Search */}
          <div style={{ maxWidth: '520px', position: 'relative' }}>
            <Search style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '16px',
              color: 'rgba(255,255,255,0.3)',
              pointerEvents: 'none',
            }} />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '2.75rem',
                paddingRight: '1rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
