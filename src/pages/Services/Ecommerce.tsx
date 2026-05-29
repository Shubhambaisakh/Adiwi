import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "../../components/EnquiryPopup";

import {
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
  Zap,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Database,
  ArrowRight,
  Star,
  Briefcase,
  Cpu,
  Layers,
  Users,
  Globe,
  Lock,
  Rocket,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Package,
  Headphones,
  Gift
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Ecommerce = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);
  // ---------- Portfolio Data ----------
    const goPortfolio = () => navigate("/portfolio");
    
  const portfolioItems = [
    {
      title: "Fashion Boutique",
      category: "Shopify Plus",
      image: "https://images.unsplash.com/photo-1522204523234-8729aaebc24f?w=800&auto=format",
      description: "High‑end fashion store with custom theme and AR try‑on."
    },
    {
      title: "Organic Grocery",
      category: "WooCommerce",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format",
      description: "Subscription‑based grocery delivery with real‑time inventory."
    },
    {
      title: "Electronics Hub",
      category: "Custom MERN",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format",
      description: "Multi‑vendor marketplace with AI product recommendations."
    },
    {
      title: "Handicrafts Store",
      category: "BigCommerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
      description: "Global shipping, multiple currencies, and handmade product focus."
    }
  ];

  // ---------- Tech Stack ----------
  const techStack = [
    { icon: <ShoppingBag size={28} />, name: "Shopify" },
    { icon: <Package size={28} />, name: "WooCommerce" },
    { icon: <Cpu size={28} />, name: "MERN Stack" },
    { icon: <Database size={28} />, name: "Headless CMS" },
    { icon: <CreditCard size={28} />, name: "Razorpay/Stripe" },
    { icon: <Truck size={28} />, name: "Shiprocket" },
    { icon: <BarChart3 size={28} />, name: "Google Analytics" },
    { icon: <ShieldCheck size={28} />, name: "SSL/PCI DSS" }
  ];

  // ---------- Testimonials ----------
  const testimonials = [
    {
      name: "Neha Gupta",
      role: "Founder, StyleCove",
      content: "AdwikIndia built our Shopify store from scratch. Sales increased by 150% in the first three months!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "CEO, GreenBasket",
      content: "Seamless integration with our inventory system. The team understood our requirements perfectly.",
      rating: 5
    },
    {
      name: "Anjali Mehra",
      role: "Marketing Head, GadgetZone",
      content: "The custom MERN solution they delivered is lightning fast and has all the features we needed.",
      rating: 5
    }
  ];

  // ---------- Process Steps ----------
  const processSteps = [
    { icon: <Sparkles />, title: "Discovery", desc: "Understand your products, audience, and business goals." },
    { icon: <Layers />, title: "Design", desc: "Wireframing and high‑fidelity UI/UX for maximum conversions." },
    { icon: <Database />, title: "Development", desc: "Scalable architecture with payment/shipping integration." },
    { icon: <Rocket />, title: "Launch", desc: "Testing, deployment, and post‑launch support." }
  ];

  // ---------- GSAP Animations ----------
  useEffect(() => {
    document.title = "Ecommerce Website Development Company India | AdwikIndia";
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal sections on scroll
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

      // Parallax effect on hero image
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

      // Tech stack animations: spin + scale on scroll, then float
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

  const goContact = () => navigate("/contact");

  const prevPortfolio = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };
  const nextPortfolio = () => {
    setPortfolioIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] pt-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="hero-section relative pt-32 pb-24 px-6 lg:px-20 bg-[var(--navy)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-section">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
              <Sparkles size={16} />
              <span className="text-[11px] uppercase tracking-[0.4em]">Ecommerce Engineering</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white font-black leading-[1.05] mb-8">
              High‑Performance <br />
              <span className="text-[var(--cyan)]">Ecommerce Stores</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mb-10 leading-relaxed">
              AdwikIndia builds fast, scalable ecommerce platforms designed to increase conversions,
              automate operations, and grow online sales.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="px-10 py-5 bg-[var(--teal)] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[var(--cyan)] transition"
            >
              Launch My Store
            </button>
          </div>
          <div className="reveal-section">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format"
              className="hero-image rounded-[3rem] shadow-2xl"
              alt="Ecommerce Development"
            />
          </div>
        </div>
      </section>
  {/* enquirypopup */}
              <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {/* CORE FEATURES */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={32} />,
              t: "Lightning Fast Performance",
              d: "Optimized ecommerce architecture delivering ultra‑fast browsing and checkout."
            },
            {
              icon: <ShieldCheck size={32} />,
              t: "Secure Payment Systems",
              d: "Razorpay, Stripe and PayPal payment gateways integrated with full encryption."
            },
            {
              icon: <Smartphone size={32} />,
              t: "Mobile Commerce",
              d: "Mobile‑first design optimized for shopping on smartphones."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-12 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center text-[var(--teal)] mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{item.t}</h3>
              <p className="text-[var(--text-secondary)]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SLIDER */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="mx-auto text-[var(--teal)] mb-4" size={48} />
            <h2 className="text-4xl font-black mb-4">Our Ecommerce Projects</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Real stores we’ve built for brands across industries.
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
                      <span className="text-[var(--teal)] text-sm uppercase tracking-widest font-bold">
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-black mt-4 mb-3">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] mb-8">{item.description}</p>
                      <button
                        onClick={goPortfolio}
                        className="self-start px-8 py-4 bg-[var(--teal)] text-white rounded-xl font-bold flex items-center gap-2"
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

      {/* TECH STACK */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <Cpu className="mx-auto text-[var(--teal)] mb-4" size={48} />
          <h2 className="text-4xl font-black mb-4">Our Ecommerce Tech Stack</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-16">
            We use the best platforms and tools to build robust online stores.
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
          <h2 className="text-4xl font-black text-center mb-4">Our Ecommerce Development Process</h2>
          <p className="text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16">
            From concept to launch – a transparent, results‑driven approach.
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
          <h2 className="text-4xl font-black text-center mb-4">What Our Clients Say</h2>
          <p className="text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16">
            Trusted by brands to deliver exceptional ecommerce experiences.
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

      {/* INTEGRATIONS (expanded) */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Seamless Integrations</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Connect your store with the tools you already use.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <CreditCard size={24} />, t: "Payment Gateways" },
              { icon: <Truck size={24} />, t: "Shipping & Logistics" },
              { icon: <Database size={24} />, t: "Inventory Sync" },
              { icon: <BarChart3 size={24} />, t: "Analytics & Tracking" },
              { icon: <Headphones size={24} />, t: "CRM & Support" },
              { icon: <Gift size={24} />, t: "Loyalty Programs" },
              // { icon: <Mail size={24} />, t: "Email Marketing" },
              { icon: <Globe size={24} />, t: "Multi‑currency" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] text-center hover:shadow-lg transition">
                <div className="text-[var(--teal)] mb-3">{item.icon}</div>
                <h4 className="font-bold text-sm">{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & PERFORMANCE */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Globe className="text-[var(--teal)] mb-6" size={48} />
            <h2 className="text-4xl font-black mb-6">SEO‑Ready & Blazing Fast</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Our ecommerce stores are built with search engines in mind – semantic HTML, 
              fast load times, schema markup, and mobile optimization ensure you rank higher 
              and convert better.
            </p>
            <ul className="space-y-3">
              {[
                "Core Web Vitals optimized",
                "Automated XML sitemaps",
                "Product schema markup",
                "CDN & image optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--card-bg)] p-10 rounded-3xl border border-[var(--border-color)]">
            <TrendingUp size={40} className="text-[var(--teal)] mb-4" />
            <h3 className="text-2xl font-black mb-2">Average Client Results</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Conversion rate increase</span>
                  <span className="font-bold">+45%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-[var(--teal)] h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Page load speed</span>
                  <span className="font-bold">1.2s</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-[var(--teal)] h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>SEO ranking improvement</span>
                  <span className="font-bold">+60%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-[var(--teal)] h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section py-32 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal-section">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-6">Ecommerce Website Packages</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Scalable ecommerce development solutions for startups, brands, and enterprise businesses.
          </p>
        </div>
     <div className="grid md:grid-cols-3 gap-10">
  {[
    {
      title: "Quick Launch Store",
      price: "₹59,999",
      timeline: "2–3 Weeks",
      features: [
        "Shopify / WooCommerce Setup",
        "Up to 50 Products Upload",
        "Premium Theme Customization",
        "Mobile Responsive Design",
        "Payment Gateway Integration",
        "Basic SEO Setup",
        "Shipping Setup",
        "Order Management System",
        "WhatsApp Chat Integration",
        "Basic Speed Optimization",
        "1 Year Domain + Hosting",
        "Free SSL Certificate",
        "7 Days Free Support"
      ]
    },
    {
      title: "Growth Pro Store",
      price: "₹1,49,999",
      timeline: "4–6 Weeks",
      highlight: true,
      features: [
        "Custom MERN Ecommerce Website",
        "Unlimited Products",
        "Custom UI/UX Design",
        "Admin Dashboard (Full Control)",
        "Advanced Product Filters",
        "Cart & Checkout Optimization",
        "Abandoned Cart Recovery",
        "Coupon & Discount System",
        "Payment Gateway + COD",
        "Advanced SEO Optimization",
        "Google Analytics + Tracking",
        "Email & WhatsApp Automation",
        "High Speed Optimization",
        "Cloud Hosting Setup",
        "15 Days Free Support"
      ]
    },
    {
      title: "Enterprise Commerce",
      price: "Custom Quote",
      timeline: "Project Based",
      features: [
        "Headless Ecommerce Architecture",
        "Multi-Vendor Marketplace",
        "Custom Backend Development",
        "ERP / CRM Integration",
        "Inventory Management System",
        "Advanced Analytics Dashboard",
        "AI-Based Product Recommendations",
        "Multi-Language & Multi-Currency",
        "AWS / Cloud Infrastructure",
        "High Scalability & Security",
        "Dedicated Project Manager",
        "Priority Support & Maintenance"
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

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Ecommerce FAQs</h2>
          {[
            {
              q: "Which ecommerce platform is best for my business?",
              a: "For startups, Shopify works best due to its ease of use. For larger stores with custom needs, we recommend a custom MERN solution."
            },
            {
              q: "Do you integrate payment gateways?",
              a: "Yes, we integrate Razorpay, Stripe, PayU, PayPal, and international gateways like Braintree and Authorize.net."
            },
            {
              q: "Can you migrate my existing ecommerce store?",
              a: "Absolutely. We migrate stores from WooCommerce, Magento, BigCommerce, and Shopify without losing SEO data or traffic."
            },
            {
              q: "Do you offer maintenance after launch?",
              a: "Yes, we provide monthly maintenance packages that include security updates, backups, and performance monitoring."
            }
          ].map((item, i) => (
            <div key={i} className="border border-[var(--border-color)] rounded-2xl mb-4">
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

      {/* FINAL CTA */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--navy)] text-white text-center">
        <ShoppingBag size={60} className="mx-auto mb-6 text-[var(--cyan)]" />
        <h2 className="text-4xl font-black mb-6">Ready to Launch Your Ecommerce Store?</h2>
        <p className="max-w-xl mx-auto mb-10 text-white/70">
          Start selling online with a high‑performance ecommerce website built by AdwikIndia developers.
        </p>
        <button
          onClick={goContact}
          className="px-10 py-5 bg-[var(--teal)] rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 mx-auto hover:bg-[var(--cyan)] transition"
        >
          Start My Ecommerce Project
          <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default Ecommerce;