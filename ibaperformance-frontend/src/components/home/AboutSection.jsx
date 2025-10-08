import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Passion",
    description: "L'automobile est notre passion. Chaque projet est traité avec le plus grand soin et l'attention aux détails."
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Nous utilisons uniquement des pièces de qualité et des équipements de diagnostic professionnels."
  },
  {
    icon: Heart,
    title: "Rigueur",
    description: "Méthodologie rigoureuse et respect des normes pour garantir fiabilité et performances durables."
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Une équipe de techniciens spécialisés et formés aux dernières technologies automobiles."
  }
];

export default function AboutSection() {
  return (
    <section id="apropos" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-zinc-800">À propos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
              Ibaperformance, votre partenaire performance
            </h2>
            
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Depuis plus de 15 ans, IbaPerformance accompagne les passionnés d'automobile 
              dans l'optimisation et la préparation de leurs véhicules. Notre expertise couvre 
              tous les aspects de la performance : du simple gain de puissance à la préparation 
              complète pour la compétition.
            </p>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Notre atelier est équipé des dernières technologies de diagnostic et de préparation 
              moteur. Nous travaillons avec les plus grandes marques de pièces performance et 
              développons des solutions sur mesure adaptées à chaque véhicule et à chaque usage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-zinc-950 mb-1">500+</div>
                <div className="text-sm text-zinc-600">Véhicules optimisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-950 mb-1">15</div>
                <div className="text-sm text-zinc-600">Ans d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-950 mb-1">98%</div>
                <div className="text-sm text-zinc-600">Satisfaction client</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                alt="Atelier IbaPerformance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
            </div>
            
            {/* Floating Card 
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-zinc-950">Certifié</div>
                  <div className="text-sm text-zinc-600">Garage professionnel</div>
                </div>
              </div>
              <p className="text-sm text-zinc-600">
                Agréé pour la préparation et l'optimisation de véhicules de haute performance
              </p>
            </div>
            */}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-zinc-950 text-center mb-12">
            Nos valeurs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-950 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-zinc-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">{value.title}</h4>
                <p className="text-zinc-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}