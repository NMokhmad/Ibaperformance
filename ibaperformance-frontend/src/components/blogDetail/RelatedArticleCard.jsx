import { Clock } from "lucide-react";
import { urlFor } from "../../lib/sanity";

export function RelatedArticleCard({ article, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={urlFor(article.image).url()}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>
      <div className="p-6">
        <div className="text-xs text-zinc-500 mb-2">{article.categoryLabel}</div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 mt-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}