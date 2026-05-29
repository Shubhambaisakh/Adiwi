import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";

const slides = [
  {
    tag: "OUR EXPERTISE",
    title: "GROW FAST",
    desc1: "India’s trusted digital marketing agency – Adwik India powers explosive growth through targeted social media marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "#001f3f" // Explicit hex for smoother interpolation
  },
  {
    tag: "OUR VISION",
    title: "RANK #1",
    desc1: "As the best SEO agency in India, Adwik India delivers E-E-A-T compliant strategies and AEO-optimized content.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    color: "#008080"
  },
  {
    tag: "OUR PROMISE",
    title: "SCALE NOW",
    desc1: "Adwik India – your growth partner for SMEs and enterprises with proven 200%+ traffic growth strategies.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    color: "#0b3d2e"
  },
];

export default function UltraCinematicHero() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [progress, setProgress] = useState(0);
  const total = slides.length;

  // 1. Memoized Variants
  const slideVariants = useMemo(() => ({
    enter: (dir: number) => ({
      x: dir > 0 ? "15%" : "-15%",
      opacity: 0,
      filter: "blur(12px)",
      scale: 1.1
    }),
    center: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-15%" : "15%",
      opacity: 0,
      filter: "blur(12px)",
      scale: 0.9
    })
  }), []);

  const paginate = useCallback((dir: number) => {
    setIndex(([prev]) => [(prev + dir + total) % total, dir]);
    setProgress(0);
  }, [total]);

  // 2. Preload Next Images for instant switching
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 3. Optimized Timer Logic
  useEffect(() => {
    const autoPlay = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 0.5; // Adjusted for smoothness
      });
    }, 50);
    return () => clearInterval(autoPlay);
  }, [paginate, index]);

  // 4. Parallax Optimization
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 50, damping: 20 });
  const springY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  }, [mouseX, mouseY]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden font-sans select-none"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Background Morphing - Uses will-change for GPU acceleration */}
      <motion.div
        animate={{ backgroundColor: slides[index].color }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute inset-0 opacity-60 will-change-colors"
      />

      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center px-6 lg:px-24">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="grid lg:grid-cols-2 gap-12 items-center w-full"
          >
            {/* LEFT CONTENT */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="h-[1px] w-12 bg-white/40" />
                <span className="uppercase tracking-[6px] text-[10px] font-bold text-white/90">
                  {slides[index].tag}
                </span>
              </motion.div>

              <motion.h1 className="text-6xl lg:text-[100px] font-black leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
                {slides[index].title}
              </motion.h1>

              <motion.p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-white/70 border-l-2 border-white/20 pl-6">
                {slides[index].desc1}
              </motion.p>

              <NavLink to="/services/digital-marketing/">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "white", color: "#001f3f" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-[11px] tracking-[2px] flex items-center gap-4 transition-colors group"
                >
                  EXPLORE OUR SERVICES
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </NavLink>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
              className="perspective-1000 hidden lg:block will-change-transform"
            >
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative group"
              >
                <img
                  src={slides[index].image}
                  alt={slides[index].title}
                  className="rounded-[40px] shadow-2xl border border-white/5 object-cover h-[550px] w-full transform-gpu"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* UI Controls */}
      <div className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-end z-20">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex([i, i > index ? 1 : -1]); setProgress(0); }}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-10 bg-white" : "w-3 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-col items-end gap-3">
          <span className="text-[10px] font-bold tracking-widest text-white/50">0{index + 1} / 0{total}</span>
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white origin-left"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform: translateZ(0); }
      `}</style>
    </section>
  );
}