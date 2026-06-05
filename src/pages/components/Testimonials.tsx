import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Asterisk, Quote, Star, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import user1 from "../../assets/images/Avatar/AdwikIndia_User.png";
import user2 from "../../assets/images/Avatar/AdwikIndia_female_user.png";

/* ---------------- DATA ---------------- */

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bansraj Oad",
    role: "Solar Business Owner",
    image: user1,
    text: "Thanks Adwikindia, you have grown my business and also my social media handle. I am very happy with your work and the way you handle my business. I am very satisfied with your service and highly recommend Adwikindia to anyone looking to start or grow their business.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priyanka Pagare",
    role: "Solar Business Owner",
    image: user2,
    text: "ADWIKINDIA Digital Marketing Agency provides excellent digital marketing services. Their strategies helped us generate quality leads and improve online visibility, especially for our solar business. The team is professional, responsive, and result-oriented. Highly recommended for anyone looking to grow their business online.",
    rating: 5,
  },
  {
    id: 3,
    name: "Raj Mewada",
    role: "Momo Business Owner",
    image: user1,
    text: "I run a momo business, and Adwik India has helped me a lot in setting it up and growing it. Their team is very professional, supportive, and always delivers work on time. They guided me properly and provided excellent marketing support. I am very satisfied with their service and highly recommend Adwik India to anyone looking to start or grow their business",
    rating: 5,
  },
];

/* ---------------- MAIN SECTION ---------------- */

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-[var(--bg-main)]">

      {/* Brand Background Glows */}
      <div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: "var(--teal)" }} 
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: "var(--cyan)" }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
              <span className="text-xs uppercase tracking-[0.4em] font-black text-[var(--text-main)]">
                Client Success
              </span>
            </div>

            <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight text-[var(--text-main)]">
              Trusted by brands <br />
              <span className="italic font-serif font-medium" style={{ color: "var(--teal)" }}>
                across industries.
              </span>
            </h2>
          </div>

          <PremiumButton />
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".testi-pagination" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="testi-pagination flex justify-center gap-4 mt-10" /> */}
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        
        .testi-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--navy);
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .testi-pagination .swiper-pagination-bullet-active {
          width: 36px;
          border-radius: 6px;
          background: var(--teal);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

/* ---------------- CARD ---------------- */

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-[2rem] p-8 border transition-all duration-500 h-[480px] flex flex-col bg-white dark:bg-[#13131A] border-[var(--border-light)] dark:border-[#2A2535] shadow-xl hover:shadow-[0_25px_60px_-10px_rgba(255,140,66,0.15)] dark:hover:shadow-[0_25px_60px_-10px_rgba(255,140,66,0.25)] hover:border-[var(--brand-orange)]/40 hover:-translate-y-2 overflow-hidden"
    >
      {/* Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/0 to-[var(--brand-coral)]/0 group-hover:from-[var(--brand-orange)]/5 group-hover:to-[var(--brand-coral)]/5 transition-all duration-700 pointer-events-none rounded-[2rem]" />

      {/* TOP */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 grayscale group-hover:grayscale-0 transition-all duration-500 border-[var(--brand-orange)]/20 group-hover:border-[var(--brand-orange)]/60 shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--brand-orange)] rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-black text-lg text-[var(--text-main)] mb-1">
              {item.name}
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[var(--brand-orange)]">
              {item.role}
            </p>
          </div>
        </div>

        <Quote className="opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ color: "var(--brand-orange)" }} size={48} />
      </div>

      {/* STARS */}
      <div className="flex gap-1.5 mb-6 relative z-10">
        {[...Array(item.rating)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill="var(--brand-orange)" 
            style={{ color: "var(--brand-orange)" }} 
            className="drop-shadow-sm"
          />
        ))}
      </div>

      {/* TEXT */}
      <p className="leading-relaxed text-lg flex-grow italic text-[var(--text-secondary)]">
        “{item.text}”
      </p>
    </motion.div>
  );
};

/* ---------------- BUTTON ---------------- */

const PremiumButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5 });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5 });

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - (rect.left + rect.width / 2)) * 0.3);
      yTo((e.clientY - (rect.top + rect.height / 2)) * 0.3);
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });

    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <button
      ref={ref}
      className="group flex items-center gap-4 text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all duration-500 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] bg-[var(--navy)]"
    >
      More Reviews
      <ArrowRight size={18} style={{ color: "var(--teal)" }} className="group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default Testimonials;