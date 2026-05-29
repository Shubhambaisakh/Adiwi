import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "../../components/EnquiryPopup";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  ShieldCheck,
  Gauge,
  Search,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Star,
  Briefcase,
  Cpu,
  Zap,
  Layers,
  Users,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Palette,
  Server,
  Lock,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Websites = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // ---------- Portfolio Data ----------
  const portfolioItems = [
    {
      title: "E‑commerce Store",
      category: "WooCommerce",
      image: "https://images.unsplash.com/photo-1522204523234-8729aaebc24f?w=800&auto=format",
      description: "High‑converting fashion store with custom product filters."
    },
    {
      title: "Real Estate Portal",
      category: "React + Node",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
      description: "Property listing platform with map integration and advanced search."
    },
    {
      title: "SaaS Dashboard",
      category: "Next.js + Tailwind",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
      description: "Analytics dashboard for marketing agencies with real‑time data."
    },
    {
      title: "Healthcare Portal",
      category: "Custom Web App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
      description: "Patient management system with secure appointment booking."
    }
  ];

  // ---------- Tech Stack Data ----------
  const techStack = [
    { icon: <Code2 />, name: "React / Next.js" },
    { icon: <Zap />, name: "Node.js / Express" },
    { icon: <Layers />, name: "Tailwind CSS" },
    { icon: <Server />, name: "MongoDB / MySQL" },
    { icon: <Globe />, name: "WordPress / WooCommerce" },
    { icon: <Smartphone />, name: "PWA / Mobile‑first" },
    { icon: <Lock />, name: "SSL / HTTPS" },
    { icon: <Rocket />, name: "Vercel / Netlify" }
  ];

  // ---------- Testimonials ----------
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Founder, TechStart",
      content: "AdwikIndia delivered a blazing‑fast website that increased our conversions by 40%. Highly professional team.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head, EcoLiving",
      content: "The attention to detail and SEO optimization helped us rank #1 for our main keywords. Outstanding work!",
      rating: 5
    },
    {
      name: "Amit Verma",
      role: "CTO, FinEdge",
      content: "They built a complex web application with seamless API integrations. Will definitely work with them again.",
      rating: 5
    }
  ];

  // ---------- Process Steps ----------
  const processSteps = [
    { icon: <Search />, title: "Discovery", desc: "We analyse your business goals and target audience." },
    { icon: <Palette />, title: "Design", desc: "Wireframing and UI/UX design with modern aesthetics." },
    { icon: <Code2 />, title: "Development", desc: "Clean, scalable code with performance best practices." },
    { icon: <Rocket />, title: "Launch", desc: "Deployment, testing, and ongoing support." }
  ];

  useEffect(() => {
    document.title = "Website Development Company in India | Custom Websites - AdwikIndia";
  }, []);

  // ---------- GSAP Animations ----------
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal sections on scroll (fade + up)
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          y: 60,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Parallax effect for hero image
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

      // Animate tech stack icons with stagger
      techRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.from(ref, {
            scale: 0,
            rotation: 360,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 90%"
            }
          });
        }
      });

      // Floating animation for tech stack (continuous)
      techRefs.current.forEach((ref) => {
        if (ref) {
          gsap.to(ref, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });

      // Staggered fade-in for pricing cards
      gsap.from(".pricing-card", {
        y: 100,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 80%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  // ---------- Handlers ----------
  const goContact = () => navigate("/contact");
  const goPortfolio = () => navigate("/portfolio");

  const scrollContact = () => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });

  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="hero-section relative pt-48 pb-12 px-6 lg:px-20 bg-[var(--bg-main)] text-[var(--text-main)] overflow-hidden">
        {/* Brand Decorative Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-orange)] opacity-[0.03] blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="reveal-section">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 rounded-full mb-8">
              <Code2 size={16} className="text-[var(--brand-orange)]" />
              <span className="text-[10px] text-[var(--brand-coral)] font-black uppercase tracking-[0.4em]">
                Engineered Performance India
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-[var(--text-main)] leading-[0.95] tracking-tighter mb-8 uppercase">
              Custom Web <br />
              <span className="text-[var(--brand-orange)] italic font-serif normal-case">Engineering.</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-lg mb-10 leading-relaxed font-medium">
              Adwik India builds high‑performance systems and conversion‑focused digital 
              platforms engineered for sub-second speeds, ironclad security, 
              and explosive growth.
            </p>
            
            <button
              onClick={() => setOpen(true)}
              className="px-12 py-6 bg-[var(--brand-orange)] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[var(--brand-coral)] transition shadow-2xl shadow-orange-500/20 active:scale-95"
            >
              Start Your Engine
            </button>
          </div>

          <div className="reveal-section relative">
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-4 bg-[var(--brand-orange)] opacity-[0.05] blur-3xl rounded-full" />
            
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format"
              className="hero-image relative rounded-[3.5rem] shadow-2xl border border-[var(--border-light)] grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Adwik India Custom Web Engineering"
            />
          </div>
        </div>
      </section>

    {/* CORE FEATURES */}
      <section className="py-32 px-6 lg:px-20 reveal-section bg-[var(--bg-main)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Gauge size={32} />,
              t: "Performance Tuned",
              d: "Websites engineered for Core Web Vitals with sub-second loading and performance-first code architecture."
            },
            {
              icon: <ShieldCheck size={32} />,
              t: "Secure Infrastructure",
              d: "Ironclad security protocols including encrypted APIs, secure auth, and proactive vulnerability monitoring."
            },
            {
              icon: <MonitorSmartphone size={32} />,
              t: "Fluid UI Engineering",
              d: "High-performance responsive systems ensuring a seamless conversion experience on every digital viewport."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group p-12 bg-[var(--bg-secondary)] rounded-[3.5rem] border border-[var(--border-light)] shadow-sm hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container with subtle brand styling */}
              <div className="w-16 h-16 bg-[var(--bg-main)] rounded-[1.25rem] flex items-center justify-center text-[var(--brand-orange)] mb-8 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-[var(--text-main)]">
                {item.t}
              </h3>
              
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SLIDER */}
<section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-16 space-y-3">
      <div className="inline-flex items-center justify-center p-3 bg-[var(--teal)]/10 rounded-2xl text-[var(--teal)] mb-2 transition-transform duration-300 hover:rotate-12">
        <Briefcase size={32} />
      </div>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
        Recent Projects
      </h2>
      <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto font-medium">
        Explore some of our finest work – from e‑commerce to custom web apps.
      </p>
    </div>

    {/* Slider Container */}
    <div className="relative group/slider max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[var(--card-bg)] transform transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
        <div
          className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
        >
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="min-w-full grid md:grid-cols-12 overflow-hidden group">
              
              {/* Image Column */}
              <div className="md:col-span-7 relative overflow-hidden h-72 sm:h-96 md:h-[500px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Column */}
              <div className="md:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
                <span className="text-[var(--teal)] text-xs uppercase tracking-[0.2em] font-extrabold bg-[var(--teal)]/10 px-3 py-1.5 rounded-full self-start mb-4">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-[var(--text-primary)] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 font-medium">
                  {item.description}
                </p>
                
                <button
                  onClick={goPortfolio}
                  className="self-start px-8 py-4 bg-[var(--teal)] hover:bg-[var(--teal-hover,var(--teal))] text-white rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-[var(--teal)]/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[var(--teal)]/30 active:translate-y-0"
                >
                  View Case Study 
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (Visible over card on desktop hover / always present on mobile) */}
      <button
        onClick={prevPortfolio}
        aria-label="Previous project"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-[var(--text-primary)] border border-neutral-200/50 dark:border-neutral-800/50 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      
      <button
        onClick={nextPortfolio}
        aria-label="Next project"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-[var(--text-primary)] border border-neutral-200/50 dark:border-neutral-800/50 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </div>

    {/* Modern Active-Bar Pagination Dots */}
    <div className="flex justify-center items-center gap-2.5 mt-10">
      {portfolioItems.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setPortfolioIndex(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
            idx === portfolioIndex 
              ? "w-8 bg-[var(--teal)]" 
              : "w-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
          }`}
        />
      ))}
    </div>

  </div>
</section>

      {/* ANIMATED TECH STACK */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <Cpu className="mx-auto text-[var(--teal)] mb-4" size={48} />
          <h2 className="text-4xl font-black mb-4">Our Tech Stack</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-16">
            We use cutting‑edge technologies to build fast, scalable, and secure websites.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, i) => (
              <div
                key={i}
                ref={(el) => (techRefs.current[i] = el)}
                className="flex flex-col items-center p-8 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] hover:shadow-xl transition-shadow"
              >
                <div className="text-[var(--teal)] w-12 h-12 mb-4">{tech.icon}</div>
                <span className="font-bold text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Our Process</h2>
          <p className="text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16">
            A transparent, collaborative approach that ensures your project succeeds.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-24 h-24 mx-auto bg-[var(--teal)]/10 rounded-full flex items-center justify-center text-[var(--teal)] mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black mb-2">{step.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-4 text-[var(--teal)]" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto">
          <Users className="mx-auto text-[var(--teal)] mb-4" size={48} />
          <h2 className="text-4xl font-black text-center mb-4">Client Success Stories</h2>
          <p className="text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16">
            Don't take our word for it – hear from our happy clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] italic mb-6">"{t.content}"</p>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-[var(--text-secondary)]">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ARCHITECTURE */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] text-center reveal-section">
        <Search className="mx-auto text-[var(--teal)] mb-8" size={60} />
        <h2 className="text-4xl font-black mb-6">SEO Optimized Website Architecture</h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Semantic HTML structure, optimized URLs, schema markup, and high Core Web Vitals 
          scores ensure strong Google search rankings.
        </p>
      </section>

      {/* PRICING */}
      <section className="pricing-section py-32 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-6">Website Development Pricing Plans</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Affordable website development packages for startups, businesses, and enterprise platforms.
          </p>
        </div>
       <div className="grid md:grid-cols-3 gap-10">
  {[
    {
      title: "Starter Website",
      price: "₹21,999",
      timeline: "10–15 Days",
      features: [
        "Up to 5 Pages Website",
        "Premium Theme Design",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form + WhatsApp Button",
        "Google Map Integration",
        "1 Year Free Domain",
        "Free SSL Certificate",
        "Basic Hosting Included",
        "1 Revision Included",
        "30 Days Free Support"
      ]
    },
    {
      title: "Business Website",
      price: "₹29,999",
      timeline: "25–30 Days",
      highlight: true,
      features: [
        "Up to 10 Pages Website",
        "Custom UI Design",
        "Mobile + Tablet Optimization",
        "Advanced SEO Optimization",
        "WhatsApp Chat Integration",
        "Blog Setup + Admin Panel",
        "Google Analytics + Search Console",
        "Speed Optimization",
        "Lead Capture Forms",
        "1 Year Domain + Hosting",
        "Daily Backup System",
        "2–3 Revisions Included",
        "60 Days Free Support"
      ]
    },
    {
      title: "Premium Website",
      price: "₹44,999",
      timeline: "7–10 Days",
      features: [
        "30–60 Pages Website",
        "Fully Custom UI/UX Design",
        "Advanced Animations",
        "High Speed Optimization (90+ Score)",
        "Advanced SEO + Schema Setup",
        "Lead Generation Funnel",
        "Chatbot / WhatsApp Automation",
        "Payment Gateway Integration",
        "Blog + CMS Setup",
        "Landing Pages for Ads",
        "Premium Hosting + Domain (1 Year)",
        "Daily Backup + Security",
        "Unlimited Minor Revisions",
        "90 Days Priority Support"
      ]
    }
  ].map((pkg, i) => (
    <div
      key={i}
      className={`pricing-card p-14 rounded-[3rem] transition-all ${
        pkg.highlight
          ? "bg-[var(--navy)] text-white scale-105 shadow-2xl"
          : "bg-[var(--card-bg)] border border-[var(--border-color)]"
      }`}
    >
      <h4 className="text-2xl text-[var(--main)] font-black mb-4">{pkg.title}</h4>

      <div className="text-4xl font-black text-[var(--teal)] mb-4">
        {pkg.price}
      </div>

      <p className="text-sm mb-8 opacity-70">
        Delivery: {pkg.timeline}
      </p>

      <ul className="space-y-4 mb-10 text-sm">
        {pkg.features.map((f, idx) => (
          <li key={idx} className="flex gap-2 items-center">
            <CheckCircle2 size={16} />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setOpen(true)}
        className="w-full py-4 bg-[var(--teal)] text-white rounded-xl font-bold hover:bg-[var(--royal)] transition"
      >
        Get Proposal
      </button>
   
 
    </div>
  ))}
</div>
  
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--navy)] text-white text-center reveal-section">
        <h2 className="text-4xl font-black mb-6">Ready to Build Your Website?</h2>
        <p className="max-w-2xl mx-auto mb-10 text-white/70">
          Talk with our developers and start building a high‑performance website for your business.
        </p>
        <button
           onClick={() => setOpen(true)}
          className="px-10 py-5 bg-[var(--teal)] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[var(--royal)] transition"
        >
          Start Your Project
        </button>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Website Development FAQs</h2>
          {[
            {
              q: "How long does it take to build a website?",
              a: "Most business websites take 7–10 days while complex web applications can take 3–4 weeks depending on requirements."
            },
            {
              q: "Will my website be SEO optimized?",
              a: "Yes. Every website includes on‑page SEO setup, structured markup, fast loading speed, and Google indexing."
            },
            {
              q: "Do you provide ongoing maintenance?",
              a: "Absolutely. We offer monthly maintenance packages to keep your site secure, updated, and performing at its best."
            },
            {
              q: "Can I update the website myself after launch?",
              a: "Yes, we provide an easy‑to‑use CMS (like WordPress or a custom dashboard) so you can manage content without technical skills."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] mb-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 font-black flex justify-between items-center"
              >
                {item.q}
                <ChevronDown className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="p-6 pt-0 text-[var(--text-secondary)]">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
<EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {/* Hidden contact anchor for scroll */}
      <div id="contact-section" />
    </div>
  );
};

export default Websites;