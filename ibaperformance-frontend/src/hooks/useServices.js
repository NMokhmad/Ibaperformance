import { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { 
  Zap, 
  Wrench, 
  Wind, 
  Target, 
  Settings, 
  AlertCircle, 
} from "lucide-react";

const iconMap = {
  zap: Zap,
  wrench: Wrench,
  wind: Wind,
  target: Target,
  settings: Settings,
  alert: AlertCircle,
};

export function useServices() {
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
        console.error("Erreur services:", err);
        setError("Erreur lors du chargement des services");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}