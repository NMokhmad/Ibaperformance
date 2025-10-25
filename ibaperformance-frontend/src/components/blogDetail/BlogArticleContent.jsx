import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-5 sm:mb-6 text-base sm:text-lg">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 sm:mt-16 mb-4 sm:mb-6 pb-3 border-b border-zinc-800 flex items-center gap-3">
        <span className="w-1.5 h-7 sm:h-8 bg-zinc-500 rounded-full"></span>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 sm:mt-12 mb-3 sm:mb-4 leading-tight">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-zinc-900/30 border-l-4 border-zinc-600 rounded-r-lg pl-4 sm:pl-6 pr-4 py-3 sm:py-4 italic text-zinc-400 my-5 sm:my-6 text-base sm:text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 sm:space-y-3 text-zinc-300 my-5 sm:my-6 text-base sm:text-lg pl-4 sm:pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 sm:space-y-3 text-zinc-300 my-5 sm:my-6 text-base sm:text-lg pl-4 sm:pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 sm:gap-3">
        <span className="text-zinc-500 mt-1.5 flex-shrink-0">•</span>
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-2 sm:gap-3 ml-4">
        <span className="flex-1">{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic text-zinc-300">{children}</em>,
    code: ({ children }) => (
      <code className="bg-zinc-800 px-2 py-1 rounded text-zinc-200 text-sm border border-zinc-700">{children}</code>
    ),
  },
};

export function BlogArticleContent({ content }) {
  if (!content) return null;

  return (
    <>
      <div className="prose prose-invert prose-zinc prose-lg max-w-none mb-8 sm:mb-12">
        <PortableText value={content} components={portableTextComponents} />
      </div>

      <div className="pt-6 sm:pt-8 border-t border-zinc-800">
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800 rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Une question sur cet article ?</h3>
              <p className="text-sm sm:text-base text-zinc-400">
                Contactez-moi pour en discuter ou pour obtenir plus d'informations
              </p>
            </div>
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-sm sm:text-base px-6 py-2 sm:py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
              asChild
            >
              <a href="/#contact" className="flex items-center justify-center gap-2">
                Nous contacter
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}