import React from "react";
import { Link } from "react-router-dom"; // Added for navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight, Asterisk } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import webImg from "../../assets/images/service-1.jpg";
import ecommerceImg from "../../assets/images/service-2.jpg";
import appImg from "../../assets/images/service-3.jpg";

interface ServiceItem {
  id: string;
  category: "Development" | "Marketing" | "Branding";
  title: string;
  image: string;
  icon: string;
  slug: string;
  description: string; // Added for SEO descriptions
  featured?: boolean;
}

const services: ServiceItem[] = [
  { 
    id: "01", 
    category: "Development", 
    title: "Custom Website Design & Development Services", 
    image: webImg, 
    icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    slug: "websites",
    description: "Professional responsive website design and development services that drive conversions. Our expert web developers create SEO-friendly, mobile-optimized websites with fast loading speeds and user-friendly interfaces. Get a custom website built with modern technologies like React, WordPress, and e-commerce platforms." 
  },
  { 
    id: "02", 
    category: "Development", 
    title: "E-Commerce Development & Online Store Solutions", 
    image: ecommerceImg, 
    icon: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    slug: "ecommerce",
    description: "Build a profitable online store with our e-commerce website development services. We specialize in Shopify, WooCommerce, and Magento development with secure payment gateways, inventory management, and shopping cart optimization. Increase sales with conversion-focused e-commerce design."
  },
  { 
    id: "03", 
    category: "Development", 
    title: "Custom Web & Mobile App Development", 
    image: appImg, 
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    slug: "applications",
    description: "Transform your business with custom web application and mobile app development services. Our software developers create scalable SaaS platforms, progressive web apps (PWA), iOS and Android apps with cloud integration, real-time data sync, and enterprise-grade security."
  },
  { 
    id: "04", 
    category: "Marketing", 
    title: "Digital Marketing & SEO Services", 
    image: webImg, 
    icon: "https://cdn-icons-png.flaticon.com/512/3771/3771463.png", 
    featured: true,
    slug: "digital-marketing",
    description: "Grow your business with data-driven digital marketing services. We offer SEO (Search Engine Optimization), PPC advertising (Google Ads, Facebook Ads), social media marketing, content marketing, and email campaigns. Our digital marketing agency delivers measurable ROI and increased online visibility."
  },
  { 
    id: "05", 
    category: "Branding", 
    title: "Brand Identity Design & Corporate Branding", 
    image: ecommerceImg, 
    icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
    slug: "branding-design",
    description: "Create a memorable brand identity with our professional branding services. From logo design to complete brand strategy, we develop cohesive visual identities including brand guidelines, packaging design, business cards, and marketing collateral that elevate your company's image."
  },
];

const Services: React.FC = () => {
  // Schema.org Service structured data
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "AdwikIndia",
        "url": "https://adwikindia.com"
      },
      "areaServed": "IN",
      "serviceType": service.category
    }))
  };

  return (
    <section
      className="relative py-24 overflow-hidden bg-[var(--bg-main)]"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none opacity-20 bg-[var(--teal)]" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-6 relative z-10">
        {/* HEADER - Eye-Catching & Beautiful */}
        <div className="text-center mb-20 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--brand-orange)] opacity-10 blur-3xl rounded-full animate-pulse"></div>
          
          <div className="services-reveal flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent"></div>
            <Asterisk size={20} className="animate-spin-slow text-[var(--brand-orange)]" />
            <span className="text-xs font-black uppercase tracking-[0.5em] bg-gradient-to-r from-[var(--brand-orange)] to-[var(--teal)] bg-clip-text text-transparent">
              Our Expertise
            </span>
            <Asterisk size={20} className="animate-spin-slow text-[var(--teal)]" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent"></div>
          </div>

          <h2 className="services-reveal text-[2.5rem] md:text-[4rem] font-black leading-[1.05] text-[var(--text-main)] mb-6 relative">
            <span className="inline-block hover-word">
              {"Professional".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:-translate-y-2 cursor-default"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            {" "}
            <span className="inline-block hover-word">
              {"Web".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:-translate-y-2 cursor-default"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--brand-orange)] via-[var(--teal)] to-[var(--brand-orange)] bg-clip-text text-transparent italic font-serif font-medium inline-block hover-word">
              {"Design & Development Services".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-default"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent rounded-full"></div>
          </h2>

          <p className="services-reveal mt-8 max-w-2xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
            Leading <strong className="text-[var(--brand-orange)]">website design company</strong> and <strong className="text-[var(--teal)]">digital marketing agency</strong> offering custom web development, SEO services, e-commerce solutions, and mobile app development. Transform your online presence with our expert team.
          </p>

          {/* Trust badges */}
          <div className="services-reveal flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-6 py-2 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform cursor-default">
              🚀 100+ Projects Delivered
            </span>
            <span className="px-6 py-2 rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/20 text-[var(--teal)] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform cursor-default">
              ⭐ 5-Star Rated Agency
            </span>
            <span className="px-6 py-2 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform cursor-default">
              ⚡ 2X Average ROI
            </span>
          </div>
        </div>

        {/* SLIDER */}
        <div className="services-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            speed={1000}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                {/* Wrapped Card in Link for Active Routing */}
                <Link 
                  to={`/services/${service.slug}`} 
                  className="block group"
                >
                  <div
                    className="service-card relative rounded-[32px] border transition-all duration-500 h-full hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                      boxShadow: service.featured
                        ? "0 25px 60px -20px rgba(31,167,156,0.35)"
                        : "var(--shadow-md)",
                    }}
                  >
                    {/* Magical Background Gradient on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/10 via-transparent to-[var(--teal)]/10"></div>
                    </div>

                    {/* BIG 3D NUMBER - Background with Shadow */}
                    <div className="absolute top-4 right-4 overflow-hidden pointer-events-none">
                      <span 
                        className="block text-[200px] font-black leading-none transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${service.featured ? 'var(--teal)' : 'var(--brand-orange)'} 0%, ${service.featured ? 'var(--brand-orange)' : 'var(--teal)'} 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          opacity: 0.08,
                          textShadow: '4px 4px 8px rgba(0,0,0,0.1)',
                          transform: 'translateZ(0)',
                        }}
                      >
                        {service.id}
                      </span>
                    </div>

                    {/* ICON & 3D Number Badge */}
                    <div className="relative flex items-center justify-between px-8 pt-8 z-10">
                      <div
                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 p-3"
                        style={{ 
                          backgroundColor: service.featured ? "var(--teal)" : "var(--brand-orange)",
                          boxShadow: `0 10px 30px -10px ${service.featured ? 'rgba(31,167,156,0.5)' : 'rgba(255,107,53,0.5)'}`,
                        }}
                      >
                        {/* Icon Glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" 
                             style={{ backgroundColor: service.featured ? "var(--teal)" : "var(--brand-orange)" }}>
                        </div>
                        <img 
                          src={service.icon} 
                          alt={service.title}
                          className="relative z-10 w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* 3D Number Badge */}
                      <div className="relative">
                        <span 
                          className="block font-black text-5xl transition-all duration-500 group-hover:scale-125"
                          style={{
                            background: `linear-gradient(135deg, ${service.featured ? 'var(--teal)' : 'var(--brand-orange)'} 0%, ${service.featured ? 'var(--brand-orange)' : 'var(--teal)'} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
                          }}
                        >
                          {service.id}
                        </span>
                        {/* 3D Shadow Effect */}
                        <span 
                          className="absolute top-1 left-1 font-black text-5xl -z-10 opacity-20"
                          style={{ color: service.featured ? 'var(--teal)' : 'var(--brand-orange)' }}
                        >
                          {service.id}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative px-8 py-6 z-10">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-black mb-3 transition-colors duration-300"
                         style={{ color: service.featured ? "var(--teal)" : "var(--brand-orange)" }}>
                        {service.category}
                      </p>
                      <h3 className="font-bold text-xl md:text-2xl leading-tight text-[var(--text-main)] group-hover:text-[var(--brand-orange)] transition-colors duration-300 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative overflow-hidden h-[220px] md:h-[260px] mx-6 mb-6 rounded-[24px] z-10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Arrow Button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl bg-white text-[var(--navy)] relative overflow-hidden">
                          {/* Button Shine Effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                          <ArrowUpRight size={24} strokeWidth={3} className="relative z-10" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-4 mt-8"></div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .custom-pagination .swiper-pagination-bullet {
          width: 30px; height: 4px; background: var(--border-color);
          border-radius: 4px; opacity: 1.4; transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: var(--teal); opacity: 1; width: 60px;
        }
      `}</style>
    </section>
  );
};

export default Services;