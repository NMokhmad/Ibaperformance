import Layout from "./Layout.jsx";

import Home from "./Home";

import Realisations from "./Realisations";
import RealisationDetail from "./RealisationDetail.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import Blog from "./Blog";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

const PAGES = {
    
    Home: Home,
    
    Realisations: Realisations,
    
    Blog: Blog,
    
};

function _getCurrentPage(url) {
    if (url.endsWith("/")) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split("/").pop();
    if (urlLastPart.includes("?")) {
        urlLastPart = urlLastPart.split("?")[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <ScrollToTop/>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Realisations" element={<Realisations />} />
                <Route path="/Realisations/:slug" element={<RealisationDetail />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}