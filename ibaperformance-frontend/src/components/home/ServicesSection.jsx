import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "../../lib/sanity";
import { 
  Zap, 
  Wrench, 
  Wind, 
  Target, 
  Settings, 
  AlertCircle 
} from "lucide-react";

// Map des icônes disponibles
const iconMap = {
  zap: Zap,
  wrench: Wrench,
  wind: Wind,
  target: Target,
  settings: Settings,
  alert: AlertCircle,
};

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "service"] | order(order asc) {
          _id,
          title,
          description,
          features,
          icon,
          color,
          order
        }`;

        const data = await client.fetch(query);

        // Transforme les données
        const formattedServices = data.map(service => ({
          id: service._id,
          title: service.title,
          description: service.description,
          features: service.features || [],
          icon: iconMap[service.icon] || Wrench,
          color: service.color || "from-zinc-700 to-zinc-900",
        }));

        setServices(formattedServices);
        setLoading(false);
      } catch (err) {
        console.error("Erreur Sanity:", err);
        setError("Erreur lors du chargement des services");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="relative py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-600">Chargement des services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-200 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-800">Mes expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
            Services de performance automobile
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour optimiser les performances de votre véhicule, 
            de la simple reprogrammation à la préparation complète circuit.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                      <service.icon className="w-7 h-7 text-white" />
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
          ))}
        </div>

        {services.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-zinc-500">Aucun service disponible pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}