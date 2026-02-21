import { memo } from "react";
import { useShowcaseProjects } from "../../../hooks/useShowcaseProjects";
import { LoadingState } from "../../common/LoadingState";
import { ErrorState } from "../../common/ErrorState";
import { ShowcaseHeader } from "./ShowcaseHeader";
import { ProjectCard } from "./ProjectCard";
import { ShowcaseCTA } from "./ShowcaseCTA";

export const ShowcaseSection = memo(() => {
  const { projects, loading, error } = useShowcaseProjects(6);

  if (loading) {
    return (
      <section className="relative py-24" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LoadingState message="Chargement des réalisations..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ErrorState message={error} showRetry={false} />
        </div>
      </section>
    );
  }

  return (
    <section id="realisations" className="relative py-24" style={{ background: 'var(--color-charcoal)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowcaseHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <ShowcaseCTA />
      </div>
    </section>
  );
});
