import { memo } from "react";
import BlogCard from "./BlogCard";

const EmptyState = memo(() => (
  <div style={{ textAlign: 'center', padding: '5rem 0' }}>
    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.95rem',
      color: 'rgba(255,255,255,0.3)',
    }}>
      Aucun article trouvé dans cette catégorie.
    </p>
  </div>
));

export const BlogArticlesGrid = memo(({ articles, onArticleClick }) => {
  return (
    <section style={{
      background: 'var(--color-charcoal)',
      paddingTop: '3rem',
      paddingBottom: '4rem',
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {articles.length === 0 ? (
          <EmptyState />
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            {articles.map((article, index) => (
              <div key={article.id} style={{ background: 'var(--color-charcoal)' }}>
                <BlogCard
                  article={article}
                  index={index}
                  onClick={() => onArticleClick(article)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});
