import React from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ChevronRight 
} from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card group p-8 rounded-[2rem] border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5 relative overflow-hidden">
      
      {/* Subtle Hover Gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand-orange)] opacity-0 group-hover:opacity-5 blur-[40px] transition-opacity pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center relative z-10">
        
        {/* Left Side: Job Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1.5 rounded-xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-[10px] font-black uppercase tracking-[0.2em]">
              {job.department}
            </span>
            {job.isNew && (
              <span className="text-[var(--brand-coral)] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--brand-coral)] rounded-full animate-pulse"></span>
                Hiring Now
              </span>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[var(--text-main)] group-hover:text-[var(--brand-orange)] transition-colors duration-300 uppercase">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-6 mt-6 text-xs font-bold uppercase tracking-widest opacity-60">
            <span className="flex items-center gap-2">
              <Briefcase size={16} className="text-[var(--brand-orange)]" /> 
              {job.type}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[var(--brand-orange)]" /> 
              {job.location}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--brand-orange)]" /> 
              {job.experience}
            </span>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link 
            to={`/careers/${job.id}`}
            className="flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 rounded-2xl bg-[var(--text-main)] text-white hover:bg-[var(--brand-orange)] transition-all duration-500 shadow-lg group-hover:scale-105 active:scale-95 font-black text-xs uppercase tracking-widest"
          >
            Apply Now
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          
          {/* Mobile-only arrow for better UX */}
          <ChevronRight size={20} className="md:hidden opacity-30 text-[var(--brand-orange)]" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;