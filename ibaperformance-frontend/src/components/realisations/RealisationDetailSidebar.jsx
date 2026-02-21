import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SidebarBlock = ({ children, style }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '1.25rem',
    ...style,
  }}>
    {children}
  </div>
);

const BlockLabel = ({ children }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '1rem',
  }}>
    <div style={{ width: '18px', height: '2px', background: 'rgba(255,255,255,0.45)' }} />
    <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.65rem',
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)',
    }}>
      {children}
    </span>
  </div>
);

export const RealisationDetailSidebar = memo(({ project }) => {
  const powerGain = parseInt(project.after) - parseInt(project.before);
  const torqueGain = parseInt(project.afterTorque) - parseInt(project.beforeTorque);
  const pctGain = Math.round((powerGain / parseInt(project.before)) * 100);

  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:sticky lg:top-24 space-y-3"
      >
        {/* Technical Data */}
        {project.technicalData && Object.keys(project.technicalData).length > 0 && (
          <SidebarBlock>
            <BlockLabel>Caractéristiques techniques</BlockLabel>
            <div>
              {Object.entries(project.technicalData).map(([key, value], i, arr) => (
                <div
                  key={key}
                  style={{
                    paddingBottom: i < arr.length - 1 ? '0.75rem' : 0,
                    marginBottom: i < arr.length - 1 ? '0.75rem' : 0,
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '2px',
                  }}>
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: 500,
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </SidebarBlock>
        )}

        {/* Gains */}
        <SidebarBlock>
          <BlockLabel>Gains obtenus</BlockLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { label: 'Puissance', value: `+${powerGain} ch` },
              { label: 'Couple', value: `+${torqueGain} Nm` },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.625rem 0.75rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.45)',
                  fontWeight: 500,
                }}>
                  {label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'white',
                  letterSpacing: '0.04em',
                }}>
                  {value}
                </span>
              </div>
            ))}

            {/* Total % gain */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              background: 'rgba(255,255,255,0.07)',
              borderTop: '1px solid rgba(255,255,255,0.15)',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Augmentation
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                color: 'white',
                letterSpacing: '0.04em',
              }}>
                +{pctGain}%
              </span>
            </div>
          </div>
        </SidebarBlock>

        {/* CTA */}
        <SidebarBlock>
          <BlockLabel>Un projet similaire ?</BlockLabel>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}>
            Contactez-moi pour discuter de votre projet et obtenir des conseils personnalisés.
          </p>
          <a href="/#contact" className="btn-racing w-full justify-center">
            Me contacter
            <ArrowRight className="w-4 h-4" />
          </a>
        </SidebarBlock>
      </motion.div>
    </div>
  );
});
