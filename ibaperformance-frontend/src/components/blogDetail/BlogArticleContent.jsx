import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mt-16 mb-6 pb-3 border-b border-zinc-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-600 pl-6 italic text-zinc-400 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-3 text-zinc-300 my-6 text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-3 text-zinc-300 my-6 text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-zinc-800 px-2 py-1 rounded text-zinc-200">{children}</code>
    ),
  },
};

export function BlogArticleContent({ content }) {
  if (!content) return null;

  return (
    <>
      <div className="prose prose-invert prose-zinc prose-lg max-w-none mb-12">
        <PortableText value={content} components={portableTextComponents} />
      </div>

      <div className="pt-8 border-t border-zinc-800">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="flex-1 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg py-2"
            asChild
          >
            <a href="/#contact">
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}