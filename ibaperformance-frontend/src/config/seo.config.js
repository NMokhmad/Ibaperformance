export const seoConfig = {
  defaultTitle: "IBA Performance - Préparation Moteur & Reprogrammation Automobile",
  defaultDescription: "Spécialiste de la reprogrammation moteur et préparation automobile depuis 15 ans. Optimisation de performances, préparation circuit et stage personnalisé.",
  defaultKeywords: "reprogrammation moteur, préparation automobile, optimisation performance, stage moteur",
  siteUrl: "https://ibaperformance.fr",
  defaultOgImage: "/assets/og-image.jpg",
  
  pages: {
    home: {
      title: "IBA Performance - Reprogrammation Moteur & Préparation Automobile",
      description: "Spécialiste de la reprogrammation moteur et préparation automobile depuis 15 ans. +500 véhicules préparés à Paris.",
      keywords: "reprogrammation moteur, préparation automobile, optimisation performance, IBA Performance Paris",
      canonical: "/",
    },
    blog: {
      title: "Blog - Actualités & Conseils Performance Automobile | IBA Performance",
      description: "Découvrez nos guides, tutoriels et actualités sur la préparation automobile. Conseils d'experts et techniques de reprogrammation.",
      keywords: "blog automobile, conseils reprogrammation, tutoriel préparation moteur",
      canonical: "/blog",
    },
    realisations: {
      title: "Nos Réalisations - Portfolio Préparation Automobile | IBA Performance",
      description: "Découvrez nos projets de préparation automobile. +500 véhicules optimisés, reprogrammation moteur et préparation circuit.",
      keywords: "réalisations préparation auto, portfolio reprogrammation, projets stage moteur",
      canonical: "/realisations",
    },
  },
};

// Helper pour générer le SEO d'un article
export function generateArticleSEO(article, slug) {
  return {
    title: `${article.title} | Blog IBA Performance`,
    description: article.excerpt || article.description,
    keywords: article.tags?.join(", ") || "performance automobile",
    canonical: `/blog/${slug}`,
    type: "article",
    ogImage: article.image,
  };
}

// Helper pour générer le SEO d'une réalisation
export function generateRealisationSEO(project, slug) {
  const powerGain = parseInt(project.after) - parseInt(project.before);
  
  return {
    title: `${project.titre} - Gain de ${powerGain}ch | Réalisations IBA Performance`,
    description: `${project.description} - Stage ${project.categorie}. Puissance avant: ${project.before}ch, après: ${project.after}ch.`,
    keywords: `${project.categorie}, préparation ${project.titre}, stage moteur`,
    canonical: `/realisations/${slug}`,
    type: "article",
    ogImage: project.images?.[0],
  };
}