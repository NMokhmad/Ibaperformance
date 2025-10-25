import { memo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const RealisationDetailContent = memo(({ project }) => {
  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 hover:border-zinc-700 transition-colors">
            <div className="text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wide font-medium">Puissance avant</div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{project.before}</div>
            <div className="text-xs text-zinc-600 mt-1">ch</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6 hover:border-green-500/40 transition-colors shadow-lg shadow-green-500/5">
            <div className="text-xs text-zinc-400 mb-1.5 sm:mb-2 uppercase tracking-wide font-medium">Puissance après</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-400">{project.after}</div>
            <div className="text-xs text-green-600 mt-1">
              +{parseInt(project.after) - parseInt(project.before)} ch
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 hover:border-zinc-700 transition-colors">
            <div className="text-xs text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-wide font-medium">Couple avant</div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{project.beforeTorque}</div>
            <div className="text-xs text-zinc-600 mt-1">Nm</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6 hover:border-green-500/40 transition-colors shadow-lg shadow-green-500/5">
            <div className="text-xs text-zinc-400 mb-1.5 sm:mb-2 uppercase tracking-wide font-medium">Couple après</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-400">{project.afterTorque}</div>
            <div className="text-xs text-green-600 mt-1">
              +{parseInt(project.afterTorque) - parseInt(project.beforeTorque)} Nm
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="prose prose-invert prose-zinc max-w-none mb-8 sm:mb-12">
          <div className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-4 sm:space-y-6">
            {project.fullDescription ? (
              project.fullDescription.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-xl sm:text-2xl font-bold text-white mt-8 sm:mt-12 mb-3 sm:mb-4 leading-tight">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-lg sm:text-xl font-bold text-white mt-6 sm:mt-8 mb-2 sm:mb-3 leading-tight">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return <p key={index} className="text-zinc-300 leading-relaxed">{paragraph}</p>;
              })
            ) : (
              <p className="text-zinc-300 leading-relaxed">{project.description}</p>
            )}
          </div>
        </div>

        {/* Specifications */}
        {project.specs?.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full"></span>
              Modifications apportées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {project.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-3 sm:p-4 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-0.5">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
});