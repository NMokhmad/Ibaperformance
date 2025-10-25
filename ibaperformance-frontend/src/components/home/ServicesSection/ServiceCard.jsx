import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServiceCard = memo(({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-zinc-200 hover:border-zinc-300 transition-all duration-300 group hover:shadow-xl overflow-hidden">
        <CardHeader className="relative p-4 sm:p-6">
          <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-xl sm:text-2xl text-zinc-950">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            {service.description}
          </p>

          {service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-700">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 mt-1.5`} />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
});