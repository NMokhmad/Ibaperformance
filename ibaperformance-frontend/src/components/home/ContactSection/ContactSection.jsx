import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSettingsContext } from "../../../contexts/SettingsContext";
import { LoadingState } from "../../common/LoadingState";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";
import { ContactForm } from "./ContactForm";

export const ContactSection = memo(() => {
  const { settings, loading } = useSettingsContext();

  const contactInfo = useMemo(() => {
    if (!settings) return [];

    return [
      {
        icon: Phone,
        title: "Téléphone",
        value: settings.telephone || "+33 1 23 45 67 89",
        link: `tel:${settings.telephone?.replace(/\s/g, "")}`,
      },
      {
        icon: Mail,
        title: "Email",
        value: settings.email || "contact@ibaperformance.fr",
        link: `mailto:${settings.email}`,
      },
      {
        icon: MapPin,
        title: "Adresse",
        value: settings.adresse || "Paris, France",
        link: "#",
      },
      {
        icon: Clock,
        title: "Horaires",
        value: settings.horaires || "Lun - Ven: 9h - 18h",
        link: "#",
      },
    ];
  }, [settings]);

  if (loading) {
    return (
      <section id="contact" className="relative py-24" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <LoadingState message="Chargement..." />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24" style={{ background: 'var(--color-charcoal)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.55)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
            }}>
              Contact
            </span>
          </div>

          <h2
            className="mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              color: 'white',
              lineHeight: 0.95,
              letterSpacing: '0.01em',
            }}
          >
            DISCUTONS DE
            <br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>VOTRE PROJET</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            Remplissez le formulaire ou contactez-moi directement. Je vous répondrai dans les meilleurs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactInfo contactInfo={contactInfo} />
            <ContactMap mapUrl={settings?.mapUrl} />
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
});
