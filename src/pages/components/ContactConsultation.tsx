import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, ArrowUpRight, Asterisk, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "Do You Provide Support After Project Launch?",
    a: "Absolutely. We offer dedicated post-launch maintenance, 24/7 monitoring, and periodic optimization to ensure your site continues to perform as your business grows.",
  },
  {
    q: "Do You Provide Training Or Documentation?",
    a: "Every project includes a comprehensive digital handbook and a 1-on-1 walkthrough session to ensure your team is confident managing the new platform.",
  },
  {
    q: "What Is Your Response Time?",
    a: "Our core team is based in Bhopal (IST), and we guarantee a response within 24 working hours for all standard support inquiries.",
  },
];

const ContactConsultation: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(0);

  /* -------- SCROLL REVEAL -------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".floating-bg", {
        y: 60,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* -------- ACCORDION ANIMATION -------- */
  useEffect(() => {
    accordionRefs.current.forEach((el, i) => {
      if (!el) return;
      if (active === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    });
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* FLOATING BRAND GLOWS */}
      <div className="floating-bg absolute top-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-20" 
           style={{ backgroundColor: "var(--teal)" }} />
      <div className="floating-bg absolute bottom-0 left-0 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-20" 
           style={{ backgroundColor: "var(--cyan)" }} />

      <div className="w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT FORM */}
        <div className="reveal border rounded-[3rem] p-10 lg:p-16 shadow-2xl relative overflow-hidden"
             style={{ backgroundColor: "var(--bg-offset)", borderColor: "rgba(var(--navy-rgb), 0.1)" }}>

          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={80} style={{ color: "var(--teal)" }} />
          </div>

          <h3 className="text-3xl font-black mb-3 tracking-tight" style={{ color: "var(--text-main)" }}>
            Free Consultation
          </h3>

          <p className="mb-10 font-medium opacity-70" style={{ color: "var(--text-main)" }}>
            Let’s discuss how we can turn your digital vision into measurable growth.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email" placeholder="john@company.com" />
            </div>
            <Input label="Subject" placeholder="How can we help?" />

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black ml-4" style={{ color: "var(--text-main)" }}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full border px-6 py-4 rounded-2xl focus:outline-none focus:border-[var(--teal)] transition-all resize-none"
                style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)", borderColor: "rgba(var(--navy-rgb), 0.1)" }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-white py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-lg transition-all duration-500"
              style={{ backgroundColor: "var(--navy)", color: "var(--white)" }}
            >
              Request a Call Back
            </motion.button>
          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-start">

          <div className="reveal flex items-center gap-3 mb-4">
            <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
            <span className="text-xs uppercase tracking-[0.4em] font-black" style={{ color: "var(--text-main)" }}>
              Direct Contact
            </span>
          </div>

          <h2 className="reveal text-[2rem] md:text-[3rem] font-bold leading-[1.05] mb-10" style={{ color: "var(--text-main)" }}>
            Let’s Make Your Website <br />
            <span style={{ color: "var(--teal)" }} className="italic font-serif font-medium">
              Work Smarter
            </span>
          </h2>

          {/* FAQ ACCORDION */}
          <div className="reveal w-full space-y-5 mb-12">
            {faqs.map((item, i) => {
              const open = active === i;
              return (
                <div
                  key={i}
                  className="rounded-[2rem] border transition-all duration-500 overflow-hidden"
                  style={{ 
                    backgroundColor: open ? "var(--bg-offset)" : "transparent", 
                    borderColor: open ? "var(--teal)" : "rgba(var(--navy-rgb), 0.1)" 
                  }}
                >
                  <button
                    onClick={() => setActive(open ? null : i)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left"
                  >
                    <span className="text-lg font-bold" style={{ color: open ? "var(--text-main)" : "var(--muted)" }}>
                      {item.q}
                    </span>

                    <span
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${
                        open ? "rotate-45" : ""
                      }`}
                      style={{ 
                        backgroundColor: open ? "var(--navy)" : "rgba(var(--navy-rgb), 0.05)",
                        color: open ? "var(--teal)" : "var(--text-main)" 
                      }}
                    >
                      <Plus size={20} strokeWidth={3} />
                    </span>
                  </button>

                  <div
                    ref={(el) => (accordionRefs.current[i] = el)}
                    className="px-8 overflow-hidden h-0 opacity-0"
                  >
                    <p className="pb-8 leading-relaxed font-medium opacity-70" style={{ color: "var(--text-main)" }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="reveal group flex items-center gap-6 text-white pl-10 pr-2 py-2 rounded-full font-black uppercase text-xs tracking-widest shadow-lg"
            style={{ backgroundColor: "var(--teal)" }}
          >
            Chat with Experts
            <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500"
                 style={{ backgroundColor: "var(--navy)" }}>
              <ArrowUpRight size={22} strokeWidth={3} />
            </div>
          </motion.button>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
      `}</style>
    </section>
  );
};

const Input = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest font-black ml-4" style={{ color: "var(--text-main)" }}>
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border px-6 py-4 rounded-2xl focus:outline-none focus:border-[var(--teal)] transition-all"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)", borderColor: "rgba(var(--navy-rgb), 0.1)" }}
    />
  </div>
);

export default ContactConsultation;