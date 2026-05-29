"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Lock,
  CreditCard,
  Globe,
  Mail,
} from "lucide-react";

const Terms = () => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".fade-up", {
        y: 50,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
      });

    }, ref);

    return () => ctx.revert();

  }, []);

  const sections = [
    {
      icon: FileText,
      title: "1. Introduction",
      content:
        "These Terms & Conditions govern the relationship between AdwikIndia and the Client purchasing any services. By engaging with AdwikIndia, the Client agrees to comply with all terms outlined in this agreement.",
    },

    {
      icon: Globe,
      title: "2. Scope of Services",
      list: [
        "Website Design & Development",
        "Search Engine Optimization (SEO)",
        "Google Ads & Meta Ads",
        "Social Media Marketing",
        "Branding & Graphic Design",
        "E-commerce Development",
        "Photography & Video Production",
        "Software & CRM Solutions",
      ],
    },

    {
      icon: ShieldCheck,
      title: "3. Authorization & Account Access",
      content:
        "The Client authorizes AdwikIndia to access required accounts, hosting panels, advertising platforms and digital assets solely for executing agreed services.",
    },

    {
      icon: CreditCard,
      title: "4. Payment Terms",
      list: [
        "50% advance payment required before project start",
        "Monthly / project-based billing as agreed",
        "Delayed payments may suspend services",
        "Taxes and gateway charges borne by the client",
        "Advance payments are non-refundable",
      ],
    },

    {
      icon: FileText,
      title: "5. Client Responsibilities",
      list: [
        "Provide lawful and accurate content",
        "Ensure copyright compliance",
        "Provide approvals on time",
        "Follow platform policies and legal regulations",
      ],
    },

    {
      icon: Lock,
      title: "6. Contract Duration & Termination",
      content:
        "Either party may terminate the agreement with 30 days written notice. Work completed until termination remains billable.",
    },

    {
      icon: AlertTriangle,
      title: "7. Acceptable Use Policy",
      warning: true,
      list: [
        "Adult or explicit content",
        "Illegal or scam-related activities",
        "Unauthorized betting or gambling",
        "Hate speech or harmful content",
        "Phishing or malware distribution",
      ],
    },

    {
      icon: ShieldCheck,
      title: "8. Performance Disclaimer",
      content:
        "Digital marketing results depend on various external factors. AdwikIndia does not guarantee specific rankings, sales, leads or advertising outcomes.",
    },

    {
      icon: Lock,
      title: "9. Confidentiality",
      content:
        "All client information, credentials and project data are treated as confidential and protected under secure internal policies.",
    },

    {
      icon: FileText,
      title: "10. Intellectual Property",
      content:
        "Final deliverables transfer to the Client upon full payment. AdwikIndia reserves the right to showcase completed work in portfolios and case studies.",
    },

    {
      icon: AlertTriangle,
      title: "11. Limitation of Liability",
      content:
        "AdwikIndia shall not be liable for indirect or consequential losses including revenue loss, platform suspension, third-party outages or algorithmic changes.",
    },

    {
      icon: Globe,
      title: "12. Governing Law & Jurisdiction",
      content:
        "These terms are governed under the laws of India and subject to the jurisdiction of courts located in Bhopal, Madhya Pradesh.",
    },
  ];

  return (

    <div
      ref={ref}
      className="relative overflow-hidden min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] px-6 md:px-16 pt-48 py-28"
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

          Terms &
          <span className="gradient-text"> Conditions</span>

        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">

          Please read these terms carefully before using
          AdwikIndia services.

        </p>

        <div className="mt-6 text-sm text-[var(--text-muted)]">
          Effective Date:{" "}
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div className="h-1 w-24 bg-[var(--gradient-primary)] mx-auto mt-6 rounded-full" />

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">

        {sections.map((section, i) => (

          <section
            key={i}
            className={`fade-up rounded-[2rem] border p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.10)]
            
            ${
              section.warning
                ? "border-red-500/20 bg-red-500/5"
                : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--brand-orange)]/30"
            }`}
          >

            {/* HEADER */}
            <div className="flex items-start gap-5 mb-6">

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border
                ${
                  section.warning
                    ? "bg-red-500/10 border-red-500/20"
                    : "bg-[var(--brand-orange)]/10 border-[var(--brand-orange)]/20"
                }`}
              >

                <section.icon
                  size={26}
                  className={
                    section.warning
                      ? "text-red-400"
                      : "text-[var(--brand-orange)]"
                  }
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

                    <div
                      className={`w-2 h-2 rounded-full mt-3 ${
                        section.warning
                          ? "bg-red-400"
                          : "bg-[var(--brand-orange)]"
                      }`}
                    />

                    <span className="leading-relaxed text-lg">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            )}

          </section>

        ))}

        {/* =================================================
            CONTACT SECTION
        ================================================= */}

        <section className="fade-up rounded-[2rem] overflow-hidden bg-[var(--gradient-dark)] p-10 md:p-14 text-white relative">

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
              Questions?
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              If you have questions regarding these terms,
              feel free to contact our support team.
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

        </section>

      </div>

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

export default Terms;