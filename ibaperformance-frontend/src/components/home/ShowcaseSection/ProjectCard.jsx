import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = memo(({ project, index }) => {
  const isLarge = index === 0;

  return (
    <Link
      to={`/realisations/${project.slug}`}
      className="no-underline"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative overflow-hidden cursor-pointer h-full ${
          isLarge ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        <div className={`relative overflow-hidden ${
          isLarge ? "aspect-square" : "aspect-4/3"
        }`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: '#1A1A1C' }}>
              <span style={{ color: '#4B5563', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                Image non disponible
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.5) 40%, transparent 100%)',
              opacity: 0.85,
            }}
          />

          {/* Arrow icon - top right on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div style={{
              width: '36px',
              height: '36px',
              background: 'var(--color-racing-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
            {/* Category */}
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-racing-red)',
              marginBottom: '6px',
              display: 'block',
            }}>
              {project.category}
            </span>

            {/* Title */}
            <h3
              className="mb-2 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: isLarge ? 'clamp(1.8rem, 3.5vw, 2.5rem)' : 'clamp(1.4rem, 2.5vw, 1.8rem)',
                color: 'white',
                lineHeight: 1.0,
                letterSpacing: '0.01em',
              }}
            >
              {project.title.toUpperCase()}
            </h3>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              marginBottom: '14px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {project.description}
            </p>

            {/* Before/After Stats - industrial style */}
            <div className="flex items-stretch gap-0 w-fit">
              <div style={{
                background: 'rgba(10,10,12,0.9)',
                backdropFilter: 'blur(8px)',
                padding: '8px 14px',
                borderLeft: '2px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>Avant</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1 }}>{project.before}<span style={{ fontSize: '0.7rem', opacity: 0.6 }}>ch</span></div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                padding: '8px 14px',
                borderLeft: '2px solid rgba(255,255,255,0.5)',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>Après</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'white', lineHeight: 1 }}>{project.after}<span style={{ fontSize: '0.7rem', opacity: 0.7 }}>ch</span></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});
