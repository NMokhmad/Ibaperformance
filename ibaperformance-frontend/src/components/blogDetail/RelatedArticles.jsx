import { RelatedArticleCard } from "./RelatedArticleCard";

export function RelatedArticles({ articles, onArticleClick }) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Articles similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <RelatedArticleCard
              key={article._id}
              article={article}
              onClick={() => onArticleClick(article.slug.current)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}