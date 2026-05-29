import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  Layers,
  Fingerprint,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layout,
  Target,
  Loader2,
  Lock,
  ShieldCheck,
  Globe,
  Users,
  Star,
  Briefcase,
  Camera,
  PenTool,
  Zap,
  ChevronLeft,
  ChevronRight,
  Heart,
  Trophy,
  TrendingUp,
  Cpu,
  Database,
  Mail,
  Phone,
  MapPin,
  Award
} from "lucide-react";

import brandingDesign from "../../assets/images/branding-design.jpg";
import { useNavigate } from "react-router-dom";

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

const BrandingDesigning: React.FC = () => {
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
    { value: "250+", label: "Brands Transformed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Industry Awards" },
    { value: "5+", label: "Years of Excellence" }
  ];

  const designServices = [
    {
      title: "Brand Identity",
      desc: "Professional logo design and color systems to establish a strong brand presence.",
      icon: <Fingerprint size={30} />
    },
    {
      title: "Business Collateral",
      desc: "Business cards, letterheads and marketing assets designed for brand consistency.",
      icon: <Layers size={30} />
    },
    {
      title: "Digital Assets",
      desc: "Vector files, social media kits and brand style guides for scalable growth.",
      icon: <Layout size={30} />
    }
  ];

  const whyBranding = [
    {
      title: "First Impressions",
      desc: "Your brand is often the first interaction potential customers have with your business."
    },
    {
      title: "Trust & Credibility",
      desc: "A professional brand builds trust and positions you as an authority in your industry."
    },
    {
      title: "Emotional Connection",
      desc: "Great branding creates an emotional bond, turning customers into loyal advocates."
    }
  ];

  const portfolioItems = [
    {
      title: "EcoLiving",
      category: "Sustainable Brand",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format",
      description: "Complete brand identity including logo, packaging, and digital assets for an eco-friendly startup."
    },
    {
      title: "FinEdge",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
      description: "Modern, trustworthy branding for a financial technology platform."
    },
    {
      title: "UrbanCart",
      category: "E‑commerce",
      image: "https://images.unsplash.com/photo-1522204523234-8729aaebc24f?w=800&auto=format",
      description: "Playful yet professional brand identity for a hyperlocal delivery service."
    },
    {
      title: "MediFlow",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
      description: "Clean, calming brand design for a digital health platform."
    }
  ];

  const processSteps = [
    { icon: <Target />, title: "Discovery", desc: "Understand your vision, audience, and market position." },
    { icon: <PenTool />, title: "Concept", desc: "Brainstorm and sketch initial ideas & mood boards." },
    { icon: <Layers />, title: "Design", desc: "Create refined designs with feedback loops." },
    { icon: <Zap />, title: "Deliver", desc: "Provide final files, style guides, and launch support." }
  ];

  const testimonials = [
    {
      name: "Anjali Mehta",
      role: "Founder, EcoLiving",
      content: "AdwikIndia transformed our vision into a stunning brand identity. The response from customers has been amazing!",
      rating: 5
    },
    {
      name: "Rohan Desai",
      role: "CEO, FinEdge",
      content: "Professional, creative, and detail-oriented. They delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head, UrbanCart",
      content: "The branding kit they created gave us a consistent look across all channels. Highly recommended.",
      rating: 5
    }
  ];

  const pricingPackages = [
    {
      name: "Starter Branding",
      price: "₹4,999",
      target: "Perfect for startups & small businesses",
      items: [
        "Logo Design (2 Concepts)",
        "PNG & JPG Files",
        "Business Card Design",
        "Social Media Profile Logo",
        "Color Palette Selection"
      ]
    },
    {
      name: "Business Branding",
      price: "₹9,999",
      focus: true,
      target: "Perfect for growing businesses",
      items: [
        "Logo Design (3 Concepts)",
        "Vector Files Included",
        "Letterhead Design",
        "Social Media Cover & Profile",
        "Brand Colors & Font System"
      ]
    },
    {
      name: "Premium Branding",
      price: "₹14,999",
      target: "Perfect for professional brands",
      items: [
        "Logo Design (4 Concepts)",
        "SVG / Vector / PNG Files",
        "Complete Social Media Kit",
        "Brand Style Guide",
        "Business Card + Letterhead"
      ]
    }
  ];

  const faqItems = [
    {
      q: "How long does the branding process take?",
      a: "Typically 2-4 weeks depending on the package and number of revisions. We'll provide a clear timeline during our discovery call."
    },
    {
      q: "What files will I receive?",
      a: "You'll receive all final files in multiple formats including PNG, JPG, SVG, and AI/EPS vector files."
    },
    {
      q: "Do you offer unlimited revisions?",
      a: "Each package includes a set number of revision rounds. We can accommodate additional revisions at a nominal fee."
    },
    {
      q: "Can I trademark the logo?",
      a: "Yes, all designs are original and we provide ownership rights. We recommend consulting a legal expert for trademark registration."
    }
  ];

  const tools = [
    { icon: <Cpu />, name: "Adobe Illustrator" },
    { icon: <Layers />, name: "Photoshop" },
    { icon: <Database />, name: "Figma" },
    { icon: <Zap />, name: "After Effects" },
    { icon: <Globe />, name: "Webflow" },
    { icon: <PenTool />, name: "Procreate" }
  ];

  // ---------- Floating animation for tech stack (optional) ----------
  useEffect(() => {
    techRefs.current.forEach((ref, i) => {
      if (ref) {
        // Simple floating animation using Framer Motion could be applied directly in JSX
      }
    });
  }, []);

  return (
    <div
      className="font-sans transition-colors duration-300 overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      {/* 1️⃣ HERO SECTION */}
      <section
        className="relative mt-12 pt-32  py-24 px-6 lg:px-20 text-white overflow-hidden"
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
                Adwik India Brand Studio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Identity That <br />
              <span style={{ color: "var(--cyan)" }}>Defines Power</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              We design powerful brand identities that help businesses stand out, build trust and create lasting impressions.
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-xs uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: "var(--cyan)" }} />
                NDA Protected
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} style={{ color: "var(--teal)" }} />
                Secure Payments
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} style={{ color: "var(--cyan)" }} />
                Global Delivery
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
                  Start Your Branding <ArrowRight size={18} />
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
              src= {brandingDesign}
              className="rounded-[3rem] shadow-2xl h-[450px] relative z-10 border-4 border-white/10"
              alt="Branding Studio"
            />
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ TRUST BADGES / STATS */}
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
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Design Excellence</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Combining creative design with business strategy to build brands that stand out.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {designServices.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-3xl border transition-all duration-300"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--teal)" }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-main)" }}>{service.title}</h3>
                  <p className="opacity-70" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
                  <div className="flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: "var(--teal)" }}>
                    Learn More <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 4️⃣ WHY BRANDING MATTERS */}
      <SectionFadeIn delay={0.1}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Why <span style={{ color: "var(--teal)" }}>Branding</span> Matters
              </h2>
              <div className="space-y-6">
                {whyBranding.map((item, i) => (
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
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format"
                className="rounded-[3rem] shadow-2xl"
                alt="Branding Impact"
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
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Our Work</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Real brands we've transformed with strategic design.
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
                      <img src={item.image} alt={item.title} className="h- md:h-auto object-cover w-full" />
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

      {/* 6️⃣ PROCESS */}
      <SectionFadeIn delay={0.3}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">Our Process</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              A transparent, collaborative approach to bring your brand to life.
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

      {/* 7️⃣ BRAND IDENTITY PILLARS */}
      <SectionFadeIn delay={0.4}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              The Pillars of <span style={{ color: "var(--teal)" }}>Strong Identity</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              We focus on the core elements that make a brand unforgettable.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Fingerprint size={32} />, t: "Logo & Symbol", d: "Memorable mark that represents your essence." },
                { icon: <Layers size={32} />, t: "Color Palette", d: "Psychologically resonant colors that evoke emotion." },
                { icon: <PenTool size={32} />, t: "Typography", d: "Fonts that communicate your personality." },
                { icon: <Camera size={32} />, t: "Imagery", d: "Consistent visual style across all assets." },
                { icon: <Zap size={32} />, t: "Voice & Tone", d: "How you speak to your audience." },
                { icon: <Globe size={32} />, t: "Brand Experience", d: "Every touchpoint, from website to packaging." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl border"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--bg-secondary)", color: "var(--teal)" }}>
                    {item.icon}
                  </div>
                  <h4 className="font-black text-xl mb-2">{item.t}</h4>
                  <p style={{ color: "var(--text-secondary)" }}>{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 8️⃣ PRICING */}
      <SectionFadeIn delay={0.5}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Branding Packages</h2>
            <p className="opacity-70" style={{ color: "var(--text-secondary)" }}>
              Flexible branding packages for businesses at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, i) => (
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
                </div>
                <p className={`text-xs mb-6 ${pkg.focus ? "text-white/60" : "opacity-60"}`}>
                  {pkg.target}
                </p>
                <ul className="space-y-4 mb-8">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <CheckCircle2 size={18} color="#6BBF59" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-semibold transition"
                  onClick={() => setOpen(true)}
                  style={{
                    backgroundColor: pkg.focus ? "var(--teal)" : "var(--teal)",
                    color: "white"
                  }}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionFadeIn>
  {/* enquirypopup */}
              <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {/* 9️⃣ TESTIMONIALS */}
      <SectionFadeIn delay={0.6}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <Users className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">Client Love</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Don't just take our word for it – hear from our clients.
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

      {/* 🔟 CASE STUDIES / SUCCESS STORIES */}
      <SectionFadeIn delay={0.7}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Trophy size={48} className="mb-6" style={{ color: "var(--teal)" }} />
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Success <span style={{ color: "var(--teal)" }}>Stories</span>
              </h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                See how we helped brands achieve remarkable growth through strategic branding.
              </p>
              <ul className="space-y-4">
                {[
                  "300% increase in brand recognition for EcoLiving",
                  "5x customer engagement for FinEdge after rebrand",
                  "Featured in leading design publications"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format" className="rounded-3xl shadow-lg" alt="Case study 1" />
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format" className="rounded-3xl shadow-lg mt-8" alt="Case study 2" />
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 1️⃣1️⃣ TOOLS WE USE */}
      <SectionFadeIn delay={0.8}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <Cpu className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Tools We Use</h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Industry-standard software to deliver pixel-perfect designs.
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

    
    </div>
  );
};

export default BrandingDesigning;