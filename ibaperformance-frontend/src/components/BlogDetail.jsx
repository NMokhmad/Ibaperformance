import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useBlogArticle } from "../hooks/useBlogArticle";
import { useImageCarousel } from "../hooks/useImageCarousel";
import { BlogDetailHero } from "./blogDetail/BlogDetailHero";
import { BlogArticleHeader } from "./blogDetail/BlogArticleHeader";
import { BlogArticleContent } from "./blogDetail/BlogArticleContent";
import { RelatedArticles } from "./blogDetail/RelatedArticles";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { article, relatedArticles, loading, error } = useBlogArticle(slug);
  const { currentIndex, next, previous } = useImageCarousel(article?.images?.length || 0);

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
          <Button variant="default" onClick={() => navigate("/blog")}>
            Retour au blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      <BlogDetailHero
        article={article}
        currentImageIndex={currentIndex}
        onNext={next}
        onPrevious={previous}
        onBack={() => navigate("/blog")}
      />

      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BlogArticleHeader article={article} />
            <BlogArticleContent content={article.content} />
          </motion.article>
        </div>
      </section>

      <RelatedArticles
        articles={relatedArticles}
        onArticleClick={(slug) => navigate(`/blog/${slug}`)}
      />
    </div>
  );
}
