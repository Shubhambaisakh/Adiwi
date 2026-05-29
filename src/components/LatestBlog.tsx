import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Asterisk } from "lucide-react";

/* TYPES */
type BlogItem = {
  id: number;
  img: string;
  date: string;
  title: string;
  slug: string; // Added for dynamic routing
  category: string;
};

/* MOCK DATA - In a real app, this would come from an API or CMS */
const blogs: BlogItem[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900",
    date: "26 May, 2026",
    title: "Top 10 new marketing tools for business – 2026",
    slug: "top-marketing-tools-2026",
    category: "Marketing"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900",
    date: "24 May, 2026",
    title: "Most popular google chrome extension for marketing",
    slug: "best-chrome-extensions-marketing",
    category: "Tools"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900",
    date: "20 May, 2026",
    title: "How to Install wordpress theme on c-Panel Properly",
    slug: "install-wordpress-cpanel-guide",
    category: "Development"
  },
];

const LatestBlog: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  /* MAGNETIC BUTTON EFFECT */
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const move = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;

      gsap.to(btn, { x, y, duration: 0.3, ease: "power3.out" });
    };

    const reset = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="relative py-28 px-6 lg:px-20 overflow-hidden" 
             style={{ backgroundColor: "var(--navy)" }}>
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none opacity-20" 
           style={{ backgroundColor: "var(--teal)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Asterisk size={20} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/70">
                Latest Insights
              </span>
            </div>

            <h2 className="text-white text-[2rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight">
              Read Our Recent Blog Post <br />
              <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
                From update news
              </span>
            </h2>
          </div>

          {/* CTA BUTTON - Dynamic Link */}
          <div className="flex items-start">
            <button
              ref={btnRef}
              onClick={() => navigate('/blogs')}
              type="button"
              className="group flex items-center gap-6 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-2xl border bg-transparent border-white/20 hover:border-[var(--teal)]"
            >
              All Blog Posts
              <span className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:rotate-45"
                    style={{ backgroundColor: "var(--teal)", color: "var(--navy)" }}>
                <ArrowUpRight size={22} strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <Link to={`/blogs/${blog.slug}`} key={blog.id}>
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[4/3] border border-white/5">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] text-white font-black uppercase tracking-widest">
                    {blog.category}
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] to-transparent opacity-60" />
                </div>

                {/* BLOG CONTENT */}
                <div className="mt-8">
                  <span className="inline-block mb-4 px-5 py-1.5 rounded-full border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest">
                    {blog.date}
                  </span>

                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight transition-colors group-hover:text-[var(--teal)]">
                    {blog.title}
                  </h3>
                  
                  <div className="mt-6 flex items-center gap-2 text-[var(--teal)] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default LatestBlog;