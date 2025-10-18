import { createPageUrl } from "@/utils";

export const navigationItems = [
  { title: "Accueil", url: createPageUrl("") + "#hero", section: "hero" },
  { title: "Services", url: createPageUrl("") + "#services", section: "services" },
  { title: "Réalisations", url: createPageUrl("") + "#realisations", section: "realisations" },
  { title: "Blog", url: createPageUrl("Blog"), section: "blog" },
  { title: "À propos", url: createPageUrl("") + "#apropos", section: "apropos" },
  { title: "Contact", url: createPageUrl("") + "#contact", section: "contact" },
];

export const footerLinks = [
  { title: "Mentions légales", url: "#" },
  { title: "Politique de confidentialité", url: "#" },
  { title: "CGV", url: "#" },
];