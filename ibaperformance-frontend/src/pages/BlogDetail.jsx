import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, Tag, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import ReactMarkdown from "react-markdown";
import { articles } from "../data/blogs";


export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate(createPageUrl("Blog"))}>
            Retour au blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Hero Image */}
      <section className="relative">
        <div className="relative aspect-[21/9] bg-zinc-950 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Button
              variant="outline"
              className="bg-zinc-900/80 backdrop-blur-sm border-zinc-700 text-white hover:bg-zinc-800"
              onClick={() => navigate(createPageUrl("Blog"))}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-6 left-6">
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 px-4 py-2 rounded-lg">
              <Tag className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-200">{article.categoryLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-zinc-800 text-zinc-400 text-sm rounded-lg border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Excerpt */}
              <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-zinc-700 pl-6 italic">
                {article.excerpt}
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-invert prose-zinc prose-lg max-w-none mb-12">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-white mt-16 mb-6 pb-3 border-b border-zinc-800">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-3 text-zinc-300 my-6 text-lg">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="ml-4">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-zinc-600 pl-6 italic text-zinc-400 my-6">
                      {children}
                    </blockquote>
                  )
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Footer Actions */}
            <div className="pt-8 border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg py-6"
                  asChild
                >
                  <a href={createPageUrl("Home") + "#contact"}>
                    Nous contacter
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 3)
              .map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  onClick={() => navigate(createPageUrl("BlogDetail").replace(":slug", relatedArticle.slug))}
                  className="group cursor-pointer bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-zinc-500 mb-2">{relatedArticle.categoryLabel}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedArticle.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}