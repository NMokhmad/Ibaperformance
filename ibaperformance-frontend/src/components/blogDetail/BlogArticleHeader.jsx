import { Calendar, Clock } from "lucide-react";

export function BlogArticleHeader({ article }) {
  return (
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

      {article.excerpt && (
        <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-zinc-700 pl-6 italic">
          {article.excerpt}
        </p>
      )}
    </div>
  );
}