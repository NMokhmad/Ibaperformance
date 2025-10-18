import { memo } from "react";
import BlogCard from "./BlogCard";

const EmptyState = memo(function EmptyState() {
  return (
    <div className="text-center py-16">
      <p className="text-zinc-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
    </div>
  );
});

export const BlogArticlesGrid = memo(function BlogArticlesGrid({ 
  articles, 
  onArticleClick 
}) {
  if (articles.length === 0) {
    return (
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmptyState />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard
              key={article.id}
              article={article}
              index={index}
              onClick={() => onArticleClick(article)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});