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
        value: settings.adresse || "10 Rue de la Grande Haie, 77130 Montereau-Fault-Yonne",
        link: "https://maps.app.goo.gl/3URwt6rhch2Z3PJR9",
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
      <section id="contact" className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LoadingState message="Chargement..." />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-200">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Remplissez le formulaire ou contactez-moi directement. Je vous répondrai dans les meilleurs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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