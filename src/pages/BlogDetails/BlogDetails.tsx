import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../../data/blogsData";
import BlogSidebar from "../../components/BlogSidebar";

const BlogDetails: React.FC = () => {
  const { slug } = useParams();

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="py-40 mt-40 text-center bg-[var(--bg-main)]">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-[var(--text-main)]">
          Article Not Found
        </h2>
        <Link 
          to="/blogs" 
          className="text-[var(--brand-orange)] font-black uppercase tracking-widest text-xs mt-6 inline-block hover:underline"
        >
          ← Back to Notebook
        </Link>
      </section>
    );
  }

  return (
    <section className="py-32 pt-48 px-6 lg:px-20 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.03] blur-[140px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto relative z-10">

        {/* Main Content Column */}
        <div className="lg:col-span-8">
          
          {/* Featured Image */}
          <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-[var(--border-light)] group">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Meta Info */}
          <div className="flex gap-6 items-center mb-6">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[var(--brand-orange)]">
              {blog.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-[var(--border-light)]" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-50 text-[var(--text-main)]">
              {blog.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-8 text-[var(--text-main)] uppercase">
            {blog.title}
          </h1>

          {/* Intro Description */}
          <p className="text-xl font-medium text-[var(--text-secondary)] mb-12 leading-relaxed border-l-4 border-[var(--brand-orange)] pl-8 italic">
            {blog.description}
          </p>

          {/* Article Content Rendering */}
          <div
            className="prose prose-xl max-w-none 
              prose-headings:text-[var(--text-main)] 
              prose-headings:font-black
              prose-headings:uppercase
              prose-headings:tracking-tight
              prose-p:text-[var(--text-secondary)] 
              prose-p:font-medium
              prose-p:leading-relaxed
              prose-li:text-[var(--text-secondary)]
              prose-li:font-medium
              prose-strong:text-[var(--brand-coral)]
              prose-strong:font-black
              prose-img:rounded-[2rem]
              prose-img:shadow-xl
              prose-blockquote:border-[var(--brand-orange)]
              prose-blockquote:bg-[var(--bg-secondary)]
              prose-blockquote:rounded-2xl
              prose-blockquote:py-2"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Article Tags */}
          <div className="mt-16 pt-12 border-t border-[var(--border-light)]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 opacity-40">Keywords</h4>
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 text-[10px] rounded-xl border border-[var(--border-light)] 
                  text-[var(--text-secondary)] bg-[var(--bg-secondary)] font-black uppercase tracking-widest
                  hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition-all cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <BlogSidebar />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogDetails;