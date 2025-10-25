import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const RealisationDetailSidebar = memo(({ project }) => {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:sticky lg:top-24 space-y-4 sm:space-y-6"
      >
        {/* Technical Data */}
        {project.technicalData && Object.keys(project.technicalData).length > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 hover:border-zinc-700 transition-colors">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-zinc-500 rounded-full"></span>
              Caractéristiques techniques
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {Object.entries(project.technicalData).map(([key, value]) => (
                <div key={key} className="border-b border-zinc-800 last:border-0 pb-3 last:pb-0 hover:bg-zinc-800/30 -mx-2 px-2 rounded transition-colors">
                  <div className="text-xs text-zinc-500 mb-1 capitalize tracking-wide font-medium">
                    {key.replace("_", " ")}
                  </div>
                  <div className="text-sm sm:text-base text-white font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gain Summary */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6 hover:border-green-500/40 transition-colors shadow-lg shadow-green-500/5">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
            Gains obtenus
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-500/5 p-3 rounded-lg">
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Puissance</span>
              <span className="text-base sm:text-lg font-bold text-green-400">
                +{parseInt(project.after) - parseInt(project.before)} ch
              </span>
            </div>
            <div className="flex items-center justify-between bg-green-500/5 p-3 rounded-lg">
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Couple</span>
              <span className="text-base sm:text-lg font-bold text-green-400">
                +{parseInt(project.afterTorque) - parseInt(project.beforeTorque)} Nm
              </span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-green-500/20 bg-green-500/10 p-3 rounded-lg">
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Augmentation</span>
              <span className="text-lg sm:text-xl font-bold text-green-400">
                +{Math.round(((parseInt(project.after) - parseInt(project.before)) / parseInt(project.before)) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 hover:border-zinc-700 transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-zinc-500 rounded-full"></span>
            Un projet similaire ?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6 leading-relaxed">
            Contactez-moi pour discuter de votre projet et obtenir des conseils personnalisés
          </p>
          <Button
            className="w-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
            asChild
          >
            <a href="/#contact">
              Contacter-moi
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
});