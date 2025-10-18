import { memo } from "react";
import { navigationItems } from "../../constants/navigation";

export const FooterLinks = memo(function FooterLinks() {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4 text-zinc-200">Liens rapides</h4>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.title}>
            <a 
              href={item.url} 
              className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});