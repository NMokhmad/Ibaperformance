import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "../../lib/sanity";
import { Calendar } from "lucide-react";

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
    <section className="relative bg-zinc-950 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg shadow-2xl">
          <img
            src={urlFor(project.images[currentImageIndex]).url()}
            alt={project.titre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Bouton retour en overlay - top left */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
            <Button
              variant="outline"
              size="sm"
              className="bg-zinc-900/90 backdrop-blur-md border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 h-auto py-1.5 px-2.5 text-xs sm:text-sm sm:px-4 sm:py-2 transition-all duration-200 shadow-lg"
              onClick={onBack}
              aria-label="Retour aux réalisations"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour aux réalisations</span>
              <span className="sm:hidden ml-1">Retour</span>
            </Button>
          </div>

          {project.images.length > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-0 md:group-hover:opacity-100 border border-white/20 hover:border-white/40 shadow-xl touch-manipulation"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-0 md:group-hover:opacity-100 border border-white/20 hover:border-white/40 shadow-xl touch-manipulation"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Header sous l'image */}
        <div className="mt-6 sm:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {project.titre}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-4 sm:mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 px-3 sm:px-4 py-3 sm:py-4 mt-4 sm:mt-6 rounded-lg">
            <p className="text-xs text-zinc-500 mb-2 sm:mb-3 font-medium uppercase tracking-wide">
              Galerie ({project.images.length} images)
            </p>
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index
                      ? "border-zinc-100 ring-2 ring-zinc-100/30 shadow-lg scale-105"
                      : "border-zinc-700 hover:border-zinc-500 hover:scale-105"
                  }`}
                  aria-label={`Voir image ${index + 1}`}
                  aria-current={currentImageIndex === index ? "true" : "false"}
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