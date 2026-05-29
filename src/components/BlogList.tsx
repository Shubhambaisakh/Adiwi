import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogsData";

const BlogList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {blogsData.map((blog) => (
        <article
          key={blog.id}
          className="rounded-3xl overflow-hidden border group transition-all hover:shadow-xl"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-light)",
          }}
        >
          {/* Blog Image */}
          <div className="relative overflow-hidden h-[260px]">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Category Badge */}
            <span
              className="absolute top-4 left-4 text-xs font-bold px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "var(--teal)" }}
            >
              {blog.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">

            {/* Date */}
            <span
              className="text-xs uppercase tracking-widest opacity-60"
              style={{ color: "var(--text-main)" }}
            >
              {blog.date}
            </span>

            {/* Title */}
            <h2
              className="text-xl font-bold mt-3 mb-3 group-hover:text-[var(--teal)] transition"
              style={{ color: "var(--text-main)" }}
            >
              {blog.title}
            </h2>

            {/* Description */}
            <p
              className="text-sm opacity-80 mb-6"
              style={{ color: "var(--text-main)" }}
            >
              {blog.description}
            </p>

            {/* Read More */}
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-sm font-semibold hover:text-[var(--teal)]"
            >
              Read More →
            </Link>

          </div>
        </article>
      ))}

    </div>
  );
};

export default BlogList;