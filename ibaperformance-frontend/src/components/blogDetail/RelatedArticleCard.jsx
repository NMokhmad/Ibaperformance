import { Clock, ArrowUpRight } from "lucide-react";
import { urlFor } from "../../lib/sanity";

export function RelatedArticleCard({ article, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group"
      style={{
        cursor: 'pointer',
        background: '#111113',
        border: '1px solid rgba(255,255,255,0.07)',
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
          src={urlFor(article.image).url()}
          alt={article.title}
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
          background: 'linear-gradient(to top, rgba(10,10,12,0.65) 0%, transparent 60%)',
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

        {/* Arrow on hover */}
        <div style={{
          position: 'absolute',
          top: '0.875rem',
          right: '0.875rem',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }} className="group-hover:opacity-100">
          <ArrowUpRight style={{ width: '16px', height: '16px', color: 'white' }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: 'white',
          lineHeight: 1.0,
          letterSpacing: '0.02em',
          marginBottom: '0.625rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {article.title.toUpperCase()}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.6,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}>
          {article.excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock style={{ width: '11px', height: '11px', color: 'rgba(255,255,255,0.25)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.3)',
          }}>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}
