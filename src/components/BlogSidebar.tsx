import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import blogsData from "../data/blogsData";

const BlogSidebar: React.FC = () => {
  const [search, setSearch] = useState("");

  const categories = [...new Set(blogsData.map((blog) => blog.category))];

  const tags = [...new Set(blogsData.flatMap((blog) => blog.tags))];

  const recentPosts = blogsData.slice(0, 4);

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="space-y-12">

      {/* Search */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-light)",
        }}
      >
        <h3 className="text-lg font-bold mb-4">Search Blog</h3>

        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border outline-none"
          />

          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50"
          />
        </div>

        {search && (
          <div className="mt-4 space-y-3">
            {filteredBlogs.slice(0, 4).map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.slug}`}
                className="block text-sm hover:text-[var(--teal)]"
              >
                {blog.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-light)",
        }}
      >
        <h3 className="text-lg font-bold mb-4">Categories</h3>

        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <span className="text-sm hover:text-[var(--teal)] cursor-pointer">
                {category}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-light)",
        }}
      >
        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>

        <div className="space-y-5">
          {recentPosts.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.slug}`}
              className="flex gap-4 group"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div>
                <p className="text-sm font-semibold group-hover:text-[var(--teal)]">
                  {blog.title}
                </p>

                <span className="text-xs opacity-60">
                  {blog.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-light)",
        }}
      >
        <h3 className="text-lg font-bold mb-4">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border cursor-pointer hover:bg-[var(--teal)] hover:text-white"
              style={{
                borderColor: "var(--border-light)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default BlogSidebar;