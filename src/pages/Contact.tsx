import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const mainRef = useRef(null);
  const particlesRef = useRef([]);
  const lastSubmit = useRef(0);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    company: "" // honeypot
  });

  // ---------- Security Helpers ----------
  const sanitizeInput = (input) => {
    return input
      .replace(/<script.*?>.*?<\/script>/gi, "")
      .replace(/<.*?>/g, "")
      .replace(/[<>]/g, "")
      .trim();
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const spamKeywords = ["viagra", "casino", "loan", "crypto", "bitcoin", "free money"];

  const containsSpam = (text) => {
    return spamKeywords.some((word) => text.toLowerCase().includes(word));
  };

  // ---------- Form Change Handler ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ---------- Submit Handler ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.company) return; // Bot detection

    const now = Date.now();
    if (now - lastSubmit.current < 10000) {
      alert("Please wait 10 seconds before sending another message.");
      return;
    }
    lastSubmit.current = now;

    const name = sanitizeInput(formData.fullName);
    const email = sanitizeInput(formData.email);
    const subject = sanitizeInput(formData.subject);
    const message = sanitizeInput(formData.message);

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (containsSpam(message) || containsSpam(subject)) {
      alert("Spam detected. Please revise your message.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        'service_ql8vubq',
        'template_mw7i74m',
        { name, email, subject, message },
        'MTiI3Nhm8qhXr6Ofo'
      );

      setSuccess(true);
      setFormData({ fullName: "", email: "", subject: "", message: "", company: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Email sending failed:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ---------- GSAP Animations ----------
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-up",
          start: "top 90%"
        }
      });

      gsap.from(".reveal-right", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-right",
          start: "top 80%"
        }
      });

      particlesRef.current.forEach((p) => {
        gsap.to(p, {
          x: "random(-150, 150)",
          y: "random(-150, 150)",
          duration: "random(10, 15)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="relative bg-[var(--bg-main)] text-[var(--text-main)] overflow-hidden"
    >
      {/* Brand Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-2 h-2 bg-[var(--brand-orange)] opacity-20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-48 py-24 text-center relative bg-[var(--brand-coral)] text-white">
        <div className="hero-title relative z-10">
          <h1 className="text-5xl md:text-8xl text-white font-black mb-6 tracking-tighter">
            Get in Touch
          </h1>
          <div className="flex justify-center gap-3 text-xs uppercase font-black tracking-[0.4em] opacity-80">
            <span>Home</span>
            <span className="text-white">/</span>
            <span>Contact</span>
          </div>
        </div>
        {/* Subtle Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
      </section>

      {/* Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column – Form */}
          <div className="lg:col-span-7 reveal-up">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none">
              Let's Scale Your
              <span className="text-[var(--brand-orange)] italic ml-3">Vision</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] outline-none focus:ring-2 focus:ring-[var(--brand-orange)] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] outline-none focus:ring-2 focus:ring-[var(--brand-orange)] transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="p-5 w-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] outline-none focus:ring-2 focus:ring-[var(--brand-orange)] transition-all"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals..."
                required
                className="p-5 w-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-light)] outline-none resize-none focus:ring-2 focus:ring-[var(--brand-orange)] transition-all"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center transition-transform active:scale-95"
              >
                <div className="bg-[var(--brand-orange)] p-5 rounded-2xl text-white group-hover:rotate-45 transition-transform duration-500 shadow-lg z-10">
                  <ArrowRight size={24} />
                </div>
                <div className="bg-[var(--text-main)] text-white font-black tracking-widest text-xs uppercase py-5 px-12 rounded-2xl -ml-6 pl-14 transition-colors group-hover:bg-black">
                  {loading ? "Sending..." : "Submit Inquiry"}
                </div>
              </button>

              {success && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-xl">
                  <p className="text-green-500 font-bold text-sm">
                    Success! We've received your request and will follow up shortly.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column – Info Card */}
          <div className="lg:col-span-5 reveal-right">
            <div className="p-10 md:p-14 rounded-[3rem] bg-[var(--bg-secondary)] border border-[var(--border-light)] shadow-[var(--shadow-lg)] relative overflow-hidden h-full">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--brand-orange)] opacity-5 blur-[80px] pointer-events-none" />

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-2.5 rounded-xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]">
                    <MapPin size={22} />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--text-main)]">
                    Direct Contact
                  </h3>
                </div>
                
                <div className="space-y-10">
                  <OfficeLocation city="Bhopal (HQ)" address="M-4 B-15 Patel Nagar, Bhopal, MP 462016" />
                  <OfficeLocation city="Old Bhopal" address="Seela Complex, Govindpura, Bhopal, MP 462023" />
                  <OfficeLocation city="Uttar Pradesh" address="445 Kevta talab civil line, Unnao, UP 209801" />
                </div>
              </div>

              <hr className="border-[var(--border-light)] mb-10" />

              <div className="space-y-8 mb-12">
                <a href="mailto:contact@adwikindia.com" className="block group">
                  <ContactInfoDetail icon={<Mail />} title="Email" value="contact@adwikindia.com" />
                </a>
                <a href="tel:+919174360955" className="block group">
                  <ContactInfoDetail icon={<Phone />} title="Primary" value="+91 91743 60955" />
                </a>
              </div>

              <div className="flex items-center justify-between gap-6 pt-8 border-t border-[var(--border-light)]">
                <div className="flex gap-3">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/people/AdwikIndia/61579256947193/" },
                    { Icon: Twitter, href: "https://x.com/adwikindia77110" },
                    { Icon: Instagram, href: "https://www.instagram.com/adwikindia" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/adwikindia/" }
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href} target="_blank" rel="noopener noreferrer"
                      className="w-11 h-11 bg-[var(--bg-main)] border border-[var(--border-light)] rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--brand-orange)] hover:text-white hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] hidden sm:block">
                  Fast Response Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= HELPER COMPONENTS ================= */

const OfficeLocation = ({ city, address }) => (
  <div className="group/loc">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--brand-orange)] mb-2">
      {city}
    </h4>
    <p className="text-sm font-medium leading-relaxed text-[var(--text-secondary)] group-hover/loc:text-[var(--text-main)] transition-colors">
      {address}
    </p>
  </div>
);

const ContactInfoDetail = ({ icon, title, value }) => (
  <div className="flex gap-5">
    <div className="text-[var(--brand-orange)] transition-transform group-hover:scale-110">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-1">
        {title}
      </h4>
      <p className="text-lg font-black text-[var(--text-main)] group-hover:text-[var(--brand-orange)] transition-colors">{value}</p>
    </div>
  </div>
);

export default Contact;