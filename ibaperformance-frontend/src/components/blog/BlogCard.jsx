import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ article, index }) {
  return (
    <Link to={`/Blog/${article.slug}`} style={{ display: 'block' }}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className="group"
        style={{
          background: '#111113',
          border: '1px solid rgba(255,255,255,0.07)',
          cursor: 'pointer',
          transition: 'border-color 0.25s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
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
            background: 'linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 60%)',
          }} />

          {/* Category */}
          <div style={{
            position: 'absolute',
            top: '0.875rem',
            left: '0.875rem',
            background: 'rgba(10,10,12,0.85)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '0.25rem 0.65rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)',
          }}>
            {article.categoryLabel}
          </div>

          {/* Arrow icon on hover */}
          <div style={{
            position: 'absolute',
            top: '0.875rem',
            right: '0.875rem',
            opacity: 0,
            transition: 'opacity 0.2s ease',
          }}
          className="group-hover:opacity-100">
            <ArrowUpRight style={{
              width: '18px',
              height: '18px',
              color: 'white',
            }} />
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
            color: 'white',
            lineHeight: 1.0,
            letterSpacing: '0.02em',
            marginBottom: '0.75rem',
          }}>
            {article.title.toUpperCase()}
          </h3>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.825rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.65,
            marginBottom: '1.25rem',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {article.excerpt}
          </p>

          {/* Meta */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '0.875rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar style={{ width: '11px', height: '11px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
              }}>{article.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock style={{ width: '11px', height: '11px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
              }}>{article.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
