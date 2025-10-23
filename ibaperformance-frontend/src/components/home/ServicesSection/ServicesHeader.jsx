import { memo } from "react";
import { motion } from "framer-motion";

export const ServicesHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-zinc-200 px-4 py-2 rounded-full mb-6">
        <span className="text-sm font-medium text-zinc-800">Mes expertises</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
        Services de performance automobile
      </h2>
      <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
        Des solutions sur mesure pour optimiser les performances de votre véhicule, 
        de la simple reprogrammation à la préparation complète circuit.
      </p>
    </motion.div>
  );
});