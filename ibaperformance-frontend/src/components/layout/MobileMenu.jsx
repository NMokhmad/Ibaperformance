import { memo, useEffect, useRef } from "react";
import { navigationItems } from "../../constants/navigation";

export const MobileMenu = memo(({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Si le clic est en dehors du menu, on le ferme
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Vérifier aussi que ce n'est pas le bouton burger qui a été cliqué
        const burgerButton = event.target.closest('button[aria-label="Toggle mobile menu"]');
        if (!burgerButton) {
          onClose();
        }
      }
    };

    // Ajouter l'écouteur d'événements
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Nettoyer l'écouteur
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay pour fermer en cliquant en dehors */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu mobile */}
      <div
        ref={menuRef}
        className="relative z-50 lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800"
      >
        <div className="px-4 py-6 space-y-4">
          {navigationItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={onClose}
              className="block text-base font-medium text-zinc-300 hover:text-white transition-colors py-2"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
});