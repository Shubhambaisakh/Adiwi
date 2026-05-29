import React from "react";
import { NavLink } from "react-router-dom";

/* =================================================
   CUSTOM HIGH-FIDELITY INLINE SVGS (NO REACT-ICONS)
   ================================================= */

const SparkleSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
  </svg>
);

const ZapSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ArrowUpRightSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-secondary)] to-[var(--bg-main)] transition-colors duration-500">
      
      {/* 🌟 LUXURIOUS LAYERED GLOWS */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[var(--brand-orange)]/15 via-[var(--brand-coral)]/10 to-transparent blur-[160px] rounded-full pointer-events-none opacity-40 animate-pulse-orange" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--brand-coral)]/15 via-[var(--brand-peach)]/10 to-transparent blur-[140px] rounded-full pointer-events-none opacity-30 animate-pulse-orange" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[var(--brand-peach)]/10 to-[var(--brand-orange)]/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      {/* Creative Floating Glass Rings */}
      <div className="absolute top-24 right-24 w-40 h-40 border-[3px] border-[var(--brand-orange)]/10 rounded-[2.5rem] rotate-12 animate-float pointer-events-none" />
      <div className="absolute bottom-40 left-24 w-32 h-32 border-[3px] border-[var(--brand-coral)]/10 rounded-full animate-float-delayed pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* 🏆 PREMIUM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-10">
          
          <div className="relative">
            {/* Elegant Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--brand-orange)]/15 to-[var(--brand-coral)]/15 border border-[var(--brand-orange)]/30 backdrop-blur-md shadow-md">
                <SparkleSVG className="text-[var(--brand-orange)] animate-pulse" size={18} />
                <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-coral)] bg-clip-text text-transparent">
                  Why Choose Us
                </span>
                <ZapSVG className="text-[var(--brand-coral)] animate-pulse" size={18} />
              </div>
            </div>

            {/* CRAZY PREMIUM TITLE */}
            <h2 className="text-[2.75rem] md:text-[5rem] font-black leading-[0.95] text-[var(--text-main)] mb-6 relative tracking-tighter">
              <span className="inline-block relative">
                Solutions Designed
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gradient-to-r from-[var(--brand-orange)]/40 to-transparent rounded-full"></span>
              </span>
              <br />
              <span className="inline-block mt-2 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-coral)] to-[var(--brand-peach)] bg-clip-text text-transparent italic font-serif animate-gradient">
                For Your Success
              </span>
            </h2>

            <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed font-medium">
              We don't just build digital products — we engineer <span className="px-3 py-1 mx-1 rounded-lg bg-[var(--brand-orange)]/15 text-[var(--brand-orange)] font-extrabold border border-[var(--brand-orange)]/25 inline-block shadow-sm hover:scale-105 transition-transform duration-300">growth machines</span> that scale your business to new heights! 🚀
            </p>
          </div>

          {/* ⚡ CRAZY PREMIUM CTA BUTTON */}
          <NavLink to="/contact">
            <button className="group relative px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(255,140,66,0.2)] hover:shadow-[0_25px_65px_-10px_rgba(255,127,80,0.5)] hover:scale-105 border border-[var(--brand-orange)]/30">
              {/* Dynamic Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-coral)] to-[var(--brand-peach)] animate-gradient bg-[length:200%_200%]"></div>
              
              {/* Refractive Light Overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <span className="relative z-10 flex items-center gap-4 text-white font-extrabold">
                Get In Touch
                <div className="p-2 rounded-xl bg-white/20 group-hover:rotate-45 group-hover:bg-white/35 transition-all duration-300 shadow-inner">
                  <ArrowUpRightSVG size={16} className="text-white" />
                </div>
              </span>
            </button>
          </NavLink>
        </div>

        {/* 🎨 DYNAMIC ASYMMETRIC GRID */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">

          {/* 👈 LEFT FEATURES */}
          <div className="space-y-12">
            <Feature
              icon="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              title="Expert Team"
              desc="10+ years experienced developers & marketers who know how to scale businesses fast!"
              gradient="from-[#FF8C42] to-[#FF7F50]"
              delay="0"
            />

            <Feature
              icon="https://cdn-icons-png.flaticon.com/512/3588/3588592.png"
              title="Complete Solutions"
              desc="We handle everything - from website design to marketing campaigns. One-stop shop!"
              gradient="from-[#FF7F50] to-[#FFB088]"
              delay="0.15"
            />
          </div>

          {/* 🎯 CENTER - ULTRA CREATIVE 3D CENTERPIECE */}
          <div className="relative flex justify-center py-10 lg:py-0">
            
            {/* Multiple Glowing Geometric Layers */}
            <div className="absolute w-[440px] h-[540px] rounded-[60px] top-[-20px] bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-coral)] opacity-20 blur-3xl animate-pulse" />
            <div className="absolute w-[420px] h-[520px] rounded-t-[50px] rounded-b-[40px] top-[-10px] bg-gradient-to-br from-[var(--brand-orange)]/10 to-[var(--brand-coral)]/10 border-2 border-[var(--brand-orange)]/25 shadow-2xl backdrop-blur-md" />

            {/* Rotating Outer Gradient Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border-[3px] border-dashed border-[var(--brand-orange)]/30 animate-spin-slow pointer-events-none" />

            {/* Showcase Image & Widgets */}
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-[45px] shadow-2xl border-4 border-white/60 dark:border-[var(--border-color)]/60">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                  alt="AdwikIndia Creative Team"
                  className="w-[380px] h-[460px] object-cover rounded-[40px] transition-all duration-[1000ms] group-hover:scale-110 filter brightness-[0.95]"
                />
                
                {/* Beautiful Layered Vignette */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-[var(--dark-base)]/80 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Edge Light Effect */}
                <div className="absolute inset-0 rounded-[40px] border-[3px] border-transparent bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-coral)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '3px' }} />
              </div>
              
              {/* ⭐ LUXURY "TOP RATED" BADGE (Creative Micro-Animation) */}
              <div className="absolute -top-8 -right-6 group/badge z-20">
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-coral)] blur-xl opacity-60 animate-pulse rounded-2xl scale-125"></div>
                
                {/* Main Glass Badge */}
                <div className="relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF8C42] via-[#FF7F50] to-[#FFB088] shadow-2xl border border-white/40 transform group-hover/badge:scale-110 group-hover/badge:rotate-6 transition-all duration-500 animate-bounce-slow">
                  {/* Internal Shimmer */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Badge Content */}
                  <div className="relative flex items-center gap-3">
                    <span className="text-2xl animate-spin-slow">⭐</span>
                    <div className="text-left">
                      <div className="text-white font-black text-sm leading-none tracking-wider">TOP RATED</div>
                      <div className="text-white/90 font-extrabold text-[10px] tracking-widest mt-1">AGENCY</div>
                    </div>
                  </div>
                  
                  {/* Pure CSS sparkles */}
                  <span className="absolute -top-2 -left-2 text-lg animate-ping">✨</span>
                  <span className="absolute -bottom-2 -right-2 text-lg animate-ping" style={{ animationDelay: '0.6s' }}>✨</span>
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="absolute -bottom-6 -left-6 px-6 py-4.5 rounded-2xl bg-gradient-to-br from-[#27AE60] to-[#219150] text-white shadow-[0_15px_35px_rgba(39,174,96,0.35)] border border-white/20 animate-float">
                <div className="text-3xl font-black tracking-tight">250+</div>
                <div className="text-[10px] uppercase tracking-wider font-extrabold text-white/80 mt-1">Projects Done</div>
              </div>

              <div className="absolute -bottom-6 -right-6 px-6 py-4.5 rounded-2xl bg-gradient-to-br from-[#2F80ED] to-[#2D9CDB] text-white shadow-[0_15px_35px_rgba(47,128,237,0.35)] border border-white/20 animate-float-delayed">
                <div className="text-3xl font-black tracking-tight">98%</div>
                <div className="text-[10px] uppercase tracking-wider font-extrabold text-white/80 mt-1">Success Rate</div>
              </div>
            </div>

            {/* 🌌 DYNAMIC ORANGE DOT MATRIX BACKGROUND */}
            <div className="absolute bottom-[-75px] grid grid-cols-10 gap-2.5 z-0 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2.5 h-2.5 rounded-full opacity-35 hover:opacity-100 transition-opacity duration-300 shadow-md" 
                  style={{ 
                    background: i % 4 === 0 ? 'linear-gradient(135deg, var(--brand-orange), var(--brand-coral))' : 
                               i % 4 === 1 ? 'linear-gradient(135deg, var(--brand-coral), var(--brand-peach))' : 
                               i % 4 === 2 ? 'linear-gradient(135deg, var(--brand-peach), #FFF5EE)' :
                               'linear-gradient(135deg, var(--brand-orange), var(--brand-peach))',
                    animation: `pulse-orange ${3 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.08}s`
                  }} 
                />
              ))}
            </div>
          </div>

          {/* 👉 RIGHT FEATURES */}
          <div className="space-y-12">
            <Feature
              icon="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
              title="Best Prices"
              desc="Affordable packages that fit your budget. No hidden costs, 100% transparent pricing!"
              gradient="from-[#FF8C42] to-[#FFB088]"
              delay="0.3"
            />

            <Feature
              icon="https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
              title="24/7 Support"
              desc="Always available to help you! Quick response time, dedicated support team ready!"
              gradient="from-[#FF7F50] to-[#FF8C42]"
              delay="0.45"
            />
          </div>

        </div>
      </div>

      {/* 🚀 LIGHTWEIGHT CUSTOM KEYFRAME STYLES */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        .animate-pulse-orange {
          animation: pulse-orange 4s ease-in-out infinite;
        }
        @keyframes pulse-orange {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

/* =================================================
   👑 PREMIUM INDIVIDUAL FEATURE CARD COMPONENT
   ================================================= */

interface FeatureProps {
  icon: string;
  title: string;
  desc: string;
  gradient: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, desc, gradient, delay }) => {
  return (
    <div 
      className="group relative" 
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    >
      {/* Behind Glow Layer */}
      <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl pointer-events-none`}></div>
      
      {/* Primary Card */}
      <div className="relative bg-white/[0.04] dark:bg-white/[0.02] backdrop-blur-lg rounded-3xl p-8 border border-white/10 dark:border-white/5 group-hover:border-[var(--brand-orange)]/35 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,140,66,0.08)] overflow-hidden">
        
        {/* Colorful Icon Wrapper */}
        <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md overflow-hidden bg-white/10 dark:bg-white/5 border border-white/10">
          {/* Subtle Back Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Icon Image */}
          <img 
            src={icon} 
            alt={title}
            className="relative z-10 w-full h-full object-contain filter drop-shadow-lg"
          />
          
          {/* Inner Glare */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Card Title */}
        <h4 className="text-2xl font-black mb-3 text-[var(--text-main)] group-hover:text-[var(--brand-orange)] transition-colors duration-300 tracking-tight">
          {title}
        </h4>

        {/* Card Description */}
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium">
          {desc}
        </p>

        {/* Hover-Loading Progress Bar */}
        <div className="relative mt-6 h-1.5 w-full bg-white/10 dark:bg-white/5 rounded-full overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 rounded-full`} />
        </div>

        {/* Pop-up Verified Emblem */}
        <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-sm shadow-lg opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-12 transition-all duration-500 border border-white/20`}>
          ✓
        </div>

        {/* Corner Decal */}
        <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-tl-3xl rounded-br-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;