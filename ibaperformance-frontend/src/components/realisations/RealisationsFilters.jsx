import { memo } from "react";

export const RealisationsFilters = memo(({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div
      style={{
        background: 'var(--color-charcoal)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        position: 'sticky',
        top: '80px',
        zIndex: 40,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {/* Label */}
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            flexShrink: 0,
            marginRight: '0.5rem',
          }}>
            Filtrer
          </span>

          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.45rem 1rem',
                  background: isActive ? 'white' : 'transparent',
                  color: isActive ? '#0A0A0C' : 'rgba(255,255,255,0.42)',
                  border: `1px solid ${isActive ? 'white' : 'rgba(255,255,255,0.1)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});
