import { Calendar, Clock } from "lucide-react";

export function BlogArticleHeader({ article }) {
  return (
    <div className="mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        {article.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-zinc-500 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
          <span>{article.readTime} de lecture</span>
        </div>
        {article.author && (
          <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
            <span className="text-zinc-600">✍️</span>
            <span>Par {article.author}</span>
          </div>
        )}
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <p className="text-xs text-zinc-600 mb-2 uppercase tracking-wide font-medium">Tags</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-zinc-800 text-zinc-400 text-xs sm:text-sm rounded-lg border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {article.excerpt && (
        <div className="bg-zinc-900/30 border-l-4 border-zinc-600 rounded-r-lg p-4 sm:p-6">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>
      )}
    </div>
  );
}