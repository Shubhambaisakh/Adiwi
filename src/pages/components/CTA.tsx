import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  Asterisk
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const magneticBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* SCROLL REVEAL */
      gsap.from(".cta-reveal", {
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

      /* SECTION PIN */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: 1
      });

      /* FLOATING GRADIENT */
      gsap.to(".floating-gradient", {
        y: 80,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      /* MOUSE GLOW TRACK */
      const moveGlow = (e: MouseEvent) => {
        if (!sectionRef.current || !blobRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(blobRef.current, {
          x,
          y,
          duration: 1.2,
          ease: "power3.out"
        });
      };

      sectionRef.current?.addEventListener("mousemove", moveGlow);

      /* MAGNETIC BUTTON */
      const btn = magneticBtn.current;

      const magneticMove = (e: MouseEvent) => {
        if (!btn) return;

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3
        });
      };

      const magneticLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.4)"
        });
      };

      btn?.addEventListener("mousemove", magneticMove);
      btn?.addEventListener("mouseleave", magneticLeave);

      return () => {
        sectionRef.current?.removeEventListener("mousemove", moveGlow);
        btn?.removeEventListener("mousemove", magneticMove);
        btn?.removeEventListener("mouseleave", magneticLeave);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* FLOATING GRADIENT */}
      <div
        className="floating-gradient absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] blur-[150px] rounded-full opacity-30"
        style={{ backgroundColor: "var(--cyan)" }}
      />

      {/* CURSOR GLOW */}
      <div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] blur-[130px] rounded-full opacity-20 pointer-events-none"
        style={{
          backgroundColor: "var(--teal)",
          transform: "translate(-50%,-50%)"
        }}
      />

      <div className="relative z-10 px-6 lg:px-24 text-center">

        {/* LABEL */}
        <div className="cta-reveal flex justify-center items-center gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-teal-500/15">
            <Asterisk
              size={24}
              className="animate-spin-slow"
              style={{ color: "var(--teal)" }}
            />
          </div>

          <span className="text-[12px] uppercase tracking-[0.6em] font-black text-teal-400">
            Ready to Scale?
          </span>
        </div>

        {/* TITLE */}
        <h2 className="cta-reveal text-[2rem] md:text-[3rem] font-bold text-white leading-tight">
          LET’S START A
          <span className="italic font-serif text-teal-400">
            {" "}PROJECT TOGETHER
          </span>
        </h2>

        {/* CTA BUTTONS */}
        <div className="cta-reveal flex flex-col md:flex-row justify-center gap-6 my-14">

          <motion.button
            ref={magneticBtn}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-6 text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: "var(--teal)" }}
          >
            <span className="relative z-10 group-hover:text-[var(--navy)] transition-colors">
              Get Started Now
            </span>

            <div
              className="relative z-10 p-3 rounded-full group-hover:rotate-45 transition-all"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <ArrowUpRight size={20} />
            </div>

            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white/20 transition"
          >
            <MessageCircle size={20} className="text-teal-400" />
            Free Consultation
          </motion.button>
        </div>

        {/* CONTACT BAR */}
        <div className="cta-reveal grid md:grid-cols-3 gap-10 pt-16 border-t border-white/10">

          <ContactItem icon={<Phone size={20} />} label="Call Us" value="+91 90390 49691" />

          <ContactItem icon={<Mail size={20} />} label="Email Us" value="hello@adwikindia.com" />

          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  className="w-10 h-10 rounded-full border-2"
                  style={{ borderColor: "var(--navy)" }}
                />
              ))}
            </div>

            <p className="text-white/60 text-xs font-medium text-left">
              Join <span className="text-white font-black">200+</span>
              <br />
              companies growing with us
            </p>
          </div>

        </div>
      </div>

      <style>{`
      .animate-spin-slow{
        animation:spin 18s linear infinite
      }
      `}</style>
    </section>
  );
};

const ContactItem = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-center gap-4 group cursor-pointer">

    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition">
      {icon}
    </div>

    <div className="text-left">
      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
        {label}
      </p>

      <p className="text-white font-bold group-hover:text-teal-400 transition">
        {value}
      </p>
    </div>

  </div>
);

export default CTA;