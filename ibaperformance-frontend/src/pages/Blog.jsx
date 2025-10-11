import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Calendar, Clock, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogCard from "../components/blog/BlogCard";
import BlogModal from "../components/blog/BlogModal";
import { articles } from "../data/blogs";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";


export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-200">Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Actualités & Conseils
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez nos guides, tutoriels et actualités sur la préparation automobile. 
              Expertise technique et conseils pratiques pour optimiser votre véhicule.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-zinc-700 rounded-xl text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative py-12 bg-zinc-950">
        <Link to={`/Blog/${featuredArticle.slug}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedArticle(featuredArticle)}
            >
              <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:bg-gradient-to-r lg:from-zinc-900 lg:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-lg mb-4 w-fit">
                      <Tag className="w-3 h-3 text-zinc-400" />
                      <span className="text-xs font-medium text-zinc-300">{featuredArticle.categoryLabel}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-zinc-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} de lecture</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      {featuredArticle.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Link>
      </section>

      {/* Filters */}
      <section className="relative py-8 bg-zinc-900 border-y border-zinc-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="bg-zinc-800 border border-zinc-700 inline-flex">
              {categories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400 whitespace-nowrap"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <BlogCard
                key={article.id}
                article={article}
                index={index}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>

          {filteredArticles.length <= 1 && (
            <div className="text-center py-16">
              <p className="text-zinc-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal 
      {selectedArticle && (
        <BlogModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
      */}
    </div>
  );
}