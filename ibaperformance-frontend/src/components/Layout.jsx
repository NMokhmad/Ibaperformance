import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSettings } from "../hooks/useSettings";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export default function Layout({ children }) {
  const location = useLocation();
  const { settings } = useSettings();
  const scrolled = useScrollEffect(50);

  // Scroll to hash on navigation
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
    <div className="min-h-screen text-white" style={{ background: 'var(--color-charcoal)' }}>
      <Header scrolled={scrolled} />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer settings={settings} />
    </div>
  );
}