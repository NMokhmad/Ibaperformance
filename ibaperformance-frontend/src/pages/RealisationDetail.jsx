import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, ChevronRight, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { projects } from "../data/realisations";
import ProjectCard from "../components/realisations/ProjectCard";


export default function RealisationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const project = projects.find(p => p.slug === slug);

  // Scroller vers le haut quand le slug change


  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Réalisation non trouvée</h1>
          <Button onClick={() => navigate(createPageUrl("Realisations"))}>
            Retour aux réalisations
          </Button>
        </div>
      </div>
    );
  }

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
      {/* Hero Image Gallery */}
      

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
                    {project.title}
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
                    {project.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-sm text-zinc-300">{spec}</span>
                      </div>
                    ))}
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
                    <Button 
                      variant="outline"
                      className="w-full border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager ce projet
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
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((project,index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}