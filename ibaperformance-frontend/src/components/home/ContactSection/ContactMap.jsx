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
        src={mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3514616!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1234567890123"}
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