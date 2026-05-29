import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";

const NotFound: React.FC = () => {
  // Set page title for SEO
  useEffect(() => {
    document.title = "404 - Engine Offline | Adwik India";
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 pt-48 py-20 font-sans overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      {/* Background decorative elements - Updated to Brand Orange/Coral */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-10 animate-pulse"
        style={{ backgroundColor: "var(--brand-orange)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px] opacity-10 animate-pulse animation-delay-2000"
        style={{ backgroundColor: "var(--brand-coral)" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Animated 404 Text */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-9xl md:text-[12rem] font-black mb-4 tracking-tighter leading-none"
          style={{ 
            color: "var(--brand-orange)",
            filter: "drop-shadow(0 20px 30px rgba(241, 90, 36, 0.15))" 
          }}
        >
          404
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-xl">
             <Ghost size={60} className="text-[var(--brand-coral)]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter"
          style={{ color: "var(--text-main)" }}
        >
          Engine <span className="text-[var(--brand-orange)] italic font-serif normal-case">Stalled.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl mb-12 max-w-lg mx-auto font-medium opacity-70 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          The digital path you're looking for doesn't exist or has been redirected to a higher performing route.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link to="/">
            <button
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl active:scale-95"
              style={{ backgroundColor: "var(--brand-orange)", color: "white" }}
            >
              <Home size={18} />
              Return to Base
            </button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 border-2 transition-all hover:scale-105 active:scale-95"
            style={{ 
              borderColor: "var(--brand-orange)", 
              color: "var(--text-main)",
              backgroundColor: "transparent"
            }}
          >
            <ArrowLeft size={18} />
            Reverse Route
          </button>
        </motion.div>

        {/* Support Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[var(--border-light)]"
        >
          <p className="text-sm font-bold uppercase tracking-widest opacity-50">
            Navigation Issues?{" "}
            <Link to="/contact" style={{ color: "var(--brand-orange)" }} className="underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
              Contact Tech Support
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;