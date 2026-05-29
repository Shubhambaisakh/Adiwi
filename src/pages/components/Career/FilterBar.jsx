import React from "react";
import { Search, ChevronDown, XCircle } from "lucide-react";

const FilterBar = ({ filters, setFilters, onClear }) => {
  const categories = {
    department: ["All", "Development", "Designing", "Sales", "HR", "Marketing"],
    experience: ["All", "Fresher", "1-3 Years", "3-5 Years", "5+ Years"],
    type: ["All", "Full Time", "Part Time", "Remote", "Internship"],
  };

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto -mt-16 mb-20 px-4">
      {/* Container: Brand consistency with deep backgrounds and border highlights */}
      <div className="bg-white dark:bg-[var(--bg-secondary)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] p-8 border border-slate-200 dark:border-[var(--border-light)] backdrop-blur-xl transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Search Input */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-coral)] ml-1">
              Search Role
            </label>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-[var(--brand-orange)] transition-colors" size={18} />
              <input
                type="text"
                placeholder="e.g. React Developer"
                className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-[var(--bg-main)] text-slate-900 dark:text-white rounded-2xl border border-transparent focus:border-[var(--brand-orange)] focus:ring-4 focus:ring-[var(--brand-orange)]/10 transition-all outline-none font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                value={filters.search}
                onChange={(e) => handleChange("search", e.target.value)}
              />
            </div>
          </div>

          {/* Department Filter */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-coral)] ml-1">
              Department
            </label>
            <div className="relative group">
              <select
                className="w-full appearance-none px-5 py-4 bg-slate-100 dark:bg-[var(--bg-main)] text-slate-900 dark:text-white rounded-2xl border border-transparent focus:border-[var(--brand-orange)] focus:ring-4 focus:ring-[var(--brand-orange)]/10 cursor-pointer transition-all outline-none font-bold text-sm"
                value={filters.department}
                onChange={(e) => handleChange("department", e.target.value)}
              >
                {categories.department.map((dept) => (
                  <option key={dept} value={dept} className="bg-white dark:bg-[var(--bg-secondary)] text-slate-900 dark:text-white">
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none group-hover:text-[var(--brand-orange)] transition-colors" size={18} />
            </div>
          </div>

          {/* Experience Filter */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-coral)] ml-1">
              Work Experience
            </label>
            <div className="relative group">
              <select
                className="w-full appearance-none px-5 py-4 bg-slate-100 dark:bg-[var(--bg-main)] text-slate-900 dark:text-white rounded-2xl border border-transparent focus:border-[var(--brand-orange)] focus:ring-4 focus:ring-[var(--brand-orange)]/10 cursor-pointer transition-all outline-none font-bold text-sm"
                value={filters.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
              >
                {categories.experience.map((exp) => (
                  <option key={exp} value={exp} className="bg-white dark:bg-[var(--bg-secondary)] text-slate-900 dark:text-white">
                    {exp}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none group-hover:text-[var(--brand-orange)] transition-colors" size={18} />
            </div>
          </div>

          {/* Clear Actions */}
          <div className="flex gap-2 h-full">
            <button
              onClick={onClear}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-[var(--white)]/5 text-slate-600 dark:text-slate-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-[10px]"
            >
              <XCircle size={18} />
              Reset Filters
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterBar;