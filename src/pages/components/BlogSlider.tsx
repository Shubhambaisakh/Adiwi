import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { Link as NaveLink } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import blogsData from "../../data/blogsData";

import "swiper/css";
import "swiper/css/pagination";
import { Asterisk , ArrowUpRight} from "lucide-react";

const BlogSlider: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[var(--bg-main)]">

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 max-w-7xl mx-auto">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              {/* Updated icon color to Brand Orange */}
              <Asterisk size={18} className="text-[var(--brand-orange)] animate-spin-slow" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-main)]">
                 Blog Insights
              </span>
            </div>

            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black leading-[1.05] tracking-tighter text-[var(--text-main)] uppercase">
              Latest Articles &nbsp;
              <span className="italic font-serif font-medium text-[var(--brand-orange)] normal-case">
                & Updates
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] font-medium">
              Explore expert insights on digital marketing, SEO, and business growth 
              strategies from the AdwikIndia engineering team.
            </p>
          </div>

        <NaveLink to="/blogs">
          <button 
            className="group flex items-center gap-4 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 bg-[var(--text-main)] hover:bg-[var(--brand-orange)]"
          >
            View All Posts
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </NaveLink>

        </div>

      {/* Blog Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.blog-pagination' }}
          spaceBetween={30}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {blogsData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Styled Pagination Container */}
        <div className="blog-pagination flex justify-center gap-2 mt-8" />
      </div>

      <style jsx global>{`
        .blog-pagination .swiper-pagination-bullet {
          background: var(--border-light);
          width: 20px;
          height: 4px;
          border-radius: 2px;
          opacity: 1;
          transition: all 0.4s ease;
        }
        .blog-pagination .swiper-pagination-bullet-active {
          background: var(--brand-orange) !important;
          width: 50px;
        }
      `}</style>

    </section>
  );
};

export default BlogSlider;