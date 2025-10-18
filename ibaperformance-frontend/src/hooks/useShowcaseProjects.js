import { useState, useEffect } from "react";
import { client, urlFor } from "../lib/sanity";

export function useShowcaseProjects(limit = 6) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        const query = `*[_type == "realisations"] | order(date desc)[0...${limit}] {
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
          slug: project.slug?.current || project.titre.toLowerCase().replace(/\s+/g, '-'),
          description: project.description,
          category: project.categorie,
          date: project.date,
          before: project.before || "0",
          after: project.after || "0",
          image: project.images?.[0] ? urlFor(project.images[0]).url() : "",
          images: project.images || [],
        }));

        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        console.error("Erreur projets:", err);
        setError("Erreur lors du chargement des réalisations");
        setLoading(false);
      }
    };

    fetchProjects();
  }, [limit]);

  return { projects, loading, error };
}