import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

export function useRealisation(slug) {
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `*[_type == "realisations" && slug.current == $slug] {
          _id,
          titre,
          slug,
          description,
          fullDescription,
          categorie,
          date,
          before,
          after,
          beforeTorque,
          afterTorque,
          images[],
          specs,
          technicalData
        }[0]`;

        const data = await client.fetch(query, { slug });

        if (!data) {
          setError("Réalisation non trouvée");
          setLoading(false);
          return;
        }

        setProject(data);

        // Charge les projets similaires
        const relatedQuery = `*[_type == "realisations" && _id != $id] | order(date desc)[0...3] {
          _id,
          titre,
          slug,
          description,
          images,
          before,
          after
        }`;

        const related = await client.fetch(relatedQuery, { id: data._id });
        setRelatedProjects(related);
        setLoading(false);
      } catch (err) {
        console.error("Erreur:", err);
        setError("Erreur lors du chargement de la réalisation");
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  return { project, relatedProjects, loading, error };
}