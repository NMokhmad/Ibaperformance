import { memo } from "react";
import { Phone, Mail } from "lucide-react";

export const FooterContact = memo(function FooterContact({ settings }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4 text-zinc-200">Contact</h4>
      <ul className="space-y-3">
        {settings?.telephone && (
          <li className="flex items-center gap-2 text-sm text-zinc-400">
            <Phone className="w-4 h-4" />
            <a 
              href={`tel:${settings.telephone.replace(/\s/g, '')}`}
              className="hover:text-zinc-200 transition-colors"
            >
              {settings.telephone}
            </a>
          </li>
        )}
        {settings?.email && (
          <li className="flex items-center gap-2 text-sm text-zinc-400">
            <Mail className="w-4 h-4" />
            <a 
              href={`mailto:${settings.email}`}
              className="hover:text-zinc-200 transition-colors"
            >
              {settings.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
});