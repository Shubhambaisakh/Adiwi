import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, HelpCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Define FAQ Item type
interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What services does AdwikIndia provide?",
    answer:
      "AdwikIndia provides complete digital solutions including Digital Marketing, Website Development, Branding & Designing, Social Media Management, SEO, Paid Ads, and Application Development.",
  },
  {
    question: "Do you work with local businesses in Bhopal?",
    answer:
      "Yes, we specialize in helping local businesses in Bhopal and across India grow through result-driven digital strategies and performance marketing.",
  },
  {
    question: "How long does it take to see marketing results?",
    answer:
      "Results depend on the service type. Paid ads can show results within days, while SEO and branding typically take 2–4 months for strong, sustainable growth.",
  },
  {
    question: "Do you offer customized marketing packages?",
    answer:
      "Absolutely. Every business is unique, and we design custom strategies and pricing plans based on your goals, competition, and industry.",
  },
  {
    question: "How can I get started with AdwikIndia?",
    answer:
      "You can contact us via our Contact page or email us directly. Our team will schedule a free consultation and suggest the best roadmap for your growth.",
  },
];

const Faq: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  /* ---------------- GSAP REVEAL ---------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".faq-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- ACCORDION ANIMATION ---------------- */
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (activeIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--bg-main)] text-[var(--text-main)] px-6 lg:px-20 pt-32 pb-32"
    >
      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="faq-reveal inline-flex items-center gap-2 mb-6 px-5 py-2 bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 rounded-full">
          <HelpCircle size={16} className="text-[var(--brand-orange)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-coral)]">
            Knowledge Base
          </span>
        </div>

        <h2 className="faq-reveal text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
          Got Questions? <br />
          <span className="text-[var(--brand-orange)] italic font-serif normal-case">We’ve Got Answers</span>
        </h2>

        <p className="faq-reveal text-xl text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our growth engine, engineering process, and how we
          scale digital presence.
        </p>
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="max-w-4xl mx-auto space-y-5">
        {FAQS.map((faq, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`faq-reveal border rounded-[2.5rem] transition-all duration-500 ${
                isActive 
                ? "bg-[var(--bg-secondary)] border-[var(--brand-orange)]/30 shadow-xl shadow-orange-500/5" 
                : "bg-[var(--bg-main)] border-[var(--border-light)] hover:border-[var(--brand-orange)]/40 shadow-sm"
              }`}
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between gap-6 p-8 text-left focus:outline-none"
              >
                <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors uppercase ${isActive ? "text-[var(--brand-orange)]" : "text-[var(--text-main)]"}`}>
                  {faq.question}
                </h3>

                <span className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive 
                  ? "bg-[var(--brand-orange)] text-white rotate-180 shadow-lg" 
                  : "bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                }`}>
                  {isActive ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* ANSWER */}
              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="overflow-hidden px-8"
                style={{ height: i === 0 ? "auto" : 0, opacity: i === 0 ? 1 : 0 }}
              >
                <p className="pb-10 text-[var(--text-secondary)] font-medium leading-relaxed text-lg border-t border-[var(--border-light)] pt-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <div className="mt-24 text-center">
        <button className="inline-flex items-center gap-4 bg-[var(--text-main)] text-white px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[var(--brand-orange)] hover:scale-105 active:scale-95 transition-all">
          Still have questions? Consult Our Team
        </button>
      </div>
    </section>
  );
};

export default Faq;