import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client,urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const query = `*[_type == "blog" && slug.current == $slug] {
          _id,
          title,
          slug,
          excerpt,
          content,
          image,
          images[],
          category,
          categoryLabel,
          date,
          readTime,
          tags,
          author,
          featured
        }[0]`;

        const data = await client.fetch(query, { slug });
        console.log(data);

        if (!data) {
          setError("Article non trouvé");
          setLoading(false);
          return;
        }

        setArticle(data);

        // Charge les articles similaires
        const relatedQuery = `*[_type == "blog" && category == $category && _id != $id] | order(date desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          image,
          category,
          categoryLabel,
          readTime,
          date
        }`;

        const related = await client.fetch(relatedQuery, { 
          category: data.category,
          id: data._id
        });

        setRelatedArticles(related);
        setLoading(false);

      } catch (err) {
        console.error("Erreur BlogDetail:", err);
        setError("Erreur lors du chargement de l'article: " + err.message);
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const nextImage = () => {
    if (article?.images?.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === article.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (article?.images?.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? article.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <p className="text-zinc-400">Chargement de l'article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            {error || "Article non trouvé"}
          </h1>
          <Button 
            variant="default"
            onClick={() => navigate("/blog")}
          >
            Retour au blog
          </Button>
        </div>
      </div>
    );
  }

  const hasMultipleImages = Array.isArray(article?.images) && article.images.length > 0;
  const mainImage = hasMultipleImages
  ? article.images[currentImageIndex]
  : article.image; // fallback vers image unique

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Hero Image - Seulement si images existent */}
      {mainImage && (
      <section className="relative bg-zinc-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg">
            <img
              src={urlFor(mainImage).url()}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

            {hasMultipleImages && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {currentImageIndex + 1} / {article.images.length}
                </div>
              </>
            )}

            <div className="absolute top-6 left-6 z-20">
              <Button
                variant="outline"
                className="bg-zinc-900/80 backdrop-blur-sm border-zinc-700 text-white hover:bg-zinc-800"
                onClick={() => navigate("/blog")}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    )}


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
                {article.author && (
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-600">•</span>
                    <span>Par {article.author}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
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
              )}

              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-zinc-700 pl-6 italic">
                  {article.excerpt}
                </p>
              )}
            </div>

            {/* Article Body */}
            {article.content && (
              <div className="prose prose-invert prose-zinc prose-lg max-w-none mb-12">
                <PortableText 
                  value={article.content}
                  components={{
                    block: {
                      normal: ({ children }) => <p className="text-zinc-300 leading-relaxed mb-6 text-lg">{children}</p>,
                      h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-16 mb-6 pb-3 border-b border-zinc-800">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h3>,
                      blockquote: ({ children }) => <blockquote className="border-l-4 border-zinc-600 pl-6 italic text-zinc-400 my-6">{children}</blockquote>,
                    },
                    list: {
                      bullet: ({ children }) => <ul className="list-disc list-inside space-y-3 text-zinc-300 my-6 text-lg">{children}</ul>,
                      number: ({ children }) => <ol className="list-decimal list-inside space-y-3 text-zinc-300 my-6 text-lg">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({ children }) => <li className="ml-4">{children}</li>,
                      number: ({ children }) => <li className="ml-4">{children}</li>,
                    },
                    marks: {
                      strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      code: ({ children }) => <code className="bg-zinc-800 px-2 py-1 rounded text-zinc-200">{children}</code>,
                    },
                  }}
                />
              </div>
            )}

            {/* Footer Actions */}
            <div className="pt-8 border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg py-6"
                  asChild
                >
                  <a href="/#contact">
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
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <div
                  key={relatedArticle._id}
                  onClick={() => navigate(`/blog/${relatedArticle.slug.current}`)}
                  className="group cursor-pointer bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                    src={urlFor(relatedArticle.image).url()}
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
      )}
    </div>
  );
}