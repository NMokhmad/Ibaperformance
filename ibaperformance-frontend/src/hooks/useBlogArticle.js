import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

export function useBlogArticle(slug) {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `*[_type == "blog" && slug.current == $slug] {
          _id,
          title,
          slug,
          excerpt,
          content,
          image,
          images[],
          category,
          categoryLabel,
          date,
          readTime,
          tags,
          author,
          featured
        }[0]`;

        const data = await client.fetch(query, { slug });

        if (!data) {
          setError("Article non trouvé");
          setLoading(false);
          return;
        }

        setArticle(data);

        const relatedQuery = `*[_type == "blog" && category == $category && _id != $id] | order(date desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          image,
          category,
          categoryLabel,
          readTime,
          date
        }`;

        const related = await client.fetch(relatedQuery, {
          category: data.category,
          id: data._id,
        });

        setRelatedArticles(related);
        setLoading(false);
      } catch (err) {
        console.error("Erreur BlogDetail:", err);
        setError("Erreur lors du chargement de l'article: " + err.message);
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return { article, relatedArticles, loading, error };
}