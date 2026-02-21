import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ShowcaseCTA = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-start"
    >
      <a href="/realisations" className="btn-racing">
        Voir toutes les réalisations
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
});
