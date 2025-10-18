import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "../../lib/sanity";

export const RealisationDetailHero = memo(function RealisationDetailHero({ 
  project, 
  currentImageIndex, 
  onNext, 
  onPrevious, 
  onBack 
}) {
  return (
    <section className="relative bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg">
          <img
            src={urlFor(project.images[currentImageIndex]).url()}
            alt={project.titre}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {project.images.length > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          <div className="absolute top-6 left-6 z-20">
            <Button
              variant="outline"
              className="bg-zinc-900/80 backdrop-blur-sm border-zinc-700 text-white hover:bg-zinc-800"
              onClick={onBack}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Retour aux réalisations
            </Button>
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800 px-4 py-4 mt-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => onNext()}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'border-zinc-100 ring-2 ring-zinc-100/30 shadow-lg'
                        : 'border-zinc-700 hover:border-zinc-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img
                      src={urlFor(image).url()}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});