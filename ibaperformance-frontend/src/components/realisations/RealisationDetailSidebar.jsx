import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const RealisationDetailSidebar = memo(function RealisationDetailSidebar({ project }) {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sticky top-24 space-y-6"
      >
        {/* Technical Data */}
        {project.technicalData && Object.keys(project.technicalData).length > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Caractéristiques techniques</h3>
            <div className="space-y-4">
              {Object.entries(project.technicalData).map(([key, value]) => (
                <div key={key} className="border-b border-zinc-800 last:border-0 pb-3 last:pb-0">
                  <div className="text-xs text-zinc-500 mb-1 capitalize">
                    {key.replace('_', ' ')}
                  </div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gain Summary */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Gains obtenus</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Puissance</span>
              <span className="text-lg font-bold text-green-400">
                +{parseInt(project.after) - parseInt(project.before)} ch
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Couple</span>
              <span className="text-lg font-bold text-green-400">
                +{parseInt(project.afterTorque) - parseInt(project.beforeTorque)} Nm
              </span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-green-500/20">
              <span className="text-sm text-zinc-400">Augmentation</span>
              <span className="text-lg font-bold text-green-400">
                +{Math.round(((parseInt(project.after) - parseInt(project.before)) / parseInt(project.before)) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            Un projet similaire ?
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold"
              asChild
            >
              <a href="/#contact">
                Demander un devis
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});