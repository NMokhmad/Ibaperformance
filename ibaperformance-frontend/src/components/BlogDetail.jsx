import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useBlogArticle } from "../hooks/useBlogArticle";
import { useImageCarousel } from "../hooks/useImageCarousel";
import { BlogDetailHero } from "./blogDetail/BlogDetailHero";
import { BlogArticleHeader } from "./blogDetail/BlogArticleHeader";
import { BlogArticleContent } from "./blogDetail/BlogArticleContent";
import { RelatedArticles } from "./blogDetail/RelatedArticles";
import { SEO } from "./seo/SEO";
import { generateArticleSEO } from "../config/seo.config";


export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { article, relatedArticles, loading, error } = useBlogArticle(slug);
  const { currentIndex, next, previous } = useImageCarousel(article?.images?.length || 0);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center"
        style={{ background: 'var(--color-charcoal)' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.35)',
        }}>
          Chargement de l'article...
        </p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center"
        style={{ background: 'var(--color-charcoal)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            color: 'white',
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
          }}>
            {error || "ARTICLE NON TROUVÉ"}
          </h1>
          <button
            onClick={() => navigate("/blog")}
            className="btn-racing"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  const seoData = generateArticleSEO(article, slug);

  return (
    <>
      <SEO {...seoData} />

      <div className="min-h-screen pt-20" style={{ background: 'var(--color-charcoal)' }}>
        <BlogDetailHero
          article={article}
          currentImageIndex={currentIndex}
          onNext={next}
          onPrevious={previous}
          onBack={() => navigate("/blog")}
        />

        <section style={{
          background: 'var(--color-charcoal)',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
        }}>
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
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
    </>
  );
}
