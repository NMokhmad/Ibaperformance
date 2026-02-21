import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogFeaturedArticle = memo(({ article }) => {
  if (!article) return null;

  return (
    <section style={{
      background: 'var(--color-charcoal)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Label */}
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
            À la une
          </span>
        </div>

        <Link to={`/blog/${article.slug}`} style={{ display: 'block' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              transition: 'border-color 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}
              className="lg:grid-cols-[1fr_1fr]">
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                  className="group-hover:scale-105"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,12,0.6) 0%, transparent 60%)',
                }} />

                {/* Category tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(10,10,12,0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.3rem 0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                }}>
                  {article.categoryLabel}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  color: 'white',
                  lineHeight: 0.97,
                  letterSpacing: '0.02em',
                  marginBottom: '1.25rem',
                }}>
                  {article.title.toUpperCase()}
                </h2>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.3)' }} />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.35)',
                    }}>{article.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.3)' }} />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.35)',
                    }}>{article.readTime} de lecture</span>
                  </div>
                </div>

                {/* Tags */}
                {article.tags?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.2rem 0.6rem',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    Lire l'article
                  </span>
                  <ArrowUpRight style={{
                    width: '15px',
                    height: '15px',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'transform 0.2s ease',
                  }}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
});
