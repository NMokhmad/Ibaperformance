import { memo } from "react";
import { motion } from "framer-motion";

export const AboutContent = memo(function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full mb-6">
        <span className="text-sm font-medium text-zinc-800">À propos</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
        Ibaperformance, votre partenaire performance
      </h2>
      
      <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
        Depuis plus de 15 ans, IbaPerformance accompagne les passionnés d'automobile 
        dans l'optimisation et la préparation de leurs véhicules. Notre expertise couvre 
        tous les aspects de la performance : du simple gain de puissance à la préparation 
        complète pour la compétition.
      </p>

      <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
        Notre atelier est équipé des dernières technologies de diagnostic et de préparation 
        moteur. Nous travaillons avec les plus grandes marques de pièces performance et 
        développons des solutions sur mesure adaptées à chaque véhicule et à chaque usage.
      </p>
    </motion.div>
  );
});