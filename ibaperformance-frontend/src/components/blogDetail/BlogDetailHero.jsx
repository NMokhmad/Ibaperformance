import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { urlFor } from "../../lib/sanity";

export function BlogDetailHero({ article, currentImageIndex, onNext, onPrevious, onBack }) {
  const hasMultipleImages = Array.isArray(article?.images) && article.images.length > 0;
  const mainImage = hasMultipleImages ? article.images[currentImageIndex] : article.image;

  if (!mainImage) return null;

  return (
    <section style={{ background: 'var(--color-charcoal)', padding: '2rem 0 0' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className="relative overflow-hidden group"
          style={{ aspectRatio: '16/9', background: '#111113' }}
        >
          <img
            src={urlFor(mainImage).url()}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 60%)',
            }}
          />

          {/* Back button */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 20 }}
            className="sm:top-6 sm:left-6">
            <button
              onClick={onBack}
              aria-label="Retour au blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(10,10,12,0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.45rem 0.9rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease',
              }}
            >
              <ArrowLeft style={{ width: '13px', height: '13px' }} />
              <span className="hidden sm:inline">Retour au blog</span>
              <span className="sm:hidden">Retour</span>
            </button>
          </div>

          {/* Carousel nav */}
          {hasMultipleImages && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-manipulation"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.6rem',
                  cursor: 'pointer',
                }}
                aria-label="Image précédente"
              >
                <ChevronLeft style={{ width: '20px', height: '20px' }} />
              </button>

              <button
                onClick={onNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-manipulation"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.6rem',
                  cursor: 'pointer',
                }}
                aria-label="Image suivante"
              >
                <ChevronRight style={{ width: '20px', height: '20px' }} />
              </button>

              {/* Counter */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(10,10,12,0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.8)',
                  padding: '0.3rem 0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                {currentImageIndex + 1} / {article.images.length}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
