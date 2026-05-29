import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/images/process-img.png";

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

const ArrowRightSVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 18 }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckCircle2SVG: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Deep Market Intelligence",
      desc: "We audit your brand, competitors, and customer psychology to uncover untapped revenue opportunities."
    },
    {
      num: "02",
      title: "Growth Architecture",
      desc: "We design a performance blueprint aligned with measurable KPIs and scalable digital infrastructure."
    },
    {
      num: "03",
      title: "Performance Execution",
      desc: "From SEO to paid media, we deploy data-driven campaigns engineered for conversions."
    },
    {
      num: "04",
      title: "Optimization & Scale",
      desc: "Continuous CRO, analytics refinement, and strategic scaling to maximize ROI."
    },
  ];

  /* 🔗 SMOOTH SCROLL LOADING LINE LOGIC */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"] // Grows from start of steps to end of steps as they cross center of viewport
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Milestones to light up steps dynamically as scroll progress hits targets
      if (latest >= 0.9) {
        setActiveIndex(3);
      } else if (latest >= 0.6) {
        setActiveIndex(2);
      } else if (latest >= 0.3) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    });
  }, [scrollYProgress]);

  /* GSAP ENTRANCE ANIMATIONS */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      tl.from(".process-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      tl.from(".process-step", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* 3D TILT EFFECT */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageContainerRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      x: x * 20,
      y: y * 20,
      scale: 1.05,
      duration: 0.6
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageContainerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1,0.4)"
    });

    gsap.to(imgRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 lg:px-24 overflow-hidden relative bg-[var(--bg-main)] transition-colors duration-500"
    >
      
      {/* 🌌 DYNAMIC SHIELD GLOWS */}
      <div className="absolute top-20 left-10 w-96 h-96 blur-[130px] rounded-full opacity-[0.18] bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-coral)] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 blur-[110px] rounded-full opacity-[0.15] bg-gradient-to-tr from-[var(--brand-coral)] to-[var(--brand-peach)] pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-24 process-header">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--brand-orange)]/15 shadow-sm">
            <AsteriskSVG size={18} className="animate-spin-slow text-[var(--brand-orange)]" />
          </div>
          
          <span className="text-[11px] uppercase tracking-[0.45em] font-extrabold bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-coral)] bg-clip-text text-transparent">
            Our Growth Framework
          </span>
        </div>

        <h2 className="text-[2.75rem] md:text-[4.5rem] font-black leading-[0.95] text-[var(--text-main)] tracking-tighter">
          A Strategic System Built <br />
          <span className="inline-block mt-3 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-coral)] to-[var(--brand-peach)] bg-clip-text text-transparent italic font-serif font-medium animate-gradient bg-[length:200%_200%]">
            For Predictable Growth
          </span>
        </h2>

        <p className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-[var(--text-secondary)] font-medium">
          At Adwik India, we don’t rely on guesswork. Our 4-phase engine
          is engineered to deliver measurable performance.
        </p>
      </div>

      {/* DOCK CONTAINER */}
      <div ref={containerRef} className="grid lg:grid-cols-12 gap-20 relative z-10">

        {/* 👇 TIMELINE PIPELINE */}
        <div className="lg:col-span-7 relative">

          {/* Static Background Line */}
          <div
            className="absolute left-[31px] top-8 bottom-8 w-[3px] hidden md:block opacity-10 rounded-full bg-[var(--text-main)]"
          />

          {/* Dynamic Scroll-Linked Active progress bar */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[31px] top-8 w-[3px] hidden md:block bg-gradient-to-b from-[var(--brand-orange)] to-[var(--brand-coral)] rounded-full origin-top shadow-[0_0_12px_rgba(255,140,66,0.5)]"
          />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isActive = idx <= activeIndex;
              return (
                <div key={idx} className="process-step group flex gap-8">

                  {/* 🌟 REACTIVE CIRCLE BADGE */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-500 shadow-xl select-none ${
                      isActive
                        ? "bg-gradient-to-br from-[#FF8C42] to-[#FF7F50] border-transparent text-white scale-110 shadow-[0_0_20px_rgba(255,140,66,0.4)]"
                        : "bg-[var(--bg-main)] border-white/20 text-[var(--text-secondary)] scale-100 shadow-none dark:border-white/10"
                    }`}
                  >
                    <span className="font-black text-xl transition-transform group-hover:scale-110">
                      {step.num}
                    </span>
                  </div>

                  {/* 📝 REACTIVE TEXT */}
                  <div className="pt-2">
                    <h4
                      className={`text-2xl font-black mb-3 flex items-center gap-3 transition-colors duration-500 ${
                        isActive ? "text-[var(--brand-orange)]" : "text-[var(--text-main)]"
                      }`}
                    >
                      {step.title}

                      <ArrowRightSVG
                        size={18}
                        className={`opacity-0 -translate-x-4 transition-all duration-500 ${
                          isActive ? "opacity-100 translate-x-0 text-[var(--brand-orange)]" : ""
                        }`}
                      />
                    </h4>

                    <p className="leading-relaxed text-lg max-w-md text-[var(--text-secondary)] font-medium">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* 🎨 CENTERPIECE SHOWCASE IMAGE */}
        <div className="lg:col-span-5 relative flex items-center justify-center">

          <div
            className="perspective-[1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={imageContainerRef}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glass Frame Border (No Clipping translateZ) */}
              <div
                className="rounded-[4rem] rounded-br-none overflow-hidden border-[12px] shadow-2xl bg-white/5 dark:bg-white/[0.02]"
                style={{ borderColor: "var(--border-light)" }}
              >
                <img
                  ref={imgRef}
                  src={img}
                  alt="Adwik Growth Process Framework"
                  className="w-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-[800ms]"
                />
              </div>

              {/* 🏆 FLOATING GLASS WIDGET */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--brand-orange)"
                }}
                className="absolute -right-8 -bottom-8 p-10 rounded-[3rem] rounded-tr-none shadow-2xl border-2 z-20"
              >
                <div className="flex flex-col items-center">
                  <CheckCircle2SVG
                    className="mb-4 text-[var(--brand-orange)] animate-pulse"
                    size={32}
                  />

                  <span className="text-5xl font-black text-[var(--brand-orange)]">
                    98%
                  </span>

                  <span className="text-[10px] uppercase tracking-widest font-extrabold mt-2 text-[var(--text-secondary)]">
                    Client Retention
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

export default Process;