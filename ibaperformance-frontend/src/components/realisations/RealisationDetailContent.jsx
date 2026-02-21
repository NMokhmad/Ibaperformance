import { memo } from "react";
import { motion } from "framer-motion";

const StatCard = ({ label, value, unit, gain, isAfter }) => (
  <div style={{
    padding: '1.25rem',
    background: isAfter ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
    borderTop: `3px solid ${isAfter ? 'white' : 'rgba(255,255,255,0.1)'}`,
    border: `1px solid ${isAfter ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
    borderTopColor: isAfter ? 'white' : 'rgba(255,255,255,0.1)',
  }}>
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.6rem',
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: isAfter ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)',
      marginBottom: '0.5rem',
    }}>
      {label}
    </div>
    <div style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      color: isAfter ? 'white' : 'rgba(255,255,255,0.45)',
      lineHeight: 1,
      letterSpacing: '0.02em',
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      color: isAfter ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.22)',
      marginTop: '4px',
    }}>
      {gain ? `+${gain} ${unit}` : unit}
    </div>
  </div>
);

export const RealisationDetailContent = memo(({ project }) => {
  const powerGain = parseInt(project.after) - parseInt(project.before);
  const torqueGain = parseInt(project.afterTorque) - parseInt(project.beforeTorque);

  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Performance stats — 4 flat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 sm:mb-14">
          <StatCard label="Puissance avant" value={project.before} unit="ch" isAfter={false} />
          <StatCard label="Puissance après" value={project.after} unit="ch" gain={powerGain} isAfter={true} />
          <StatCard label="Couple avant" value={project.beforeTorque} unit="Nm" isAfter={false} />
          <StatCard label="Couple après" value={project.afterTorque} unit="Nm" gain={torqueGain} isAfter={true} />
        </div>

        {/* Full Description */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
          }}>
            {project.fullDescription ? (
              project.fullDescription.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        color: 'white',
                        letterSpacing: '0.02em',
                        lineHeight: 1,
                        marginTop: '2.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {paragraph.replace("## ", "").toUpperCase()}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                        color: 'rgba(255,255,255,0.85)',
                        letterSpacing: '0.02em',
                        lineHeight: 1,
                        marginTop: '2rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {paragraph.replace("### ", "").toUpperCase()}
                    </h3>
                  );
                }
                return (
                  <p key={index} style={{ marginBottom: '1.25rem' }}>{paragraph}</p>
                );
              })
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        </div>

        {/* Specifications */}
        {project.specs?.length > 0 && (
          <div>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '28px', height: '2px', background: 'rgba(255,255,255,0.5)' }} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                color: 'white',
                letterSpacing: '0.04em',
              }}>
                MODIFICATIONS APPORTÉES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    —
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.5,
                  }}>
                    {spec}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
});
