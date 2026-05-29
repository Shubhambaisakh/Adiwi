"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  RefreshCcw,
  ShieldCheck,
  Wallet,
  FileText,
  Mail,
} from "lucide-react";

export default function RefundPolicy() {

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
      className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] px-6 md:px-16 py-28"
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

          <RefreshCcw
            size={18}
            className="text-[var(--brand-orange)]"
          />

          <span className="text-xs uppercase tracking-[0.3em] font-black text-[var(--brand-orange)]">
            Legal
          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

          Refund
          <span className="gradient-text"> Policy</span>

        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">

          We maintain complete transparency regarding payments,
          refunds, and project commitments at AdwikIndia.

        </p>

      </div>

      {/* =================================================
          POLICY CONTENT
      ================================================= */}

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">

        {/* INTRO */}
        <div className="fade-up rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8 md:p-10 hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.10)]">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center flex-shrink-0">

              <ShieldCheck
                size={26}
                className="text-[var(--brand-orange)]"
              />

            </div>

            <div>

              <h2 className="text-3xl font-black mb-5">
                Policy Overview
              </h2>

              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                At AdwikIndia, we strive to provide premium-quality
                digital services and transparent communication.
                Refund eligibility depends on the project stage,
                service type, and agreed terms.
              </p>

            </div>

          </div>

        </div>

        {/* RULES */}
        <div className="grid gap-6">

          {[
            {
              icon: Wallet,
              title: "No Refund After Project Initiation",
              desc:
                "Once a project has officially started and resources have been allocated, refunds are not applicable.",
            },

            {
              icon: FileText,
              title: "Advance Payment Policy",
              desc:
                "Advance or booking payments are strictly non-refundable as they reserve project slots and planning resources.",
            },

            {
              icon: ShieldCheck,
              title: "Delayed Project Start",
              desc:
                "Refunds may be considered only if the project has not started within the mutually agreed timeline.",
            },

            {
              icon: RefreshCcw,
              title: "Service-Based Work",
              desc:
                "Marketing services such as Meta Ads, Google Ads, SEO, Social Media Marketing, and consultations are non-refundable.",
            },

            {
              icon: FileText,
              title: "Custom Development Projects",
              desc:
                "Custom website, branding, or software development projects are non-refundable once development or design work begins.",
            },

          ].map((item, i) => (

            <div
              key={i}
              className="fade-up group rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8 md:p-10 hover:border-[var(--brand-orange)]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.10)]"
            >

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/20 flex items-center justify-center flex-shrink-0">

                  <item.icon
                    size={26}
                    className="text-[var(--brand-orange)]"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-black mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

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
                Support
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Need Help?
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              For refund-related concerns or billing support,
              feel free to contact our team anytime.
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
}