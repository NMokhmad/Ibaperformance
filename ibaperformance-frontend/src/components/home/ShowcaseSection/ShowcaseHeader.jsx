import { memo } from "react";
import { motion } from "framer-motion";

export const ShowcaseHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
        <span className="text-sm font-medium text-zinc-200">Portfolio</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Mes réalisations
      </h2>
      <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
        Découvrez quelques-unes de nos préparations. Chaque projet est unique et 
        reflète notre passion pour la performance automobile.
      </p>
    </motion.div>
  );
});