import { useState, useCallback } from "react";
import { useRealisations } from "../hooks/useRealisations";
import { useRealisationFilters } from "../hooks/useRealisationFilters";
import { LoadingState } from "./common/LoadingState";
import { ErrorState } from "./common/ErrorState";
import { RealisationsHero } from "./realisations/RealisationsHero";
import { RealisationsFilters } from "./realisations/RealisationsFilters";
import { RealisationsGrid } from "./realisations/RealisationsGrid";
import { RealisationsCTA } from "./realisations/RealisationsCTA";

import { SEO } from "./seo/SEO";
import { seoConfig } from "../config/seo.config";

export default function RealisationsPage() {
  const { projects, categories, loading, error, refetch } = useRealisations();
  const {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
    totalPower,
  } = useRealisationFilters(projects);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryChange = useCallback((value) => {
    setSelectedCategory(value);
  }, [setSelectedCategory]);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  if (loading) {
    return <LoadingState message="Chargement des réalisations..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  return (
    <>
    <SEO {...seoConfig.pages.realisations} />
    
        <div className="min-h-screen bg-zinc-950 pt-20">
        <RealisationsHero 
            projectsCount={projects.length} 
            totalPower={totalPower} 
            />

        <RealisationsFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            />

        <RealisationsGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
            />

        <RealisationsCTA />
        </div>
    </>
  );
}