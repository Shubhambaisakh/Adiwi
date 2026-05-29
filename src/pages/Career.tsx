import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Briefcase, 
  Users, 
  Rocket, 
  Sparkles, 
  CheckCircle,
  SearchX 
} from "lucide-react";

// Import our Dynamic Module Parts
import useJobs from "../hooks/useJobs";
import JobCard from "./components/Career/JobCard";
import FilterBar from "./components/Career/FilterBar";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef(null);
  const { filters, setFilters, clearFilters, filteredJobs } = useJobs();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Culture Cards staggered entrance
      gsap.from(".culture-card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".culture-section",
          start: "top 80%",
        },
      });

      // Floating particles background effect
      gsap.to(".particle", {
        y: -100,
        duration: "random(5, 8)",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--bg-main)] text-[var(--text-main)] pt-48 pb-32 overflow-hidden"
    >
      {/* 1. ANIMATED BACKGROUND PARTICLES - Updated to Brand Orange */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="particle absolute w-2 h-2 bg-[var(--brand-orange)] rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 2. HERO SECTION */}
      <div className="hero-content text-center max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 backdrop-blur-md">
          <Sparkles size={16} className="text-[var(--brand-orange)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--brand-coral)]">
            Careers at AdwikIndia
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8">
          Build your career <br />
          with <span className="text-[var(--brand-orange)] italic font-serif">purpose</span>
        </h1>

        <p className="text-lg opacity-70 max-w-xl mx-auto font-medium">
          Join a performance-driven digital engine building modern brands
          through strategy, design, and code. We’re looking for innovators.
        </p>
      </div>

      {/* 3. DYNAMIC FILTER BAR */}
      <FilterBar 
        filters={filters} 
        setFilters={setFilters} 
        onClear={clearFilters} 
      />

      {/* 4. JOBS LISTING SECTION */}
      <div className="jobs-section max-w-5xl mx-auto px-6 mb-40 relative z-10">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-4xl font-black tracking-tight uppercase">Open Positions</h2>
           <p className="text-xs font-black uppercase tracking-widest opacity-40">{filteredJobs.length} Roles Found</p>
        </div>

        <div className="space-y-6 min-h-[400px]">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-[var(--bg-secondary)] rounded-[3rem] border-2 border-dashed border-[var(--border-light)]">
              <SearchX size={48} className="text-[var(--brand-orange)] opacity-30 mb-4" />
              <h3 className="text-xl font-black opacity-50 uppercase tracking-tight">No matching roles found</h3>
              <button 
                onClick={clearFilters}
                className="mt-4 text-[var(--brand-orange)] font-black uppercase tracking-widest text-xs hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 5. CULTURE SECTION */}
      <div className="culture-section grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-40">
        {[
          {
            icon: <Users size={30} />,
            title: "Collaborative Team",
            desc: "Work with passionate creators and innovators in a high-energy environment.",
          },
          {
            icon: <Rocket size={30} />,
            title: "Fast Growth",
            desc: "We reward excellence. High-performers move up quickly in our digital engine.",
          },
          {
            icon: <Briefcase size={30} />,
            title: "Global Impact",
            desc: "Deliver high-performance visual systems for market-leading international brands.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="culture-card p-10 rounded-[3rem] bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-sm hover:border-[var(--brand-orange)]/30 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[var(--brand-coral)] text-white mb-8 shadow-xl">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{item.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 6. BENEFITS GRID */}
      <div className="max-w-6xl mx-auto px-6 mb-0">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">The Adwik Advantage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Creative freedom", "Flexible work culture", "Growth Mentorship",
            "Global client base", "Performance bonuses", "Professional Certs"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] group hover:border-[var(--brand-orange)] transition-colors">
              <CheckCircle size={20} className="text-[var(--brand-orange)] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-tight">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FINAL CTA - Integrated with Brand Orange */}
      <div className="px-6 mt-40">
        <div className="max-w-4xl mx-auto relative bg-[var(--brand-coral)] rounded-[3.5rem] p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase tracking-tighter">
            Don't see a <br /> perfect fit?
          </h2>
          <p className="text-white/80 mb-10 max-w-md mx-auto font-medium">
            We are always looking for exceptional engineers and designers. Send us your CV for the future.
          </p>
          <a
            href="mailto:careers@adwikindia.com"
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Send General Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Career;