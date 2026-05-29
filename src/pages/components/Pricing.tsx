import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Asterisk } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricingPlan {
  name: string;
  monthly: number;
  yearly: number;
  desc: string;
  features: string[];
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Digital Presence",
    monthly: 14999,
    yearly: 149999,
    desc: "Establish a high-performance foundation for your business.",
    features: [
      "Conversion-Optimized UI (Up to 7 Pages)",
      "Technical SEO & Speed Optimization",
      "Google Business Profile Setup",
      "Basic Meta Ads Setup (1 Funnel)",
      "Essential Lead Tracking & CRM Sync",
      "24/7 Server Uptime Monitoring",
    ],
  },
  {
    name: "Growth Engine",
    monthly: 34999,
    yearly: 349999,
    desc: "Aggressive scaling for brands ready to dominate their niche.",
    featured: true,
    features: [
      "Advanced Dynamic Website (15 Pages)",
      "Content Architecture & Semantic SEO",
      "Meta & Google Performance Max Setup",
      "Marketing Automation (Email/WhatsApp)",
      "Bi-Weekly Performance Audits",
      "Premium CRO (Heatmap Analysis)",
      "Dedicated Account Executive",
    ],
  },
  {
    name: "Market Authority",
    monthly: 74999,
    yearly: 749999,
    desc: "Total market takeover through elite engineering and AI.",
    features: [
      "Custom Enterprise Web Ecosystem",
      "Multi-Channel Omni-Funnels",
      "AI-Powered Predictive Lead Scoring",
      "National PR & Authority Backlinks",
      "Full Brand Identity & Messaging",
      "Dedicated Growth Strategy Team",
      "Predictive Data Modeling",
    ],
  },
];

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-reveal", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".floating-bg", {
        y: 60,
        x: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* BRAND GLOWS */}
      <div className="floating-bg absolute top-[-10%] left-[-10%] w-[700px] h-[700px] blur-[180px] rounded-full opacity-10" 
           style={{ backgroundColor: "var(--teal)" }} />
      <div className="floating-bg absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] blur-[200px] rounded-full opacity-10" 
           style={{ backgroundColor: "var(--cyan)" }} />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="pricing-reveal text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--bg-secondary)" }}>
              <Asterisk size={20} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-black" style={{ color: "var(--text-main)" }}>
              Investment in ROI
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.05]" style={{ color: "var(--text-main)" }}>
            Growth Packages Engineered
            <br />
            <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
              To Multiply Revenue
            </span>
          </h2>

          {/* TOGGLE */}
          <div className="mt-10 inline-flex p-1.5 rounded-full border bg-[var(--bg-secondary)] border-[var(--border-light)]">
            <button
              onClick={() => setYearly(false)}
              className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                !yearly ? "bg-[var(--navy)] text-white shadow-xl" : "text-[var(--text-main)]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                yearly ? "bg-[var(--navy)] text-white shadow-xl" : "text-[var(--text-main)]"
              }`}
            >
              Yearly <span className="ml-1 opacity-70" style={{ color: "var(--teal)" }}>(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              yearly={yearly}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CARD ---------------- */

const PricingCard: React.FC<{
  plan: PricingPlan;
  yearly: boolean;
  index: number;
}> = ({ plan, yearly, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const price = yearly ? plan.yearly : plan.monthly;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const move = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 8,
        rotateX: y * -8,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const reset = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        ref={cardRef}
        className={`relative rounded-[3rem] p-10 flex flex-col h-full border transition-all duration-500 shadow-2xl ${
          plan.featured ? "scale-105 z-10" : ""
        }`}
        style={{ 
          backgroundColor: plan.featured ? "var(--navy)" : "var(--card-bg)", 
          borderColor: plan.featured ? "var(--teal)" : "var(--border-light)",
          transformStyle: "preserve-3d" 
        }}
      >
        {plan.featured && (
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-white px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-2xl bg-[var(--teal)] whitespace-nowrap">
            MOST POPULAR
          </span>
        )}

        <h3 className={`text-2xl font-black mb-3 ${plan.featured ? "text-white" : "text-[var(--text-main)]"}`}>
          {plan.name}
        </h3>
        <p className={`mb-8 text-sm opacity-60 font-medium ${plan.featured ? "text-white" : "text-[var(--text-main)]"}`}>
          {plan.desc}
        </p>

        <div className="mb-2">
          <span className={`text-5xl font-black tracking-tight ${plan.featured ? "text-white" : "text-[var(--text-main)]"}`}>
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span className={`ml-2 text-sm opacity-50 ${plan.featured ? "text-white" : "text-[var(--text-main)]"}`}>
            /{yearly ? "yr" : "mo"}
          </span>
        </div>

        <p className={`text-[10px] uppercase font-bold tracking-widest opacity-40 mb-10 ${plan.featured ? "text-white" : "text-[var(--text-main)]"}`}>
          Billed {yearly ? "annually" : "monthly"}
        </p>

        <ul className="space-y-4 flex-grow">
          {plan.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-4 text-sm font-medium leading-relaxed">
              <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[var(--teal)]/10 text-[var(--teal)]">
                <Check size={12} strokeWidth={4} />
              </div>
              <span className={plan.featured ? "text-white" : "text-[var(--text-main)]"}>{f}</span>
            </li>
          ))}
        </ul>

        <button
          className="mt-12 group w-full flex items-center justify-between pl-8 pr-2 py-2 rounded-full font-black uppercase text-[10px] tracking-widest transition-all duration-500"
          style={{ 
            backgroundColor: plan.featured ? "var(--teal)" : "var(--navy)",
            color: "white"
          }}
        >
          Activate Growth
          <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 ${
            plan.featured ? "bg-[var(--navy)]" : "bg-[var(--teal)]"
          }`}>
            <ArrowUpRight size={18} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default Pricing;