import { useState, useMemo } from "react";

export function useRealisationFilters(projects) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  }, [projects, selectedCategory]);

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