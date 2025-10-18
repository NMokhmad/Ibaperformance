import { memo } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export const RelatedProjects = memo(function RelatedProjects({ 
  projects, 
  currentProjectId 
}) {
  const navigate = useNavigate();

  const filteredProjects = projects
    .filter(p => p._id !== currentProjectId)
    .slice(0, 3);

  if (filteredProjects.length === 0) return null;

  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Autres réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
              onClick={() => navigate(`/realisations/${project.slug.current}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});