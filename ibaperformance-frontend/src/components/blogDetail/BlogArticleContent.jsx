import { ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.975rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.85,
        marginBottom: '1.4rem',
      }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
        color: 'white',
        letterSpacing: '0.02em',
        lineHeight: 1,
        marginTop: '3rem',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
        {String(children).toUpperCase()}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: '0.02em',
        lineHeight: 1,
        marginTop: '2.25rem',
        marginBottom: '0.875rem',
      }}>
        {String(children).toUpperCase()}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '2px solid rgba(255,255,255,0.25)',
        paddingLeft: '1.5rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        margin: '1.75rem 0',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.45)',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        lineHeight: 1.7,
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{
        margin: '1.25rem 0',
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{
        margin: '1.25rem 0',
        paddingLeft: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.65,
      }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.35em', flexShrink: 0 }}>—</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.65,
      }}>
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: 'white', fontWeight: 600 }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.55)' }}>{children}</em>
    ),
    code: ({ children }) => (
      <code style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '0.15rem 0.45rem',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.75)',
      }}>{children}</code>
    ),
  },
};

export function BlogArticleContent({ content }) {
  if (!content) return null;

  return (
    <>
      <div style={{ marginBottom: '3rem' }}>
        <PortableText value={content} components={portableTextComponents} />
      </div>

      {/* CTA block */}
      <div style={{
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
          className="sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'white',
              letterSpacing: '0.03em',
              marginBottom: '0.5rem',
            }}>
              UNE QUESTION SUR CET ARTICLE ?
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.6,
            }}>
              Contactez-moi pour en discuter ou obtenir plus d'informations.
            </p>
          </div>
          <a
            href="/#contact"
            className="btn-racing"
            style={{ flexShrink: 0 }}
          >
            Me contacter
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </a>
        </div>
      </div>
    </>
  );
}
