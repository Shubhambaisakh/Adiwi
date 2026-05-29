import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  Search,
  TrendingUp,
  Globe,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap,
  ShieldCheck,
  Users,
  Star,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Award,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Loader2,
  Lock,
  Cpu,
  Edit3,
  Link2,
  FileText,
  PieChart,
  Smartphone,
  Code2,
  HardDrive,
  Share2,
  ChevronDown
} from "lucide-react";

// ---------- Reusable Scroll-Reveal Component ----------
const SectionFadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
      }}
    >
      {children}
    </motion.div>
  );
};

const SEO: React.FC = () => {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // ---------- Handlers ----------
  const goPortfolio = () => navigate("/portfolio");

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Thank you! We'll contact you shortly.");
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  // ---------- Data Arrays ----------
  const trustStats = [
    { value: "150+", label: "Websites Ranked" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "10+", label: "SEO Experts" },
    { value: "5+", label: "Years Experience" }
  ];

  const services = [
    {
      icon: <Search size={30} />,
      title: "On‑Page SEO",
      desc: "Meta tags, headers, content optimization, and internal linking."
    },
    {
      icon: <Link2 size={30} />,
      title: "Off‑Page SEO",
      desc: "High-quality backlinks, guest posting, and authority building."
    },
    {
      icon: <Code2 size={30} />,
      title: "Technical SEO",
      desc: "Site speed, mobile optimization, schema markup, and crawlability."
    },
    {
      icon: <Globe size={30} />,
      title: "Local SEO",
      desc: "Google Business Profile, local citations, and map pack rankings."
    },
    {
      icon: <FileText size={30} />,
      title: "Content Strategy",
      desc: "Keyword research, blog writing, and content optimization."
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Analytics & Reporting",
      desc: "Monthly performance reports, Google Analytics & Search Console setup."
    }
  ];

  const whySEO = [
    {
      title: "Increase Organic Traffic",
      desc: "Rank higher on search engines and attract more qualified visitors without paying for ads."
    },
    {
      title: "Build Trust & Credibility",
      desc: "Top positions on Google signal authority and reliability to potential customers."
    },
    {
      title: "Long‑Term ROI",
      desc: "SEO compounds over time – results last and grow, unlike paid ads that stop when you stop paying."
    }
  ];

  const portfolioItems = [
    {
      title: "Local Dental Clinic",
      category: "Local SEO",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format",
      description: "Ranked #1 for 15+ local keywords, 3x increase in appointment calls."
    },
    {
      title: "E‑commerce Fashion Store",
      category: "E‑commerce SEO",
      image: "https://images.unsplash.com/photo-1522204523234-8729aaebc24f?w=800&auto=format",
      description: "Organic traffic grew 250% in 8 months; revenue from search doubled."
    },
    {
      title: "B2B SaaS Platform",
      category: "Technical SEO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
      description: "Fixed crawl errors, improved Core Web Vitals, and boosted rankings for high‑value keywords."
    },
    {
      title: "Real Estate Portal",
      category: "Content SEO",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
      description: "Published optimized blogs and guides; now ranks for 500+ keywords."
    }
  ];

  const processSteps = [
    { icon: <Target />, title: "Discovery", desc: "Analyze your website, industry, and competitors." },
    { icon: <Search />, title: "Keyword Research", desc: "Identify high‑value terms your audience searches for." },
    { icon: <Zap />, title: "Optimization", desc: "On‑page, technical, and content improvements." },
    { icon: <TrendingUp />, title: "Monitoring & Reporting", desc: "Track rankings, traffic, and refine strategy." }
  ];

  const testimonials = [
    {
      name: "Rajesh Gupta",
      role: "Owner, City Dental",
      content: "AdwikIndia transformed our online presence. We now dominate local search results and get 50+ calls monthly.",
      rating: 5
    },
    {
      name: "Neha Sharma",
      role: "Marketing Head, FashionHub",
      content: "Our organic traffic has never been higher. Their SEO strategy delivered real, measurable growth.",
      rating: 5
    },
    {
      name: "Amit Verma",
      role: "CEO, RealtyPros",
      content: "They simplified SEO for us. The monthly reports are clear, and we see consistent improvement in rankings.",
      rating: 5
    }
  ];

  // ----- SEO Pricing Plans -----
  const seoPricing = [
    {
      name: "Starter SEO Plan",
      price: "₹5,999",
      target: "Best for small businesses & local SEO",
      items: [
        "Website SEO Audit",
        "On-Page SEO Setup",
        "Meta Title & Description Optimization",
        "Image Alt Tag Optimization",
        "5 Keywords Targeting",
        "Keyword Research",
        "Google Business Profile Optimization",
        "Local Listing Setup",
        "2 SEO Blog Posts / Month",
        "20 Backlinks Creation"
      ],
      report: "📊 Monthly SEO Performance Report"
    },
    {
      name: "Business SEO Plan",
      price: "₹9,999",
      focus: true,
      target: "Best for growing businesses",
      items: [
        "Complete Website SEO Audit",
        "Advanced On-Page SEO",
        "Technical SEO Setup",
        "10 Keywords Targeting",
        "Competitor Keyword Analysis",
        "4 SEO Blog Posts / Month",
        "Content Optimization",
        "40 High Quality Backlinks",
        "Internal Linking Strategy",
        "Page Speed Optimization"
      ],
      report: "📊 Detailed Monthly SEO Report"
    },
    {
      name: "Premium SEO Plan",
      price: "₹14,999",
      target: "Best for businesses who want strong Google ranking",
      items: [
        "Advanced Technical SEO",
        "Complete Website Optimization",
        "Schema Markup Setup",
        "20 Keywords Targeting",
        "Competitor SEO Strategy",
        "6 SEO Blog Posts / Month",
        "60 High Quality Backlinks",
        "Guest Posting",
        "Google Analytics Setup",
        "Google Search Console Setup",
        "Conversion Tracking"
      ],
      report: "📊 Advanced Monthly SEO Report"
    }
  ];

  const faqItems = [
    {
      q: "How long does SEO take to show results?",
      a: "Typically, you can expect to see improvements within 3‑6 months. SEO is a long‑term strategy, and results compound over time."
    },
    {
      q: "Do you guarantee #1 rankings?",
      a: "No ethical agency can guarantee #1 rankings, as search algorithms are complex and constantly changing. We guarantee our best efforts and proven methodologies."
    },
    {
      q: "Will you provide regular reports?",
      a: "Absolutely. Every plan includes monthly reports detailing keyword rankings, traffic, backlinks, and recommendations."
    },
    {
      q: "Can you work with my existing website platform?",
      a: "Yes, we work with all major platforms: WordPress, Shopify, Webflow, custom sites, etc."
    }
  ];

  const tools = [
    { icon: <Search />, name: "Ahrefs" },
    { icon: <BarChart3 />, name: "SEMrush" },
    { icon: <Globe />, name: "Google Search Console" },
    { icon: <PieChart />, name: "Google Analytics" },
    { icon: <Cpu />, name: "Screaming Frog" },
    { icon: <Share2 />, name: "Moz" }
  ];

  return (
    <div
      className="font-sans transition-colors duration-300 overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      {/* 1️⃣ HERO SECTION */}
      <section
        className="relative pt-48 pb-24 px-6 lg:px-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse animation-delay-2000" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <Sparkles size={16} style={{ color: "var(--cyan)" }} />
              <span className="text-xs uppercase tracking-widest text-white/80">
                Adwik India SEO Agency
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Dominate <br />
              <span style={{ color: "var(--cyan)" }}>Search Rankings</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              Data‑driven SEO strategies that drive organic traffic, increase visibility, and grow your revenue. From local to enterprise, we deliver measurable results.
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-xs uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: "var(--cyan)" }} />
                White‑Hat SEO
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} style={{ color: "var(--teal)" }} />
                Confidential
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} style={{ color: "var(--cyan)" }} />
                Global Reach
              </div>
            </div>

            <motion.button
              onClick={() => setOpen(true)}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-3 text-white shadow-xl"
              style={{ backgroundColor: "var(--teal)" }}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get Free SEO Audit <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-cyan-500 to-teal-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
              className="rounded-[3rem] shadow-2xl relative z-10 border-4 border-white/10"
              alt="SEO Strategy"
            />
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ TRUST STATS */}
      <SectionFadeIn>
        <section className="py-16 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-black transition-colors" style={{ color: "var(--navy)" }}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: "var(--text-secondary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 3️⃣ SERVICES */}
      <SectionFadeIn>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Our SEO Services</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Comprehensive SEO solutions tailored to your business goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl border transition-all duration-300"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--teal)" }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-main)" }}>{service.title}</h3>
                  <p className="opacity-70" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 4️⃣ WHY SEO MATTERS */}
      <SectionFadeIn delay={0.1}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Why <span style={{ color: "var(--teal)" }}>SEO</span> Matters
              </h2>
              <div className="space-y-6">
                {whySEO.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--teal)", color: "white" }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format"
                className="rounded-[3rem] shadow-2xl"
                alt="SEO Impact"
              />
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 5️⃣ PORTFOLIO SLIDER */}
      <SectionFadeIn delay={0.2}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Briefcase className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Success Stories</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Real results for real businesses.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
                >
                  {portfolioItems.map((item, idx) => (
                    <div key={idx} className="min-w-full grid md:grid-cols-2" style={{ backgroundColor: "var(--card-bg)" }}>
                      <img src={item.image} alt={item.title} className="h-80 md:h-auto object-cover w-full" />
                      <div className="p-12 flex flex-col justify-center">
                        <span className="text-sm uppercase tracking-widest font-bold" style={{ color: "var(--teal)" }}>
                          {item.category}
                        </span>
                        <h3 className="text-3xl font-black mt-4 mb-3" style={{ color: "var(--text-main)" }}>{item.title}</h3>
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
      </SectionFadeIn>

      {/* 6️⃣ SEO PROCESS */}
      <SectionFadeIn delay={0.3}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">Our SEO Process</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              A proven methodology to improve your search visibility.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center relative">
                  <div
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--teal)" }}
                  >
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
      </SectionFadeIn>

      {/* 7️⃣ SEO PRICING PLANS */}
      <SectionFadeIn delay={0.4}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">SEO Service Plans</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Transparent pricing for businesses of all sizes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {seoPricing.map((pkg, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className={`p-10 rounded-[3rem] relative transition-all duration-300 ${
                    pkg.focus ? "scale-105 shadow-2xl" : ""
                  }`}
                  style={{
                    backgroundColor: pkg.focus ? "var(--navy)" : "var(--card-bg)",
                    border: pkg.focus ? "none" : "1px solid var(--border-color)",
                    color: pkg.focus ? "white" : "var(--text-main)"
                  }}
                >
                  {pkg.focus && (
                    <div
                      className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 text-xs font-bold text-white rounded-full"
                      style={{ backgroundColor: "var(--teal)" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="text-4xl font-black mt-2" style={{ color: "var(--teal)" }}>
                    {pkg.price}
                    <span className="text-sm font-normal ml-1" style={{ color: pkg.focus ? "white/60" : "var(--text-secondary)" }}>/mo</span>
                  </div>
                  <p className={`text-xs mb-6 ${pkg.focus ? "text-white/60" : "opacity-60"}`}>
                    {pkg.target}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <CheckCircle2 size={16} color="#6BBF59" className="shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex gap-2 text-sm font-semibold mt-4" style={{ color: pkg.focus ? "var(--cyan)" : "var(--teal)" }}>
                      <CheckCircle2 size={16} color="#6BBF59" className="shrink-0 mt-0.5" />
                      {pkg.report}
                    </li>
                  </ul>
                  <button
                  onClick={() => setOpen(true)}
                    className="w-full py-3 rounded-xl font-semibold transition"
                    style={{
                      backgroundColor: "var(--teal)",
                      color: "white"
                    }}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

       {/* enquirypopup */}
              <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      {/* 8️⃣ TESTIMONIALS */}
      <SectionFadeIn delay={0.5}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <Users className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">Client Success</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Hear from businesses we've helped rank higher.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl border"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="italic mb-6" style={{ color: "var(--text-secondary)" }}>"{t.content}"</p>
                  <div className="font-bold" style={{ color: "var(--text-main)" }}>{t.name}</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>{t.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 9️⃣ TOOLS WE USE */}
      <SectionFadeIn delay={0.6}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <Cpu className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Tools We Use</h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Industry‑leading platforms for data‑driven SEO.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (techRefs.current[i] = el)}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border text-center"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="mb-3" style={{ color: "var(--teal)" }}>{tool.icon}</div>
                  <span className="font-bold text-xs">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 🔟 FAQ */}
      <SectionFadeIn delay={0.7}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              Frequently Asked <span style={{ color: "var(--teal)" }}>Questions</span>
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border overflow-hidden"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-6 font-bold flex justify-between items-center"
                    style={{ color: "var(--text-main)" }}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      size={20}
                      style={{ color: "var(--teal)" }}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-6 pt-0 text-sm border-t"
                          style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                        >
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

     
    </div>
  );
};

export default SEO;