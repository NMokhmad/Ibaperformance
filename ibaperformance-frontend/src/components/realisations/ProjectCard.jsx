import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORY_LABELS = {
  reprogrammation: 'Reprogrammation',
  moteur: 'Préparation moteur',
  echappement: 'Échappement',
  admission: 'Admission',
  esthetique: 'Esthétique',
  suspension: 'Suspension',
  freinage: 'Freinage',
  circuit: 'Préparation circuit',
  pack: 'Pack performance',
  pieces: 'Installation racing',
  extreme: 'Préparations extrêmes',
};

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const powerGain = parseInt(project.after) - parseInt(project.before);
  const categoryLabel = CATEGORY_LABELS[project.category] || project.category;

  return (
    <Link to={`/realisations/${project.slug}`} className="block group">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        style={{
          background: '#111113',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          transition: 'border-color 0.3s ease',
        }}
        className="overflow-hidden"
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.3) 55%, transparent 100%)' }}
          />

          {/* Category */}
          <div className="absolute top-4 left-4">
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              background: 'rgba(10,10,12,0.75)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.7rem',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              {categoryLabel}
            </span>
          </div>

          {/* Arrow on hover */}
          <div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: 'translate(0,0)' }}
          >
            <div style={{
              width: '34px',
              height: '34px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ArrowUpRight style={{ width: '15px', height: '15px', color: '#0A0A0C' }} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'white',
              lineHeight: 1,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h3>

          <p
            className="line-clamp-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.6,
              marginBottom: '1.25rem',
            }}
          >
            {project.description}
          </p>

          {/* Before / After */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1rem',
            gap: 0,
          }}>
            {/* Avant */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
                marginBottom: '4px',
              }}>
                Avant
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1,
              }}>
                {project.before} <span style={{ fontSize: '1rem' }}>ch</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', margin: '0 1rem' }} />

            {/* Après */}
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              padding: '0.5rem 0.75rem',
              borderLeft: '2px solid white',
            }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '4px',
              }}>
                Après
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: 'white',
                lineHeight: 1,
              }}>
                {project.after} <span style={{ fontSize: '1rem' }}>ch</span>
              </div>
              {powerGain > 0 && (
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: '2px',
                }}>
                  +{powerGain} ch
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
