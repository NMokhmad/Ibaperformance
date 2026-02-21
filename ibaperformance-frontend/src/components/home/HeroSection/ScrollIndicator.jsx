import { memo } from "react";

export const ScrollIndicator = memo(() => {
  return (
    <div
      className="hidden lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-20 lg:flex"
      aria-label="Scroll-indicator"
    >
      <div style={{
        width: '24px',
        height: '40px',
        border: '2px solid rgba(255,255,255,0.25)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4px',
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          background: 'rgba(255,255,255,0.4)',
        }} className="animate-bounce" />
      </div>
    </div>
  );
});
