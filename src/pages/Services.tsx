"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Globe,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const Services = () => {

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (

    <div className="bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden">

      {/* =================================================
          SEO SCHEMA
      ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AdwikIndia",
            url: "https://adwikindia.com",
            telephone: "+91-9174360955",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              addressCountry: "India",
            },
          }),
        }}
      />

      {/* =================================================
          FLOATING WHATSAPP BUTTON
      ================================================= */}

      <a
        href="https://wa.me/919174360955"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.45)] hover:scale-110 transition-all duration-300"
      >
        <Phone className="text-white" />
      </a>

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[var(--brand-orange)]/10 blur-[220px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 mb-8">

              <Sparkles
                size={16}
                className="text-[var(--brand-orange)]"
              />

              <span className="text-xs uppercase tracking-[0.3em] font-black text-[var(--brand-orange)]">
                Digital Marketing Agency
              </span>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.92] tracking-tight mb-8">

              Grow Faster With

              <span className="block gradient-text">
                AI-Powered
              </span>

              Digital Marketing

            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10">

              Premium website development, SEO, Meta Ads,
              Google Ads, branding and scalable digital systems
              engineered for modern businesses.

            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 mb-10">

              {[
                "500+ Projects",
                "98% Retention",
                "24/7 Support",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-2"
                >

                  <CheckCircle2
                    size={18}
                    className="text-[var(--brand-orange)]"
                  />

                  <span className="font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="bg-[var(--brand-orange)] hover:bg-[var(--btn-primary-hover)] text-white px-8 py-5 rounded-full font-black flex items-center gap-2 transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.35)]">

                Get Free Consultation
                <ArrowRight size={20} />

              </button>

              <button className="border border-[var(--border-color)] hover:border-[var(--brand-orange)] px-8 py-5 rounded-full font-black transition-all duration-300">

                View Portfolio

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-[var(--brand-orange)]/10 blur-[120px] rounded-full" />

            <div className="relative rounded-[2rem] overflow-hidden border border-[var(--border-color)] shadow-[0_0_50px_rgba(255,107,53,0.10)]">

              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                alt="Digital marketing agency team"
                width={1200}
                height={900}
                priority
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          TRUST BAR
      ================================================= */}

      <section className="py-10 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-sm uppercase tracking-[0.3em] font-black text-[var(--text-muted)] mb-8">
            Trusted By Modern Brands
          </p>

          <div className="flex flex-wrap justify-center gap-14 opacity-60">

            {[
              "Google",
              "Meta",
              "Amazon",
              "Spotify",
              "Adobe",
            ].map((brand) => (

              <span
                key={brand}
                className="text-2xl font-black"
              >
                {brand}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="py-32 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="text-[var(--brand-orange)] text-sm font-black tracking-[0.3em] uppercase">
              Services
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">

              Premium Digital
              <span className="gradient-text"> Solutions</span>

            </h2>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">

              End-to-end digital systems built to scale businesses,
              generate leads and maximize conversions.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: Globe,
                title: "Website Development",
                desc: "High-converting responsive websites optimized for speed and SEO.",
              },

              {
                icon: Search,
                title: "SEO Optimization",
                desc: "Advanced search engine optimization for long-term organic growth.",
              },

              {
                icon: TrendingUp,
                title: "Performance Marketing",
                desc: "ROI-focused Meta Ads and Google Ads campaigns.",
              },

              {
                icon: MonitorSmartphone,
                title: "App Development",
                desc: "Premium Android & iOS applications with scalable architecture.",
              },

              {
                icon: Code2,
                title: "Custom Software",
                desc: "CRM, ERP and automation systems for modern businesses.",
              },

              {
                icon: Layers3,
                title: "Brand Identity",
                desc: "Luxury branding systems designed for market dominance.",
              },

            ].map((service, i) => (

              <div
                key={i}
                className="group rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] p-10 hover:border-[var(--brand-orange)]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,107,53,0.12)] transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-3xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">

                  <service.icon
                    size={36}
                    className="text-[var(--brand-orange)]"
                  />

                </div>

                <h3 className="text-2xl font-black mb-5">
                  {service.title}
                </h3>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  {service.desc}
                </p>

                <button className="flex items-center gap-2 text-[var(--brand-orange)] font-black group-hover:gap-4 transition-all duration-300">

                  Learn More
                  <ArrowRight size={18} />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-[var(--brand-orange)]/10 blur-[120px] rounded-full" />

            <div className="relative rounded-[2rem] overflow-hidden border border-[var(--border-color)]">

              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
                alt="SEO dashboard"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <span className="text-[var(--brand-orange)] text-sm font-black tracking-[0.3em] uppercase">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mt-6 mb-8">

              We Build
              <span className="gradient-text"> Growth Systems</span>

            </h2>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">

              We combine strategy, design, technology and marketing
              into one seamless digital ecosystem.

            </p>

            <div className="space-y-6">

              {[
                "Conversion-focused website architecture",
                "Advanced SEO & paid ads strategy",
                "Fast-loading mobile-first experiences",
                "Long-term scalable growth systems",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-start gap-4"
                >

                  <CheckCircle2
                    className="text-[var(--brand-orange)] mt-1"
                  />

                  <span className="text-lg font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="py-24 bg-[var(--gradient-dark)] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                value: "500+",
                label: "Projects Delivered",
              },

              {
                value: "98%",
                label: "Client Retention",
              },

              {
                value: "12+",
                label: "Years Experience",
              },

              {
                value: "24/7",
                label: "Support",
              },

            ].map((item, i) => (

              <div
                key={i}
                className="text-center"
              >

                <div className="text-5xl font-black mb-4 gradient-text">
                  {item.value}
                </div>

                <div className="text-white/70">
                  {item.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          TESTIMONIALS
      ================================================= */}

      <section className="py-32 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="text-[var(--brand-orange)] text-sm font-black tracking-[0.3em] uppercase">
              Testimonials
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">

              Client
              <span className="gradient-text"> Results</span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1,2,3].map((item) => (

              <div
                key={item}
                className="rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] p-10 hover:border-[var(--brand-orange)]/40 hover:shadow-[0_0_40px_rgba(255,107,53,0.12)] transition-all duration-500"
              >

                <div className="flex text-yellow-400 mb-6">

                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">

                  “Outstanding team and premium execution.
                  We saw massive improvement in leads and conversions.”

                </p>

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full overflow-hidden">

                    <Image
                      src={`https://i.pravatar.cc/150?img=${item + 10}`}
                      alt="Client"
                      width={60}
                      height={60}
                    />

                  </div>

                  <div>

                    <h4 className="font-black">
                      Client Name
                    </h4>

                    <p className="text-sm text-[var(--text-muted)]">
                      Business Owner
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          FAQ
      ================================================= */}

      <section className="py-32 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-20">

            <span className="text-[var(--brand-orange)] text-sm font-black tracking-[0.3em] uppercase">
              FAQ
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">

              Frequently Asked
              <span className="gradient-text"> Questions</span>

            </h2>

          </div>

          <div className="space-y-5">

            {[
              {
                q: "How long does a website take?",
                a: "Most websites take between 2–6 weeks depending on project scope.",
              },

              {
                q: "Do you provide SEO services?",
                a: "Yes — we provide complete SEO optimization services.",
              },

              {
                q: "Do you work with startups?",
                a: "Absolutely. We help startups scale digitally.",
              },

              {
                q: "Can you redesign existing websites?",
                a: "Yes — we modernize outdated websites with premium UI/UX.",
              },

            ].map((faq, i) => (

              <div
                key={i}
                className="rounded-[2rem] border border-[var(--border-color)] overflow-hidden bg-[var(--card-bg)]"
              >

                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left font-black text-lg hover:bg-[var(--brand-orange)]/5 transition-all duration-300"
                >

                  {faq.q}

                  <ChevronDown
                    className={`transition-all duration-300 ${
                      openFaq === i
                        ? "rotate-180 text-[var(--brand-orange)]"
                        : ""
                    }`}
                  />

                </button>

                {openFaq === i && (

                  <div className="px-8 pb-8 text-[var(--text-secondary)] leading-relaxed">

                    {faq.a}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section className="py-32 px-6 bg-[var(--bg-secondary)]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <span className="text-[var(--brand-orange)] text-sm font-black tracking-[0.3em] uppercase">
              Contact
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8">

              Let’s Build
              <span className="gradient-text"> Something Great</span>

            </h2>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12">

              Ready to scale your business online?
              Let’s discuss your next digital project.

            </p>

            <div className="space-y-6">

              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contact@adwikindia.com",
                },

                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 9174360955",
                },

                {
                  icon: MapPin,
                  title: "Location",
                  value: "Bhopal, Madhya Pradesh",
                },

              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-5"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center">

                    <item.icon className="text-[var(--brand-orange)]" />

                  </div>

                  <div>

                    <p className="text-sm text-[var(--text-muted)]">
                      {item.title}
                    </p>

                    <h4 className="font-black">
                      {item.value}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--brand-orange)]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--brand-orange)]"
                />

              </div>

              <input
                type="text"
                placeholder="Phone"
                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--brand-orange)]"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] resize-none focus:outline-none focus:border-[var(--brand-orange)]"
              />

              <button
                type="submit"
                className="w-full bg-[var(--brand-orange)] hover:bg-[var(--btn-primary-hover)] text-white py-5 rounded-2xl font-black transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.35)]"
              >

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="bg-[var(--gradient-dark)] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

            <div>

              <h3 className="text-3xl font-black mb-6">
                AdwikIndia
              </h3>

              <p className="text-white/70 leading-relaxed">

                Premium digital marketing and development agency
                helping businesses scale online.

              </p>

            </div>

            <div>

              <h4 className="font-black text-xl mb-6">
                Services
              </h4>

              <ul className="space-y-3 text-white/70">

                <li>Website Development</li>
                <li>SEO Optimization</li>
                <li>Meta Ads</li>
                <li>Google Ads</li>
                <li>Branding</li>

              </ul>

            </div>

            <div>

              <h4 className="font-black text-xl mb-6">
                Company
              </h4>

              <ul className="space-y-3 text-white/70">

                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>

              </ul>

            </div>

            <div>

              <h4 className="font-black text-xl mb-6">
                Contact
              </h4>

              <ul className="space-y-4 text-white/70">

                <li>contact@adwikindia.com</li>
                <li>+91 9174360955</li>
                <li>Bhopal, Madhya Pradesh</li>

              </ul>

            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">

            © {new Date().getFullYear()} AdwikIndia.
            All rights reserved.

          </div>

        </div>

      </footer>

      {/* =================================================
          GLOBAL STYLE
      ================================================= */}

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

    </div>

  );
};

export default Services;