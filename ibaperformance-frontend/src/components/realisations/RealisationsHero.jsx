import { memo } from "react";
import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

export const RealisationsHero = memo(function RealisationsHero({ 
  projectsCount, 
  totalPower 
}) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
            <Gauge className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-200">Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Nos réalisations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Découvrez nos projets de préparation automobile. Chaque véhicule est unique 
            et bénéficie d'une approche personnalisée pour atteindre vos objectifs de performance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">{projectsCount}</span>
              </div>
              <span className="text-zinc-400">Projets réalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                <Gauge className="w-6 h-6 text-zinc-400" />
              </div>
              <span className="text-zinc-400">+{totalPower} ch gagnés</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});