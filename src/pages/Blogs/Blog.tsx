import React from "react";
import blogsData from "../../data/blogsData";
import BlogCard from "../../components/BlogCard";
import BlogSidebar from "../../components/BlogSidebar";

const Blog: React.FC = () => {
  return (
    <section
      className="py-32 pt-48 px-6 lg:px-20 bg-[var(--bg-main)]"
    >
      {/* Page Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto relative z-10">
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-black"
          style={{ color: "var(--brand-orange)" }}
        >
          Knowledge & Insights
        </span>

        <h1
          className="text-5xl md:text-7xl font-black mt-6 mb-8 uppercase tracking-tighter leading-none"
          style={{ color: "var(--text-main)" }}
        >
          Latest Articles & <br />
          <span className="text-[var(--brand-orange)] italic font-serif normal-case"> Industry Insights</span>
        </h1>

        <p
          className="text-xl font-medium opacity-70 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-main)" }}
        >
          Discover expert insights on SEO, digital marketing, web development,

          and business growth strategies from AdwikIndia.
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--brand-orange)] opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10">

        {/* Blog Grid */}
        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {blogsData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          
          {/* Simple Pagination Placeholder */}
          <div className="mt-20 pt-12 border-t border-[var(--border-light)] flex justify-center">
             <button className="px-10 py-4 bg-[var(--text-main)] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[var(--brand-orange)] transition-all active:scale-95 shadow-xl">
                Load More Articles
             </button>
          </div>
        </div>

        {/* Sidebar - Occupies 4 columns on large screens */}
        <div className="lg:col-span-4">
          <BlogSidebar />
        </div>

      </div>
    </section>
  );
};

export default Blog;