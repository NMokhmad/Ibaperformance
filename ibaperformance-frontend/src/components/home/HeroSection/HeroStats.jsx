import { memo } from "react";
import { useCountUp, parseStatValue } from "../../../hooks/useCountUp";

const StatItem = ({ stat, index }) => {
  const { num, suffix } = parseStatValue(stat.value);
  const { count, ref } = useCountUp(num, 1400, index * 200);

  return (
    <div
      ref={ref}
      className="animate-fade-in-up"
      style={{ animationDelay: `${0.3 + index * 0.15}s` }}
      role="listitem"
    >
      {/* Accent line */}
      <div style={{ width: '32px', height: '2px', background: 'rgba(255,255,255,0.5)', marginBottom: '12px' }} />

      {/* Value */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          color: 'white',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}
      >
        {count}{suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '4px',
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

export const HeroStats = memo(({ stats }) => {
  return (
    <div
      className="flex flex-row gap-8 sm:gap-12"
      role="list"
      aria-label="Statistiques du garage"
    >
      {stats.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
});
