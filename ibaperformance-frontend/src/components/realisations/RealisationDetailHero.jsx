import { memo } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar } from "lucide-react";
import { urlFor } from "../../lib/sanity";

export const RealisationDetailHero = memo(({
  project,
  currentImageIndex,
  onNext,
  onPrevious,
  onBack,
}) => {
  const handleThumbnailClick = (index) => {
    const direction = index > currentImageIndex ? 'next' : 'previous';
    const steps = Math.abs(index - currentImageIndex);
    for (let i = 0; i < steps; i++) {
      direction === 'next' ? onNext() : onPrevious();
    }
  };

  return (
    <section style={{ background: 'var(--color-charcoal)', padding: '2rem 0 0' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main image */}
        <div
          className="relative overflow-hidden group"
          style={{ aspectRatio: '16/9', background: '#111113' }}
        >
          <img
            src={urlFor(project.images[currentImageIndex]).url()}
            alt={project.titre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 60%)' }}
          />

          {/* Back button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
            <button
              onClick={onBack}
              aria-label="Retour aux réalisations"
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
              <span className="hidden sm:inline">Retour aux réalisations</span>
              <span className="sm:hidden">Retour</span>
            </button>
          </div>

          {/* Carousel nav */}
          {project.images.length > 1 && (
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
                className="absolute bottom-4 right-4"
                style={{
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
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Title & meta below image */}
        <div style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
          {/* Eyebrow row */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '28px', height: '2px', background: 'rgba(255,255,255,0.4)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.4)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}>
                {project.date}
              </span>
            </div>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            color: 'white',
            lineHeight: 0.95,
            letterSpacing: '0.01em',
            marginBottom: '1rem',
          }}>
            {project.titre}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '680px',
            lineHeight: 1.7,
          }}>
            {project.description}
          </p>
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '1.25rem',
            paddingBottom: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '0.75rem',
            }}>
              Galerie — {project.images.length} images
            </p>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Voir image ${index + 1}`}
                  aria-current={currentImageIndex === index ? 'true' : 'false'}
                  style={{
                    flexShrink: 0,
                    width: '80px',
                    height: '60px',
                    overflow: 'hidden',
                    border: `2px solid ${currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.12)'}`,
                    opacity: currentImageIndex === index ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <img
                    src={urlFor(image).url()}
                    alt={`Aperçu ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
});
