import { useParams, useNavigate } from "react-router-dom";
import { useRealisation } from "../hooks/useRealisation.js";
import { useImageCarousel } from "../hooks/useImageCarousel.js";
import { LoadingState } from "./common/LoadingState.jsx";
import { ErrorState } from "./common/ErrorState.jsx";
import { Button } from "./ui/button.jsx";
import { RealisationDetailHero } from "./realisations/RealisationDetailHero.jsx";
import { RealisationDetailContent } from "./realisations/RealisationDetailContent.jsx";
import { RealisationDetailSidebar } from "./realisations/RealisationDetailSidebar.jsx";
import { RelatedProjects } from "./realisations/RelatedProjects.jsx";
import { createPageUrl } from "../utils/index.ts";
import { SEO } from "./seo/SEO.jsx"
import { generateRealisationSEO } from "../config/seo.config";

export default function RealisationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { project, relatedProjects, loading, error } = useRealisation(slug);
  const { currentIndex, next, previous } = useImageCarousel(project?.images?.length || 0);

  if (loading) {
    return <LoadingState message="Chargement de la réalisation..." />;
  }

  if (error) {
    return (
      <ErrorState 
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Réalisation non trouvée
          </h1>
          <p className="text-zinc-400 mb-6">
            Cette réalisation n'existe pas ou a été supprimée.
          </p>
          <Button onClick={() => navigate("/realisations")}>
            Retour aux réalisations
          </Button>
        </div>
      </div>
    );
  }

  const seoData = generateRealisationSEO(project, slug);

  return (
    <>
      <SEO {...seoData} />

      <div className="bg-zinc-950 pt-20">
        <RealisationDetailHero
          project={project}
          currentImageIndex={currentIndex}
          onNext={next}
          onPrevious={previous}
          onBack={() => navigate(createPageUrl("Realisations"))}
          />

        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <RealisationDetailContent project={project} />
              <RealisationDetailSidebar project={project} />
            </div>
          </div>
        </section>

        <RelatedProjects 
          projects={relatedProjects} 
          currentProjectId={project._id} 
          />
      </div>
    </>
  );
}