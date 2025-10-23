import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Layout";
import ScrollToTop from "../../utils/ScrollToTop";
import { routes, PAGES } from "./routes.config";
import { SettingsProvider } from "../../contexts/SettingsContext"; // AJOUT

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
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<route.component />} 
          />
        ))}
      </Routes>
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