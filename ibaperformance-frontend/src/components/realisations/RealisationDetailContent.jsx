import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";

export const RealisationDetailContent = memo(function RealisationDetailContent({ project }) {
  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.titre}
          </h1>
          <p className="text-xl text-zinc-400 mb-6">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-xs text-zinc-500 mb-2">Puissance avant</div>
            <div className="text-3xl font-bold text-white">{project.before}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-xs text-zinc-400 mb-2">Puissance après</div>
            <div className="text-3xl font-bold text-green-400">{project.after}</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="text-xs text-zinc-500 mb-2">Couple avant</div>
            <div className="text-3xl font-bold text-white">{project.beforeTorque}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-xs text-zinc-400 mb-2">Couple après</div>
            <div className="text-3xl font-bold text-green-400">{project.afterTorque}</div>
          </div>
        </div>

        {/* Full Description */}
        <div className="prose prose-invert prose-zinc max-w-none mb-12">
          <div className="text-lg text-zinc-300 leading-relaxed space-y-6">
            {project.fullDescription ? (
              project.fullDescription.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={index} className="text-zinc-300">{paragraph}</p>;
              })
            ) : (
              <p className="text-zinc-300">{project.description}</p>
            )}
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Modifications apportées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.specs?.length > 0 ? (
              project.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm text-zinc-300">{spec}</span>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-sm">Aucune modification spécifiée.</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
});