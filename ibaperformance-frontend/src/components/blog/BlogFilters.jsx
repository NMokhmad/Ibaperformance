import { memo } from "react";

export const BlogFilters = memo(({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <section style={{
      background: 'var(--color-charcoal)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      position: 'sticky',
      top: '80px',
      zIndex: 40,
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto' }}
          className="scrollbar-hide">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                style={{
                  flexShrink: 0,
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'white' : 'transparent',
                  color: isActive ? '#0A0A0C' : 'rgba(255,255,255,0.45)',
                  border: isActive ? '1px solid white' : '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
});
