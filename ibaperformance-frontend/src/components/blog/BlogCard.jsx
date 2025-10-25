import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function BlogCard({ article, index, onClick }) {
  return (
    <Link to={`/Blog/${article.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onClick={onClick}
        className="group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <Badge className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-zinc-200 text-xs">
              {article.categoryLabel}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-zinc-200 transition-colors line-clamp-2 leading-tight">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-zinc-500 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="text-xs">{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="text-xs">{article.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {article.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-md hover:bg-zinc-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Link */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Lire l'article
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}