import { useState, useMemo } from "react";

export function useBlogFilters(articles) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = 
        selectedCategory === "all" || article.category === selectedCategory;
      
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return articles.find(a => a.featured) || articles[0];
  }, [articles]);

  const remainingArticles = useMemo(() => {
    return filteredArticles.slice(1);
  }, [filteredArticles]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredArticles,
    featuredArticle,
    remainingArticles,
  };
}