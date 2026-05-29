'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnquiryPopup from "../../components/EnquiryPopup";
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Trophy, 
  HelpCircle, 
  ChevronDown, 
  Rocket, 
  Megaphone, 
  ShoppingBag, 
  Smartphone, 
  Palette, 
  Globe, 
  Zap,
  Target,
  FileCode2,
  BrainCircuit,
  SearchCheck,
  Building
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesOverview: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // Set page title for SEO
  useEffect(() => {
    document.title = "Unified Growth Ecosystem | Digital Engineering & Strategy | AdwikIndia";
  }, []);

  // GSAP animations for modern effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance reveal
      gsap.from(".hero-item", {
        y: 80,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Glow parallax effect
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: -15,
          scale: 1.15,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5
          }
        });
      }

      // Staggered reveal for service cards
      gsap.from(".service-card", {
        scale: 0.92,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%"
        }
      });

      // Continuous tech ticker animation
      gsap.to(".tech-ticker", {
        x: "-50%",
        duration: 40,
        repeat: -1,
        ease: "linear"
      });

      // Feature cards staggered reveal
      gsap.from(".feature-card", {
        y: 50,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%"
        }
      });

      // Pricing cards focus stagger
      gsap.from(".pricing-card", {
        y: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 75%"
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { title: "Websites", icon: <FileCode2 size={30} />, path: "/services/websites", desc: "MERN stack portals optimized for sub-second enterprise velocity." },
    { title: "Performance Marketing", icon: <Target size={30} />, path: "/services/digital-marketing", desc: "ROI-centric media buying that lowers CPA and increases LTV." },
    { title: "E-Commerce", icon: <ShoppingBag size={30} />, path: "/services/ecommerce", desc: "Headless commerce systems for high-volume technical trade." },
    { title: "App Development", icon: <Smartphone size={30} />, path: "/services/applications", desc: "Native & Cross-platform solutions designed for user retention." },
    { title: "Semantic SEO", icon: <SearchCheck size={30} />, path: "/services/seo", desc: "Outrank competitors with data-driven on-page & off-page engineering." },
    { title: "Growth Branding", icon: <Palette size={30} />, path: "/services/branding-design", desc: "Visual identity systems built on psychological trust triggers." }
  ];

  const pricingPlans = [
    { t: "Establish", p: "₹19k/mo", f: ["Technical SEO", "5 Strategic Pages", "Lead Tracking", "99.9% Hosting"] },
    { t: "Growth Pro", p: "₹49k/mo", f: ["MERN/Next.js Portal", "Ads Management", "ROI Dashboards", "A/B Testing"], h: true },
    { t: "Enterprise", p: "Custom", f: ["Headless Commerce", "Omnichannel", "Dedicated PM", "PR Synergy"] }
  ];

  const faqItems = [
    { q: "How do you measure service ROI?", a: "We establish baseline KPIs during discovery (organics, CAC, LTV) and track every deliverable against a live performance dashboard. If the metric isn't moving, the strategy is iterating." },
    { q: "Can services be integrated?", a: "Absolutely. 85% of our clients integrate Development with Performance Marketing for maximum ecosystem synergy. Data flows seamlessly between code and conversion goals." },
    { q: "What industries do you dominate?", a: "We have deep engineering expertise in FinTech, Real Estate, E‑Commerce, Healthcare, and SaaS. We normalize for industry velocity." }
  ];

  return (
    <div
      ref={pageRef}
      className="font-sans transition-colors duration-300 overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      {/* 1. HERO SECTION (SEO optimized H1) */}
      <section
        ref={heroRef}
        className="hero-section relative pt-48 pb-32 px-6 lg:px-20 text-white overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div
          ref={glowRef}
          className="absolute top-[-30%] right-[-15%] w-[800px] h-[800px] rounded-full blur-[150px] opacity-25"
          style={{ backgroundColor: "var(--teal)" }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className="hero-item inline-flex items-center gap-2 px-6 py-2 border rounded-full mb-8 shadow-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <Sparkles size={16} style={{ color: "var(--teal)" }} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/90">
              The Growth Matrix 2026
            </span>
          </div>
          <h1 className="hero-item text-6xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter">
            Digital Engineering <br />{" "}
            <span style={{ color: "var(--teal)" }} className="italic font-serif">
              & strategy.
            </span>
          </h1>
          <p
            className="hero-item text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            AdwikIndia deploys a unified growth ecosystem, combining high-speed MERN development with 
            ROI-obsessed marketing funnels to drive market dominance for modern brands.
          </p>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP (Performance Focus) */}
      <section
        className="py-14 border-b relative z-20 shadow-xl"
        style={{ backgroundColor: "var(--bg-main)", borderColor: "var(--border-color)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: "250+", l: "Enterprise Systems Built" },
            { v: "4.8X", l: "Avg. CPA Reduction" },
            { v: "Zero", l: "Technical Debt (MERN)" },
            { v: "15M+", l: "Managed Ad Spend Managed" }
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl font-black group-hover:scale-110 transition-transform" style={{ color: "var(--navy)" }}>
                {s.v}
              </div>
              <div
                className="text-[11px] font-bold uppercase tracking-widest mt-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICE DIRECTORY (Detailed, Staggered) */}
      <section className="py-36 px-6 lg:px-20">
        <div className="text-center mb-24 reveal-section">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">Domain Solutions</h2>
          <p className="text-[var(--text-muted)] text-xl">Integrated Capabilities. Unified Growth.</p>
        </div>
        <div className="max-w-7xl mx-auto services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className="service-card group p-14 rounded-[4rem] border transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-10px_var(--cyan)]"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-300 group-hover:bg-opacity-100 group-hover:text-white"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--teal)" }}
              >
                {s.icon}
              </div>
              <h3 className="text-3xl font-black mb-5" style={{ color: "var(--text-main)" }}>
                {s.title}
              </h3>
              <p className="mb-12 leading-relaxed opacity-70" style={{ color: "var(--text-main)" }}>
                {s.desc}
              </p>
              <div
                className="flex items-center gap-3 font-black text-xs uppercase tracking-widest transition group-hover:gap-4"
                style={{ color: "var(--teal)" }}
              >
                EXPLORE <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. CROSS-CAPABILITY ECOSYSTEM (Detailed content) */}
      <section
        className="py-32 px-6 lg:px-20 text-white reveal-section overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Performance <br />
              <span style={{ color: "var(--teal)" }}>Orchestration.</span>
            </h2>
            <p className="mb-10 text-lg lg:text-xl text-white/70 leading-relaxed font-light">
              We don't operate in silos. Every line of code is optimized for the
              conversion funnel we deploy. Our data flows unite Development and
              Marketing for maximum ecosystem synergy.
            </p>
            <div className="space-y-6">
              {[
                "Integrated Data Lakes for Reporting",
                "Full-Stack Conversion Ownership",
                "Sub-second Load Speeds (MERN)",
                "ISO-Compliant Security Standards"
              ].map(
                (t, idx) => (
                  <div key={idx} className="flex gap-4">
                    {/* <CheckCircle2 style={{ color: "var(--teal)" }} /> */}
                    <span className="font-bold text-lg">{t}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div
            className="p-16 rounded-[4rem] border relative group transition-all hover:border-[var(--teal)]/30 hover:scale-[1.02]"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <Zap className="absolute top-10 right-10 w-12 h-12 opacity-10" style={{color:"var(--teal)"}}/>
            <Layers className="w-24 h-24 mb-10" style={{ color: "var(--teal)" }} />
            <h4 className="text-3xl font-black">Unified Growth Matrix</h4>
            <p className="mt-4 opacity-70 text-sm">Where technology solves marketing problems.</p>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK SHOWCASE (Infinite Ticker) */}
      <section
        className="py-20 border-y overflow-hidden"
        style={{ backgroundColor: "var(--bg-main)", borderColor: "var(--border-color)" }}
      >
        <div className="tech-ticker flex gap-20 whitespace-nowrap font-black uppercase text-xs tracking-[0.2em]">
          {[
            "React.js", "Node.js", "MongoDB", "AWS Clusters", "TypeScript", "Next.js", "Shopify Headless", "Tailwind CSS", "GSAP", "Azure"
          ].map((t, idx) => (
            <span key={idx} style={{ color: "var(--text-secondary)" }}>
              // {t}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "React.js", "Node.js", "MongoDB", "AWS Clusters", "TypeScript", "Next.js", "Shopify Headless", "Tailwind CSS", "GSAP", "Azure"
          ].map((t, idx) => (
            <span key={`dup-${idx}`} style={{ color: "var(--text-secondary)" }}>
              // {t}
            </span>
          ))}
        </div>
      </section>

      {/* 6. INDUSTRY SOLUTIONS (Hover effects) */}
      <section className="py-28 px-6 lg:px-20 text-center reveal-section">
        <Building className="mx-auto mb-10" size={50} style={{color:"var(--teal)"}}/>
        <h2 className="text-4xl lg:text-5xl font-black mb-16 tracking-tighter">
          Domain <span style={{ color: "var(--teal)" }}>Expertise.</span>
        </h2>
        <div className="feature-grid grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["FinTech", "Real Estate", "Healthcare", "E-Commerce", "SaaS", "Hospitality", "Logistics", "EdTech"].map((item, i) => (
            <div
              key={i}
              className="feature-card p-12 rounded-3xl border font-black uppercase text-[11px] tracking-widest transition-all duration-300 cursor-pointer hover:border-[var(--teal)] hover:bg-[var(--navy)] hover:text-white"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 7. DEVELOPMENT LIFECYCLE (Timeline effect) */}
      <section
        className="py-28 px-6 lg:px-20 text-white reveal-section text-center relative"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <h2 className="text-4xl lg:text-7xl font-black mb-20 leading-tight tracking-tighter">
          Adwik Proven <span style={{ color: "var(--teal)" }}>Lifecycle.</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-12 relative z-10">
          {[
            {s:"DISCOVERY", d:"Data audits and business analysis." },
            {s:"BLUEPRINT", d:"Full-stack architecture design." },
            {s:"SPRINT", d:"Velocity-driven agile development." },
            {s:"DEPLOY", d:"AWS launch & funnel activation." }
          ].map((step, i) => (
            <div key={i} className="relative group transition-opacity hover:opacity-100 opacity-80">
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-black text-2xl mb-8 shadow-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: "var(--teal)", color: "var(--navy)" }}
              >
                {i + 1}
              </div>
              <h5 className="font-black text-2xl tracking-tight mb-2">{step.s}</h5>
              <p className="text-sm opacity-60 leading-relaxed max-w-[200px] mx-auto">{step.d}</p>
            </div>
          ))}
          <div
            className="absolute top-8 left-0 w-full h-[1px] hidden md:block"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          />
        </div>
      </section>

      {/* 8. GLOBAL REACH / DATA INFRASTRUCTURE */}
      <section className="py-28 px-6 lg:px-20 reveal-section relative overflow-hidden">
        <Globe
          className="absolute -left-24 -top-10 opacity-10 w-[600px] h-[600px]"
          style={{ color: "var(--teal)" }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex gap-2 items-center text-[var(--teal)] font-bold mb-4 uppercase text-xs tracking-widest"><Globe size={16}/>BHOPAL HQ + Global Nodes</div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter">
              Bhopal Velocity. <br />
              <span style={{ color: "var(--teal)" }}>Global Compliance.</span>
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed opacity-70" style={{ color: "var(--text-main)" }}>
              We leverage Bhopal's elite engineering talent to build on AWS and Azure clusters 
              certified for 99.9% reliability and global security standards.
            </p>
          </div>
          <div
            className="p-14 rounded-[3rem] shadow-xl border relative"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
          >
            {/* <CheckCircle2 className="absolute top-6 right-6" style={{color:"var(--teal)"}}/> */}
            <h4 className="text-2xl font-black">ISO 27001 Data Security</h4>
            <p className="mt-4 text-sm opacity-60">Complete protection of your technical intellectual property.</p>
          </div>
        </div>
      </section>

      {/* 9. MARKETING FUNNEL (Psychology) */}
      <section
        className="py-28 px-6 lg:px-20 reveal-section text-center"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <BrainCircuit className="mx-auto mb-10" size={60} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Cognitive <span style={{ color: "var(--teal)" }}>Conversion.</span>
          </h2>
          <p className="text-xl lg:text-2xl font-medium" style={{ color: "var(--text-secondary)" }}>
            We map digital interactions to psychological trust triggers. We don't just generate traffic; we orchestrate revenue growth.
          </p>
        </div>
      </section>

      {/* 10. REAL-TIME REPORTING */}
      <section className="py-28 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Absolute <br />
              <span style={{ color: "var(--teal)" }}>Transparency.</span>
            </h2>
            <p className="leading-relaxed mb-10 text-lg lg:text-xl opacity-70" style={{ color: "var(--text-main)" }}>
              Every client gets a live, 24/7 technical dashboard tracking conversions, CPC, server health, and MERN stack velocity. No hidden metrics.
            </p>
            <button className="px-10 py-5 rounded-2xl bg-[var(--navy)] text-white font-black uppercase text-xs tracking-widest hover:bg-[var(--cyan)] transition-colors">Request a Demo Dashboard</button>
          </div>
          <div
            className="lg:w-1/2 p-10 rounded-[4rem] shadow-2xl relative"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <div
              className="h-72 w-full rounded-3xl animate-pulse flex items-center justify-center text-white/20 font-black text-2xl italic tracking-tighter uppercase"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              Conversion Analytics
            </div>
            <BarChart3 className="absolute bottom-6 right-6 opacity-30 w-10 h-10" style={{ color: "var(--teal)" }} />
          </div>
        </div>
      </section>

      {/* 11. PRICING ARCHITECTURE (Initialized Effects) */}
      <section className="pricing-section py-28 px-6 lg:px-20 reveal-section relative bg-[var(--bg-main)]">
        <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter">Growth <span style={{color:"var(--teal)"}}>Architecture</span></h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {pricingPlans.map((pkg, i) => (
            <div
              key={i}
              className={`pricing-card p-14 rounded-[3.5rem] relative transition-all duration-500 hover:-translate-y-4 ${
                pkg.h ? "scale-105 shadow-[var(--shadow-lg)]" : ""
              }`}
              style={{
                backgroundColor: pkg.h ? "var(--navy)" : "var(--card-bg)",
                border: pkg.h ? "none" : "1px solid var(--border-color)",
                color: pkg.h ? "white" : "var(--text-main)",
                overflow:"hidden"
              }}
            >
              {pkg.h && (
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2 text-[10px] font-black uppercase tracking-widest text-white rounded-full z-10"
                  style={{ backgroundColor: "var(--teal)" }}
                >
                  Growth Standard
                </div>
              )}
              <h4 className="font-black text-3xl mb-3">{pkg.t}</h4>
              <div className="text-5xl font-black mb-10" style={{ color: "var(--teal)" }}>
                {pkg.p}
              </div>
              <ul className="space-y-5 mb-12 text-sm font-bold opacity-80">
                {pkg.f.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {/* <CheckCircle2 size={16} style={{ color: "var(--teal)" }} /> */}
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition hover:scale-105"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Initialize Strategy
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. SERVICES FAQ */}
      <section className="py-28 px-6 lg:px-20 reveal-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 flex justify-center items-center gap-4">
             <HelpCircle style={{color:"var(--teal)"}} size={30}/>
            <h2 className="text-4xl font-black">
              Services <span style={{ color: "var(--teal)" }}>Clarified.</span>
            </h2>
          </div>
          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border overflow-hidden"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-8 md:p-10 font-black flex justify-between items-center text-xl"
                  style={{ color: "var(--text-main)" }}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--teal)" }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className="p-10 pt-0 leading-relaxed border-t"
                    style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-40 px-6 reveal-section relative">
        <div
          className="max-w-6xl mx-auto rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[var(--shadow-lg)]"
          style={{ backgroundColor: "var(--teal)" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px]"
            style={{ backgroundColor: "var(--navy)", opacity: 1.5 }}
          />
          <h2 className="text-4xl md:text-8xl font-black mb-10 relative z-10 leading-[0.9] tracking-tighter">
            Your Growth <br />
            <span style={{ color: "var(--navy)" }}>Matrix starts.</span>
          </h2>
          <button
            className="relative z-10 px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Launch Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;