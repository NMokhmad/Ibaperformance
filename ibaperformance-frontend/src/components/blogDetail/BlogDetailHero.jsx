import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "../../lib/sanity";

export function BlogDetailHero({ article, currentImageIndex, onNext, onPrevious, onBack }) {
  const hasMultipleImages = Array.isArray(article?.images) && article.images.length > 0;
  const mainImage = hasMultipleImages ? article.images[currentImageIndex] : article.image;

  if (!mainImage) return null;

  return (
    <section className="relative bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg">
          <img
            src={urlFor(mainImage).url()}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {hasMultipleImages && (
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
                {currentImageIndex + 1} / {article.images.length}
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
              Retour au blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}