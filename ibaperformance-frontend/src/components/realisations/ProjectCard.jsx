import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index, onClick }) {

  return (
  <Link to={`/Realisations/${project.slug}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
      >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-zinc-200">
            {project.categoryLabel}
          </Badge>
        </div>

        {/* Date */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-1.5">
          <Calendar className="w-3 h-3 text-zinc-400" />
          <span className="text-xs text-zinc-300">{project.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs text-zinc-500 mb-1">Avant</div>
              <div className="text-lg font-bold text-white">{project.before}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-600" />
            <div>
              <div className="text-xs text-zinc-500 mb-1">Après</div>
              <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {project.after}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-zinc-500 mb-1">Gain</div>
            <div className="text-lg font-bold text-green-400">
              +{parseInt(project.after) - parseInt(project.before)} ch
            </div>
          </div>
        </div>

        {/* View Details Link */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <span className="text-sm text-zinc-400">Voir le projet complet</span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
  );
}