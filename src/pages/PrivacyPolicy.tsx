"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ShieldCheck,
  Lock,
  Cookie,
  Database,
  Globe,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".fade-up", {
        y: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);

  return (

    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] px-6 md:px-16 pt-48 py-28"
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--brand-coral)]/10 blur-[180px] rounded-full pointer-events-none" />

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="max-w-5xl mx-auto text-center mb-24 relative z-10 fade-up">

        <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20">

          <ShieldCheck
            size={18}
            className="text-[var(--brand-orange)]"
          />

          <span className="text-xs uppercase tracking-[0.3em] font-black text-[var(--brand-orange)]">
            Legal
          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

          Privacy
          <span className="gradient-text"> Policy</span>

        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">

          Your privacy matters to us. This policy explains how
          AdwikIndia collects, uses, and protects your data.

        </p>

        <div className="mt-6 text-sm text-[var(--text-muted)]">
          Effective Date: {new Date().toLocaleDateString()}
        </div>

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">

        {/* SECTION */}

        {[
          {
            icon: Globe,
            title: "1. Introduction",
            content:
              "At AdwikIndia, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
          },

          {
            icon: Database,
            title: "2. Information We Collect",
            list: [
              "Name, email address, and phone number",
              "Business details and project requirements",
              "Website analytics and usage information",
              "Cookies and browser data",
            ],
          },

          {
            icon: Mail,
            title: "3. How We Use Your Information",
            list: [
              "To provide and manage our services",
              "To communicate updates and support",
              "To improve website performance and user experience",
              "For marketing and promotional campaigns",
            ],
          },

          {
            icon: Lock,
            title: "4. Data Protection",
            content:
              "We implement industry-standard security measures including SSL encryption, secure servers, restricted access, and protected infrastructure to keep your information safe.",
          },

          {
            icon: Cookie,
            title: "5. Cookies Policy",
            content:
              "Our website uses cookies to enhance user experience, analyze traffic, and personalize content. You can disable cookies through your browser settings at any time.",
          },

          {
            icon: ShieldCheck,
            title: "6. Third-Party Services",
            content:
              "We may use trusted third-party services such as Google Analytics, Meta Ads, payment gateways, and CRM platforms. These services operate under their own privacy policies.",
          },

          {
            icon: Database,
            title: "7. Your Rights",
            content:
              "You have the right to access, update, or request deletion of your personal information. Contact us anytime regarding your data privacy requests.",
          },

          {
            icon: Globe,
            title: "8. Updates to Policy",
            content:
              "We may revise this Privacy Policy periodically. Any updates will be published on this page with a revised effective date.",
          },

        ].map((section, i) => (

          <div
            key={i}
            className="fade-up group rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8 md:p-10 hover:border-[var(--brand-orange)]/40 hover:shadow-[0_0_40px_rgba(255,107,53,0.10)] transition-all duration-500"
          >

            {/* HEADER */}
            <div className="flex items-start gap-5 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center flex-shrink-0">

                <section.icon
                  size={26}
                  className="text-[var(--brand-orange)]"
                />

              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-black leading-tight">
                  {section.title}
                </h2>

              </div>

            </div>

            {/* CONTENT */}
            {section.content && (

              <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                {section.content}
              </p>

            )}

            {/* LIST */}
            {section.list && (

              <ul className="space-y-4 mt-2">

                {section.list.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >

                    <div className="w-2 h-2 rounded-full bg-[var(--brand-orange)] mt-3" />

                    <span className="leading-relaxed text-lg">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            )}

          </div>

        ))}

        {/* =================================================
            CONTACT SECTION
        ================================================= */}

        <div className="fade-up rounded-[2rem] overflow-hidden bg-[var(--gradient-dark)] p-10 md:p-14 text-white relative">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-orange)]/20 blur-[120px]" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">

              <Mail
                size={16}
                className="text-[var(--brand-orange)]"
              />

              <span className="text-xs uppercase tracking-[0.3em] font-black">
                Contact
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Contact Us
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              If you have any questions regarding this Privacy
              Policy or your personal information, feel free
              to contact us.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

                <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-2">
                  Email
                </h4>

                <p className="font-semibold">
                  contact@adwikindia.com
                </p>

              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

                <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-2">
                  Phone
                </h4>

                <p className="font-semibold">
                  +91 9174360955
                </p>

              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

                <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-2">
                  Location
                </h4>

                <p className="font-semibold">
                  Bhopal, Madhya Pradesh
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          GLOBAL STYLES
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

export default PrivacyPolicy;