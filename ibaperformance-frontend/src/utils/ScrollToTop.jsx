import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ Page d'accueil → scroll smooth
    if (pathname === "/" || pathname.toLowerCase() === "/home") {
      document.documentElement.style.scrollBehavior = "smooth";
    } 
    // 🚫 Autres pages → scroll instantané
    else {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0); // remet instantanément en haut
    }

    // Nettoyage si jamais on quitte la page
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
