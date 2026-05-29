'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Code,
  Rocket,
  MessageSquareQuote,
} from 'lucide-react';

import "swiper/css";
import "swiper/css/pagination";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* =================================================
   PROJECT IMAGES
================================================= */

import Dularo from "../assets/images/projects/Dularo.png";
import AdvickEnterprises from "../assets/images/projects/Advick-Enterprises.png";
import AGTech from "../assets/images/projects/Agtech.png";
import ChitranshAgency from "../assets/images/projects/Chitransh-Agency.png";
import ChillComfort from "../assets/images/projects/Chill-comfort.png";
import ProcuraSolar from "../assets/images/projects/Procura-Solar.png";
import ShubhSun from "../assets/images/projects/ShubhXSunSolar.png";

/* =================================================
   CLIENT LOGOS
================================================= */

import Shubhxsolarlog from "../assets/images/Clients/shubhxsolar.png";
import Dularolog from "../assets/images/Clients/dularo.jpeg";
import AGTechlogo from "../assets/images/Clients/agtech.png";
import ChillComfortlogo from "../assets/images/Clients/chill-comfort.png";
import Procuralogo from "../assets/images/Clients/procura.png";
import Shrigurutraderslogo from "../assets/images/Clients/shrigurutraders.jpeg";

/* =================================================
   TYPES
================================================= */

type ClientLogo = {
  name: string;
  src: any;
};

type Project = {
  id: string;
  title: string;
  category: string;
  image: any;
  link: string;
  description: string;
  result: string;
  year: number;
};

const getImageSrc = (img: any) =>
  typeof img === 'string' ? img : img?.src;

/* =================================================
   LOGOS
================================================= */

const logos: ClientLogo[] = [
  { name: "Shubhxsolar", src: Shubhxsolarlog },
  { name: "Dularo", src: Dularolog },
  { name: "AGTech", src: AGTechlogo },
  { name: "Chill Comfort", src: ChillComfortlogo },
  { name: "Procura", src: Procuralogo },
  { name: "Shrigurutraders", src: Shrigurutraderslogo },
];


/* =================================================
    PROJECT CARD COMPONENT
================================================= */

function ProjectCard({ item }: { item: Project }) {

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const handleMouseMove = (
    e: React.MouseEvent
  ) => {

    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(ref.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1200,
      duration: 0.4,
      ease: "power2.out",
    });

  };

  const resetCard = () => {

    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });

  };

  return (

    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      className="group h-full"
      style={{
        perspective: 1000,
      }}
    >

      <div className="relative h-full rounded-[2rem] overflow-hidden bg-[var(--card-bg)] border border-[var(--border-light)] hover:border-[var(--brand-orange)]/40 transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-[0_0_40px_rgba(255,107,53,0.12)]">

        {/* IMAGE */}
        <div className="relative overflow-hidden aspect-[4/3]">

          <img
            src={getImageSrc(item.image)}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

          {/* Category */}
          <div className="absolute top-5 left-5">

            <span className="px-4 py-2 rounded-full bg-[var(--brand-orange)] text-white text-[10px] font-black tracking-[0.2em] uppercase">

              {item.category}

            </span>

          </div>

          {/* Result */}
          <div className="absolute top-5 right-5">

            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black tracking-[0.15em] uppercase">

              {item.result}

            </span>

          </div>

          {/* Hover Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-[var(--brand-orange)] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,107,53,0.35)]"
            >

              <ArrowUpRight size={26} />

            </a>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-8">

          <div className="flex items-center justify-between mb-5">

            <span className="text-sm text-[var(--brand-orange)] font-black tracking-[0.2em] uppercase">

              {item.year}

            </span>

          </div>

          <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-[var(--brand-orange)] transition-colors duration-300">

            {item.title}

          </h3>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">

            {item.description}

          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">

            <span className="text-sm font-bold text-[var(--text-muted)]">
              View Project
            </span>

            <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--brand-orange)] group-hover:bg-[var(--brand-orange)] group-hover:text-white transition-all duration-300">

              <ArrowUpRight size={18} />

            </div>

          </div>

        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--gradient-primary)] group-hover:w-full transition-all duration-500" />

      </div>

    </motion.div>

  );
}

/* =================================================
   PROJECTS
================================================= */

const works: Project[] = [
  {
    id: "01",
    title: "Authorized Dealer",
    category: "WEB",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    link: "#",
    description:
      "Premium power solutions and industrial backup systems.",
    result: "+38% Leads",
    year: 2025,
  },

  {
    id: "02",
    title: "Dularo Group",
    category: "BRANDING",
    image: Dularo,
    link: "https://dularo.in/",
    description:
      "Advanced water treatment and industrial purification solutions.",
    result: "Global Identity",
    year: 2024,
  },

  {
    id: "03",
    title: "AG Tech Services",
    category: "PERFORMANCE",
    image: AGTech,
    link: "https://bhopalagtech.com/",
    description:
      "Air conditioner sales, installation, and repair systems.",
    result: "5k+ Bookings",
    year: 2024,
  },

  {
    id: "04",
    title: "Shubh X Sun Solar",
    category: "WEB",
    image: ShubhSun,
    link: "https://shubhxsunsolar.com/",
    description:
      "Trusted partner in sustainable energy solutions.",
    result: "ROI Driven",
    year: 2025,
  },

  {
    id: "05",
    title: "Procura Solar",
    category: "BRANDING",
    image: ProcuraSolar,
    link: "https://procurasolar.com/",
    description:
      "Pioneering Solar Excellence with Innovation and Trust.",
    result: "B2B Authority",
    year: 2024,
  },

  {
    id: "06",
    title: "Chill Comfort Pvt. Ltd.",
    category: "PERFORMANCE",
    image: ChillComfort,
    link: "https://chillcomfortpvtltd.com/",
    description:
      "Reliable, energy-efficient cooling solutions for all spaces.",
    result: "Energy Optimized",
    year: 2024,
  },

  {
    id: "07",
    title: "Chitransh Agency",
    category: "WEB",
    image: ChitranshAgency,
    link: "https://chitranshagency.in/",
    description:
      "Trusted Water Solutions for Over 30 Years.",
    result: "Legacy Growth",
    year: 2023,
  },

  {
    id: "08",
    title: "Advick Enterprises",
    category: "BRANDING",
    image: AdvickEnterprises,
    link: "http://advickenterprises.co.in/",
    description:
      "Superior performance industrial products and accuracy.",
    result: "High Accuracy",
    year: 2024,
  },
];

/* =================================================
   TESTIMONIALS
================================================= */

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, Dularo Group",
    text:
      "Transformed our online presence — leads doubled in 4 months.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },

  {
    name: "Priya Mehta",
    role: "Marketing Head, AG Tech",
    text:
      "Best ROI we've seen from any agency. Highly recommend.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },

  {
    name: "Vikram Singh",
    role: "Founder, ShubhSun Solar",
    text:
      "They didn't just build a website; they built a brand that resonates with our customers.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

/* =================================================
   FAQ
================================================= */

const faqs = [
  {
    q: "What kind of projects do you take?",
    a:
      "We specialize in high-conversion websites, branding & performance marketing for industrial, solar, HVAC and B2B sectors.",
  },

  {
    q: "What is your typical timeline?",
    a:
      "Most projects take 6–12 weeks depending on scope.",
  },

  {
    q: "Do you offer maintenance?",
    a:
      "Yes — monthly retainers available for updates, SEO & performance.",
  },

  {
    q: "How do you measure success?",
    a:
      "We focus on KPIs that matter: conversion rate, ROI, engagement, and revenue growth.",
  },
];

/* =================================================
   MAIN COMPONENT
================================================= */

export default function Portfolio() {

  const pageRef = useRef<HTMLDivElement>(null);

  const [filter, setFilter] = useState("ALL");

  const [paused, setPaused] = useState(false);

  const filteredWorks =
    filter === "ALL"
      ? works
      : works.filter((w) => w.category === filter);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils
        .toArray<HTMLElement>(".reveal")
        .forEach((el) => {

          gsap.from(el, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });

        });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  return (

    <>
      <Head>
        <title>
          AdwikIndia Portfolio — Premium Digital Agency
        </title>

        <meta
          name="description"
          content="Premium websites, branding and performance marketing."
        />
      </Head>

      <div
        ref={pageRef}
        className="bg-[var(--bg-main)] text-[var(--text-main)] overflow-hidden relative"
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <motion.div
          style={{ y: glowY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] blur-[220px] rounded-full opacity-20 bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-coral)] pointer-events-none"
        />

        {/* =================================================
            HERO
        ================================================= */}

        <section className="pt-44 pb-20 px-6 relative z-10">

          <div className="max-w-5xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 mb-8 px-7 py-3 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 backdrop-blur-xl">

              <Sparkles
                size={16}
                className="text-[var(--brand-orange)]"
              />

              <span className="text-xs uppercase tracking-[0.35em] font-black">
                Portfolio 2026
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1] tracking-tight mb-8">

              We Build

              <span className="block gradient-text italic mt-2">
                Dominant Digital
              </span>

              Assets

            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">

              High-conversion websites • ROI-first branding •
              Performance marketing for industrial & B2B leaders.

            </p>

          </div>

        </section>

        {/* =================================================
            LOGO MARQUEE
        ================================================= */}

        <section className="py-10 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">

          <div
            className="relative overflow-hidden flex"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            <motion.div
              className="flex gap-10"
              animate={{
                x: paused
                  ? undefined
                  : ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              }}
            >

              {[...logos, ...logos].map((logo, i) => (

                <div
                  key={`${logo.name}-${i}`}
                  className="min-w-[220px] h-[120px] rounded-[2rem] border flex items-center justify-center bg-[var(--card-bg)] border-[var(--border-light)] hover:border-[var(--brand-orange)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.15)]"
                >

                  <img
                    src={getImageSrc(logo.src)}
                    alt={logo.name}
                    className="h-16 lg:h-24 object-contain transition-all duration-500 hover:scale-110"
                  />

                </div>

              ))}

            </motion.div>

          </div>

        </section>

        {/* =================================================
            FEATURED PROJECT
        ================================================= */}

        <section className="py-32 px-6 lg:px-20 reveal">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            <div className="relative rounded-[2rem] overflow-hidden">

              <img
                src={getImageSrc(Dularo)}
                alt="Dularo"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-all duration-700"
              />

            </div>

            <div>

              <div className="flex items-center gap-3 text-[var(--brand-orange)] font-black uppercase tracking-[0.3em] text-sm mb-6">

                <TrendingUp size={20} />

                Featured Project

              </div>

              <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-8">

                Dularo Group

                <span className="block gradient-text">
                  Water Purification
                </span>

              </h2>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">

                Elevated industrial water treatment brand into a
                premium B2B authority with modern UX and high-conversion strategy.

              </p>

              <div className="grid grid-cols-2 gap-5">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-[var(--brand-orange)]"
                  />
                  Industrial UX
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-[var(--brand-orange)]"
                  />
                  Authority Branding
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
    SELECTED WORKS
================================================= */}

<section className="py-32 px-6 lg:px-20 bg-[var(--bg-secondary)] relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 blur-[180px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 reveal">

      <div>

        <span className="inline-block mb-4 px-5 py-2 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-black tracking-[0.3em] uppercase border border-[var(--brand-orange)]/20">
          Portfolio
        </span>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          Selected
          <span className="gradient-text"> Works</span>
        </h2>

        <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
          High-impact projects crafted for branding, websites,
          performance marketing and business growth.
        </p>

      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3">

        {["ALL", "BRANDING", "WEB", "PERFORMANCE"].map((cat) => (

          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-7 py-3 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 ${
              filter === cat
                ? "bg-[var(--brand-orange)] text-white shadow-[0_0_30px_rgba(255,107,53,0.35)] scale-105"
                : "border border-[var(--border-color)] hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

    </div>

    {/* DESKTOP GRID */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-8 reveal">

      {filteredWorks.map((item) => (

        <ProjectCard
          key={item.id}
          item={item}
        />

      ))}

    </div>

    {/* MOBILE SWIPER */}
    <div className="lg:hidden">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={1.05}
        centeredSlides
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="!overflow-visible pb-14"
      >

        {filteredWorks.map((item) => (

          <SwiperSlide key={item.id}>

            <ProjectCard item={item} />

          </SwiperSlide>

        ))}

      </Swiper>

      <div className="custom-pagination flex justify-center gap-3 mt-8" />

    </div>

  </div>

</section>

{/* =================================================
    HOW WE CREATE RESULTS
================================================= */}

<section className="py-32 px-6 lg:px-20 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 blur-[180px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-24 reveal">

      <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-black tracking-[0.3em] uppercase border border-[var(--brand-orange)]/20">
        Process
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        How We Create
        <span className="gradient-text"> Results</span>
      </h2>

      <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
        Our proven four-step framework helps brands scale faster,
        convert better, and dominate digitally.
      </p>

    </div>

    {/* PROCESS GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: Lightbulb,
          title: "Discovery",
          desc: "Researching competitors, audience psychology, and market opportunities.",
          number: "01",
        },

        {
          icon: TrendingUp,
          title: "Strategy",
          desc: "Building conversion-focused growth systems tailored to your brand.",
          number: "02",
        },

        {
          icon: Code,
          title: "Execution",
          desc: "Designing and developing premium digital experiences with speed.",
          number: "03",
        },

        {
          icon: Rocket,
          title: "Scale & Optimize",
          desc: "Continuous optimization using analytics, ads and performance insights.",
          number: "04",
        },

      ].map((step, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: i * 0.15,
          }}
          className="group relative p-10 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-light)] hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,107,53,0.12)] overflow-hidden"
        >

          {/* Number */}
          <div className="absolute top-6 right-6 text-6xl font-black text-[var(--brand-orange)]/10">
            {step.number}
          </div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">

            <step.icon
              className="w-8 h-8 text-[var(--brand-orange)]"
            />

          </div>

          {/* Title */}
          <h3 className="text-2xl font-black mb-5 tracking-tight">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-[var(--text-secondary)] leading-relaxed text-base">
            {step.desc}
          </p>

          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[var(--gradient-primary)] group-hover:w-full transition-all duration-500" />

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* =================================================
    CLIENT RESULTS / TESTIMONIALS
================================================= */}

<section className="py-32 px-6 lg:px-20 bg-[var(--bg-secondary)] relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 blur-[180px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-24 reveal">

      <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-black tracking-[0.3em] uppercase border border-[var(--brand-orange)]/20">
        Testimonials
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        Client Results
        <span className="gradient-text"> Speak Louder</span>
      </h2>

      <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
        Real feedback from businesses that scaled faster with
        our branding, websites, and performance marketing.
      </p>

    </div>

    {/* TESTIMONIAL GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {testimonials.map((t, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: i * 0.12,
          }}
          className="group relative p-8 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,107,53,0.12)] overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-orange)]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Quote Icon */}
          <div className="mb-8">

            <div className="w-16 h-16 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center">

              <MessageSquareQuote
                className="text-[var(--brand-orange)]"
                size={30}
              />

            </div>

          </div>

          {/* Text */}
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-10 relative z-10">
            "{t.text}"
          </p>

          {/* User */}
          <div className="flex items-center gap-4 relative z-10">

            <div className="relative">

              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--brand-orange)]/20"
              />

              <div className="absolute inset-0 rounded-full ring-4 ring-[var(--brand-orange)]/10" />

            </div>

            <div>

              <h4 className="font-black text-lg">
                {t.name}
              </h4>

              <p className="text-sm text-[var(--text-muted)]">
                {t.role}
              </p>

            </div>

          </div>

          {/* Bottom Border Animation */}
          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[var(--gradient-primary)] group-hover:w-full transition-all duration-500" />

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* =================================================
    FAQ SECTION
================================================= */}

<section className="py-32 px-6 lg:px-20 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 blur-[180px] rounded-full pointer-events-none" />

  <div className="max-w-5xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center mb-20 reveal">

      <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-black tracking-[0.3em] uppercase border border-[var(--brand-orange)]/20">
        FAQ
      </span>

      <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        Frequently Asked
        <span className="gradient-text"> Questions</span>
      </h2>

      <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
        Everything you need to know about our process,
        services, timelines, and performance strategy.
      </p>

    </div>

    {/* FAQ LIST */}
    <div className="space-y-6">

      {faqs.map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: i * 0.08,
          }}
        >

          <details className="group rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--brand-orange)]/40 transition-all duration-500 overflow-hidden">

            {/* Question */}
            <summary className="list-none flex items-center justify-between gap-5 cursor-pointer p-8 md:p-10">

              <h3 className="text-lg md:text-xl font-black leading-snug pr-4">
                {item.q}
              </h3>

              {/* Plus Icon */}
              <div className="min-w-[52px] min-h-[52px] rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center text-[var(--brand-orange)] text-2xl font-light group-open:rotate-45 transition-all duration-500">

                +

              </div>

            </summary>

            {/* Answer */}
            <div className="px-8 md:px-10 pb-8 md:pb-10">

              <div className="h-px w-full bg-[var(--border-color)] mb-8" />

              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-4xl">
                {item.a}
              </p>

            </div>

            {/* Bottom Glow Line */}
            <div className="h-[3px] w-0 bg-[var(--gradient-primary)] group-open:w-full transition-all duration-500" />

          </details>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      </div>

      <style jsx global>{`

        .gradient-text{
          background: linear-gradient(
            135deg,
            #FF6B35,
            #F15A24
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

      `}</style>

    </>
  );
}