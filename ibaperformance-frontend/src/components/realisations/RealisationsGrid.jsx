import { memo } from "react";
import ProjectCard from "./ProjectCard";

const EmptyState = memo(() => {
  return (
    <div className="text-center py-24">
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.35)',
      }}>
        Aucun projet dans cette catégorie pour le moment.
      </p>
    </div>
  );
});

export const RealisationsGrid = memo(({ projects, onProjectClick }) => {
  if (projects.length === 0) {
    return (
      <div style={{ background: 'var(--color-charcoal)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-charcoal)', paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.07)' }}>
          {projects.map((project, index) => (
            <div key={project.id} style={{ background: 'var(--color-charcoal)' }}>
              <ProjectCard
                project={project}
                index={index}
                onClick={() => onProjectClick(project)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
