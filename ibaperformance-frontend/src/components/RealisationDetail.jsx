import { useParams, useNavigate } from "react-router-dom";
import { useRealisation } from "../hooks/useRealisation.js";
import { useImageCarousel } from "../hooks/useImageCarousel.js";
import { LoadingState } from "./common/LoadingState.jsx";
import { ErrorState } from "./common/ErrorState.jsx";
import { RealisationDetailHero } from "./realisations/RealisationDetailHero.jsx";
import { RealisationDetailContent } from "./realisations/RealisationDetailContent.jsx";
import { RealisationDetailSidebar } from "./realisations/RealisationDetailSidebar.jsx";
import { RelatedProjects } from "./realisations/RelatedProjects.jsx";
import { createPageUrl } from "../utils/index.ts";
import { SEO } from "./seo/SEO.jsx";
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
      <div className="min-h-screen pt-20 flex items-center justify-center"
        style={{ background: 'var(--color-charcoal)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            color: 'white',
            letterSpacing: '0.02em',
            marginBottom: '0.75rem',
          }}>
            RÉALISATION NON TROUVÉE
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '2rem',
          }}>
            Cette réalisation n'existe pas ou a été supprimée.
          </p>
          <button onClick={() => navigate("/realisations")} className="btn-racing">
            Retour aux réalisations
          </button>
        </div>
      </div>
    );
  }

  const seoData = generateRealisationSEO(project, slug);

  return (
    <>
      <SEO {...seoData} />

      <div className="pt-20" style={{ background: 'var(--color-charcoal)' }}>
        <RealisationDetailHero
          project={project}
          currentImageIndex={currentIndex}
          onNext={next}
          onPrevious={previous}
          onBack={() => navigate(createPageUrl("Realisations"))}
          />

        <section className="py-16" style={{ background: 'var(--color-charcoal)' }}>
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