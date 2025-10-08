
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/assets/Favorite 2.jpg";

const navigationItems = [
  { title: "Accueil", url: createPageUrl("Home"), section: "hero" },
  { title: "Services", url: createPageUrl("Home") + "#services", section: "services" },
  { title: "Réalisations", url: createPageUrl("Home") + "#realisations", section: "realisations" },
  { title: "À propos", url: createPageUrl("Home") + "#apropos", section: "apropos" },
  { title: "Contact", url: createPageUrl("Home") + "#contact", section: "contact" },
];

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-zinc-900/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div>
                <img src={logo} className="h-10 md:h-12 w-auto" alt="" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-zinc-300 to-zinc-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <Button 
                asChild
                className="bg-linear-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold shadow-lg shadow-zinc-700/50 hover:shadow-zinc-500/50 transition-all duration-300"
              >
                <a href={createPageUrl("Home") + "#contact"}>
                  Prendre rendez-vous
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
                >
                  {item.title}
                </a>
              ))}
              <Button 
                asChild
                className="w-full bg-linear-to-r from-zinc-100 to-zinc-300 text-zinc-950 hover:from-zinc-200 hover:to-zinc-400 font-semibold"
              >
                <a href={createPageUrl("Home") + "#contact"} onClick={() => setMobileMenuOpen(false)}>
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <img src={logo} className="h-10 md:h-12 w-auto" alt="" />
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Spécialiste de la préparation moteur et de l'optimisation de performances automobiles. 
                Passion, expertise et excellence au service de votre véhicule.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-zinc-200">Liens rapides</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-zinc-200">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-zinc-400">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-400">
                  <Mail className="w-4 h-4" />
                  <span>contact@ibaperformance.fr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-zinc-500">
                © 2024 IbaPerformance. Tous droits réservés.
              </p>
              <div className="flex gap-6 text-sm text-zinc-500">
                <a href="#" className="hover:text-zinc-300 transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-zinc-300 transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-zinc-300 transition-colors">CGV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
