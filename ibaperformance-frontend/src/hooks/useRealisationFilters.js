import { useState, useMemo, useEffect } from "react";

export function useRealisationFilters(projects) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    console.log('🔍 Filtrage - Catégorie sélectionnée:', selectedCategory);
    console.log('📋 Projets à filtrer:', projects.length);

    if (selectedCategory === "all") {
      console.log('✅ Affichage de tous les projets:', projects.length);
      return projects;
    }

    const filtered = projects.filter(project => {
      const matches = project.category === selectedCategory;
      if (matches) {
        console.log('✓ Projet correspondant:', project.title, '- catégorie:', project.category);
      }
      return matches;
    });

    console.log('📊 Résultat du filtre:', filtered.length, 'projet(s)');
    return filtered;
  }, [projects, selectedCategory]);

  useEffect(() => {
    console.log('🎯 Catégories uniques dans les projets:',
      [...new Set(projects.map(p => p.category))]);
  }, [projects]);

  const totalPower = useMemo(() => {
    return filteredProjects.reduce((sum, p) => {
      const gain = parseInt(p.after) - parseInt(p.before);
      return sum + gain;
    }, 0);
  }, [filteredProjects]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
    totalPower,
  };
}