import { memo } from "react";
import { motion } from "framer-motion";

export const ContactInfo = memo(({ contactInfo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        return (
          <motion.a
            key={index}
            href={info.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
            style={{
              display: 'block',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '1.25rem',
              textDecoration: 'none',
              transition: 'border-color 0.25s ease, background 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
          >
            <div className="flex items-start gap-4">
              {/* White icon box — icône sombre sur fond blanc */}
              <div style={{
                width: '36px',
                height: '36px',
                minWidth: '36px',
                background: 'rgba(255,255,255,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon className="w-4 h-4" style={{ color: '#0A0A0C' }} />
              </div>

              <div className="flex-1 min-w-0">
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '4px',
                }}>
                  {info.title}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  lineHeight: 1.5,
                }}>
                  {info.value}
                </div>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
});
