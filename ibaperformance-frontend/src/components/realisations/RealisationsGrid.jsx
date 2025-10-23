import { memo } from "react";
import ProjectCard from "./ProjectCard";

const EmptyState = memo(() => {
  return (
    <div className="text-center py-16">
      <p className="text-zinc-500 text-lg">
        Aucun projet dans cette catégorie pour le moment.
      </p>
    </div>
  );
});

export const RealisationsGrid = memo(({ 
  projects, 
  onProjectClick, 
}) => {
  if (projects.length === 0) {
    return (
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmptyState />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});