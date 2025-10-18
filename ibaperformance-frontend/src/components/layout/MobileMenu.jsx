import { memo } from "react";
import { navigationItems } from "../../constants/navigation";

export const MobileMenu = memo(function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800">
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
  );
});