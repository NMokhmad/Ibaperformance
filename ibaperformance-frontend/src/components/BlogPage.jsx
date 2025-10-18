import { useState, useCallback } from "react";
import { useBlogArticles } from "../hooks/useBlogArticles";
import { useBlogFilters } from "../hooks/useBlogFilters";
import { LoadingState } from "./common/LoadingState";
import { ErrorState } from "./common/ErrorState";
import { BlogHero } from "./blog/BlogHero";
import { BlogFeaturedArticle } from "./blog/BlogFeaturedArticle";
import { BlogFilters } from "./blog/BlogFilters";
import { BlogArticlesGrid } from "./blog/BlogArticlesGrid";

import { SEO } from "./seo/SEO";
import { seoConfig } from "../config/seo.config";

export default function BlogPage() {
  const { articles, categories, loading, error, refetch } = useBlogArticles();
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    featuredArticle,
    remainingArticles,
  } = useBlogFilters(articles);

  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, [setSearchQuery]);

  const handleCategoryChange = useCallback((value) => {
    setSelectedCategory(value);
  }, [setSelectedCategory]);

  const handleArticleClick = useCallback((article) => {
    setSelectedArticle(article);
  }, []);

  if (loading) {
    return <LoadingState message="Chargement des articles..." />;
  }

  if (error) {
    return (
      <ErrorState 
        message={error} 
        onRetry={refetch}
      />
    );
  }

  return (
    <>
      <SEO {...seoConfig.pages.blog} />

      <div className="min-h-screen bg-zinc-950 pt-20">
        <BlogHero 
          searchQuery={searchQuery} 
          onSearchChange={handleSearchChange} 
          />

        <BlogFeaturedArticle article={featuredArticle} />

        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          />

        <BlogArticlesGrid
          articles={remainingArticles}
          onArticleClick={handleArticleClick}
          />
      </div>
    </>
  );
}