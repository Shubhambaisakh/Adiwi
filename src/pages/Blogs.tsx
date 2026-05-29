import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, User, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BLOGS = [
  {
    id: 1,
    title: "How Digital Marketing Helps Local Businesses",
    excerpt: "Strategic digital marketing can transform local visibility and foot traffic.",
    author: "Adwik",
    date: "Jan 12, 2026",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800"
  },
  {
    id: 2,
    title: "SEO vs Paid Ads – Finding the ROI Balance",
    excerpt: "Choosing between organic reach and paid visibility for long-term growth.",
    author: "Marketing",
    date: "Jan 20, 2026",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800"
  },
  {
    id: 3,
    title: "Branding Mistakes That Kill Trust",
    excerpt: "Common pitfalls that damage your business reputation silently.",
    author: "Creative",
    date: "Feb 02, 2026",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
  },
  {
    id: 4,
    title: "The Future of AI in Content Creation",
    excerpt: "How generative AI is redefining the workflow of digital agencies.",
    author: "Tech Team",
    date: "Feb 10, 2026",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
  },
  {
    id: 5,
    title: "MERN Stack for Scalable E-commerce",
    excerpt: "Why the MERN stack is the go-to choice for high-traffic stores.",
    author: "Dev Team",
    date: "Feb 15, 2026",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
  },
  {
    id: 6,
    title: "Mastering UI/UX for Lead Conversion",
    excerpt: "Design principles that guide users toward the 'Contact' button.",
    author: "UI Expert",
    date: "Feb 22, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800"
  }
];

const Blogs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const particlesRef = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || loading) return;

    const ctx = gsap.context(() => {
      gsap.from(".reveal-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%"
        }
      });

      particlesRef.current.forEach((p) => {
        gsap.to(p, {
          x: "random(-200,200)",
          y: "random(-200,200)",
          duration: "random(10,20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const resetTilt = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--bg-main)] px-6 lg:px-20 py-32 overflow-hidden"
    >
      {/* FLOATING PARTICLES - Updated to Brand Orange */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-2 h-2 bg-[var(--brand-orange)] opacity-20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* GRADIENT BLOBS - Updated to Orange/Coral */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--brand-orange)] opacity-[0.08] blur-[120px] rounded-full -top-40 -left-40 animate-blob" />
      <div className="absolute w-[500px] h-[500px] bg-[var(--brand-coral)] opacity-[0.08] blur-[120px] rounded-full bottom-[-200px] right-[-100px] animate-blob animation-delay-2000" />

      {/* HEADER */}
      <div className="max-w-5xl mx-auto py-20 text-center relative z-10">
        <div className="reveal-header inline-flex items-center gap-2 mb-6 px-5 py-2 bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 rounded-full">
          <Sparkles size={16} className="text-[var(--brand-orange)]" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--brand-coral)]">
            Adwik Insights
          </span>
        </div>

        <h2 className="reveal-header text-5xl md:text-8xl font-black mb-8 text-[var(--text-main)] leading-none tracking-tighter uppercase">
          Stories Behind <span className="text-[var(--brand-orange)] italic font-serif normal-case">Success</span>
        </h2>

        <p className="reveal-header text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
          Exploring the intersection of performance engineering and human-centric marketing at the core of the growth engine.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        <AnimatePresence>
          {(loading ? Array.from({ length: 6 }) : BLOGS).map((blog, i) => (
            <motion.div
              key={loading ? `skeleton-${i}` : blog.id}
              ref={(el) => (cardRefs.current[i] = el)}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => resetTilt(i)}
              className="group transform-gpu bg-[var(--bg-secondary)] rounded-[3rem]
              border border-[var(--border-light)] hover:border-[var(--brand-orange)]/30
              shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)]
              transition-all duration-500 overflow-hidden"
              style={{ perspective: "1500px" }}
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-[var(--bg-tertiary)]">
                {loading ? (
                  <div className="w-full h-full animate-pulse bg-[var(--brand-orange)]/5" />
                ) : (
                  <>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-[var(--brand-orange)] text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-10">
                {loading ? (
                  <div className="space-y-4">
                    <div className="h-6 w-3/4 bg-[var(--brand-orange)]/5 rounded-lg animate-pulse" />
                    <div className="h-4 w-full bg-[var(--brand-orange)]/5 rounded-lg animate-pulse" />
                  </div>
                ) : (
                  <>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand-coral)] opacity-60">
                      {blog.date}
                    </span>

                    <h3 className="text-2xl font-black mt-3 mb-4 text-[var(--text-main)] group-hover:text-[var(--brand-orange)] transition uppercase tracking-tight leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] font-medium mb-10 text-[15px] leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand-orange)]/10 flex items-center justify-center text-[var(--brand-orange)]">
                          <User size={18} />
                        </div>
                        <span className="text-[11px] font-black text-[var(--text-main)] uppercase tracking-[0.2em] opacity-60">
                          {blog.author}
                        </span>
                      </div>

                      <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--text-main)] text-white group-hover:bg-[var(--brand-orange)] group-hover:rotate-45 transition-all duration-500 shadow-xl">
                        <ArrowUpRight size={22} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-32 text-center relative z-10">
        <button className="px-14 py-6 bg-[var(--text-main)] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-[var(--brand-orange)] hover:scale-105 active:scale-95 transition-all shadow-[var(--shadow-lg)]">
          Explore All Articles
        </button>
      </div>
    </section>
  );
};

export default Blogs;