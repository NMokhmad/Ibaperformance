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
    const featured = filteredArticles.find(a => a.featured) || filteredArticles[0];
    console.log('⭐ [Blog] Article vedette:', featured?.title, '| ID:', featured?.id);
    return featured;
  }, [filteredArticles]);

  const remainingArticles = useMemo(() => {
    // Si on a 3 articles ou moins, on affiche tous les articles dans la grille
    // (même l'article vedette pour éviter une grille vide)
    if (filteredArticles.length <= 3) {
      console.log('📰 [Blog] Articles restants: tous affichés (', filteredArticles.length, 'articles)');
      return filteredArticles;
    }

    // Sinon, on retire l'article vedette des résultats filtrés
    const remaining = filteredArticles.filter(a => a.id !== featuredArticle?.id);
    console.log('📰 [Blog] Articles restants:', remaining.length);
    remaining.forEach(a => console.log('  -', a.title, '| ID:', a.id));
    return remaining;
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