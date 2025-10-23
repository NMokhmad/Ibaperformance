import { useState, useEffect, useCallback } from "react";
import { client, urlFor } from "../lib/sanity";

export function useRealisations() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const query = `*[_type == "realisations"] | order(date desc) {
        _id,
        titre,
        slug,
        description,
        categorie,
        date,
        before,
        after,
        images[] {
          asset -> {
            _id,
            url
          }
        }
      }`;

      const data = await client.fetch(query);

      const formattedProjects = data.map(project => ({
        id: project._id,
        title: project.titre,
        slug: project.slug?.current || project.titre.toLowerCase().replace(/\s+/g, "-"),
        description: project.description,
        category: project.categorie,
        date: project.date,
        before: project.before || "0",
        after: project.after || "0",
        image: project.images?.[0] ? urlFor(project.images[0]).url() : "",
        images: project.images || [],
      }));

      setProjects(formattedProjects);

      // Crée les catégories uniques
      const uniqueCategories = [
        { value: "all", label: "Toutes les catégories" },
        ...Array.from(
          new Set(formattedProjects.map(p => p.category)),
        )
          .filter(cat => cat && cat !== "all")
          .map(cat => ({
            value: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1),
          })),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors du chargement des réalisations:", err);
      setError("Erreur lors du chargement des réalisations: " + err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    categories,
    loading,
    error,
    refetch: fetchProjects,
  };
}