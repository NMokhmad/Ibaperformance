import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { client,urlFor } from "../lib/sanity";
import { createPageUrl } from "../utils/index.ts";


export default function RealisationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        
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
        
        console.log(data);
        
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

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <p className="text-zinc-400">Chargement de la réalisation...</p>
      </div>
    );
  }
  
  if (error || !project) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Réalisation non trouvée</h1>
          <Button onClick={() => navigate("/realisations")}>
            Retour aux réalisations
          </Button>
        </div>
      </div>
    );
  }

  // ... reste du code JSX

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className=" bg-zinc-950 pt-20">
      {/* Image Gallery */}
      <section className="relative bg-zinc-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video bg-zinc-900 overflow-hidden group rounded-lg">
          {/* Main Image */}
          <img
            src={urlFor(project.images[currentImageIndex]).url()}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          {/* Back Button */}
          <div className="absolute top-6 left-6 z-20">
            <Button
              variant="outline"
              className="bg-zinc-900/80 backdrop-blur-sm border-zinc-700 text-white hover:bg-zinc-800"
              onClick={() => navigate(createPageUrl("Realisations"))}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Retour aux réalisations
            </Button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {project.images.length > 1 && (
          <div className="bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800 px-4 py-4 mt-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'border-zinc-100 ring-2 ring-zinc-100/30 shadow-lg'
                        : 'border-zinc-700 hover:border-zinc-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img
                      src={urlFor(image).url()}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            </div>
        )}
        </div>
      </section>
             

        {/* Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {project.titre}
                  </h1>
                  <p className="text-xl text-zinc-400 mb-6">{project.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="text-xs text-zinc-500 mb-2">Puissance avant</div>
                    <div className="text-3xl font-bold text-white">{project.before}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                    <div className="text-xs text-zinc-400 mb-2">Puissance après</div>
                    <div className="text-3xl font-bold text-green-400">{project.after}</div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="text-xs text-zinc-500 mb-2">Couple avant</div>
                    <div className="text-3xl font-bold text-white">{project.beforeTorque}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                    <div className="text-xs text-zinc-400 mb-2">Couple après</div>
                    <div className="text-3xl font-bold text-green-400">{project.afterTorque}</div>
                  </div>
                </div>

                {/* Full Description */}
                <div className="prose prose-invert prose-zinc max-w-none mb-12">
                  <div className="text-lg text-zinc-300 leading-relaxed space-y-6">
                    {project.fullDescription ? (
                      project.fullDescription.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('## ')) {
                          return (
                            <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-4">
                              {paragraph.replace('## ', '')}
                            </h2>
                          );
                        } else if (paragraph.startsWith('### ')) {
                          return (
                            <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">
                              {paragraph.replace('### ', '')}
                            </h3>
                          );
                        }
                        return <p key={index} className="text-zinc-300">{paragraph}</p>;
                      })
                    ) : (
                      <p className="text-zinc-300">{project.details}</p>
                    )}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Modifications apportées</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.specs?.length > 0 ? (
                    project.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-sm text-zinc-300">{spec}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-zinc-500 text-sm">Aucune modification spécifiée.</p>
                  )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
                >
                {/* Technical Data */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Caractéristiques techniques</h3>
                  <div className="space-y-4">
                    {Object.entries(project.technicalData).map(([key, value]) => (
                      <div key={key} className="border-b border-zinc-800 last:border-0 pb-3 last:pb-0">
                        <div className="text-xs text-zinc-500 mb-1 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                        <div className="text-sm text-white font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gain Summary */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Gains obtenus</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Puissance</span>
                      <span className="text-lg font-bold text-green-400">
                        +{parseInt(project.after) - parseInt(project.before)} ch
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Couple</span>
                      <span className="text-lg font-bold text-green-400">
                        +{parseInt(project.afterTorque) - parseInt(project.beforeTorque)} Nm
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-green-500/20">
                      <span className="text-sm text-zinc-400">Augmentation</span>
                      <span className="text-lg font-bold text-green-400">
                        +{Math.round(((parseInt(project.after) - parseInt(project.before)) / parseInt(project.before)) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Un projet similaire ?
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6">
                    Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold"
                      asChild
                      >
                      <a href={createPageUrl("Home") + "#contact"}>
                        Demander un devis
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Autres réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects
            .filter(p => p._id !== project._id)
            .slice(0, 3)
            .map((p, index) => (
              <ProjectCard
                key={p._id}
                project={p}
                index={index}
                onClick={() => navigate(`/realisations/${p.slug.current}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}