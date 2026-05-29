import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Shubhxsolar from "../../assets/images/Clients/shubhxsolar.png";
import Dularo from "../../assets/images/Clients/dularo.jpeg";
import AGTech from "../../assets/images/Clients/agtech.png";
import ChillComfort from "../../assets/images/Clients/chill-comfort.png";
import Procura from "../../assets/images/Clients/procura.png";
import Shrigurutraders from "../../assets/images/Clients/shrigurutraders.jpeg";

gsap.registerPlugin(ScrollTrigger);

type ClientLogo = {
  name: string;
  src: string;
};

const logos: ClientLogo[] = [
  { name: "Shubhxsolar", src: Shubhxsolar },
  { name: "Dularo", src: Dularo },
  { name: "AGTech", src: AGTech },
  { name: "Chill Comfort", src: ChillComfort },
  { name: "Procura", src: Procura },
  { name: "Shrigurutraders", src: Shrigurutraders },
];

const Clients: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clients-header", {
        y: 60,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".logo-card", {
        y: 40,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".logo-track",
          start: "top 90%",
        },
      });

      gsap.to(".floating-glow", {
        y: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* SOFT BRAND GLOW */}
      <div className="floating-glow absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-20" 
           style={{ backgroundColor: "var(--teal)" }} />

      <div className="w-full px-6 lg:px-20 relative z-10">

        {/* HEADER */}
        <div className="clients-header flex flex-col lg:flex-row justify-between items-center mb-16 gap-10">

          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border"
                 style={{ 
                   backgroundColor: "var(--bg-secondary)", 
                   borderColor: "color-mix(in srgb, var(--teal) 20%, transparent)", 
                   color: "var(--teal)" 
                 }}>
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Global Network
              </span>
            </div>

            <h2 className="mt-8 text-[2rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight"
                style={{ color: "var(--text-main)" }}>
              Trusted by{" "}
              <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
                6,000+ Brands
              </span>
              <br />
              Leading the Digital Revolution
            </h2>
          </div>

          {/* STAT BADGE */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-5 px-10 py-6 rounded-[2.5rem] border shadow-2xl transition-colors"
            style={{ 
              backgroundColor: "var(--card-bg)", 
              borderColor: "var(--border-light)" 
            }}
          >
            <div className="p-4 rounded-2xl text-white" style={{ backgroundColor: "var(--navy)" }}>
              <Globe size={26} className="animate-spin-slow" />
            </div>
            <div>
              <span className="block font-black text-4xl leading-none tracking-tight" style={{ color: "var(--text-main)" }}>
                6K<span style={{ color: "var(--teal)" }}>+</span>
              </span>
              <span className="font-bold uppercase tracking-[0.2em] text-[10px] opacity-60" style={{ color: "var(--text-main)" }}>
                Global Partners
              </span>
            </div>
          </motion.div>
        </div>

        {/* MARQUEE */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="logo-track flex gap-10"
            animate={{
              x: paused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 35, // Slower for a more premium feel
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="logo-card min-w-[200px] lg:min-w-[260px] h-[120px] mb-16 rounded-[2rem] border flex items-center justify-center transition-all duration-500 hover:shadow-2xl"
                style={{ 
                  backgroundColor: "var(--card-bg)", 
                  borderColor: "var(--border-light)" 
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 lg:h-12 w-auto grayscale-100  transition-all duration-700 hover:scale-110 invert-theme"
                />
              </div>
            ))}
          </motion.div>

          {/* EDGE FADES - Dynamic based on theme */}
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10" 
               style={{ background: "linear-gradient(to right, var(--bg-main), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10" 
               style={{ background: "linear-gradient(to left, var(--bg-main), transparent)" }} />
        </div>

      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        /* Invert logos slightly in dark mode if they are too dark */
        [data-theme='dark'] .invert-theme {
          filter: grayscale(1) invert(1) brightness(2);
        }
        [data-theme='dark'] .invert-theme:hover {
          filter: grayscale(0) invert(0) brightness(1);
        }
      `}</style>
    </section>
  );
};

export default Clients;