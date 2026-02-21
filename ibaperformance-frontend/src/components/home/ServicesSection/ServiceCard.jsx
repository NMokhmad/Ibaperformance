import { memo } from "react";
import { motion } from "framer-motion";

export const ServiceCard = memo(({ service, index }) => {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className="h-full group relative overflow-hidden"
        style={{
          background: 'white',
          border: '1px solid #E5E4E0',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#1A1918';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.07), 0 4px 20px rgba(0,0,0,0.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#E5E4E0';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Dark left border accent on hover */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{
            width: '3px',
            background: 'var(--color-accent-dark)',
            transform: 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 0.35s ease',
          }}
          ref={el => {
            if (el) {
              const parent = el.parentElement;
              parent.addEventListener('mouseenter', () => { el.style.transform = 'scaleY(1)'; });
              parent.addEventListener('mouseleave', () => { el.style.transform = 'scaleY(0)'; });
            }
          }}
        />

        <div className="p-6 sm:p-8">
          {/* Number + Icon row */}
          <div className="flex items-start justify-between mb-6">
            {/* Large number */}
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              color: '#ECEAE4',
              lineHeight: 1,
              letterSpacing: '0.02em',
              userSelect: 'none',
              transition: 'color 0.3s ease',
            }}
              className="group-hover:text-[#D8D5CE]"
            >
              {num}
            </span>

            {/* Icon */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br ${service.color} flex items-center justify-center shadow-md`}
              style={{ flexShrink: 0 }}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3
            className="mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#0F0F11',
              lineHeight: 1.05,
              letterSpacing: '0.01em',
            }}
          >
            {service.title.toUpperCase()}
          </h3>

          {/* Divider */}
          <div style={{ width: '28px', height: '2px', background: 'var(--color-accent-dark)', marginBottom: '16px' }} />

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: '#6B7280',
            lineHeight: 1.7,
            marginBottom: service.features.length > 0 ? '20px' : '0',
          }}>
            {service.description}
          </p>

          {service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3" style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#4B5563' }}>
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-accent-dark)',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
});
