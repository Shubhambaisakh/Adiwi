import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  CheckCircle,
  Code,
  BarChart3,
  Palette,
  ArrowRight,
  ArrowUp,
  MapPin,
  Asterisk,
} from "lucide-react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Counter Animation Hook
const useCounterAnimation = (end: number, duration: number = 2000, suffix: string = "") => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      const startValue = 0;
      
      // Parse the end value (remove any non-numeric characters except decimal point)
      const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = startValue + (numericEnd - startValue) * easeOutQuart;
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(numericEnd);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration, hasAnimated]);

  // Format the display value
  const displayValue = () => {
    if (suffix === "/5") {
      return count.toFixed(1);
    } else if (suffix === "M+") {
      return Math.floor(count);
    } else {
      return Math.floor(count);
    }
  };

  return { ref, value: displayValue() };
};

const About: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Counter animations for each stat
  const stat1 = useCounterAnimation(98, 2000, "%");
  const stat2 = useCounterAnimation(250, 2500, "+");
  const stat3 = useCounterAnimation(4.9, 2000, "/5");
  const stat4 = useCounterAnimation(10, 2200, "M+");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General Reveal Animation
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // Subtle Background Parallax for the glow
      gsap.to(".decor-glow", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div ref={mainRef} className="relative bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[var(--brand-coral)] via-[var(--brand-orange)] to-[var(--brand-coral)]">
        {/* Animated Background Elements */}
        <div className="decor-glow absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blur-[140px] rounded-full opacity-30 bg-[var(--brand-orange)] pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] blur-[120px] rounded-full opacity-20 bg-white pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] blur-[100px] rounded-full opacity-25 bg-[var(--dark-base)] pointer-events-none" />
        
        {/* Floating Shapes */}
        <div className="absolute top-[15%] right-[10%] w-20 h-20 border-4 border-white/20 rounded-3xl rotate-12 animate-float" />
        <div className="absolute bottom-[25%] left-[8%] w-16 h-16 border-4 border-white/20 rounded-full animate-float-delayed" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <Sparkles size={16} className="text-white animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                Growth-Driven Digital Agency
              </span>
            </div>

            <h1 className="text-white text-[3rem] lg:text-[5rem] font-black tracking-tighter leading-[0.95] mb-8 drop-shadow-2xl">
              <span className="inline-block hover-letters">
                {"The Digital".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-300 hover:-translate-y-3 hover:scale-110 cursor-default"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <br />
              <span className="text-[var(--dark-base)] italic font-serif relative inline-block hover-letters">
                {"Growth Engine".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-300 hover:-translate-y-3 hover:scale-110 cursor-default"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-white/30 blur-sm"></span>
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-lg leading-relaxed mb-10 drop-shadow-lg">
              AdwikIndia is a premium technology partner based in <strong className="text-white">Bhopal</strong>. We engineer scalable <strong className="text-white">MERN stack</strong> architectures and high-ROI <strong className="text-white">marketing funnels</strong> that dominate the market.
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink to="/portfolio">
                <button className="px-10 py-5 bg-white text-[var(--brand-coral)] rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-4 group">
                  Explore Our Portfolio
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </NavLink>
              
              <NavLink to="/contact">
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[var(--brand-coral)] hover:scale-105 transition-all flex items-center gap-4">
                  Let's Talk
                </button>
              </NavLink>
            </div>
          </div>

          <div className="reveal relative group">
            <div className="absolute -inset-4 rounded-[4rem] opacity-40 blur-3xl bg-white group-hover:opacity-60 transition-opacity" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Digital Growth Experts at AdwikIndia"
                className="relative transition-all duration-1000 aspect-square object-cover group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-coral)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS GRID ---------------- */}
      <section className="py-24 px-6 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="inline-block hover-letters">
                {"Our Impact in Numbers".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-300 hover:-translate-y-2 hover:text-[var(--brand-orange)] cursor-default"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">Data-driven results that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stats-grid">
            {/* Stat 1 - Success Rate */}
            <div ref={stat1.ref} className="reveal p-10 rounded-[3rem] text-center bg-[var(--bg-secondary)] border border-[var(--border-light)] group hover:border-[var(--brand-orange)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">🎯</div>
              <div className="text-4xl md:text-5xl font-black mb-3 text-[var(--brand-orange)]">
                {stat1.value}%
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-50 text-[var(--text-main)]">Success Rate</p>
            </div>

            {/* Stat 2 - Projects Delivered */}
            <div ref={stat2.ref} className="reveal p-10 rounded-[3rem] text-center bg-[var(--bg-secondary)] border border-[var(--border-light)] group hover:border-[var(--brand-orange)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">🚀</div>
              <div className="text-4xl md:text-5xl font-black mb-3 text-[var(--brand-orange)]">
                {stat2.value}+
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-50 text-[var(--text-main)]">Projects Delivered</p>
            </div>

            {/* Stat 3 - Client Rating */}
            <div ref={stat3.ref} className="reveal p-10 rounded-[3rem] text-center bg-[var(--bg-secondary)] border border-[var(--border-light)] group hover:border-[var(--brand-orange)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">⭐</div>
              <div className="text-4xl md:text-5xl font-black mb-3 text-[var(--brand-orange)]">
                {stat3.value}/5
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-50 text-[var(--text-main)]">Client Rating</p>
            </div>

            {/* Stat 4 - Ad Revenue */}
            <div ref={stat4.ref} className="reveal p-10 rounded-[3rem] text-center bg-[var(--bg-secondary)] border border-[var(--border-light)] group hover:border-[var(--brand-orange)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">💰</div>
              <div className="text-4xl md:text-5xl font-black mb-3 text-[var(--brand-orange)]">
                {stat4.value}M+
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] font-black opacity-50 text-[var(--text-main)]">Ad Revenue Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VISION SECTION ---------------- */}
      <section className="py-24 px-6 lg:px-20 reveal">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Asterisk size={20} className="text-[var(--brand-orange)] animate-spin-slow" />
              <span className="text-xs uppercase tracking-[0.4em] font-black text-[var(--brand-coral)]">Our Mission</span>
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black leading-tight">
              We Bridge the Gap <br />
              Between <span className="text-[var(--brand-orange)] italic font-serif">Code & Commerce.</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              At AdwikIndia, we believe that speed is a feature and data is the only truth. We help businesses modernize their tech stack and automate their growth through precision-engineered digital products.
            </p>
            
            <div className="grid gap-6 mt-10">
              <div className="flex gap-5 p-6 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] hover:bg-[var(--white)] transition-colors">
                <CheckCircle className="text-[var(--brand-orange)] shrink-0" size={24} />
                <p className="text-sm font-bold">Custom MERN architectures optimized for sub-second page loads.</p>
              </div>
              <div className="flex gap-5 p-6 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] hover:bg-[var(--white)] transition-colors">
                <CheckCircle className="text-[var(--brand-orange)] shrink-0" size={24} />
                <p className="text-sm font-bold">Performance Marketing strategies that maximize Customer Lifetime Value.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
               alt="Strategic planning at AdwikIndia"
             />
          </div>
        </div>
      </section>

      {/* ---------------- EXPERTISE GRID ---------------- */}
      <section className="py-24 px-6 lg:px-20 bg-[var(--bg-secondary)] reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black uppercase tracking-tighter">
              <span className="inline-block hover-letters">
                {"Our Mastery".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-[var(--brand-orange)] cursor-default"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: "Web Engineering", desc: "Enterprise-grade React and Node.js solutions built for massive scalability and speed." },
              { icon: <BarChart3 />, title: "Growth & SEO", desc: "Data-driven strategies and Meta/Google Ads that dominate search results and ROI." },
              { icon: <Palette />, title: "UI/UX Strategy", desc: "User-centric design systems focused on psychological triggers and high conversion." }
            ].map((item, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-[var(--bg-main)] border border-[var(--border-light)] hover:border-[var(--brand-orange)] transition-all group shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[var(--brand-coral)] text-white flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LOCAL SEO SECTION ---------------- */}
      <section className="py-24 px-6 lg:px-20 reveal">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[var(--bg-secondary)]">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
               alt="AdwikIndia Bhopal Head Office"
               className="grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-none">
              Bhopal Born. <br />
              <span className="text-[var(--brand-orange)]">Global Reach.</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              Strategically located in the heart of India, our Bhopal HQ serves as the innovation hub for clients across the globe. We combine local engineering talent with world-class execution standards.
            </p>
            <div className="flex items-center gap-6 p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-light)] w-fit group">
              <div className="p-4 bg-[var(--brand-orange)] text-white rounded-2xl group-hover:scale-110 transition-transform">
                 <MapPin size={32} />
              </div>
              <div>
                <p className="font-black text-[var(--text-main)] uppercase tracking-widest text-sm">Global HQ</p>
                <p className="text-sm text-[var(--text-secondary)]">M-4 B-15 Patel Nagar, Bhopal, MP 462016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-32 px-6 text-center bg-[var(--text-main)] text-white reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-[var(--brand-orange)] mb-8 leading-none">
            <span className="inline-block hover-letters">
              {"Scale Your".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-white cursor-default"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <br />
            <span className="inline-block hover-letters">
              {"Growth Today.".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-white cursor-default"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h2>
          <NavLink to="/contact">
            <button className="px-14 py-6 bg-[var(--brand-orange)] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all flex items-center gap-4 mx-auto group shadow-2xl">
              Consult With Our Team
              <ArrowRight size={24} className="group-hover:translate-x-2 transition" />
            </button>
          </NavLink>
        </div>
      </section>

      {/* Back to Top */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-10 right-10 w-16 h-16 rounded-3xl bg-[var(--brand-coral)] border-2 border-white/20 flex items-center justify-center z-50 hover:scale-110 transition-transform shadow-2xl"
        >
          <ArrowUp size={28} className="text-white" />
        </button>
      )}

      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default About;