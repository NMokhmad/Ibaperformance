import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "../../lib/sanity";
import { Link } from "react-router-dom";

export default function ShowcaseSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      setLoading(true);
      
      // Log 1 : Vérifier que le client existe
      console.log("Client Sanity:", client);
      
      const query = `*[_type == "realisations"] | order(date desc)[0...6] {
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

      // Log 2 : Confirmer la requête avant le fetch
      console.log("Requête GROQ:", query);

      const data = await client.fetch(query);
      
      // Log 3 : Vérifier les données reçues
      console.log("Données reçues de Sanity:", data);
      console.log("Nombre de projets:", data?.length);

      if (!data || data.length === 0) {
        console.warn("⚠️ Aucune donnée reçue de Sanity. Vérifies que tu as publié du contenu.");
      }

      // Transforme les données Sanity au format attendu
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

      // Log 4 : Vérifier la transformation
      console.log("Projets transformés:", formattedProjects);

      setProjects(formattedProjects);
      setLoading(false);
    } catch (err) {
      // Log 5 : L'erreur complète
      console.error("❌ ERREUR COMPLÈTE:", err);
      console.error("Message d'erreur:", err.message);
      console.error("Stack trace:", err.stack);
      
      // Log 6 : Vérifier si c'est un problème d'authentification
      if (err.message?.includes("401") || err.message?.includes("unauthorized")) {
        console.error("🔐 Problème d'authentification Sanity");
      }
      
      // Log 7 : Vérifier si c'est un problème de projet
      if (err.message?.includes("404") || err.message?.includes("not found")) {
        console.error("🔍 Projet Sanity non trouvé");
      }
      
      setError("Erreur lors du chargement des réalisations: " + err.message);
      setLoading(false);
    }
  };

  fetchProjects();
}, []);


  if (loading) {
    return (
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400">Chargement des réalisations...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="realisations" className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-200">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes réalisations
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos préparations. Chaque projet est unique et 
            reflète notre passion pour la performance automobile.
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/realisations/${project.slug}`}
              className="no-underline"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer h-full ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${
                  index === 0 ? "aspect-square" : "aspect-4/3"
                }`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-600">Image non disponible</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-medium text-zinc-400 mb-2 capitalize">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Before/After Stats */}
                    <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-3 w-fit">
                      <div>
                        <div className="text-xs text-zinc-500">Avant</div>
                        <div className="text-lg font-bold text-white">
                          {project.before}ch
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-zinc-500" />
                      <div>
                        <div className="text-xs text-zinc-500">Après</div>
                        <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                          {project.after}ch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="default"
            variant="default"
            className=""
            asChild
          >
            <a href="/realisations">
              Voir toutes les réalisations
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}