import { memo } from "react";
import { navigationItems } from "../../constants/navigation";

export const FooterLinks = memo(() => {
  return (
    <div>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        marginBottom: '1rem',
        display: 'block',
      }}>
        Liens rapides
      </span>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
        {navigationItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.825rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
