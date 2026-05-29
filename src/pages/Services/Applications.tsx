import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  Rocket,
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2,
  MonitorSmartphone,
  ChevronDown,  
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  Globe,
  Smartphone,
  Code2,
  Loader2,
  Lock,
  Sparkles,
  Briefcase,
  Users,
  TrendingUp,
  Database,
  Cloud,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Package,
  Headphones,
  Gift,
  Mail,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";


// ---------- Reusable Scroll‑Reveal Component ----------
const SectionFadeIn = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();
  const goContact = () => navigate("/contact");
  const scrollContact = () => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });




  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
      }}
    >
      {children}
    </motion.div>
  );
};

const Applications = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // Portfolio slider state
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // Form submission handler (simulated)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  // ---------- Data Arrays ----------
  const pillars = [
    { icon: <MonitorSmartphone />, title: "Adaptive UI", desc: "Fluid layouts optimized for every possible touch-point." },
    { icon: <ShieldCheck />, title: "Bank‑Grade Security", desc: "Advanced encryption protocols for absolute data integrity." },
    { icon: <Layers />, title: "Microservices", desc: "Decoupled architecture for seamless future scalability." },
    { icon: <Cpu />, title: "AI Integration", desc: "Smart features powered by machine learning and NLP." },
  ];

  const services = [
    { t: "Native iOS", d: "Swift‑based apps designed for Apple's high‑performance ecosystem.", icon: <Smartphone /> },
    { t: "Android Core", d: "Kotlin‑powered solutions reaching 2.5B+ global devices.", icon: <Code2 /> },
    { t: "Flutter Cross", d: "Consistent UI across mobile, web, and desktop from one codebase.", icon: <Zap /> },
    { t: "PWA 2.0", d: "The best of web and mobile combined for lightning‑fast loads.", icon: <Globe /> },
    { t: "Admin Cloud", d: "Powerful backend dashboards to manage your entire business.", icon: <Layers /> },
    { t: "IoT Control", d: "Smart device integration and real‑time hardware connectivity.", icon: <Cpu /> }
  ];

  


  // New data for added sections
  const portfolioItems = [
    {
      title: "HealthTrack",
      category: "Flutter App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
      description: "Fitness & wellness app with AI workout recommendations and real‑time progress tracking."
    },
    {
      title: "UrbanCart",
      category: "React Native",
      image: "https://images.unsplash.com/photo-1522204523234-8729aaebc24f?w=800&auto=format",
      description: "Hyperlocal e‑commerce app with live order tracking and wallet integration."
    },
    {
      title: "FinEdge",
      category: "Kotlin Multiplatform",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
      description: "Personal finance manager with biometric login and expense analytics."
    },
    {
      title: "MediFlow",
      category: "SwiftUI",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
      description: "Doctor appointment booking system with video consultation and EHR integration."
    }
  ];

  const techStack = [
    { icon: <Smartphone />, name: "React Native" },
    { icon: <Zap />, name: "Flutter" },
    { icon: <Code2 />, name: "Swift / Kotlin" },
    { icon: <Cloud />, name: "Firebase" },
    { icon: <Database />, name: "Node.js / MongoDB" },
    { icon: <Lock />, name: "OAuth / JWT" },
    { icon: <Cpu />, name: "TensorFlow Lite" },
    { icon: <BarChart3 />, name: "Mixpanel / Amplitude" }
  ];

  const testimonials = [
    {
      name: "Ankit Mehta",
      role: "CEO, HealthTrack",
      content: "AdwikIndia delivered our fitness app ahead of schedule. The user engagement has tripled since launch.",
      rating: 5
    },
    {
      name: "Priya Kapoor",
      role: "Founder, UrbanCart",
      content: "Their team’s expertise in React Native made our cross‑platform launch seamless. Highly recommend!",
      rating: 5
    },
    {
      name: "Rohan Desai",
      role: "CTO, FinEdge",
      content: "They built a secure, scalable fintech app with complex financial calculations. Exceptional work.",
      rating: 5
    }
  ];

  const processSteps = [
    { icon: <Rocket />, title: "Discovery", desc: "Understand your vision, market, and technical requirements." },
    { icon: <Layers />, title: "Design", desc: "Wireframes, prototypes, and pixel‑perfect UI/UX." },
    { icon: <Code2 />, title: "Development", desc: "Agile sprints with continuous integration and testing." },
    { icon: <Award />, title: "Launch & Scale", desc: "Deployment to stores, monitoring, and post‑launch support." }
  ];

  const integrations = [
    // { icon: <CreditCard />, t: "Payment Gateways" },
    { icon: <Mail />, t: "Email / Push" },
    { icon: <Database />, t: "Cloud Sync" },
    { icon: <BarChart3 />, t: "Analytics" },
    { icon: <Headphones />, t: "Customer Support" },
    { icon: <Gift />, t: "Loyalty Programs" },
    { icon: <Package />, t: "Inventory" },
    { icon: <Globe />, t: "Multi‑language" }
  ];

  // Portfolio navigation
  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  // Additional floating animation for tech stack (if needed) – handled by framer
  useEffect(() => {
    // Tech stack items will be animated individually via whileHover
  }, []);

  return (
    <div className="font-sans transition-colors duration-300" style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}>
      
      {/* 1️⃣ HERO SECTION (existing) */}
      <section className="relative pt-40 pb-24 px-6 lg:px-20 overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
        {/* Animated blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 blur-[120px] rounded-full animate-blob" style={{ background: "var(--cyan)" }}></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 blur-[100px] rounded-full animate-blob animation-delay-2000" style={{ background: "var(--teal)" }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
              animate={{
                y: [null, "-30%"],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Star size={16} style={{ color: "var(--cyan)" }} className="fill-current animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-white/90">#1 App Developers in Bhopal</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05]">
              Building <br />
              <span style={{ color: "var(--cyan)" }} className="inline-block hover:scale-105 transition-transform duration-300">Digital Empires</span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-lg leading-relaxed">
              We engineer high‑performance mobile applications that turn users into advocates and ideas into scalable businesses.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React Native", "Flutter", "Swift", "Firebase", "Node.js"].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="px-4 py-2 rounded-lg text-xs font-bold border border-white/10 bg-white/5 text-white/60 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
      
            </div>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group max-w-md ml-auto"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse" style={{ background: "var(--gradient-primary)" }}></div>
            <div className="relative p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl" style={{ backgroundColor: "var(--nav-sticky)" }}>
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <Lock size={20} className="text-cyan-400" />
                Start Your Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-xl font-black uppercase tracking-widest transition-all text-white shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ background: "var(--gradient-secondary)" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    "Get Free Blueprint"
                  )}
                </motion.button>
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-center text-green-400 font-bold uppercase tracking-widest"
                    >
                      ✓ Check your email for the blueprint!
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="text-[10px] text-center text-white/40 font-bold uppercase tracking-widest mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} className="animate-pulse" /> Safe • Secure • NDA Guaranteed
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ PILLARS SECTION */}
      <SectionFadeIn>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card p-10 group"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors"
                    style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--cyan)" }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-black text-xl mb-4" style={{ color: "var(--text-main)" }}>{item.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 3️⃣ PORTFOLIO SLIDER (NEW) */}
      <SectionFadeIn delay={0.1}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-main)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Briefcase className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
              <h2 className="text-4xl font-black mb-4" style={{ color: "var(--text-main)" }}>Our App Portfolio</h2>
              <p className="max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Real‑world applications we’ve built for startups and enterprises.
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
                          onClick={() => alert("Case study coming soon!")}
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

      {/* 4️⃣ TECH STACK (NEW) */}
      <SectionFadeIn delay={0.2}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto text-center">
            <Cpu className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl font-black mb-4" style={{ color: "var(--text-main)" }}>Our Technology Stack</h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              We choose the right tools for each project to ensure performance, scalability, and developer joy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (techRefs.current[i] = el)}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center p-8 rounded-3xl border transition-shadow"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="w-12 h-12 mb-4" style={{ color: "var(--teal)" }}>{tech.icon}</div>
                  <span className="font-bold text-sm" style={{ color: "var(--text-main)" }}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 5️⃣ PROCESS SECTION (NEW) */}
      <SectionFadeIn delay={0.3}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-main)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-4" style={{ color: "var(--text-main)" }}>How We Build</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              A transparent, iterative process that keeps you involved at every stage.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--teal)" }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-black mb-2" style={{ color: "var(--text-main)" }}>{step.title}</h3>
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

      {/* 6️⃣ SERVICE GRID (existing, moved after process) */}
      <SectionFadeIn delay={0.4}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: "var(--text-main)" }}>Core Specializations</h2>
              <div className="w-20 h-2 rounded-full" style={{ backgroundColor: "var(--cyan)" }}></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-transparent rounded-[3rem] overflow-hidden border" style={{ borderColor: "var(--border-color)" }}>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-12 transition-all group border relative"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-light)" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--cyan)" }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-2xl font-black mb-4" style={{ color: "var(--text-main)" }}>{s.t}</h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>{s.d}</p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 font-bold text-xs uppercase tracking-tighter cursor-pointer"
                    style={{ color: "var(--link-color)" }}
                  >
                    Details <ArrowRight size={14} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 7️⃣ TESTIMONIALS (NEW) */}
      <SectionFadeIn delay={0.5}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-main)" }}>
          <div className="max-w-7xl mx-auto">
            <Users className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl font-black text-center mb-4" style={{ color: "var(--text-main)" }}>Client Success Stories</h2>
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

      {/* 8️⃣ INTEGRATIONS (NEW) */}
      <SectionFadeIn delay={0.6}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto text-center">
            <Database className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl font-black mb-4" style={{ color: "var(--text-main)" }}>Seamless Integrations</h2>
            <p className="max-w-2xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>
              Connect your app with the tools you already use.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border text-center hover:shadow-lg transition"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                >
                  <div className="mb-3" style={{ color: "var(--teal)" }}>{item.icon}</div>
                  <h4 className="font-bold text-sm" style={{ color: "var(--text-main)" }}>{item.t}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 9️⃣ STATS / RESULTS (NEW) */}
      <SectionFadeIn delay={0.7}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-main)" }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <TrendingUp size={48} className="mb-6" style={{ color: "var(--teal)" }} />
              <h2 className="text-4xl font-black mb-6" style={{ color: "var(--text-main)" }}>Results That Matter</h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Our apps are built to deliver measurable business outcomes – from increased engagement to higher revenue.
              </p>
              <ul className="space-y-3">
                {[
                  "Average app store rating: 4.8+",
                  "User retention increase: 35%",
                  "Faster time‑to‑market by 40%"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span style={{ color: "var(--text-main)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-3xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
              <h3 className="text-2xl font-black mb-6" style={{ color: "var(--text-main)" }}>By The Numbers</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Engagement</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: "var(--teal)" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Crash‑free sessions</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: "var(--teal)" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>App store conversion</span>
                    <span className="font-bold">+28%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "28%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: "var(--teal)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 🔟 PRICING SECTION (existing, moved) */}
      <SectionFadeIn delay={0.8}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-black mb-4"
              style={{ color: "var(--text-main)" }}
            >
              Investment Plans
            </motion.h2>
            <p style={{ color: "var(--text-secondary)" }}>Honest pricing for world‑class engineering.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
  {[
    {
      title: "Starter Application",
      price: "₹49,999",
      timeline: "3–4 Weeks",
      features: [
        "Basic Web Application (React / Node)",
        "Up to 5 Core Features",
        "Clean UI Design (Template Based)",
        "User Login & Authentication",
        "Admin Panel (Basic)",
        "Database Setup (MongoDB / Firebase)",
        "API Integration (Basic)",
        "Responsive Design",
        "Basic Security Setup",
        "Deployment (Shared Hosting / VPS)",
        "7 Days Free Support"
      ]
    },
    {
      title: "Business Application",
      price: "₹99,999",
      timeline: "5–7 Weeks",
      highlight: true,
      features: [
        "Custom Web Application (MERN / Next.js)",
        "Advanced UI/UX Design",
        "Role-Based Admin Dashboard",
        "Advanced Database Architecture",
        "Multiple API Integrations",
        "Real-time Features (Chat / Notifications)",
        "Payment Gateway Integration",
        "Performance Optimization",
        "Advanced Security (JWT, Auth Layers)",
        "Cloud Deployment (AWS / VPS)",
        "Analytics & Tracking Setup",
        "15 Days Free Support"
      ]
    },
    {
      title: "Enterprise Application",
      price: "Custom Quote",
      timeline: "Project Based",
      features: [
        "Fully Custom Scalable Application",
        "Microservices Architecture",
        "High-Level UI/UX (Product Design)",
        "Advanced Role Management System",
        "AI / Automation Integrations",
        "Third-Party API Ecosystem",
        "Cloud Infrastructure (AWS / GCP)",
        "DevOps Setup (CI/CD Pipelines)",
        "High-Level Security & Compliance",
        "Dedicated Team (Dev + PM)",
        "Ongoing Maintenance & Support",
        "Performance & Load Optimization"
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
         <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  ))}
</div>
        </section>
      </SectionFadeIn>

      {/* 1️⃣1️⃣ FAQ SECTION (existing) */}
      <SectionFadeIn delay={0.9}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-main)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16" style={{ color: "var(--text-main)" }}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How long does a typical build take?", a: "Most MVPs launch in 8‑12 weeks. Large‑scale enterprise apps typically require 4‑6 months of development." },
                { q: "Do you offer post‑launch support?", a: "Yes, we provide 3 to 12 months of free maintenance depending on your chosen plan to ensure smooth operations." },
                { q: "Will my app be on both stores?", a: "Using Flutter and React Native, we deploy to both Apple App Store and Google Play Store simultaneously." },
                { q: "Can you help with app store optimization?", a: "Absolutely. We include ASO as part of our launch package to help your app rank higher." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ backgroundColor: openFaq === i ? "var(--card-hover)" : "var(--card-bg)" }}
                  className="rounded-[1.5rem] border overflow-hidden"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-6 font-bold flex justify-between items-center transition-colors"
                    style={{ backgroundColor: "var(--card-bg)" }}
                  >
                    <span style={{ color: "var(--text-main)" }}>{item.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "var(--cyan)" }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-6 pt-0 text-sm leading-relaxed border-t"
                          style={{ color: "var(--text-secondary)", borderColor: "var(--border-light)" }}
                        >
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 1️⃣2️⃣ FINAL CTA (NEW) */}
      <SectionFadeIn delay={1.0}>
        <section className="py-24 px-6 lg:px-20 text-center" style={{ backgroundColor: "var(--navy)" }}>
          <Rocket size={60} className="mx-auto mb-6" style={{ color: "var(--cyan)" }} />
          <h2 className="text-4xl font-black mb-6 text-white">Ready to Build Your App?</h2>
          <p className="max-w-xl mx-auto mb-10 text-white/70">
            Let’s turn your idea into a market‑ready mobile application. Get a free consultation and cost estimate today.
          </p>
          <button
            onClick={() => alert("Redirect to contact")}
            className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:scale-105 transition"
            style={{ backgroundColor: "var(--teal)", color: "white" }}
          >
            Start Your Project <ArrowRight size={18} />
          </button>
        </section>
      </SectionFadeIn>
    </div>
  );
};

export default Applications;