import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Quote, Star, ChevronLeft, ChevronRight, Asterisk } from "lucide-react";

gsap.registerPlugin(Draggable);

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, Bhopal Tech Solutions",
    text: "AdwikIndia transformed our digital presence. Their MERN stack expertise helped us scale our user base by 300% in under six months.",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Marketing Director, Creative Hub",
    text: "The performance marketing results were immediate. We saw a 4.5X ROAS on our Meta campaigns within the first month of partnering.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Founder, Singh Logistics",
    text: "Highly professional and technically sound. They built a custom inventory app that integrated perfectly with our existing legacy systems.",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "E-commerce Manager, Luxe Decor",
    text: "Their headless commerce approach gave our store the speed we needed to lower our cart abandonment rates significantly.",
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Initialize Draggable
    Draggable.create(slider, {
      type: "x",
      bounds: containerRef.current,
      edgeResistance: 0.65,
      snap: {
        x: (value) => Math.round(value / 480) * 480, // Matches card width + gap
      },
    });

    // Reveal Animation
    gsap.from(".testi-card", {
      opacity: 0,
      x: 100,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: slider,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden" style={{ backgroundColor: "var(--bg-main)" }}>
      
      {/* Brand Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none opacity-10" 
           style={{ backgroundColor: "var(--teal)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-[140px] rounded-full pointer-events-none opacity-10" 
           style={{ backgroundColor: "var(--cyan)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "var(--text-main)" }}>
                Social Proof
              </span>
            </div>
            <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.05]" style={{ color: "var(--text-main)" }}>
              What Our <br /> 
              <span style={{ color: "var(--teal)" }} className="italic font-serif">Partners</span> Say.
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                    style={{ borderColor: "rgba(var(--navy-rgb), 0.1)", color: "var(--text-main)" }}>
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)", color: "var(--teal)" }}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* DRAGGABLE SLIDER */}
        <div ref={containerRef} className="cursor-grab active:cursor-grabbing overflow-visible">
          <div ref={sliderRef} className="flex gap-8 w-max">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="testi-card w-[350px] md:w-[450px] p-10 border rounded-[3rem] group transition-all duration-500 shadow-xl"
                style={{ 
                  backgroundColor: "var(--bg-offset)", 
                  borderColor: "rgba(var(--navy-rgb), 0.05)" 
                }}
              >
                <Quote className="mb-8 group-hover:scale-110 transition-transform opacity-20" 
                       size={40} style={{ color: "var(--teal)" }} />
                
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 italic" 
                   style={{ color: "var(--text-main)" }}>
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 border-t pt-8" 
                     style={{ borderColor: "rgba(var(--navy-rgb), 0.1)" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg"
                       style={{ backgroundColor: "var(--navy)", color: "var(--teal)" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: "var(--text-main)" }}>{t.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60" 
                       style={{ color: "var(--text-main)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;