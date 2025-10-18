import { memo } from "react";
import { motion } from "framer-motion";

export const AboutImage = memo(function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
          alt="Atelier IbaPerformance - Préparation moteur professionnelle"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
      </div>
    </motion.div>
  );
});