import { memo } from "react";

export const ScrollIndicator = memo(() => {
  return (
    <div
      className="hidden lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-20 lg:flex"
      aria-label="Scroll indicator"
    >
      <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex items-start justify-center p-1">
        <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" />
      </div>
    </div>
  );
});