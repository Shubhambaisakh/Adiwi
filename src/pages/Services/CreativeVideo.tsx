import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  Video,
  Film,
  Camera,
  Clapperboard,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Target,
  Loader2,
  Lock,
  ShieldCheck,
  Globe,
  Users,
  Star,
  Briefcase,
  Zap,
  ChevronLeft,
  ChevronRight,
  Heart,
  Trophy,
  TrendingUp,
  Cpu,
  Music,
  Edit3,
  PlayCircle,
  Award,
  Mail,
  Phone,
  MapPin,
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

const CreativeVideo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // ---------- Handlers ----------
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
    { value: "500+", label: "Videos Produced" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industry Awards" },
    { value: "8+", label: "Years of Excellence" }
  ];

  const services = [
    {
      icon: <Film size={30} />,
      title: "Commercial Ads",
      desc: "High-impact commercials for TV, social media, and digital campaigns."
    },
    {
      icon: <Clapperboard size={30} />,
      title: "Corporate Videos",
      desc: "Brand stories, company profiles, and internal communication videos."
    },
    {
      icon: <Zap size={30} />,
      title: "Motion Graphics",
      desc: "Animated explainers, kinetic typography, and visual effects."
    },
    {
      icon: <Camera size={30} />,
      title: "Product Videos",
      desc: "Showcase your products with cinematic quality and detail."
    },
    {
      icon: <Users size={30} />,
      title: "Testimonials",
      desc: "Authentic customer stories that build trust and credibility."
    },
    {
      icon: <Music size={30} />,
      title: "Music Videos",
      desc: "Creative visuals for artists and bands."
    }
  ];

  const whyVideo = [
    {
      title: "Higher Engagement",
      desc: "Videos capture attention faster and keep viewers engaged longer than text or images."
    },
    {
      title: "Boost Conversions",
      desc: "Including a video on your landing page can increase conversions by up to 80%."
    },
    {
      title: "Emotional Connection",
      desc: "Video combines sight, sound, and motion to create a powerful emotional bond."
    }
  ];

  const portfolioItems = [
    {
      title: "Nike ",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1536240474400-95dad987e71a?w=800&auto=format",
      description: "High-energy commercial for Nike's latest sneaker launch."
    },
    {
      title: "TechCorp Explainer",
      category: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format",
      description: "Animated explainer video for a B2B SaaS platform."
    },
    {
      title: "Organic Harvest",
      category: "Product Video",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format",
      description: "Cinematic product shoot for an organic food brand."
    },
    {
      title: "City Arts Festival",
      category: "Event Recap",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a0c3?w=800&auto=format",
      description: "Highlights video for a multi-day arts festival."
    }
  ];

  const processSteps = [
    { icon: <Target />, title: "Discovery", desc: "Understand your vision, audience, and goals." },
    { icon: <Edit3 />, title: "Scripting", desc: "Craft a compelling narrative and storyboard." },
    { icon: <Camera />, title: "Production", desc: "Filming with professional equipment and crew." },
    { icon: <Layers />, title: "Post-Production", desc: "Editing, color grading, sound design, and VFX." }
  ];

  const testimonials = [
    {
      name: "Amit Khanna",
      role: "Marketing Head, Nike India",
      content: "AdwikIndia produced a stunning commercial that exceeded our expectations. The team was professional and creative.",
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: "Founder, Organic Harvest",
      content: "Our product video went viral! The production quality and storytelling were top-notch.",
      rating: 5
    },
    {
      name: "Rohan Mehra",
      role: "CEO, TechCorp",
      content: "The explainer video they created simplified our complex product and boosted sign-ups by 40%.",
      rating: 5
    }
  ];

  // ----- Updated Pricing Packages -----
  const ugcPricing = [
    {
      name: "Basic UGC Video",
      price: "₹1,999",
      target: "Best for product promotions & simple ads",
      items: [
        "1 Short UGC Video (20–30 sec)",
        "Basic Script Idea",
        "Mobile Friendly Vertical Video",
        "Basic Editing",
        "Text Overlay",
        "Background Music"
      ],
      badge: "📱 Perfect for Instagram Reels & Meta Ads"
    },
    {
      name: "Premium UGC Video",
      price: "₹2,499",
      focus: true,
      target: "Best for high-converting ad creatives",
      items: [
        "1 UGC Video (30–45 sec)",
        "Script + Hook Line",
        "Professional Editing",
        "Text Animations",
        "Background Music",
        "Product Highlight Shots"
      ],
      badge: "🎯 Best for Facebook & Instagram Ads"
    }
  ];

  const cgiPricing = [
    {
      name: "Basic CGI Video",
      price: "₹1,499",
      target: "Best for product animation & creative ads",
      items: [
        "1 Short CGI Video (10–15 sec)",
        "Product Animation",
        "Motion Graphics",
        "Background Effects",
        "HD Export"
      ],
      badge: "🎯 Best for Social Media Ads & Product Promotion"
    },
    {
      name: "Premium CGI Video",
      price: "₹2,199",
      focus: true,
      target: "Best for high attention-grabbing ads",
      items: [
        "1 CGI Video (15–20 sec)",
        "Advanced Motion Graphics",
        "Product Focus Animation",
        "Text Animation",
        "HD Quality Export"
      ],
      badge: "🎯 Best for high attention-grabbing ads"
    }
  ];

  const faqItems = [
    {
      q: "How long does a typical video take?",
      a: "Simple videos can take 2-3 weeks; complex productions may take 4-6 weeks. We'll provide a timeline during discovery."
    },
    {
      q: "Do you provide the script?",
      a: "Yes, we offer scriptwriting as part of all our packages. You can also provide your own script."
    },
    {
      q: "What equipment do you use?",
      a: "We use professional cinema cameras (RED, ARRI), lighting, and audio gear to ensure broadcast-quality output."
    },
    {
      q: "Can you shoot at our location?",
      a: "Absolutely. We can shoot on-location anywhere in India or internationally (travel expenses may apply)."
    }
  ];

  const tools = [
    { icon: <Cpu />, name: "RED Cameras" },
    { icon: <Film />, name: "ARRI" },
    { icon: <Edit3 />, name: "DaVinci Resolve" },
    { icon: <Layers />, name: "After Effects" },
    { icon: <Music />, name: "Pro Tools" },
    { icon: <Zap />, name: "Cinema 4D" }
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
                Adwik India Creative Studio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Visual Stories <br />
              <span style={{ color: "var(--cyan)" }}>That Inspire</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              We craft compelling videos that capture attention, evoke emotion, and drive action. From commercials to corporate films, we bring your story to life.
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-xs uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: "var(--cyan)" }} />
                Broadcast Quality
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} style={{ color: "var(--teal)" }} />
                Confidential
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} style={{ color: "var(--cyan)" }} />
                Global Delivery
              </div>
            </div>

            {/* <motion.button
              onClick={handleGetStarted}
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
                  Start Your Project <ArrowRight size={18} />
                </>
              )}
            </motion.button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-cyan-500 to-teal-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1492618195913-95d2897f3c5d?w=800&auto=format"
              className="rounded-[3rem] shadow-2xl relative z-10 border-4 border-white/10"
              alt="Video Production"
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
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Our Video Services</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                From concept to final cut – we handle every aspect of video production.
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

      {/* 4️⃣ WHY VIDEO MATTERS */}
      <SectionFadeIn delay={0.1}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Why <span style={{ color: "var(--teal)" }}>Video</span> Matters
              </h2>
              <div className="space-y-6">
                {whyVideo.map((item, i) => (
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
                src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format"
                className="rounded-[3rem] shadow-2xl"
                alt="Video Impact"
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
                A selection of our finest video projects.
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
                          className="self-start px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition"
                          style={{ backgroundColor: "var(--teal)", color: "white" }}
                        >
                          Watch Video <PlayCircle size={18} />
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

      {/* 6️⃣ PRODUCTION PROCESS */}
      <SectionFadeIn delay={0.3}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">Our Production Process</h2>
            <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              A seamless workflow from concept to delivery.
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

      {/* 7️⃣ VIDEO TYPES / NICHES */}
      <SectionFadeIn delay={0.4}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              We Create <span style={{ color: "var(--teal)" }}>All Types</span> of Videos
            </h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Whatever your story, we have the expertise to tell it.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Film size={32} />, t: "Commercials", d: "TV spots, online ads, and brand films." },
                { icon: <Users size={32} />, t: "Corporate", d: "Internal comms, training, and recruitment." },
                { icon: <Zap size={32} />, t: "Explainer", d: "Animated or live-action product demos." },
                { icon: <Camera size={32} />, t: "Product", d: "Cinematic product showcases." },
                { icon: <Heart size={32} />, t: "Testimonials", d: "Authentic customer stories." },
                { icon: <Music size={32} />, t: "Music Videos", d: "Creative visuals for artists." }
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

      {/* 8️⃣ UGC VIDEO PRICING */}
      <SectionFadeIn delay={0.5}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">UGC Video Production</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                User-generated style videos perfect for social media ads.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {ugcPricing.map((pkg, i) => (
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
                  <div className="text-xs font-semibold mt-4 text-center" style={{ color: pkg.focus ? "var(--cyan)" : "var(--teal)" }}>
                    {pkg.badge}
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="w-full py-3 rounded-xl font-semibold transition mt-6"
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

      {/* 9️⃣ CGI VIDEO PRICING */}
      <SectionFadeIn delay={0.6}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">CGI / Animation Videos</h2>
              <p className="opacity-70 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Eye-catching product animations and motion graphics.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {cgiPricing.map((pkg, i) => (
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
                  <div className="text-xs font-semibold mt-4 text-center" style={{ color: pkg.focus ? "var(--cyan)" : "var(--teal)" }}>
                    {pkg.badge}
                  </div>
                  <button
                    className="w-full py-3 rounded-xl font-semibold transition mt-6"
                      onClick={() => setOpen(true)}
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
      {/* 🔟 TESTIMONIALS */}
      <SectionFadeIn delay={0.7}>
        <section className="py-24 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
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

      {/* 1️⃣1️⃣ TOOLS & EQUIPMENT */}
      <SectionFadeIn delay={0.8}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <Cpu className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Professional Gear</h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              We use industry-leading equipment to deliver broadcast-quality videos.
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

      {/* 1️⃣2️⃣ FAQ */}
      <SectionFadeIn delay={0.9}>
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

      {/* 1️⃣3️⃣ TEAM / DIRECTORS */}
      {/* <SectionFadeIn delay={1.0}>
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <Award className="mx-auto mb-4" size={48} style={{ color: "var(--teal)" }} />
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Meet Our Directors</h2>
            <p className="max-w-2xl mx-auto mb-16" style={{ color: "var(--text-secondary)" }}>
              Award-winning filmmakers and creative leads.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Arjun Nair", role: "Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format" },
                { name: "Meera Iyer", role: "Lead Editor", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format" },
                { name: "Vikram Rathore", role: "Cinematographer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format" },
                { name: "Sanya Malhotra", role: "Motion Designer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format" }
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4" style={{ borderColor: "var(--teal)" }} />
                  <h4 className="font-black text-lg">{member.name}</h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn> */}

    
    </div>
  );
};

export default CreativeVideo;