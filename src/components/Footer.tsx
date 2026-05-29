import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".footer-anim", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      // Link Hover Underline Logic
      const links = gsap.utils.toArray(".footer-link");
      links.forEach((link: any) => {
        const underline = link.querySelector(".underline");
        link.addEventListener("mouseenter", () => gsap.to(underline, { width: "100%", duration: 0.3 }));
        link.addEventListener("mouseleave", () => gsap.to(underline, { width: "0%", duration: 0.3 }));
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com/people/AdwikIndia/61579256947193/" },
    { Icon: Twitter, url: "https://x.com/adwikindia77110" },
    { Icon: Instagram, url: "https://www.instagram.com/adwikindia" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/adwikindia/" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative pt-24 pb-12 overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] border-t border-[var(--border-light)]"
    >
      {/* Brand Glows - Updated to Orange */}
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] blur-[120px] rounded-full opacity-[0.07] bg-[var(--brand-orange)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* CTA Section */}
        <div className="footer-anim flex flex-col lg:flex-row justify-between items-center mb-20 gap-10 border-b border-[var(--border-light)] pb-16">
          <div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black tracking-tight leading-tight">
              Ready to <span className="text-[var(--brand-orange)]">Scale?</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">Let's craft your next digital breakthrough together.</p>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-6 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden shadow-xl bg-[var(--brand-coral)] text-white transition-transform active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start a Project
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-[#000]" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Brand Info */}
          <div className="footer-anim lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-[15deg] bg-[var(--brand-orange)]">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter">ADWIKINDIA</span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-[var(--brand-coral)]">GROWTH ENGINE</span>
              </div>
            </Link>
            <p className="leading-relaxed text-lg text-[var(--text-secondary)]">
              Strategic digital excellence based in Bhopal. We help ambitious brands dominate the digital landscape through innovation and precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all hover:-translate-y-2 hover:bg-[var(--brand-orange)] hover:text-white border-[var(--border-color)] text-[var(--text-secondary)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="footer-anim lg:col-span-2 space-y-8">
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[var(--brand-orange)]">Sitemap</h4>
            <ul className="space-y-4">
              {["Home", "About", "Portfolio", "Career", "Blogs", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="footer-link relative text-sm text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors">
                    {item}
                    <span className="underline absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--brand-orange)]" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="footer-anim lg:col-span-2 space-y-8">
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[var(--brand-orange)]">Expertise</h4>
            <ul className="space-y-4">
              {["Websites", "Ecommerce", "SEO", "Applications", "Social-Media"].map((service) => (
                <li key={service}>
                  <Link to={`/services/${service.toLowerCase()}`} className="footer-link relative text-sm text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors">
                    {service}
                    <span className="underline absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--brand-orange)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-anim lg:col-span-4 space-y-8">
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[var(--brand-orange)]">Connect</h4>
            <div className="space-y-6">
              {[
                "M-4 B-15 Patel Nagar, Bhopal, MP 462016",
                "Seela Complex, Punjabi Bagh, Govindpura, Bhopal 462023",
                "445 Kevta talab civil line, Unnao, UP 209801"
              ].map((addr, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <MapPin className="text-[var(--brand-orange)] shrink-0 transition-transform group-hover:scale-110" size={20} />
                  <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-main)] transition-colors">{addr}</p>
                </div>
              ))}
              <a href="mailto:contact@adwikindia.com" className="flex items-center gap-4 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors group">
                <Mail className="text-[var(--brand-orange)] group-hover:scale-110 transition-transform" size={20} /> contact@adwikindia.com
              </a>
              <a href="tel:+919174360955" className="flex items-center gap-4 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-orange)] transition-colors group">
                <Phone className="text-[var(--brand-orange)] group-hover:scale-110 transition-transform" size={20} /> +91 91743 60955
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-anim pt-8 border-t border-[var(--border-light)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--text-muted)]">
            © {new Date().getFullYear()} AdwikIndia — All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">
            <Link to="/privacy-policy" className="hover:text-[var(--brand-orange)] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--brand-orange)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;