import { memo } from "react";
import { motion } from "framer-motion";

export const ContactMap = memo(({ mapUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden h-96"
    >
      <iframe
        src={mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.683169878279!2d2.9690468!3d48.3858222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef435bd6a4f9e9%3A0x1c2a40fa0bf086a6!2sIBA%20Performance!5e0!3m2!1sfr!2sfr!4v1773753257644!5m2!1sfr!2sfr"}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation IbaPerformance"
      />
      
    </motion.div>
  );
});