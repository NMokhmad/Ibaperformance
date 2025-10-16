import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export default function BlogModal({ article, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/95 backdrop-blur-sm p-4 overflow-y-auto"
      >
        <motion.article
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-zinc-800 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] bg-zinc-950 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />

            {/* Category Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 px-4 py-2 rounded-lg">
                <Tag className="w-4 h-4 text-zinc-400" />
                <span className="text-sm font-medium text-zinc-200">{article.categoryLabel}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600">•</span>
                  <span>Par {article.author}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-zinc-800 text-zinc-400 text-sm rounded-lg border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-zinc max-w-none mb-8">
              <div className="text-lg text-zinc-300 leading-relaxed space-y-6">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-2 text-zinc-300 my-4">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="ml-4">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">{children}</strong>
                    ),
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-8 border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold"
                  asChild
                >
                  <a href="#contact">
                    Nous contacter
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-zinc-700 text-white hover:bg-zinc-800"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager l'article
                </Button>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}