import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Corrected & cleaned imports
import Dularo from "../../assets/images/projects/Dularo.png";
import AdvickEnterprises from "../../assets/images/projects/Advick-Enterprises.png";
import AGTech from "../../assets/images/projects/Agtech.png";
import ChitranshAgency from "../../assets/images/projects/Chitransh-Agency.png";
import ChillComfort from "../../assets/images/projects/Chill-comfort.png";
import ProcuraSolar from "../../assets/images/projects/Procura-Solar.png";
import ShubhSun from "../../assets/images/projects/ShubhXSunSolar.png";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

/* ================= CUSTOM INLINE SVGS (NO REACT-ICONS) ================= */

const AsteriskSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 18 }) => (
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
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="12" y1="12" x2="2" y2="12" />
    <line x1="12" y1="12" x2="22" y2="12" />
    <line x1="19" y1="5" x2="5" y2="19" />
    <line x1="19" y1="19" x2="5" y2="5" />
  </svg>
);

const ArrowUpRightSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ================= TYPES ================= */
interface WorkItem {
  id: string;
  title: string;
  category: "BRANDING" | "WEB" | "PERFORMANCE";
  image: string;
  link: string;
  description: string;
  result: string;
  color: string;
}

/* ================= DATA ================= */
const works: WorkItem[] = [
  {
    id: "01",
    title: "Authorized Dealer",
    category: "WEB",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    link: "#",
    description: "Premium power solutions and industrial backup systems.",
    result: "+38% Leads",
    color: "from-[#FF8C42] to-[#FF7F50]"
  },
  {
    id: "02",
    title: "Dularo Group",
    category: "BRANDING",
    image: Dularo,
    link: "https://dularo.in/",
    description: "Advanced water treatment and industrial purification solutions.",
    result: "Global Identity",
    color: "from-[#FF7F50] to-[#FFB088]"
  },
  {
    id: "03",
    title: "AG Tech Services",
    category: "PERFORMANCE",
    image: AGTech,
    link: "https://bhopalagtech.com/",
    description: "Air conditioner sales, installation, and repair systems.",
    result: "5k+ Bookings",
    color: "from-[#FF8C42] to-[#FFB088]"
  },
  {
    id: "04",
    title: "Shubh X Sun Solar",
    category: "WEB",
    image: ShubhSun,
    link: "https://shubhxsunsolar.com/",
    description: "Trusted partner in sustainable energy solutions.",
    result: "ROI Driven",
    color: "from-[#FF8C42] to-[#FF7F50]"
  },
  {
    id: "05",
    title: "Procura Solar",
    category: "BRANDING",
    image: ProcuraSolar,
    link: "https://procurasolar.com/",
    description: "Pioneering Solar Excellence with Innovation and Trust.",
    result: "B2B Authority",
    color: "from-[#FF7F50] to-[#FFB088]"
  },
  {
    id: "06",
    title: "Chill Comfort Pvt. Ltd.",
    category: "PERFORMANCE",
    image: ChillComfort,
    link: "https://chillcomfortpvtltd.com/",
    description: "Reliable, energy-efficient cooling solutions for all spaces.",
    result: "Energy Optimized",
    color: "from-[#FF8C42] to-[#FFB088]"
  },
  {
    id: "07",
    title: "Chitransh Agency",
    category: "WEB",
    image: ChitranshAgency,
    link: "https://chitranshagency.in/",
    description: "Trusted Water Solutions for Over 30 Years.",
    result: "Legacy Growth",
    color: "from-[#FF8C42] to-[#FF7F50]"
  },
  {
    id: "08",
    title: "Advick Enterprises",
    category: "BRANDING",
    image: AdvickEnterprises,
    link: "http://advickenterprises.co.in/",
    description: "Superior performance industrial products and accuracy.",
    result: "High Accuracy",
    color: "from-[#FF7F50] to-[#FFB088]"
  }
];

/* ================= MAIN COMPONENT ================= */
const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const filtered = filter === "ALL" ? works : works.filter((w) => w.category === filter);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-reveal", {
        y: 45,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden bg-[var(--bg-main)] transition-colors duration-500">
      
      {/* 🌌 CREATIVE BACKGROUND GLOW */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[170px] rounded-full pointer-events-none opacity-25 bg-gradient-to-br from-[var(--brand-orange)]/60 to-[var(--brand-coral)]/30 animate-pulse-slow"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* 🏆 PREMIUM HEADER */}
        <div className="text-center mb-16 portfolio-reveal">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-sm">
              <AsteriskSVG size={18} className="animate-spin-slow text-[var(--brand-orange)]" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.45em] font-extrabold bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-coral)] bg-clip-text text-transparent">
              Case Studies
            </span>
          </div>
          
          <h2 className="text-[2.75rem] md:text-[4.5rem] font-black leading-[0.95] text-[var(--text-main)] tracking-tighter">
            Our Success Projects <br />
            <span className="inline-block mt-3 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-coral)] to-[var(--brand-peach)] bg-clip-text text-transparent italic font-serif font-medium animate-gradient bg-[length:200%_200%]">
              That Inspire
            </span>
          </h2>
        </div>

        {/* 🎛️ FILTERS DOCK (Unique Liquid Sliding White Filter) */}
        <div className="flex justify-center mb-16 portfolio-reveal">
          <div className="relative flex flex-wrap justify-center gap-2.5 p-2.5 rounded-[22px] bg-[var(--bg-secondary)] border border-[var(--brand-orange)]/15 shadow-inner backdrop-blur-md max-w-fit">
            {["ALL", "BRANDING", "WEB", "PERFORMANCE"].map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className="relative px-8 py-3.5 rounded-2xl text-[10.5px] font-black uppercase tracking-[0.25em] transition-colors duration-500 cursor-pointer select-none group"
                  style={{
                    color: isActive ? "var(--brand-orange)" : "var(--text-secondary)",
                    zIndex: 1,
                  }}
                >
                  {/* Dynamic morphing sliding active tab */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_10px_25px_rgba(255,140,66,0.22)] border border-[var(--brand-orange)]/15"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.05] inline-block font-extrabold">
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 🎠 CREATIVE PROJECT CARDS SLIDER */}
        <div className="portfolio-reveal pt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={35}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {filtered.map((item) => (
              <SwiperSlide key={item.id} className="pb-10 pt-6">
                <Link to={item.link}>
                  <ProjectCard item={item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Paginate Indicators */}
          <div className="custom-pagination flex justify-center gap-3.5 mt-12" />
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .custom-pagination .swiper-pagination-bullet {
          background: var(--brand-peach);
          opacity: 0.35;
          width: 25px;
          height: 5px;
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: var(--brand-orange);
          opacity: 1;
          width: 55px;
          box-shadow: 0 0 12px var(--brand-orange);
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1) translate(-50%, 0); }
          50% { opacity: 0.3; transform: scale(1.08) translate(-50%, -10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

/* ================= CARD COMPONENT (Dynamic 3D Tilting & Refraction) ================= */

const ProjectCard: React.FC<{ item: WorkItem }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Removed 3D tilt to fix lag - simple hover only
  const handleMove = (e: React.MouseEvent) => {
    // Disabled for performance
  };

  const reset = () => {
    // Disabled for performance
  };

  return (
    <div className="perspective-1000 h-full" onMouseMove={handleMove} onMouseLeave={reset}>
      <motion.div
        ref={cardRef}
        className="group relative rounded-[2.5rem] p-8 flex flex-col h-full min-h-[560px] border-2 transition-all duration-500 shadow-xl bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0d0d0d] border-[#FFE5D9] dark:border-[#333] hover:border-[var(--brand-orange)] dark:hover:border-[var(--brand-orange)]/60 backdrop-blur-lg hover:shadow-[0_20px_60px_-10px_rgba(255,140,66,0.25)] dark:hover:shadow-[0_25px_60px_-10px_rgba(255,140,66,0.3)] hover:-translate-y-1 overflow-visible"
      >
        {/* Dynamic Glow Layer */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none rounded-[2.5rem]`}></div>

        {/* FLOATING RESULT BADGE - Top Right Corner */}
        <motion.div 
          whileHover={{ scale: 1.08, y: -3 }}
          className="absolute -top-3 -right-3 bg-[var(--brand-orange)] text-white text-[11px] font-black px-5 py-2.5 rounded-2xl shadow-[0_10px_35px_rgba(255,107,53,0.4)] whitespace-nowrap border-2 border-white z-10"
        >
          {item.result}
        </motion.div>

        {/* CARD TOP INFO */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] font-black text-[var(--brand-orange)] bg-[var(--brand-orange)]/10 px-4 py-2 rounded-xl">
              {item.category}
            </span>
          </div>
          
          <h3 className="text-[1.75rem] font-black leading-[1.15] text-[#1a1a1a] dark:text-[#FFF5E6] mb-4 group-hover:text-[var(--brand-orange)] transition-colors duration-300 tracking-tight min-h-[60px] mt-2">
            {item.title}
          </h3>
          <p className="text-[15px] font-semibold opacity-85 dark:opacity-90 line-clamp-2 leading-relaxed text-[#4a4a4a] dark:text-[#D4C4B0] min-h-[44px]">
            {item.description}
          </p>
        </div>

        {/* CARD IMAGE - Premium Showcase */}
        <div 
          className="relative rounded-[1.5rem] overflow-hidden h-[280px] mt-auto shadow-xl border-2 border-[var(--border-light)] group-hover:border-[var(--brand-orange)]/30 transition-all duration-500" 
        >
          {/* Main Showcase Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay - Subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/0 via-[var(--brand-coral)]/0 to-transparent group-hover:from-[var(--brand-orange)]/20 group-hover:via-[var(--brand-coral)]/10 transition-all duration-700" />
          
          {/* View Button - Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="relative">
              {/* Pulse Ring */}
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-[var(--brand-orange)] animate-ping opacity-20" />
              {/* Main Button */}
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl bg-[var(--brand-orange)] border-2 border-white transform transition-all duration-500 hover:scale-110 hover:rotate-90">
                <ArrowUpRightSVG size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Year Badge - Bottom Left */}
          <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/10 dark:bg-white/20 backdrop-blur-md border border-white/20 dark:border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <span className="text-white font-black text-sm drop-shadow-lg">2024</span>
          </div>

          {/* Sparkle - Top Right */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
            <span className="text-3xl drop-shadow-lg animate-pulse">✨</span>
          </div>
        </div>

        {/* Card Progress Decor */}
        <div className="relative mt-6 h-1 w-full bg-[var(--border-light)] rounded-full overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[800ms] rounded-full`} />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
