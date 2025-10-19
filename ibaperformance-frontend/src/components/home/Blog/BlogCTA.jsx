import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export const BlogCTA = memo(function BlogCTA() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #18181b 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-800"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-zinc-300" />
                <span className="text-sm font-medium text-zinc-200">Blog & Conseils</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Envie d'en savoir plus sur la préparation auto ?
              </h2>
              
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Découvrez nos guides techniques, tutoriels de reprogrammation et actualités 
                du monde de la performance automobile. Conseils d'experts et retours d'expérience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold shadow-lg group"
                  asChild
                >
                  <a href="/blog">
                    Découvrir le blog
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/*<Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800"
                  asChild
                >
                  <a href="#contact">
                    Poser une question
                  </a>
                </Button>*/}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Cards preview */}
                <div className="space-y-4">
                  <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-zinc-700 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-zinc-800 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-zinc-700 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-zinc-800 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});