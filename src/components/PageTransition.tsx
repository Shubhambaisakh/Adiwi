import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition Component
 * Creates a premium curtain-wipe effect using AdwikIndia brand colors.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* 1. MAIN CONTENT AREA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {/* 2. PRIMARY CURTAIN LAYER (Navy) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-[9999] origin-bottom"
        style={{ backgroundColor: "var(--navy)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* 3. SECONDARY ACCENT LAYER (Teal) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-[10000] origin-bottom"
        style={{ backgroundColor: "var(--teal)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* 4. REVEAL LAYER (Brand Indigo to match exit) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-[9999] origin-top"
        style={{ backgroundColor: "var(--navy)" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
};

export default PageTransition;