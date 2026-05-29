import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  BarChart3,
  Search,
  TrendingUp,
  MousePointerClick,
  Megaphone,
  ShieldCheck,
  Globe,
  Zap,
  Share2,
  Mail,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Star,
  Briefcase,
  Users,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Code2,
  ChevronLeft,
  ChevronRight,
  Award,
  Layers,
  Rocket,
  Target,
  PieChart,
  LineChart,
  Eye,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketing = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // ---------- Data Arrays ----------
const goPortfolio = () => navigate("/portfolio"); 

  const portfolioItems = [
    {
      title: "Local SEO for Dental Clinic",
      category: "SEO + Local",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format",
      description: "Achieved #1 ranking for 15+ dental keywords, 3x increase in appointment calls within 4 months."
    },
    {
      title: "E‑commerce Meta Ads Campaign",
      category: "Facebook / Instagram",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format",
      description: "ROAS of 5.2x, 200+ daily orders generated for a fashion brand through dynamic product ads."
    },
    {
      title: "Google Ads for Real Estate",
      category: "PPC",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
      description: "Generated 150+ high‑quality leads per month with a 12% conversion rate from search ads."
    },
    {
      title: "Content Marketing for SaaS",
      category: "Content + SEO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
      description: "Organic traffic grew 300% in 6 months through blog content and backlink strategy."
    }
  ];

  const techStack = [
    { icon: <BarChart3 size={28} />, name: "Google Analytics" },
    { icon: <Search size={28} />, name: "SEMrush" },
    { icon: <Globe size={28} />, name: "Ahrefs" },
    { icon: <Facebook size={28} />, name: "Meta Ads Manager" },
    { icon: <Target size={28} />, name: "Google Ads" },
    { icon: <Mail size={28} />, name: "Mailchimp" },
    { icon: <Share2 size={28} />, name: "Hootsuite" },
    { icon: <LineChart size={28} />, name: "Hotjar" }
  ];

  const testimonials = [
    {
      name: "Rajesh Gupta",
      role: "Owner, City Dental",
      content: "AdwikIndia transformed our online presence. We're now ranking #1 for 'dentist in Bhopal' and getting 50+ calls monthly.",
      rating: 5
    },
    {
      name: "Neha Sharma",
      role: "Marketing Head, FashionHub",
      content: "Their Meta Ads strategy tripled our ROI. The team is proactive, data‑driven, and a pleasure to work with.",
      rating: 5
    },
    {
      name: "Amit Verma",
      role: "Founder, RealtyPros",
      content: "The Google Ads campaign they built for us consistently delivers high‑intent leads at a low CPA. Highly recommended.",
      rating: 5
    }
  ];

  const processSteps = [
    { icon: <Target />, title: "Discovery", desc: "Understand your goals, audience, and competition." },
    { icon: <PieChart />, title: "Strategy", desc: "Data‑driven roadmap with KPIs and budget allocation." },
    { icon: <Rocket />, title: "Execution", desc: "Launch campaigns, create content, and optimize in real‑time." },
    { icon: <LineChart />, title: "Reporting", desc: "Transparent dashboards and weekly performance reviews." }
  ];

  const integrations = [
    { icon: <BarChart3 />, t: "Google Analytics 4" },
    { icon: <Database />, t: "CRM Integration" },
    { icon: <Mail />, t: "Email Marketing" },
    { icon: <Share2 />, t: "Social Schedulers" },
    { icon: <Smartphone />, t: "Landing Pages" },
    { icon: <Code2 />, t: "Tracking Pixels" },
    { icon: <Cloud />, t: "Cloud Reporting" },
    { icon: <Eye />, t: "Heatmaps" }
  ];

  // ---------- GSAP Animations ----------
  useEffect(() => {
    document.title = "Digital Marketing Agency in Bhopal | SEO, Meta Ads & Google Ads – AdwikIndia";
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Parallax on hero image
      gsap.to(".hero-image", {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Tech stack floating animation
      techRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.from(ref, {
            scale: 0,
            rotation: 360,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 90%"
            }
          });
          gsap.to(ref, {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const goContact = () => navigate("/contact");

  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="hero-section relative pt-48 pb-24 px-6 lg:px-20 bg-[var(--navy)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-section">
            <h1 className="text-5xl lg:text-7xl text-white font-black leading-[1.1] mb-8">
              Digital Marketing <br />
              <span className="text-[var(--cyan)]">That Drives Growth</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mb-10">
              AdwikIndia is a results-driven digital marketing agency in Bhopal helping
              businesses generate leads, increase traffic, and scale revenue through
              SEO, Meta Ads, Google Ads and advanced marketing strategies.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 bg-[var(--teal)] rounded-xl font-black uppercase text-xs tracking-widest"
            >
              Get Free Growth Audit
            </button>
          </div>
          <div className="reveal-section">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
              className="hero-image rounded-[3rem] shadow-2xl"
              alt="Digital Marketing Strategy"
            />
          </div>
        </div>
      </section>

      {/* CORE SERVICES (existing) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Search size={32} />, t: "SEO Optimization", d: "Improve Google rankings and organic traffic." },
            { icon: <MousePointerClick size={32} />, t: "Paid Advertising", d: "High‑performance Meta and Google Ads campaigns." },
            { icon: <TrendingUp size={32} />, t: "Growth Marketing", d: "Conversion‑focused strategies to increase ROI." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center text-[var(--teal)] mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{item.t}</h3>
              <p className="text-[var(--text-secondary)]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SLIDER (NEW) */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl font-black mb-4">Success Stories</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Real campaigns that delivered measurable results for our clients.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
              >
                {portfolioItems.map((item, idx) => (
                  <div key={idx} className="min-w-full grid md:grid-cols-2 bg-[var(--card-bg)]">
                    <img src={item.image} alt={item.title} className="h-80 md:h-auto object-cover w-full" />
                    <div className="p-12 flex flex-col justify-center">
                      <span className="text-sm uppercase tracking-widest font-bold" style={{ color: "var(--teal)" }}>
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-black mt-4 mb-3">{item.title}</h3>
                      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                      <button
                        onClick={goPortfolio}
                        className="self-start px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition"
                        style={{ backgroundColor: "var(--teal)", color: "white" }}
                      >
                        View Case Study <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevPortfolio}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextPortfolio}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {portfolioItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPortfolioIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === portfolioIndex ? "bg-[var(--teal)]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK (NEW) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <Cpu className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl font-black mb-4">Tools & Platforms We Use</h2>
          <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
            We leverage industry‑leading tools to track, analyze, and optimize every campaign.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, i) => (
              <div
                key={i}
                ref={(el) => (techRefs.current[i] = el)}
                className="flex flex-col items-center p-8 rounded-3xl border transition-shadow"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
              >
                <div className="w-12 h-12 mb-4" style={{ color: "var(--teal)" }}>{tech.icon}</div>
                <span className="font-bold text-sm" style={{ color: "var(--text-main)" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (NEW) */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Our Marketing Process</h2>
          <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
            A systematic approach to ensure every campaign delivers maximum ROI.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--teal)" }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-black mb-2">{step.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-4" size={24} style={{ color: "var(--teal)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* META ADS PLANS (existing) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Meta Ads Service Plans</h2>
          <p className="text-[var(--text-secondary)]">Facebook & Instagram ads designed for lead generation and brand growth.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* STARTER */}
          <div className="p-12 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)]">
            <h3 className="text-2xl font-black mb-4">Starter Meta Ads Plan</h3>
            <div className="text-3xl font-black text-[var(--teal)] mb-6">₹4,999 / Month</div>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 4 Ads Creatives</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 2 Lead Generation Ads</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 1 Enquiry / Message Ad</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 1 Awareness Ad</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Facebook & Instagram Ads Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Lead Form Integration</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Local Area Targeting</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Pixel Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Daily Monitoring</li>
            </ul>
            <button onClick={() => setOpen(true)} className="w-full py-4 bg-[var(--teal)] text-white rounded-xl font-bold">Start Plan</button>
          </div>
          {/* PROFESSIONAL */}
          <div className="p-12 bg-[var(--navy)] text-white rounded-3xl scale-105 shadow-2xl">
            <h3 className="text-2xl font-black mb-4">Professional Meta Ads Plan</h3>
            <div className="text-3xl font-black text-[var(--cyan)] mb-6">₹7,999 / Month</div>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 6 Ads Creatives</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 2 Lead Ads</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 2 Video Ads</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 1 Enquiry Ad</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 1 Awareness Ad</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Advanced Audience Targeting</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Retargeting Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Pixel & Conversion Tracking</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Weekly Optimization</li>
            </ul>
            <button onClick={() => setOpen(true)} className="w-full py-4 bg-[var(--cyan)] rounded-xl font-bold">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* GOOGLE ADS PLANS (existing) */}
      <section className="py-24 px-6 lg:px-20 reveal-section bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Google Ads Service Plans</h2>
          <p className="text-[var(--text-secondary)]">High‑converting Google Ads campaigns for fast leads and traffic.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* STARTER */}
          <div className="p-12 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)]">
            <h3 className="text-2xl font-black mb-4">Starter Google Ads Plan</h3>
            <div className="text-3xl font-black text-[var(--teal)] mb-6">₹4,999 / Month</div>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 1 Campaign Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 3 Ad Groups</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 5‑8 Keywords Targeting</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> 3 Text Ads</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Call Extension Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Location Targeting</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> Weekly Monitoring</li>
            </ul>
            <button onClick={() => setOpen(true)} className="w-full py-4 bg-[var(--teal)] text-white rounded-xl font-bold">Start Plan</button>
          </div>
          {/* PROFESSIONAL */}
          <div className="p-12 bg-[var(--navy)] text-white rounded-3xl scale-105 shadow-2xl">
            <h3 className="text-2xl font-black mb-4">Professional Google Ads Plan</h3>
            <div className="text-3xl font-black text-[var(--cyan)] mb-6">₹7,999 / Month</div>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 2 Campaigns Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 5 Ad Groups</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> 10‑15 Keywords</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Advanced Keyword Research</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Conversion Tracking Setup</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Daily Monitoring</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" /> Detailed Reporting</li>
            </ul>
            <button onClick={() => setOpen(true)} className="w-full py-4 bg-[var(--cyan)] rounded-xl font-bold">Choose Plan</button>
          </div>
        </div>
      </section>
  {/* enquirypopup */}
              <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {/* TESTIMONIALS (NEW) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto">
          <Users className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl font-black text-center mb-4">Client Success Stories</h2>
          <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
            Don't just take our word for it – hear from our happy clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="italic mb-6" style={{ color: "var(--text-secondary)" }}>"{t.content}"</p>
                <div className="font-bold" style={{ color: "var(--text-main)" }}>{t.name}</div>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS (NEW) */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <Database className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl font-black mb-4">Seamless Integrations</h2>
          <p className="max-w-2xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>
            We connect your marketing with the tools you already use.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border text-center hover:shadow-lg transition" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                <div className="mb-3" style={{ color: "var(--teal)" }}>{item.icon}</div>
                <h4 className="font-bold text-sm" style={{ color: "var(--text-main)" }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / RESULTS (NEW) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <TrendingUp size={48} className="mb-6" style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl font-black mb-6">Results That Matter</h2>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Our data‑driven approach consistently delivers measurable improvements in traffic, leads, and revenue.
            </p>
            <ul className="space-y-3">
              {[
                "Average ROAS: 4.5x across all campaigns",
                "Organic traffic increase: 200% in 6 months",
                "Lead conversion rate improvement: 35%"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
            <h3 className="text-2xl font-black mb-6">By The Numbers</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Client Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                  <div className="h-2 rounded-full" style={{ width: "98%", backgroundColor: "var(--teal)" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Campaigns Managed</span>
                  <span className="font-bold">250+</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                  <div className="h-2 rounded-full" style={{ width: "85%", backgroundColor: "var(--teal)" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Repeat Clients</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                  <div className="h-2 rounded-full" style={{ width: "85%", backgroundColor: "var(--teal)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (existing, expanded) */}
      <section className="py-24 px-6 lg:px-20 reveal-section bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Digital Marketing FAQs</h2>
          {[
            {
              q: "How long does SEO take to show results?",
              a: "SEO improvements typically start showing results within 3‑6 months depending on competition and industry."
            },
            {
              q: "Do you manage ad budgets?",
              a: "Yes we manage campaigns, optimization, targeting and performance reporting while you control the ad spend."
            },
            {
              q: "Which platform is better – Meta Ads or Google Ads?",
              a: "Google Ads captures high‑intent search traffic while Meta Ads generate leads through interest targeting. We recommend a mix based on your goals."
            },
            {
              q: "Can you track phone calls from ads?",
              a: "Absolutely. We set up call tracking and conversion tracking to measure every lead source accurately."
            }
          ].map((item, i) => (
            <div key={i} className="border border-[var(--border-color)] rounded-xl mb-4" style={{ backgroundColor: "var(--card-bg)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 font-black flex justify-between items-center"
              >
                {item.q}
                <ChevronDown className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="p-6 pt-0 text-[var(--text-secondary)] border-t border-[var(--border-light)]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA (existing, enhanced) */}
      <section className="py-32 px-6 bg-[var(--navy)] text-white text-center">
        <Rocket size={60} className="mx-auto mb-6" style={{ color: "var(--cyan)" }} />
        <h2 className="text-4xl font-black mb-6">Ready to Grow Your Business?</h2>
        <p className="max-w-xl mx-auto mb-10 text-white/70">
          Book a free consultation with AdwikIndia marketing experts and discover how we can increase your leads and sales.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-12 py-5 bg-[var(--teal)] rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 mx-auto hover:scale-105 transition"
        >
          Claim Free Marketing Audit
          <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default DigitalMarketing;