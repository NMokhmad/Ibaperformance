import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const ProjectCard = memo(({ project, index }) => {
  const isLarge = index === 0;

  return (
    <Link 
      to={`/realisations/${project.slug}`}
      className="no-underline"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-2xl cursor-pointer h-full ${
          isLarge ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        <div className={`relative overflow-hidden ${
          isLarge ? "aspect-square" : "aspect-4/3"
        }`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-600">Image non disponible</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <span className="text-xs font-medium text-zinc-400 mb-2 capitalize">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-300 mb-4 line-clamp-2">
              {project.description}
            </p>
            
            {/* Before/After Stats */}
            <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-3 w-fit">
              <div>
                <div className="text-xs text-zinc-500">Avant</div>
                <div className="text-lg font-bold text-white">
                  {project.before}ch
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500" />
              <div>
                <div className="text-xs text-zinc-500">Après</div>
                <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {project.after}ch
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});