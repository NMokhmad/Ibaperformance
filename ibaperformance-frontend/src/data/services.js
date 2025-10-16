import { Cpu, Wrench, Package } from "lucide-react";

export const services = [
  {
    icon: Cpu,
    title: "Reprogrammation moteur / ECU",
    description: "Optimisation des paramètres moteur pour libérer la puissance cachée. Cartographie sur mesure adaptée à vos besoins.",
    features: ["Gain de puissance jusqu'à 30%", "Réduction consommation", "Suppression limiteurs"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Wrench,
    title: "Entretien hautes performances",
    description: "Maintenance spécialisée pour véhicules de sport et préparés. Diagnostic précis et interventions expertes.",
    features: ["Révision complète", "Diagnostic électronique", "Réglages précis"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Installation pièces racing",
    description: "Montage professionnel de pièces de compétition. Turbo, échappement, admission, suspensions et plus encore.",
    features: ["Turbo & compresseur", "Échappement racing", "Kit admission"],
    color: "from-green-500 to-emerald-500",
  },
];