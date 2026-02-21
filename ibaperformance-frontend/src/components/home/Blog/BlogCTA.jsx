import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const BlogCTA = memo(() => {
  return (
    <section
      id="blog"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-warm-white)', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Full-width editorial banner */}
          <div
            className="relative overflow-hidden"
            style={{
              background: 'var(--color-charcoal)',
              padding: '4rem 3rem',
            }}
          >
            {/* Red top border accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.55)' }} />

            {/* Large ghost text background */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '-2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(6rem, 15vw, 12rem)',
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                letterSpacing: '0.05em',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              BLOG
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.55)' }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    Blog &amp; Conseils
                  </span>
                </div>

                <h2
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                    color: 'white',
                    lineHeight: 0.95,
                    letterSpacing: '0.01em',
                  }}
                >
                  ENVIE D'EN SAVOIR PLUS
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>SUR LA PRÉPARATION AUTO ?</span>
                </h2>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                  maxWidth: '440px',
                }}>
                  Guides techniques, tutoriels de reprogrammation et actualités du monde de la performance automobile.
                  Conseils d'experts et retours d'expérience.
                </p>

                <a href="/blog" className="btn-racing">
                  Découvrir le blog
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right - Stats decoration */}
              <div className="hidden lg:flex flex-col gap-4">
                {[
                  { label: 'Articles publiés', value: '24+' },
                  { label: 'Guides techniques', value: '12' },
                  { label: 'Tutoriels vidéo', value: '08' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6"
                    style={{
                      borderLeft: '2px solid rgba(255,255,255,0.06)',
                      paddingLeft: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        color: i === 0 ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.2)',
                        lineHeight: 1,
                        minWidth: '80px',
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)',
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
