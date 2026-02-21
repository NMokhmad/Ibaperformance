import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export const RelatedProjects = memo(({ projects, currentProjectId }) => {
  const navigate = useNavigate();

  const filteredProjects = projects
    .filter(p => p._id !== currentProjectId)
    .slice(0, 3);

  if (filteredProjects.length === 0) return null;

  return (
    <section style={{
      background: 'var(--color-charcoal)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.4)' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'white',
            lineHeight: 1,
            letterSpacing: '0.03em',
          }}>
            AUTRES RÉALISATIONS
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          {filteredProjects.map((project, index) => (
            <div key={project._id} style={{ background: 'var(--color-charcoal)' }}>
              <ProjectCard
                project={project}
                index={index}
                onClick={() => navigate(`/realisations/${project.slug?.current || project.slug}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
