import { memo } from "react";
import { navigationItems } from "../../constants/navigation";

export const Navigation = memo(() => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationItems.map((item) => (
        <a
          key={item.title}
          href={item.url}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            position: 'relative',
            transition: 'color 0.2s ease',
          }}
          className="group"
          onMouseEnter={e => e.currentTarget.style.color = 'white'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          {item.title}
          <span style={{
            position: 'absolute',
            bottom: '-3px',
            left: 0,
            width: '0%',
            height: '1px',
            background: 'rgba(255,255,255,0.6)',
            transition: 'width 0.3s ease',
          }} className="group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
});
