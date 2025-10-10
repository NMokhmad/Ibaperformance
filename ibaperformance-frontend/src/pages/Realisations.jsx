import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Filter, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../components/realisations/ProjectCard";
import { projects } from "../data/realisations";


const categories = [
  { value: "all", label: "Tous les projets" },
  { value: "reprogrammation", label: "Reprogrammation" },
  { value: "circuit", label: "Préparation circuit" },
  { value: "pack", label: "Pack performance" },
  { value: "pieces", label: "Installation racing" },
  { value: "extreme", label: "Préparations extrêmes" },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
              <Gauge className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-200">Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Nos réalisations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets de préparation automobile. Chaque véhicule est unique 
              et bénéficie d'une approche personnalisée pour atteindre vos objectifs de performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{projects.length}</span>
                </div>
                <span className="text-zinc-400">Projets réalisés</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-zinc-400" />
                </div>
                <span className="text-zinc-400">+{projects.reduce((sum, p) => {
                  const gain = parseInt(p.after) - parseInt(p.before);
                  return sum + gain;
                }, 0)} ch gagnés</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-8 bg-zinc-900 border-y border-zinc-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-zinc-400 shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filtrer :</span>
            </div>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1">
              <TabsList className="bg-zinc-800 border border-zinc-700 inline-flex">
                {categories.map(cat => (
                  <TabsTrigger
                    key={cat.value}
                    value={cat.value}
                    className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white text-zinc-400 whitespace-nowrap"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                  />     
              ))}
            </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-500 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre véhicule ?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de votre projet.
            {/* 
              Nous créons des solutions sur mesure adaptées à vos besoins et à votre budget.
            */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg px-8 shadow-xl"
                asChild
              >
                <a href="/#contact">
                  Me contacter
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg px-8 shadow-xl"
                asChild
              >
                <a href="/">
                  Retour à l'accueil
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}