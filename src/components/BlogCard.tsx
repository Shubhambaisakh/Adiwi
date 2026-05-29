import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

type BlogItem = {
  id: number;
  img: string;
  date: string;
  title: string;
  category: string;
  slug: string;
};

interface Props {
  blog: BlogItem;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const xTo = gsap.quickTo(card, "rotateY", { duration: 0.4 });
    const yTo = gsap.quickTo(card, "rotateX", { duration: 0.4 });

    const move = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      xTo(x * 12);
      yTo(y * -12);
    };

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <Link to={`/blogs/${blog.slug}`}>
      <article
        ref={cardRef}
        className="blog-card rounded-[2.5rem] p-6 border group cursor-pointer transition-all duration-500 shadow-xl"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-light)",
        }}
      >
        {/* Blog Image */}
        <div className="relative rounded-[2rem] overflow-hidden mb-8 h-[280px]">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />

          {/* Category Badge */}
          <div className="absolute top-5 left-5">
            <span
              className="text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
              style={{ backgroundColor: "var(--teal)" }}
            >
              {blog.category}
            </span>
          </div>
        </div>

        {/* Date */}
        <span
          className="text-[11px] font-black uppercase tracking-widest opacity-60"
          style={{ color: "var(--teal)" }}
        >
          {blog.date}
        </span>

        {/* Title */}
        <h3
          className="mt-4 text-xl font-bold leading-tight transition-colors group-hover:text-[var(--teal)]"
          style={{ color: "var(--text-main)" }}
        >
          {blog.title}
        </h3>

        {/* Read More */}
        <div className="mt-8 flex justify-between items-center">
          <span
            className="text-[11px] font-black uppercase tracking-widest transition-transform group-hover:translate-x-2"
            style={{ color: "var(--text-main)" }}
          >
            Read More
          </span>

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
            style={{
              backgroundColor: "var(--navy)",
              color: "white",
            }}
          >
            <ArrowUpRight
              size={20}
              className="group-hover:text-[var(--teal)] transition-colors"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;