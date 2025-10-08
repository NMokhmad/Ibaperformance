import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogCard({ article, index, onClick }) {
  return (
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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-zinc-200">
            {article.categoryLabel}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-sm text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
            Lire l'article
          </span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}