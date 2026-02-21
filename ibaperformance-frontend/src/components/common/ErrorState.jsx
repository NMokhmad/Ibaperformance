import { AlertCircle } from "lucide-react";

export function ErrorState({
  message = "Une erreur est survenue",
  onRetry,
  showRetry = true,
}) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center"
      style={{ background: 'var(--color-charcoal)' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', padding: '0 1.5rem' }}>
        <AlertCircle style={{
          width: '32px',
          height: '32px',
          color: 'rgba(255,80,80,0.7)',
          margin: '0 auto 1.5rem',
        }} />

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          color: 'white',
          letterSpacing: '0.02em',
          marginBottom: '0.75rem',
        }}>
          UNE ERREUR EST SURVENUE
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>{message}</p>

        {showRetry && onRetry && (
          <button onClick={onRetry} className="btn-racing">
            Réessayer
          </button>
        )}
      </div>
    </div>
  );
}
