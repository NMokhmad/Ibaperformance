import { Loader2 } from "lucide-react";

export function LoadingState({ message = "Chargement..." }) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center"
      style={{ background: 'var(--color-charcoal)' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader2 style={{
          width: '32px',
          height: '32px',
          color: 'rgba(255,255,255,0.25)',
          margin: '0 auto 1rem',
        }} className="animate-spin" />
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.05em',
        }}>{message}</p>
      </div>
    </div>
  );
}
