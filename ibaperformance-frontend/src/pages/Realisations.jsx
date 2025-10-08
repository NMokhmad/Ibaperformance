import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Filter, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../components/realisations/ProjectCard";
import ProjectModal from "../components/realisations/ProjectModal";

const projects = [
  {
    id: 1,
    title: "BMW M3 F80",
    category: "reprogrammation",
    categoryLabel: "Reprogrammation Stage 2",
    before: "431 ch",
    after: "520 ch",
    beforeTorque: "550 Nm",
    afterTorque: "670 Nm",
    date: "Décembre 2024",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    ],
    description: "Reprogrammation complète Stage 2 avec downpipe inox haute performance.",
    details: "Optimisation complète de la cartographie moteur avec suppression du catalyseur d'origine et installation d'un downpipe inox 200 cellules. Gains significatifs sur toute la plage de régime avec courbe de puissance parfaitement linéaire.",
    specs: [
      "Reprogrammation ECU Stage 2",
      "Downpipe inox 200 cellules",
      "Admission haute performance",
      "Cartographie personnalisée",
    ],
  },
  {
    id: 2,
    title: "Porsche 911 GT3",
    category: "circuit",
    categoryLabel: "Préparation circuit",
    before: "500 ch",
    after: "540 ch",
    beforeTorque: "460 Nm",
    afterTorque: "490 Nm",
    date: "Novembre 2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f36c7?w=1200&q=80",
    ],
    description: "Setup châssis complet + échappement Akrapovic pour utilisation circuit intensive.",
    details: "Transformation complète pour la piste avec optimisation du châssis, freinage racing et échappement titane. Configuration idéale pour les trackdays et compétitions amateur.",
    specs: [
      "Échappement Akrapovic Evolution",
      "Suspensions KW Clubsport",
      "Freinage Brembo GT",
      "Allègement -50kg",
    ],
  },
  {
    id: 3,
    title: "Audi RS6 C8",
    category: "reprogrammation",
    categoryLabel: "Reprogrammation Stage 1",
    before: "600 ch",
    after: "720 ch",
    beforeTorque: "800 Nm",
    afterTorque: "920 Nm",
    date: "Novembre 2024",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f36c7?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f36c7?w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    ],
    description: "Optimisation turbo + admission carbone pour performances extrêmes.",
    details: "Reprogrammation Stage 1 avec optimisation de la pression turbo et installation d'une admission carbone haute performance. Gains impressionnants tout en préservant la fiabilité.",
    specs: [
      "Reprogrammation Stage 1",
      "Admission carbone Eventuri",
      "Intercooler amélioré",
      "Downpipes sport",
    ],
  },
  {
    id: 4,
    title: "Mercedes AMG GT",
    category: "pack",
    categoryLabel: "Pack Performance",
    before: "476 ch",
    after: "580 ch",
    beforeTorque: "630 Nm",
    afterTorque: "730 Nm",
    date: "Octobre 2024",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
    description: "Reprogrammation + échappement + freinage racing pour une GT survitaminée.",
    details: "Pack complet combinant reprogrammation moteur, échappement haute performance et système de freinage racing. Transformation totale du caractère du véhicule.",
    specs: [
      "Reprogrammation ECU",
      "Échappement Capristo",
      "Freinage carbone céramique",
      "Suspension sportive",
    ],
  },
  {
    id: 5,
    title: "Golf 7 GTI",
    category: "reprogrammation",
    categoryLabel: "Optimisation complète",
    before: "230 ch",
    after: "340 ch",
    beforeTorque: "350 Nm",
    afterTorque: "450 Nm",
    date: "Octobre 2024",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    ],
    description: "Stage 2 + turbo upgrade + intercooler pour une GTI extrême.",
    details: "Préparation complète Stage 2 avec upgrade turbo IS38, intercooler haute capacité et cartographie personnalisée. Performances dignes d'une Golf R.",
    specs: [
      "Turbo IS38 upgrade",
      "Intercooler FMIC",
      "Downpipe + décata",
      "Embrayage renforcé",
    ],
  },
  {
    id: 6,
    title: "Nissan GT-R R35",
    category: "extreme",
    categoryLabel: "Préparation extrême",
    before: "565 ch",
    after: "850 ch",
    beforeTorque: "637 Nm",
    afterTorque: "890 Nm",
    date: "Septembre 2024",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    ],
    description: "Turbos hybrides + cartographie sur mesure pour performances extrêmes.",
    details: "Préparation complète avec turbos hybrides, injecteurs haute capacité et cartographie E85. Transformation radicale avec fiabilité préservée grâce à un setup équilibré.",
    specs: [
      "Turbos hybrides Alpha 9",
      "Injecteurs 1050cc",
      "Pompe à essence renforcée",
      "Cartographie E85",
    ],
  },
  {
    id: 7,
    title: "Tesla Model S Plaid",
    category: "pieces",
    categoryLabel: "Installation racing",
    before: "1020 ch",
    after: "1020 ch",
    beforeTorque: "1420 Nm",
    afterTorque: "1420 Nm",
    date: "Septembre 2024",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    ],
    description: "Freinage carbone + suspensions racing pour circuit électrique.",
    details: "Optimisation châssis et freinage pour exploiter pleinement les performances de la Model S Plaid sur circuit. Focus sur la tenue de route et l'endurance thermique.",
    specs: [
      "Freinage Brembo carbone",
      "Suspensions Ohlins DFV",
      "Pneus semi-slicks Michelin",
      "Refroidissement optimisé",
    ],
  },
  {
    id: 8,
    title: "Ferrari 488 GTB",
    category: "circuit",
    categoryLabel: "Préparation circuit",
    before: "670 ch",
    after: "730 ch",
    beforeTorque: "760 Nm",
    afterTorque: "820 Nm",
    date: "Août 2024",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
    description: "Echappement titane + aérodynamique racing pour la piste.",
    details: "Configuration circuit avec échappement titane Capristo, kit aéro racing et setup châssis agressif. Chrono au tour optimisé avec une sonorité exceptionnelle.",
    specs: [
      "Échappement titane Capristo",
      "Aileron carbone racing",
      "Splitter avant carbone",
      "Liaison au sol optimisée",
    ],
  },
];

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
              Contactez-nous pour discuter de votre projet de préparation. 
              Nous créons des solutions sur mesure adaptées à vos besoins et à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold text-lg px-8 shadow-xl"
                asChild
              >
                <a href="#contact">
                  Demander un devis
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-600 text-white hover:bg-zinc-800 hover:border-zinc-500 font-semibold text-lg px-8"
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}