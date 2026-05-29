
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import PageTransition from "../components/PageTransition";
import NotFound from "../pages/NotFound";

// 🔥 IMPORTANT: Home NOT lazy (LCP improve karega)
import Home from "../pages/Home";

// Lazy Pages
const About = lazy(() => import("../pages/About"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Career = lazy(() => import("../pages/Career"));
const JobDetail = lazy(() => import("../pages/JobDetail"));
const Faq = lazy(() => import("../pages/Faq"));
const Blogs = lazy(() => import("../pages/Blogs/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));
const Contact = lazy(() => import("../pages/Contact"));

// Services
const ServicesOverview = lazy(() => import("../pages/Services/ServicesOverview"));
const Websites = lazy(() => import("../pages/Services/Websites"));
const Ecommerce = lazy(() => import("../pages/Services/Ecommerce"));
const Applications = lazy(() => import("../pages/Services/Applications"));
const SocialMedia = lazy(() => import("../pages/Services/SocialMedia"));
const SEO = lazy(() => import("../pages/Services/SEO"));
const CreativeVideo = lazy(() => import("../pages/Services/CreativeVideo"));
const DigitalMarketing = lazy(() => import("../pages/Services/DigitalMarketing"));
const BrandingDesigning = lazy(() => import("../pages/Services/BrandingDesigning"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Terms = lazy(() => import("../pages/Terms"));
const Refund = lazy(() => import("../pages/RefundPolicy"));

// Auth
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const EmployeeLogin = lazy(() => import("../pages/EmployeeLogin"));

/* 🔝 Scroll To Top */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // smooth nahi (performance better)
    });
  }, [pathname]);

  return null;
};

/* ⚡ Loader (lightweight) */
const Loader = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <span className="text-sm font-medium animate-pulse text-[var(--text-main)]">
      Loading...
    </span>
  </div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>

            {/* 🌐 Main Pages */}
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
            <Route path="/careers/:jobId" element={<PageTransition><JobDetail /></PageTransition>} />
            <Route path="/faqs" element={<PageTransition><Faq /></PageTransition>} />

            {/* 📝 Blogs */}
            <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
            <Route path="/blogs/:slug" element={<PageTransition><BlogDetails /></PageTransition>} />

            {/* 📞 Contact */}
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

            {/* 💼 Services */}
            <Route path="/services" element={<PageTransition><ServicesOverview /></PageTransition>} />
            <Route path="/services/websites" element={<PageTransition><Websites /></PageTransition>} />
            <Route path="/services/ecommerce" element={<PageTransition><Ecommerce /></PageTransition>} />
            <Route path="/services/applications" element={<PageTransition><Applications /></PageTransition>} />
            <Route path="/services/social-media" element={<PageTransition><SocialMedia /></PageTransition>} />
            <Route path="/services/seo" element={<PageTransition><SEO /></PageTransition>} />
            <Route path="/services/creative-video" element={<PageTransition><CreativeVideo /></PageTransition>} />
            <Route path="/services/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
            <Route path="/services/branding-design" element={<PageTransition><BrandingDesigning /></PageTransition>} />

            {/* ⚖️ Legal */}
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/refund-policy" element={<PageTransition><Refund /></PageTransition>} />

            {/* 🔐 Auth */}
            <Route path="/auth/admin" element={<AdminLogin />} />
            <Route path="/auth/employee" element={<EmployeeLogin />} />

            {/* ❌ 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;

