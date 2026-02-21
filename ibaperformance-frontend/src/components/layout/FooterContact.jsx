import { memo } from "react";
import { Phone, Mail } from "lucide-react";

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '1rem',
  display: 'block',
};

const linkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.825rem',
  color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

export const FooterContact = memo(({ settings }) => {
  return (
    <div>
      <span style={labelStyle}>Contact</span>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
        {settings?.telephone && (
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
            <a
              href={`tel:${settings.telephone.replace(/\s/g, "")}`}
              style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              {settings.telephone}
            </a>
          </li>
        )}
        {settings?.email && (
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
            <a
              href={`mailto:${settings.email}`}
              style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              {settings.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
});
