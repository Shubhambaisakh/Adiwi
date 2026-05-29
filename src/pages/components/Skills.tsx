import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Check, Asterisk } from "lucide-react";
import { NavLink } from "react-router-dom";

/* ---------------- TYPES ---------------- */

interface SkillBarProps {
  title: string;
  value: number;
}

/* ---------------- MAIN COMPONENT ---------------- */

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  /* Project Counter Animation */
  useEffect(() => {
    if (!isInView || !counterRef.current) return;

    gsap.from(counterRef.current, {
      textContent: 0,
      duration: 2.2,
      ease: "power4.out",
      snap: { textContent: 1 },
    });
  }, [isInView]);

  /* Magnetic Button Effect */
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const move = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
      gsap.to(btn, { x, y, duration: 0.25, ease: "power3.out" });
    };

    const reset = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[var(--bg-main)]"
    >
      {/* Background Glow - Theme Responsive */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-10"
        style={{ backgroundColor: "var(--teal)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE IMAGE & BADGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div 
            className="rounded-[40px] overflow-hidden shadow-[var(--shadow-lg)] border-8 bg-[var(--card-bg)] border-[var(--border-color)] group"
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200"
              className="w-full h-[450px] md:h-[550px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              alt="AdwikIndia Agency"
            />
          </div>

          {/* Floating Glass Badge - Fully Theme-Aware */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-8 -left-6 md:-left-10 backdrop-blur-2xl border shadow-[var(--shadow-lg)] px-8 py-6 rounded-[28px] flex items-center gap-4 bg-[var(--card-bg)] border-[var(--border-color)]"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-[var(--shadow-sm)]"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <Check size={20} style={{ color: "var(--teal)" }} />
            </div>
            <div>
              <p className="font-black text-2xl text-[var(--text-main)]">
                <span ref={counterRef}>6398</span>+
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">
                Successful Projects
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
            <span className="uppercase text-xs font-black tracking-[0.3em] text-[var(--text-main)]">
              Expertise & Mastery
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.05] text-[var(--text-main)]">
            High-performance systems
            <br />
            <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
              engineered for scale
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed max-w-xl text-[var(--text-secondary)]">
            AdwikIndia builds scalable digital ecosystems combining
            strategy, performance marketing, and advanced development.
          </p>

          <div className="mt-10 space-y-10">
            <SkillBar title="Performance Marketing" value={91} />
            <SkillBar title="Web Development" value={94} />
            <SkillBar title="Brand Strategy" value={87} />
          </div>

          <div className="mt-14">
             <NavLink  to="/portfolio">
                
            <button
              ref={buttonRef}
              className="group relative flex items-center gap-6 text-white px-12 py-6 rounded-full font-black uppercase text-sm shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] transition-all bg-[var(--teal)]"
            >
              Discover Our Capabilities
              <span 
                className="w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-[var(--shadow-sm)]"
                style={{ backgroundColor: "var(--navy)", color: "white" }}
              >
                <ArrowUpRight size={20} style={{ color: "var(--teal)" }} />
              </span>
            </button>
              </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- SKILL BAR ---------------- */

const SkillBar: React.FC<SkillBarProps> = ({ title, value }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-3">
        <p className="font-bold text-[var(--text-main)]">{title}</p>
        <AnimatedNumber value={value} />
      </div>

      <div 
        className="relative h-3 rounded-full overflow-hidden bg-[var(--border-color)]"
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="relative h-full rounded-full"
          style={{ backgroundColor: "var(--teal)" }}
        >
          {/* Shimmer Effect - Works in both themes */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={inView ? { x: "200%" } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Glow Edge Marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="absolute top-0 h-full w-4 blur-md opacity-40"
          style={{ right: `${100 - value}%`, backgroundColor: "var(--teal)" }}
        />
      </div>
    </div>
  );
};

/* ---------------- ANIMATED NUMBER ---------------- */

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;

    gsap.from(ref.current, {
      textContent: 0,
      duration: 1.5,
      snap: { textContent: 1 },
      ease: "power2.out"
    });
  }, [inView]);

  return (
    <span ref={ref} className="font-black text-[var(--teal)]">
      {value}%
    </span>
  );
};

export default Skills;