import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Calendar, Clock, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogCard from "../components/blog/BlogCard";
import BlogModal from "../components/blog/BlogModal";

const articles = [
  {
    id: 1,
    title: "Reprogrammation moteur : tout ce qu'il faut savoir",
    slug: "reprogrammation-moteur-guide-complet",
    category: "technique",
    categoryLabel: "Technique",
    excerpt: "Découvrez les différents stages de reprogrammation, leurs avantages et comment choisir la solution adaptée à votre véhicule.",
    content: `La reprogrammation moteur, également appelée chip tuning, est une modification logicielle de l'ECU (Engine Control Unit) permettant d'optimiser les performances de votre véhicule.

## Les différents stages de reprogrammation

### Stage 1
Le Stage 1 est la reprogrammation de base qui optimise les paramètres moteur sans modification matérielle. Gains moyens : 15-25% de puissance.

### Stage 2
Le Stage 2 nécessite quelques modifications comme un échappement sport ou une admission. Gains moyens : 25-35% de puissance.

### Stage 3
Le Stage 3 implique des modifications importantes (turbo, injecteurs, etc.). Réservé aux passionnés de performances extrêmes.

## Avantages de la reprogrammation

- Augmentation significative de la puissance et du couple
- Amélioration de la réponse moteur
- Réduction possible de la consommation
- Meilleure agrément de conduite

## Précautions à prendre

Une reprogrammation doit être réalisée par des professionnels qualifiés avec un équipement adapté. Chez IbaPerformance, nous utilisons des bancs de puissance pour valider chaque cartographie.`,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    author: "IbaPerformance",
    date: "15 Décembre 2024",
    readTime: "5 min",
    tags: ["Reprogrammation", "ECU", "Performance"],
  },
  {
    id: 2,
    title: "Préparation circuit : par où commencer ?",
    slug: "preparation-circuit-guide-debutant",
    category: "guide",
    categoryLabel: "Guide",
    excerpt: "Vous souhaitez emmener votre voiture sur circuit ? Voici les modifications essentielles pour débuter en toute sécurité.",
    content: `La préparation d'un véhicule pour le circuit nécessite une approche méthodique. Voici notre guide complet pour transformer votre voiture de route en arme de piste.

## 1. Les essentiels sécurité

Avant toute chose, la sécurité est primordiale :
- Harnais 4 ou 6 points homologués
- Arceau de sécurité
- Extincteur à bord
- Combinaison et casque homologués

## 2. Le châssis et les suspensions

### Suspensions sport
Des suspensions réglables permettent d'adapter le setup à chaque circuit. Nous recommandons des marques comme KW, Ohlins ou Bilstein.

### Barres anti-roulis
Réduisent le transfert de charge et améliorent la tenue de route en virage.

## 3. Le freinage

Un système de freinage performant est crucial :
- Plaquettes haute température
- Liquide de frein DOT 5.1
- Disques ventilés ou carbone céramique
- Durites aviation

## 4. Les pneumatiques

Des pneus semi-slicks offrent le meilleur compromis entre grip et durabilité pour les trackdays.

## Conclusion

Commencez progressivement et faites évoluer votre préparation selon votre niveau et vos besoins. N'hésitez pas à nous consulter pour un setup personnalisé.`,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    author: "IbaPerformance",
    date: "10 Décembre 2024",
    readTime: "7 min",
    tags: ["Circuit", "Trackday", "Setup"],
  },
  {
    id: 3,
    title: "Top 5 des modifications pour votre GTI",
    slug: "top-5-modifications-gti",
    category: "conseil",
    categoryLabel: "Conseil",
    excerpt: "Les meilleures améliorations pour booster les performances de votre Golf GTI sans compromettre la fiabilité.",
    content: `La Golf GTI est une excellente base pour la préparation. Voici notre top 5 des modifications les plus efficaces.

## 1. Admission sport

Une admission haute performance améliore le débit d'air et libère quelques chevaux. Gain sonore appréciable également.

**Notre choix :** Eventuri ou Integrated Engineering
**Gain estimé :** +10-15 ch

## 2. Échappement complet

Un échappement sport réduit la contre-pression et améliore l'évacuation des gaz.

**Notre choix :** Akrapovic ou Milltek
**Gain estimé :** +15-20 ch

## 3. Downpipe + décatalyseur

La modification la plus efficace avant reprogrammation.

**Gain estimé :** +20-25 ch
**Important :** Non homologué route

## 4. Reprogrammation Stage 2

Avec les modifications précédentes, un Stage 2 transforme la GTI.

**Gain total :** +80-100 ch
**Nouveau total :** 310-330 ch

## 5. Embrayage renforcé

Indispensable pour encaisser le surplus de couple.

**Notre choix :** Sachs Performance ou Clutch Masters

## Budget et planification

Comptez entre 3000€ et 5000€ pour l'ensemble de ces modifications. Nous recommandons de procéder étape par étape.`,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    author: "IbaPerformance",
    date: "5 Décembre 2024",
    readTime: "6 min",
    tags: ["Golf GTI", "Modifications", "Performance"],
  },
  {
    id: 4,
    title: "Entretien véhicule haute performance : les bonnes pratiques",
    slug: "entretien-vehicule-haute-performance",
    category: "entretien",
    categoryLabel: "Entretien",
    excerpt: "Comment maintenir votre véhicule préparé en parfait état ? Nos conseils d'experts pour prolonger la durée de vie de votre mécanique.",
    content: `Un véhicule préparé nécessite un entretien plus rigoureux qu'un véhicule d'origine. Voici nos recommandations.

## Vidanges fréquentes

### Huile moteur
- Intervalle recommandé : 5000-7500 km
- Type : huile synthétique haute performance (5W40 ou 10W60)
- Marques recommandées : Motul, Castrol Edge, Shell Helix

### Huile de boîte
À changer tous les 30 000 km pour une boîte mécanique préparée.

## Contrôles réguliers

### Pression turbo
Vérifiez régulièrement l'absence de fuites et la pression de suralimentation.

### Système de refroidissement
Contrôlez le niveau de liquide et inspectez les durites tous les 10 000 km.

### Freinage
Plaquettes et disques s'usent plus vite sur véhicule préparé. Contrôle tous les 5000 km recommandé.

## Diagnostic électronique

Effectuez un diagnostic complet tous les 20 000 km pour détecter d'éventuels problèmes en amont.

## Nettoyage et protection

### Moteur
Un moteur propre dissipe mieux la chaleur et permet de repérer facilement les fuites.

### Admission
Nettoyez ou remplacez le filtre tous les 10 000 km.

## Notre service d'entretien

Chez IbaPerformance, nous proposons des forfaits d'entretien adaptés aux véhicules préparés. Contactez-nous pour un devis personnalisé.`,
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80",
    author: "IbaPerformance",
    date: "1 Décembre 2024",
    readTime: "5 min",
    tags: ["Entretien", "Maintenance", "Longévité"],
  },
  {
    id: 5,
    title: "Turbo vs Compresseur : quel choix pour votre préparation ?",
    slug: "turbo-vs-compresseur-comparatif",
    category: "technique",
    categoryLabel: "Technique",
    excerpt: "Analyse comparative des deux systèmes de suralimentation pour vous aider à faire le bon choix selon vos objectifs.",
    content: `Le choix entre turbo et compresseur dépend de vos objectifs, de votre budget et de l'utilisation de votre véhicule.

## Le Turbocompresseur

### Avantages
- Rendement énergétique supérieur
- Gains de puissance importants
- Moins gourmand en énergie moteur
- Meilleur rapport performance/coût

### Inconvénients
- Temps de réponse (turbo lag)
- Installation plus complexe
- Température élevée des gaz d'échappement
- Nécessite un bon système de refroidissement

### Idéal pour
Les préparations axées sur la puissance maximale et l'efficacité, particulièrement en ligne droite.

## Le Compresseur volumétrique

### Avantages
- Réponse instantanée (pas de lag)
- Courbe de puissance linéaire
- Installation souvent plus simple
- Sonorité caractéristique

### Inconvénients
- Coût généralement plus élevé
- Consommation supérieure
- Puise de la puissance moteur
- Gains de puissance moindres

### Idéal pour
L'utilisation sportive nécessitant une réponse immédiate, comme le circuit ou les routes sinueuses.

## Le Bi-turbo

La solution ultime combinant deux turbos (petit et gros) pour éliminer le lag tout en offrant une puissance maximale.

**Coût :** Très élevé
**Gains :** Exceptionnels
**Complexité :** Maximum

## Notre recommandation

Pour la majorité des préparations route/circuit, nous recommandons un turbo moderne à géométrie variable qui offre le meilleur compromis.

Contactez-nous pour étudier la solution la plus adaptée à votre projet.`,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    author: "IbaPerformance",
    date: "25 Novembre 2024",
    readTime: "8 min",
    tags: ["Turbo", "Compresseur", "Suralimentation"],
  },
  {
    id: 6,
    title: "Les erreurs à éviter lors d'une préparation moteur",
    slug: "erreurs-eviter-preparation-moteur",
    category: "conseil",
    categoryLabel: "Conseil",
    excerpt: "Ne gâchez pas votre projet de préparation ! Découvrez les pièges les plus courants et comment les éviter.",
    content: `Préparer un moteur est un investissement important. Voici les erreurs les plus fréquentes à éviter absolument.

## 1. Négliger la fiabilité

### L'erreur
Chercher la puissance maximale sans renforcer les éléments critiques.

### La solution
Respectez un équilibre : embrayage renforcé, refroidissement optimisé, internals moteur adaptés.

## 2. Économiser sur la cartographie

### L'erreur
Opter pour une cartographie générique ou low-cost.

### La solution
Investissez dans une cartographie personnalisée sur banc de puissance par un professionnel qualifié.

## 3. Mélanger les marques sans cohérence

### L'erreur
Assembler des pièces de différentes marques sans vérifier leur compatibilité.

### La solution
Privilégiez des kits complets ou consultez un préparateur pour valider votre setup.

## 4. Sous-estimer le budget

### L'erreur
Commencer une préparation sans budget suffisant et devoir s'arrêter en cours de route.

### La solution
Établissez un budget réaliste incluant :
- Les pièces
- La main d'œuvre
- Les imprévus (10-15% du budget)
- L'entretien futur

## 5. Ignorer l'aspect légal

### L'erreur
Installer des pièces non homologuées sans en mesurer les conséquences.

### La solution
Renseignez-vous sur la réglementation :
- Homologation route
- Déclaration à l'assurance
- Contrôle technique

## 6. Négliger le rodage

### L'erreur
Solliciter immédiatement un moteur fraîchement préparé à fond.

### La solution
Respectez une période de rodage de 1000-2000 km en évitant :
- Les régimes élevés
- Les accélérations brutales
- La charge maximale

## Notre approche

Chez IbaPerformance, nous accompagnons chaque projet avec :
- Une étude de faisabilité
- Un devis détaillé
- Des conseils sur l'homologation
- Un suivi après installation

N'hésitez pas à nous consulter avant de démarrer votre projet.`,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
    author: "IbaPerformance",
    date: "20 Novembre 2024",
    readTime: "6 min",
    tags: ["Conseils", "Erreurs", "Préparation"],
  },
];

const categories = [
  { value: "all", label: "Tous les articles" },
  { value: "technique", label: "Technique" },
  { value: "guide", label: "Guides" },
  { value: "conseil", label: "Conseils" },
  { value: "entretien", label: "Entretien" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

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
              <BookOpen className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-200">Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Actualités & Conseils
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez nos guides, tutoriels et actualités sur la préparation automobile. 
              Expertise technique et conseils pratiques pour optimiser votre véhicule.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-zinc-700 rounded-xl text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedArticle(featuredArticle)}
          >
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:bg-gradient-to-r lg:from-zinc-900 lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-lg mb-4 w-fit">
                    <Tag className="w-3 h-3 text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-300">{featuredArticle.categoryLabel}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime} de lecture</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    {featuredArticle.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-8 bg-zinc-900 border-y border-zinc-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
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
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <BlogCard
                key={article.id}
                article={article}
                index={index}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>

          {filteredArticles.length <= 1 && (
            <div className="text-center py-16">
              <p className="text-zinc-500 text-lg">Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <BlogModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}