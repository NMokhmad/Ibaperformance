import { useState, useMemo, useEffect } from "react";

export function useBlogFilters(articles) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    console.log('🔍 [Blog] Filtrage - Catégorie:', selectedCategory, '| Recherche:', searchQuery || '(vide)');
    console.log('📋 [Blog] Articles à filtrer:', articles.length);

    const filtered = articles.filter(article => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      const matchesSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matches = matchesCategory && matchesSearch;
      if (matches && selectedCategory !== "all") {
        console.log('✓ Article correspondant:', article.title, '- catégorie:', article.category);
      }
      return matches;
    });

    console.log('📊 [Blog] Résultat du filtre:', filtered.length, 'article(s)');
    return filtered;
  }, [articles, selectedCategory, searchQuery]);

  useEffect(() => {
    console.log('🎯 [Blog] Catégories uniques dans les articles:',
      [...new Set(articles.map(a => a.category))]);
  }, [articles]);

  // Article vedette provient des articles FILTRÉS, pas de tous les articles
  const featuredArticle = useMemo(() => {
    return filteredArticles.find(a => a.featured) || filteredArticles[0];
  }, [filteredArticles]);

  const remainingArticles = useMemo(() => {
    // Retire l'article vedette des résultats filtrés
    return filteredArticles.filter(a => a.id !== featuredArticle?.id);
  }, [filteredArticles, featuredArticle]);

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