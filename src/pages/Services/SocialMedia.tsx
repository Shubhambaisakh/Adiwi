import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "../../components/EnquiryPopup";
import {
  Share2,
  Users,
  MessageSquare,
  TrendingUp,
  Zap,
  ShieldCheck,
  Camera,
  PenTool,
  BarChart3,
  Hash,
  Globe,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Heart,
  Target,
  Trophy,
  PieChart,
  Star
} from "lucide-react";
import insta from "../../assets/images/adwik_insta.png";
import fb from "../../assets/images/adwik_fb.png";

gsap.registerPlugin(ScrollTrigger);

const SocialMedia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
     // Enquiry Popup State
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="font-sans overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
    >
      {/* 1. HERO: SOCIAL AUTHORITY */}
      <section
        className="relative pt-32 pb-24 px-6 lg:px-20 text-white overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div
          className="decor-glow absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ backgroundColor: "var(--navy)", opacity: 0.1 }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="reveal-section">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 border rounded-full mb-8"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
            >
              <Sparkles size={16} style={{ color: "var(--teal)" }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/80">
                Community & Influence Engineering
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl text-white font-black leading-[1.05] tracking-tighter mb-8">
              Command Your <br /> <span style={{ color: "var(--teal)" }}>Community.</span>
            </h1>
            <p className="text-xl max-w-lg mb-10 leading-relaxed font-medium text-white/80">
              Social media is no longer about posting; it's about engineering authority. AdwikIndia builds digital ecosystems that turn followers into high-value brand advocates.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
              style={{ backgroundColor: "var(--teal)", color: "white" }}
            >
              Get Free Social Quate
            </button>
          </div>
          <div className="relative reveal-section group">
            <div
              className="absolute -inset-4 rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
              style={{ background: "linear-gradient(to top right, var(--teal), var(--navy))" }}
            />
            <img
              src={fb}
              className="rounded-[3.5rem] shadow-2xl relative z-10 border"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              alt="Advanced Social Media Analytics and Strategy"
            />
          </div>
        </div>
      </section>

      {/* 2. THE ENGAGEMENT STRIP */}
      <section
        className="py-16 border-b"
        style={{ backgroundColor: "var(--bg-main)", borderColor: "var(--border-color)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "250%", l: "Avg. Engagement Lift" },
            { v: "15k+", l: "Communities Built" },
            { v: "3.5X", l: "Lead Velocity" },
            { v: "24/7", l: "Social Listening" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-4xl font-black transition-colors"
                style={{ color: "var(--navy)" }}
              >
                {stat.v}
              </div>
              <div
                className="text-[10px] font-black uppercase tracking-[0.2em] mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES (Grid) */}
      <section className="py-24 px-6 lg:px-20 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Strategic <span style={{ color: "var(--teal)" }}>Influence.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
              We combine psychological hooks with platform algorithms to ensure your brand stays at the top of the feed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <PenTool />, t: "Narrative Strategy", d: "Crafting a unique brand voice and content pillars that resonate with your specific target audience." },
              { icon: <MessageSquare />, t: "Engagement Engineering", d: "Proactive community management that turns passive scrolls into active conversations." },
              { icon: <TrendingUp />, t: "Growth Optimization", d: "Iterative testing of post times, formats, and hooks to maximize organic viral potential." }
            ].map((item, i) => (
              <div
                key={i}
                className="p-12 rounded-[3rem] border hover:shadow-2xl transition-all duration-500 group"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-opacity-100 group-hover:text-white transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--teal)" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: "var(--text-main)" }}>{item.t}</h3>
                <p className="leading-relaxed font-medium" style={{ color: "var(--text-secondary)" }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLATFORM SPECIALIZATION */}
      <section
        className="py-24 px-6 lg:px-20 text-white reveal-section"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              Platform <br /><span style={{ color: "var(--teal)" }}>Specific DNA.</span>
            </h2>
            <p className="mb-10 text-lg font-medium text-white/70">
              We don't believe in cross-posting. Every platform requires a distinct strategy to command attention.
            </p>
            <ul className="space-y-6">
              {[
                { p: "LinkedIn Authority", d: "B2B thought leadership and executive branding." },
                { p: "Instagram Aesthetic", d: "Visual storytelling and high-retention Reels." },
                { p: "Meta Community", d: "Group building and high-intent local reach." },
                { p: "Twitter/X Vibe", d: "Real-time engagement and industry conversations." }
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="p-1.5 rounded-lg mt-1" style={{ backgroundColor: "var(--teal)" }}>
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg block">{li.p}</span>
                    <span className="text-white/60 text-sm">{li.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Hash className="absolute -right-10 -top-10 w-64 h-64 opacity-10" style={{ color: "var(--teal)" }} />
            <img
              src={insta}
              className="rounded-[3rem] shadow-2xl relative z-10"
              alt="Multi-Platform Social Strategy"
            />
          </div>
        </div>
      </section>

      {/* 5. VISUAL PRODUCTION */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Content <span style={{ color: "var(--teal)" }}>Powerhouse.</span>
          </h2>
          <p className="text-lg font-medium" style={{ color: "var(--text-secondary)" }}>
            In-house production capabilities for a consistent, high-end digital image.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Camera />, t: "Photography" },
            { icon: <Zap />, t: "Motion Graphics" },
            { icon: <Users />, t: "UGC Curation" },
            { icon: <Globe />, t: "Global Trends" }
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] text-center border transition-all duration-300 group"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "transparent",
                ...(i === 0 ? { hover: { borderColor: "var(--teal)" } } : {})
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--teal)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "transparent"}
            >
              <div className="mb-4 flex justify-center" style={{ color: "var(--teal)" }}>{item.icon}</div>
              <div className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "var(--navy)" }}>{item.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ENGAGEMENT FUNNEL */}
      <section
        className="py-24 px-6 lg:px-20 text-white text-center reveal-section relative overflow-hidden"
        style={{ backgroundColor: "var(--teal)" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <Heart className="mx-auto mb-8" size={60} style={{ color: "var(--navy)" }} />
          <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">
            From Likes <br />to <span style={{ color: "var(--navy)" }}>Loyalty.</span>
          </h2>
          <p className="text-xl font-medium leading-relaxed italic text-white/80">
            "Social media without a conversion strategy is just noise. We build community-driven funnels that shorten your sales cycle."
          </p>
        </div>
      </section>

      {/* 7. REPUTATION MANAGEMENT */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="p-12 rounded-[3.5rem] shadow-2xl relative"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <div
              className="absolute -top-6 -left-6 w-20 h-20 bg-white p-4 rounded-3xl shadow-xl flex items-center justify-center"
              style={{ color: "var(--teal)" }}
            >
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-3xl font-black text-white mb-6">Crisis-Proof <br />Branding.</h3>
            <p className="text-white/70 leading-relaxed">
              We protect your brand reputation with 24/7 monitoring and professional response protocols, ensuring your community remains a safe, positive space for your customers.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">
              Proactive <br /><span style={{ color: "var(--teal)" }}>Social Listening.</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We don't just talk; we listen. AdwikIndia tracks industry sentiments and competitor moves to pivot your strategy in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* 8. PAID SOCIAL INTEGRATION */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <Target className="mx-auto mb-8" size={50} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl font-black mb-6">
            Amplifying <span style={{ color: "var(--teal)" }}>Organic Reach.</span>
          </h2>
          <p className="text-xl mb-12" style={{ color: "var(--text-secondary)" }}>
            We use strategic paid boosts for your best-performing organic content, ensuring maximum efficiency for your marketing spend.
          </p>
        </div>
      </section>

      {/* 9. ANALYTICS: MEASURING GROWTH */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1]">
              Transparent <br /><span style={{ color: "var(--teal)" }}>Insights.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed font-medium" style={{ color: "var(--text-secondary)" }}>
              Monthly reports that focus on ROI, inquiry volume, and sentiment analysis rather than just follower counts.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <BarChart3 className="mb-2 mx-auto" style={{ color: "var(--teal)" }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Inquiry Tracking</span>
              </div>
              <div className="text-center">
                <PieChart className="mb-2 mx-auto" style={{ color: "var(--teal)" }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Sentiment Analysis</span>
              </div>
            </div>
          </div>
          <div
            className="p-10 rounded-[3rem] shadow-2xl border-8"
            style={{ backgroundColor: "var(--navy)", borderColor: "var(--bg-main)" }}
          >
            <div className="h-64 w-full bg-white/5 rounded-2xl flex items-center justify-center text-white/20 font-black text-3xl italic uppercase tracking-tighter">
              Live Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* 10. INFLUENCER PARTNERSHIPS */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <Trophy className="mx-auto mb-8" size={60} style={{ color: "var(--teal)" }} />
          <h2 className="text-4xl font-black mb-6">
            Influencer <span style={{ color: "var(--teal)" }}>Synergy.</span>
          </h2>
          <p className="max-w-2xl mx-auto font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We connect your brand with niche influencers who command genuine trust, managing the entire collaboration lifecycle from outreach to reporting.
          </p>
        </div>
      </section>

      {/* 11. LOCAL SOCIAL DOMINANCE */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
            Mastering the <br /><span style={{ color: "var(--teal)" }}>Bhopal Market.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-medium" style={{ color: "var(--text-secondary)" }}>
            AdwikIndia is the premier social agency in Bhopal. We understand regional triggers and cultural nuances that drive local customer behavior.
          </p>
        </div>
      </section>

      {/* 12. SOCIAL MEDIA MANAGEMENT PLANS (UPDATED) */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Social Media <span style={{ color: "var(--teal)" }}>Management Plans</span>
            </h2>
            <p className="max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Choose the right plan to grow your brand on social media. All plans include professional content, strategy, and monthly reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Starter Plan */}
            <div
              className="relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 border"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              <h4 className="font-black text-2xl mb-2">Starter Plan</h4>
              <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                Best for small businesses starting their social media presence
              </p>
              <div className="text-4xl font-black mb-8" style={{ color: "var(--teal)" }}>
                ₹7,999<span className="text-sm font-normal" style={{ color: "var(--text-secondary)" }}>/mo</span>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Platforms</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Manage 1 Social Media Platform (Instagram / Facebook)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Content Creation</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>12 Posts per Month (3 posts per week)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Professional Graphic Design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Captions & Hashtags</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Page Management</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Profile Optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Basic Content Strategy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Comment & Message Monitoring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Growth</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Basic Audience Engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Page Activity Monitoring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Reporting</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>📊 Monthly Performance Report</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
               onClick={() => setOpen(true)}
                className="w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Choose Starter
              </button>
            </div>

            {/* Business Plan (Highlighted) */}
            <div
              className="relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 scale-105 shadow-2xl"
              style={{ backgroundColor: "var(--navy)", color: "white" }}
            >
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs px-6 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Most Popular
              </div>

              <h4 className="font-black text-2xl mb-2">Business Plan</h4>
              <p className="text-sm mb-6 text-white/70">
                Best for businesses that want consistent growth
              </p>
              <div className="text-4xl font-black mb-8" style={{ color: "var(--teal)" }}>
                ₹11,999<span className="text-sm font-normal text-white/50">/mo</span>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2 text-white/80">Platforms</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Manage 2 Social Media Platforms (Facebook + Instagram)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2 text-white/80">Content Creation</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>16 Posts per Month</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Professional Graphic Design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Captions & Hashtags</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>2 Reels / Short Videos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2 text-white/80">Page Management</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Profile Optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Content Calendar</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Audience Engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Comment & Message Management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2 text-white/80">Growth Strategy</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Competitor Analysis</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Hashtag Research</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Organic Growth Strategy</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2 text-white/80">Reporting</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>📊 Detailed Monthly Performance Report</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
               onClick={() => setOpen(true)}
                className="w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Choose Business
              </button>
            </div>

            {/* Premium Plan */}
            <div
              className="relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 border"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
            >
              <h4 className="font-black text-2xl mb-2">Premium Plan</h4>
              <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                Best for brands who want strong social media presence
              </p>
              <div className="text-4xl font-black mb-8" style={{ color: "var(--teal)" }}>
                ₹15,999<span className="text-sm font-normal" style={{ color: "var(--text-secondary)" }}>/mo</span>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Platforms</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Manage 3 Platforms (Facebook + Instagram + LinkedIn)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Content Creation</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>20 Posts per Month</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Premium Graphic Design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Professional Captions & Hashtags</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>4 Reels / Short Videos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Page Management</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Advanced Profile Optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Content Strategy Planning</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Audience Engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Message & Comment Handling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Growth Strategy</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Competitor Analysis</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Advanced Hashtag Strategy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>Branding Strategy</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold uppercase text-xs tracking-wider mb-2" style={{ color: "var(--navy)" }}>Reporting</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5" />
                      <span>📊 Detailed Monthly Analytics Report</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
              onClick={() => setOpen(true)}
                className="w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </section>
 {/* enquirypopup */}
              <EnquiryPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {/* 13. TRUST SIGNALS */}
      <section
        className="py-20 px-6 lg:px-20 reveal-section text-center border-y"
        style={{ backgroundColor: "var(--bg-main)", borderColor: "var(--border-color)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
          {["Verified Social Strategy", "NDA Protected Data", "Ethical AI Usage", "White-Hat Growth"].map(trust => (
            <div key={trust} className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]" style={{ color: "var(--text-secondary)" }}>
              <ShieldCheck size={16} style={{ color: "var(--teal)" }} /> {trust}
            </div>
          ))}
        </div>
      </section>

      {/* 14. SOCIAL FAQS */}
      <section className="py-24 px-6 lg:px-20 reveal-section" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black mb-16 text-center">
            Engagement <span style={{ color: "var(--teal)" }}>Clarified.</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "How long until I see results from social media?", a: "Consistency is key. While viral hits can happen overnight, building a loyal community typically takes 3-6 months of strategic storytelling and active engagement." },
              { q: "Do you handle negative comments?", a: "Yes. We have a crisis management protocol. We address concerns professionally and escalate serious issues to you immediately while maintaining brand integrity." },
              { q: "Can we see content before it goes live?", a: "Absolutely. We use a shared content calendar where you can review, suggest edits, and approve all posts at least 7 days in advance." }
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border overflow-hidden shadow-sm"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-8 font-black text-lg flex justify-between items-center group"
                  style={{ color: "var(--text-main)" }}
                >
                  <span className="group-hover:opacity-80 transition-colors duration-300">{item.q}</span>
                  <ChevronDown
                    className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`}
                    size={22}
                    style={{ color: "var(--teal)" }}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div
                    className="p-8 pt-0 leading-relaxed font-medium border-t"
                    style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;