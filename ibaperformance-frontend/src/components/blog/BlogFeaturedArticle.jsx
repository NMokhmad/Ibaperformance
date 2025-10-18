import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogFeaturedArticle = memo(function BlogFeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section className="relative py-12 bg-zinc-950">
      <Link to={`/blog/${article.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:bg-gradient-to-r lg:from-zinc-900 lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-lg mb-4 w-fit">
                    <Tag className="w-3 h-3 text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-300">{article.categoryLabel}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} de lecture</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </section>
  );
});