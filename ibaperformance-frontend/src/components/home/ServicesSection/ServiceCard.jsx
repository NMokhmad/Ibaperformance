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
        <CardHeader className="relative">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-zinc-950">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-zinc-600 leading-relaxed">
            {service.description}
          </p>
          
          {service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-zinc-700">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
});