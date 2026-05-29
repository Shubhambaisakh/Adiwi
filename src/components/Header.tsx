import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import logo from "../assets/Adwikindia-logo.png";

/* ================= NAV LINKS ================= */

const NAV_LEFT = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" }
];

const NAV_RIGHT = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "Career", path: "/career" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" }
];

/* ================= SERVICES ================= */

const SERVICES = [
  {
    category: "Development",
    colorVar: "var(--brand-orange)",
    items: [
      { name: "Websites", path: "/services/websites" },
      { name: "E-Commerce", path: "/services/ecommerce" },
      { name: "Applications", path: "/services/applications" }
    ]
  },
  {
    category: "Marketing",
    colorVar: "var(--brand-coral)",
    items: [
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Social Media", path: "/services/social-media" },
      { name: "SEO", path: "/services/seo" }
    ]
  },
  {
    category: "Design",
    colorVar: "var(--brand-orange)",
    items: [
      { name: "Creative Video", path: "/services/creative-video" },
      { name: "Branding and Designing", path: "/services/branding-design" }
    ]
  }
];

export default function RedesignedHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const location = useLocation();

  /* ================= THEME ================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  /* ================= STICKY ================= */

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= MEGA MENU ANIMATION ================= */

  const onServiceEnter = () => {
    gsap.fromTo(
      ".mega-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out"
      }
    );
  };

  /* ================= NAVLINK STYLE WITH EFFECTS ================= */

  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "font-black text-[11px] uppercase tracking-widest transition-all duration-300 relative pb-2 inline-block";
    const colorClasses = isActive 
      ? isSticky ? "text-white" : "text-[var(--brand-orange)]"
      : isSticky ? "text-white/90 hover:text-white" : "text-[var(--text-main)] hover:text-[var(--brand-orange)]";
    
    return `${baseClasses} ${colorClasses}`;
  };

  // Render NavLink with unique effects
  const renderNavLink = (link: { label: string; path: string }) => {
    return (
      <NavLink 
        key={link.label} 
        to={link.path} 
        className={({ isActive }) => `${navLinkClass({ isActive })} nav-link-custom`}
      >
        {({ isActive }) => (
          <>
            <span className="relative z-10">{link.label}</span>
            
            {/* Animated underline - always visible on active, shows on hover */}
            <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
              isActive 
                ? isSticky 
                  ? 'w-full bg-white' 
                  : 'w-full bg-[var(--brand-orange)]'
                : isSticky
                  ? 'w-0 hover:w-full bg-white'
                  : 'w-0 hover:w-full bg-[var(--brand-orange)]'
            }`}></span>
            
            {/* Glow effect on hover */}
            <span className="absolute inset-0 -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="absolute inset-0 bg-[var(--brand-orange)] blur-xl opacity-20"></span>
            </span>
            
            {/* Dot indicator for active page */}
            {isActive && (
              <span className={`absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full animate-pulse ${
                isSticky ? 'bg-white' : 'bg-[var(--brand-orange)]'
              }`}></span>
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      
      {/* ================= TOP BAR ================= */}

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isSticky ? "h-0" : "h-10"
        }`}
        style={{ 
          background: "linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)", 
          color: "white",
          boxShadow: "0 2px 10px rgba(255, 140, 66, 0.3)"
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 text-[10px] font-bold uppercase tracking-widest">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-default">
              <img src="https://cdn.worldvectorlogo.com/logos/globe-1.svg" alt="Globe" className="w-3 h-3" /> Global HQ / Bhopal
            </span>

            <span className="hidden md:block opacity-90">
              Performance Driven Digital Agency
            </span>
          </div>

          {/* SOCIAL LINKS */}

          <div className="flex gap-5">
            <a href="https://www.facebook.com/people/AdwikIndia/61579256947193/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg" alt="Facebook" className="w-3 h-3 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/adwikindia/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" alt="Instagram" className="w-3 h-3 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/adwikindia/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-3 h-3 hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/adwikindia77110" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg" alt="Twitter" className="w-3 h-3 hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>
      </div>

       
      {/* ================= MAIN NAV ================= */}

      <nav
        className={`transition-all duration-500 ${
          isSticky ? "py-3 shadow-xl" : "py-6"
        }`}
        style={{
          background: isSticky 
            ? "linear-gradient(135deg, rgba(255, 140, 66, 0.95) 0%, rgba(255, 127, 80, 0.95) 100%)" 
            : "rgba(255, 248, 243, 0.98)",
          backdropFilter: isSticky ? "blur(10px)" : "none",
          boxShadow: isSticky ? "0 4px 20px rgba(255, 140, 66, 0.3)" : "none"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}

          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${isSticky ? 'bg-white p-1' : 'bg-transparent'}`}
            >
              <img src={logo} alt="Adwik India Logo" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="font-black text-xl transition-colors"
                style={{ color: isSticky ? "white" : "var(--text-main)" }}
              >
                ADWIKINDIA
              </span>

              <span
                className="text-[8px] font-bold tracking-[0.3em] transition-colors"
                style={{ color: isSticky ? "rgba(255,255,255,0.8)" : "var(--brand-orange)" }}
              >
                THE GROWTH ENGINE
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP LINKS ================= */}

          <div className="hidden lg:flex items-center gap-7">

            {NAV_LEFT.map(link => renderNavLink(link))}

            {/* SERVICES MEGA MENU */}

            <div className="relative group" onMouseEnter={onServiceEnter}>

              <button
                className={`flex items-center gap-1 font-black text-[11px] uppercase tracking-widest transition-all duration-300 relative pb-1
                ${
                  location.pathname.includes("services")
                    ? isSticky ? "text-white" : "text-[var(--brand-orange)]"
                    : isSticky ? "text-white/90 hover:text-white" : "text-[var(--text-main)] hover:text-[var(--brand-orange)]"
                }`}
              >
                <span className="relative z-10">Services</span>
                <svg className="text-[9px] group-hover:rotate-180 transition-transform duration-300 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isSticky ? 'bg-white' : 'bg-[var(--brand-orange)]'
                }`}></span>
                
                {/* Glow effect */}
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`absolute inset-0 blur-xl opacity-20 ${
                    isSticky ? 'bg-white' : 'bg-[var(--brand-orange)]'
                  }`}></span>
                </span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">

                <div
                  className="w-[650px] p-8 rounded-2xl shadow-2xl grid grid-cols-3 gap-8 border border-[var(--border-light)] backdrop-blur-sm"
                  style={{
                    backgroundColor: "var(--card-bg)"
                  }}
                >

                  {SERVICES.map(cat => (
                    <div key={cat.category} className="mega-item">

                      <h4
                        style={{ color: cat.colorVar }}
                        className="text-[10px] font-black uppercase mb-4 tracking-tighter"
                      >
                        {cat.category}
                      </h4>

                      <ul className="space-y-3">
                        {cat.items.map(item => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--brand-orange)] hover:translate-x-2 transition-all inline-block relative group/item"
                            >
                              <span className="relative">
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--brand-orange)] transition-all duration-300 group-hover/item:w-full"></span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {NAV_RIGHT.map(link => renderNavLink(link))}

          </div>

          {/* ================= ACTIONS ================= */}

          <div className="flex items-center gap-4">

            {/* THEME TOGGLE - STUNNING DESIGN */}
            <button 
                onClick={toggleTheme} 
                className={`relative p-3 rounded-xl transition-all duration-300 group ${
                  isSticky 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'bg-gradient-to-br from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 text-orange-600'
                }`}
                style={{
                  boxShadow: isSticky 
                    ? '0 4px 15px rgba(255, 255, 255, 0.2)' 
                    : '0 4px 15px rgba(255, 140, 66, 0.3)',
                  border: isSticky ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid rgba(255, 140, 66, 0.2)'
                }}
            >
              <span className="relative z-10 block transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110">
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              
              {/* Animated glow ring */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`absolute inset-0 rounded-xl animate-ping ${
                  isSticky ? 'bg-white/30' : 'bg-orange-400/40'
                }`}></span>
              </span>
            </button>

            {/* GET STARTED BUTTON - PREMIUM DESIGN */}
            <Link to="/contact" className="hidden md:block">
              <button
                className="relative px-8 py-3 rounded-xl text-white font-black text-[11px] uppercase tracking-wider shadow-lg hover:shadow-2xl active:scale-95 transition-all duration-300 overflow-hidden group"
                style={{ 
                  background: isSticky 
                    ? "linear-gradient(135deg, #FFFFFF 0%, #FFE5D9 100%)" 
                    : "linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)",
                  color: isSticky ? '#FF7F50' : 'white',
                  boxShadow: isSticky 
                    ? "0 6px 20px rgba(255, 255, 255, 0.4)" 
                    : "0 6px 20px rgba(255, 140, 66, 0.5)",
                  border: isSticky ? '2px solid rgba(255, 127, 80, 0.3)' : 'none'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                
                {/* Pulse effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 animate-ping bg-white/20 rounded-xl"></span>
                </span>
              </button>
            </Link>

            {/* MOBILE MENU BUTTON - STUNNING DESIGN */}
            <button 
                onClick={() => setMobileOpen(true)} 
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 group ${
                  isSticky 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'bg-gradient-to-br from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 text-orange-600'
                }`}
                style={{
                  boxShadow: isSticky 
                    ? '0 4px 15px rgba(255, 255, 255, 0.2)' 
                    : '0 4px 15px rgba(255, 140, 66, 0.3)',
                  border: isSticky ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid rgba(255, 140, 66, 0.2)'
                }}
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              {/* Animated glow ring */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`absolute inset-0 rounded-xl animate-ping ${
                  isSticky ? 'bg-white/30' : 'bg-orange-400/40'
                }`}></span>
              </span>
            </button>

          </div>

        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[200] transition-all ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 p-8 transition-transform duration-500 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "var(--bg-main)" }}
        >

          <div className="flex justify-between items-center mb-10">
             <img src={logo} alt="Logo" className="w-12" />
             <button 
                onClick={() => setMobileOpen(false)} 
                className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 text-orange-600 transition-all duration-300 group"
                style={{
                  boxShadow: '0 4px 15px rgba(255, 140, 66, 0.3)',
                  border: '2px solid rgba(255, 140, 66, 0.2)'
                }}
             >
                <svg className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-black text-[var(--text-main)]">

            {[...NAV_LEFT, ...NAV_RIGHT].map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="relative hover:text-[var(--brand-orange)] transition-all duration-300 group overflow-hidden"
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative z-10 inline-block group-hover:translate-x-2 transition-transform duration-300">
                  {link.label}
                </span>
                
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--brand-orange)] transition-all duration-300 group-hover:w-full"></span>
                
                {/* Background slide effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-[var(--brand-orange)]/5"></span>
              </Link>
            ))}
            
            <Link 
                to="/contact" 
                className="relative mt-4 text-center py-4 text-white rounded-xl text-lg overflow-hidden group"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)",
                  boxShadow: "0 6px 20px rgba(255, 140, 66, 0.5)",
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}
            >
                <span className="relative z-10 flex items-center justify-center gap-2 font-black">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                
                {/* Pulse effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 animate-ping bg-white/20 rounded-xl"></span>
                </span>
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}