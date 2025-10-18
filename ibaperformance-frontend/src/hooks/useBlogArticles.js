import { useState, useEffect, useCallback } from "react";
import { client, urlFor } from "../lib/sanity";

export function useBlogArticles() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const query = `*[_type == "blog" && published == true] | order(date desc) {
        _id,
        title,
        slug,
        excerpt,
        content,
        image,
        category,
        categoryLabel,
        date,
        readTime,
        tags,
        author,
        featured
      }`;

      const data = await client.fetch(query);

      const formattedArticles = data.map(article => ({
        id: article._id,
        title: article.title,
        slug: article.slug?.current || article.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image ? urlFor(article.image).url() : "",
        category: article.category,
        categoryLabel: article.categoryLabel || article.category,
        date: new Date(article.date).toLocaleDateString('fr-FR'),
        readTime: `${article.readTime}min`,
        tags: article.tags || [],
        author: article.author || "IBA Performance",
        featured: article.featured || false,
      }));

      setArticles(formattedArticles);

      const uniqueCategories = [
        { value: "all", label: "Tous les articles" },
        ...Array.from(
          new Set(formattedArticles.map(a => a.category))
        )
          .filter(cat => cat !== "all")
          .map(cat => ({
            value: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1),
          })),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      console.error("Erreur Sanity:", err);
      setError("Erreur lors du chargement des articles");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return { 
    articles, 
    categories, 
    loading, 
    error,
    refetch: fetchArticles // Pour le bouton "Réessayer"
  };
}