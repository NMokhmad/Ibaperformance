import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl border border-zinc-800 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image Gallery */}
          <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-zinc-600 hover:bg-zinc-500"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-lg mb-3">
                  <span className="text-xs font-medium text-zinc-300">{project.categoryLabel}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-zinc-400">{project.description}</p>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
                <div className="text-xs text-zinc-500 mb-1">Puissance avant</div>
                <div className="text-2xl font-bold text-white">{project.before}</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="text-xs text-zinc-400 mb-1">Puissance après</div>
                <div className="text-2xl font-bold text-green-400">{project.after}</div>
              </div>
              <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
                <div className="text-xs text-zinc-500 mb-1">Couple avant</div>
                <div className="text-2xl font-bold text-white">{project.beforeTorque}</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="text-xs text-zinc-400 mb-1">Couple après</div>
                <div className="text-2xl font-bold text-green-400">{project.afterTorque}</div>
              </div>
            </div>

            {/* Details */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Détails du projet</h3>
              <p className="text-zinc-400 leading-relaxed">{project.details}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Modifications apportées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-zinc-800 rounded-lg p-3 border border-zinc-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-sm text-zinc-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-zinc-800">
              <Button
                className="flex-1 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold"
                asChild
              >
                <a href="#contact">
                  Démarrer un projet similaire
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-zinc-700 text-white hover:bg-zinc-800"
                onClick={onClose}
              >
                Fermer
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}