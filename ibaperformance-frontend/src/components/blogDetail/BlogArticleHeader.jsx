import { Calendar, Clock } from "lucide-react";

export function BlogArticleHeader({ article }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {/* Eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '28px', height: '2px', background: 'rgba(255,255,255,0.4)' }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}>
          {article.categoryLabel || 'Article'}
        </span>
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.4rem, 6vw, 5rem)',
        color: 'white',
        lineHeight: 0.94,
        letterSpacing: '0.01em',
        marginBottom: '2rem',
      }}>
        {article.title.toUpperCase()}
      </h1>

      {/* Meta row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.3)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
          }}>{article.date}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.3)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
          }}>{article.readTime} de lecture</span>
        </div>
        {article.author && (
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Par {article.author}
          </span>
        )}
      </div>

      {/* Tags */}
      {article.tags?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
          {article.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.25rem 0.65rem',
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Excerpt / intro */}
      {article.excerpt && (
        <div style={{
          borderLeft: '2px solid rgba(255,255,255,0.2)',
          paddingLeft: '1.5rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}>
            {article.excerpt}
          </p>
        </div>
      )}
    </div>
  );
}
