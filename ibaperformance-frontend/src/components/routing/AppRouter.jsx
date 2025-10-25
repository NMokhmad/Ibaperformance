import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Layout";
import ScrollToTop from "../../utils/ScrollToTop";
import { routes, PAGES } from "./routes.config";
import { SettingsProvider } from "../../contexts/SettingsContext"; // AJOUT

// Lightweight loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-8 h-8 border-2 border-zinc-500 border-t-white rounded-full animate-spin" />
    </div>
  );
}

function getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  const pageName = Object.keys(PAGES).find(
    page => page.toLowerCase() === urlLastPart.toLowerCase(),
  );
  
  return pageName || Object.keys(PAGES)[0];
}

function AppContent() {
  const location = useLocation();
  const currentPage = getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <SettingsProvider> {/* AJOUT : Enveloppe tout dans le Provider */}
        <AppContent />
      </SettingsProvider>
    </Router>
  );
}