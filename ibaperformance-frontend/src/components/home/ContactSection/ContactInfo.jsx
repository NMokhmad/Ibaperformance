import { memo } from "react";
import { motion } from "framer-motion";

export const ContactInfo = memo(function ContactInfo({ contactInfo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                <Icon className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">{info.title}</div>
                <div className="text-sm font-medium text-white whitespace-pre-line">
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