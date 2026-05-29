import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  Wallet, 
  ChevronRight,
  ShieldCheck 
} from "lucide-react";

// Import Shared Data and Form Component
import { JOBS_DATA } from "../data/jobsData";
import ApplyForm from "./components/Career/ApplyForm";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Find the specific job based on the URL ID
  const job = JOBS_DATA.find((j) => j.id === jobId);

  // Sync scroll position and Document Title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (job) {
      document.title = `${job.title} | Careers at Adwik India`;
    }
  }, [job]);

  // Error State: Job ID is invalid or posting expired
  if (!job) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-[var(--bg-main)]">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-[var(--text-main)]">
          Position Not Found
        </h2>
        <p className="opacity-60 mb-8 font-medium text-[var(--text-secondary)]">
          The job posting you are looking for might have been filled or the link has expired.
        </p>
        <Link 
          to="/career" 
          className="px-10 py-4 bg-[var(--brand-orange)] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-transform active:scale-95"
        >
          Explore Other Openings
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-main)] pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Brand Decorative Glow - Consistent with other pages */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mt-20 mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 hover:text-[var(--brand-orange)] transition-all mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          All Openings
        </button>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-12">
            <header>
              <span className="px-4 py-1.5 rounded-xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
                {job.department}
              </span>
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter uppercase text-[var(--text-main)]">
                {job.title}
              </h1>
              
              {/* Information Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-[var(--border-light)]">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black text-[var(--brand-coral)]">Location</p>
                  <div className="flex items-center gap-2 font-bold text-sm"><MapPin size={16} className="text-[var(--brand-orange)]" /> {job.location}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black text-[var(--brand-coral)]">Engagement</p>
                  <div className="flex items-center gap-2 font-bold text-sm"><Briefcase size={16} className="text-[var(--brand-orange)]" /> {job.type}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black text-[var(--brand-coral)]">Level</p>
                  <div className="flex items-center gap-2 font-bold text-sm"><Clock size={16} className="text-[var(--brand-orange)]" /> {job.experience}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black text-[var(--brand-coral)]">Salary</p>
                  <div className="flex items-center gap-2 font-bold text-sm text-[var(--brand-orange)]"><Wallet size={16} /> {job.salary || "Performance Based"}</div>
                </div>
              </div>
            </header>

            <article className="space-y-12">
              <section>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-[var(--text-main)]">Role Overview</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg italic">
                  {job.description}
                </p>
              </section>

              {/* Responsibilities with Staggered Visuals */}
              <section>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-[var(--text-main)]">What You'll Do</h3>
                <ul className="space-y-5">
                  {job.responsibilities?.map((item, i) => (
                    <li key={i} className="flex gap-4 text-[var(--text-secondary)] font-medium leading-relaxed group">
                      <ChevronRight size={20} className="text-[var(--brand-orange)] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /> 
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Skill Tags */}
              <section>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-[var(--text-main)]">Stack & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {job.skills?.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-2xl text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </article>
          </div>

          {/* FORM COLUMN (Sticky) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32">
            <ApplyForm jobTitle={job.title} />
            
            {/* Recruiter Trust Card */}
            <div className="mt-8 p-8 rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border-light)] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[var(--brand-orange)]/10 rounded-lg">
                  <ShieldCheck size={20} className="text-[var(--brand-orange)]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Recruitment Assurance</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-medium italic leading-relaxed">
                "Our 'Growth Engine' moves fast. Every qualified applicant will receive a personalized update on their status within 2 business days."
              </p>
              {/* Brand Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-[var(--brand-orange)] to-transparent" />
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default JobDetail;