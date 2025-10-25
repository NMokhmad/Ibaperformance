import { memo } from "react";
import { motion } from "framer-motion";

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.1 },
  }),
};

export const HeroStats = memo(({ stats }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
      role="list"
      aria-label="Statistiques du garage"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            custom={index}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 shadow-lg"
            role="listitem"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-300 mb-2 sm:mb-3 mx-auto" aria-hidden="true" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
});