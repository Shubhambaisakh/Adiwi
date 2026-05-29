import React, { useEffect, useRef, KeyboardEvent } from "react";
import { Plus, Asterisk, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAccordion } from "../../hooks/useAccordion"; // Ensure this hook handles height: auto or GSAP logic
import Digital from "../../assets/images/Digital-Solutions-faq.jpg";
gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Do You Provide Support After The Project Launch?",
    a: "Yes, we provide post-launch support, monitoring, and proactive optimization to ensure your digital assets stay ahead of the curve."
  },
  {
    q: "Do You Provide Training Or Documentation?",
    a: "We offer comprehensive documentation and interactive training sessions to empower your team to manage solutions effectively."
  },
  {
    q: "What Is Your Response Time For Support Issues?",
    a: "Our standard response time is within 24 hours. For enterprise clients, we offer dedicated high-priority support windows."
  },
  {
    q: "What Is Your Development Process?",
    a: "Our framework follows a data-driven path: Discovery → Strategy → Design → Development → Testing → Launch."
  },
  {
    q: "Can You Work Within Our Budget?",
    a: "Absolutely. We specialize in creating scalable solutions that prioritize high-impact features to fit your specific budgetary needs."
  }
];

const FaqSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const { activeIndex, setActiveIndex, itemsRef } = useAccordion({
    defaultIndex: 0
  });

  /* SCROLL REVEAL */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-reveal", {
        y: 60,
        opacity: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });

      gsap.to(".floating-bg", {
        y: 60,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* 3D TILT EFFECT */
  useEffect(() => {
    const card = imageRef.current;
    if (!card) return;

    const move = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 18,
        rotateX: -y * 18,
        transformPerspective: 1200,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const reset = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1,0.4)"
      });
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(activeIndex === i ? null : i);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* BRAND GLOWS */}
      <div className="floating-bg absolute top-0 right-0 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-20" 
           style={{ backgroundColor: "var(--teal)" }} />
      <div className="floating-bg absolute bottom-0 left-0 w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-10" 
           style={{ backgroundColor: "var(--cyan)" }} />

      <div className="w-full px-6 lg:px-24 grid lg:grid-cols-12 gap-20 relative z-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-5">
          <div className="faq-reveal flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--bg-secondary)" }}>
              <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: "var(--text-main)" }}>
              FAQ Section
            </span>
          </div>

          <h2 className="faq-reveal text-[2rem] md:text-[3rem] font-bold leading-[1.05]" style={{ color: "var(--text-main)" }}>
            Helping You Understand <br />
            <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
              Digital Solutions
            </span>
          </h2>

          <p className="faq-reveal mt-6 text-lg max-w-md opacity-70" style={{ color: "var(--text-main)" }}>
            Clear answers, transparent workflows, and reliable support to drive your business forward.
          </p>

          <div
            ref={imageRef}
            className="faq-reveal mt-14 relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={Digital}
              alt="AdwikIndia Support Team"
              className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
            />
            {/* Floating 3D Badge */}
            <div
              className="absolute bottom-8 left-8 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border"
              style={{ 
                transform: "translateZ(60px)", 
                backgroundColor: "var(--bg-main)",
                borderColor: "color-mix(in srgb, var(--teal) 20%, transparent)"
              }}
            >
              <div className="p-3 rounded-xl text-white" style={{ backgroundColor: "var(--navy)" }}>
                <HelpCircle size={22} style={{ color: "var(--teal)" }} />
              </div>
              <p className="font-black text-sm uppercase tracking-widest" style={{ color: "var(--text-main)" }}>
                24/7 Expert Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="lg:col-span-7 space-y-5">
          {faqs.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                ref={(el) => { if (itemsRef.current) itemsRef.current[i] = el; }}
                className="faq-reveal rounded-[2rem] border transition-all duration-500"
                style={{ 
                  backgroundColor: isActive ? "var(--bg-secondary)" : "transparent",
                  borderColor: isActive ? "var(--teal)" : "var(--border-light)"
                }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  onKeyDown={(e) => handleKey(e, i)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left group"
                >
                  <span
                    className="text-lg font-bold transition-colors"
                    style={{ color: isActive ? "var(--text-main)" : "var(--text-muted)" }}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${
                      isActive ? "rotate-45 scale-110 shadow-lg" : "group-hover:scale-110"
                    }`}
                    style={{ 
                      backgroundColor: isActive ? "var(--navy)" : "color-mix(in srgb, var(--navy) 5%, transparent)",
                      color: isActive ? "var(--teal)" : "var(--text-main)"
                    }}
                  >
                    <Plus size={22} strokeWidth={3} />
                  </span>
                </button>

                <div className={`px-8 transition-all duration-500 overflow-hidden ${isActive ? "opacity-100 pb-8" : "opacity-0 h-0"}`}>
                  <p className="leading-relaxed font-medium opacity-70" style={{ color: "var(--text-main)" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default FaqSection;