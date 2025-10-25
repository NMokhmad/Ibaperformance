import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import App from "@/App.jsx";
import "./index.css";

// Lazy load analytics to improve initial load
const Analytics = lazy(() => import("@vercel/analytics/react").then(m => ({ default: m.Analytics })));
const SpeedInsights = lazy(() => import("@vercel/speed-insights/react").then(m => ({ default: m.SpeedInsights })));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <Suspense fallback={null}>
            <Analytics />
            <SpeedInsights />
        </Suspense>
    </React.StrictMode>,
); 