import { memo } from "react";
import { navigationItems } from "../../constants/navigation";

export const Navigation = memo(function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationItems.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 relative group"
        >
          {item.title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zinc-300 to-zinc-500 group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
});