import { lazy } from "react";

// Eager load Home page (critical for LCP)
import Home from "../Home";

// Lazy load non-critical pages for better initial load
const Realisations = lazy(() => import("../RealisationsPage"));
const RealisationDetail = lazy(() => import("../RealisationDetail"));
const Blog = lazy(() => import("../BlogPage"));
const BlogDetail = lazy(() => import("../BlogDetail"));

export const PAGES = {
  Home: Home,
  Realisations: Realisations,
  Blog: Blog,
  BlogDetail: BlogDetail,
};

export const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/realisations", component: Realisations, name: "Realisations" },
  { path: "/realisations/:slug", component: RealisationDetail, name: "RealisationDetail" },
  { path: "/blog", component: Blog, name: "Blog" },
  { path: "/blog/:slug", component: BlogDetail, name: "BlogDetail" },
];