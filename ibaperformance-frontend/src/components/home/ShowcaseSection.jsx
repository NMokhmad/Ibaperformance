import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../../data/realisations";

export default function ShowcaseSection() {

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
          {projects
          .slice(0, 6)
          .map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-xs font-medium text-zinc-400 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-300 mb-4">{project.description}</p>
                  
                  {/* Before/After Stats */}
                  <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-3 w-fit">
                    <div>
                      <div className="text-xs text-zinc-500">Avant</div>
                      <div className="text-lg font-bold text-white">{project.before}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-500" />
                    <div>
                      <div className="text-xs text-zinc-500">Après</div>
                      <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        {project.after}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            size="lg"
            className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg px-8 py-6 shadow-2xl shadow-zinc-700/50 hover:shadow-zinc-500/50 transition-all duration-300 group"
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