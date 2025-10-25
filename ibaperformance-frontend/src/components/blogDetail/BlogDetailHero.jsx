import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "../../lib/sanity";

export function BlogDetailHero({ article, currentImageIndex, onNext, onPrevious, onBack }) {
  const hasMultipleImages = Array.isArray(article?.images) && article.images.length > 0;
  const mainImage = hasMultipleImages ? article.images[currentImageIndex] : article.image;

  if (!mainImage) return null;

  return (
    <section className="relative bg-zinc-950 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg shadow-2xl">
          <img
            src={urlFor(mainImage).url()}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {hasMultipleImages && (
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
                {currentImageIndex + 1} / {article.images.length}
              </div>
            </>
          )}

          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
            <Button
              variant="outline"
              size="sm"
              className="bg-zinc-900/90 backdrop-blur-md border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 h-auto py-1.5 px-2.5 text-xs sm:text-sm sm:px-4 sm:py-2 transition-all duration-200 shadow-lg"
              onClick={onBack}
              aria-label="Retour au blog"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour au blog</span>
              <span className="sm:hidden ml-1">Retour</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}