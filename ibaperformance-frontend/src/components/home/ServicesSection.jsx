import React from "react";
import { motion } from "framer-motion";
import { Cpu, Wrench, Trophy, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cpu,
    title: "Reprogrammation moteur / ECU",
    description: "Optimisation des paramètres moteur pour libérer la puissance cachée. Cartographie sur mesure adaptée à vos besoins.",
    features: ["Gain de puissance jusqu'à 30%", "Réduction consommation", "Suppression limiteurs"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Wrench,
    title: "Entretien hautes performances",
    description: "Maintenance spécialisée pour véhicules de sport et préparés. Diagnostic précis et interventions expertes.",
    features: ["Révision complète", "Diagnostic électronique", "Réglages précis"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Trophy,
    title: "Préparation circuit",
    description: "Transformation de votre véhicule pour la piste. Optimisation totale : moteur, châssis, freinage et aérodynamique.",
    features: ["Setup châssis", "Freinage racing", "Allègement"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Package,
    title: "Installation pièces racing",
    description: "Montage professionnel de pièces de compétition. Turbo, échappement, admission, suspensions et plus encore.",
    features: ["Turbo & compresseur", "Échappement racing", "Kit admission"],
    color: "from-green-500 to-emerald-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-200 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-800">Nos expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
            Services de performance automobile
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour optimiser les performances de votre véhicule, 
            de la simple reprogrammation à la préparation complète circuit.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-zinc-200 hover:border-zinc-300 transition-all duration-300 group hover:shadow-xl overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-zinc-950">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full border-zinc-300 text-zinc-950 hover:bg-zinc-100 group-hover:border-zinc-400 transition-all"
                    asChild
                  >
                    <a href="#contact">
                      Demander un devis
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Un projet de préparation sur mesure ?
          </h3>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Discutons de vos objectifs de performance. Nous créons des solutions adaptées à votre budget et à vos ambitions.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg px-8 shadow-xl"
            asChild
          >
            <a href="#contact">
              Contactez-nous
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}