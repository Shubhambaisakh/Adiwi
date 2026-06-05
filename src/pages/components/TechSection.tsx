
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Expanded and categorized tools list with CDN icon URLs
const tools = [
  // Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "design" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", category: "design" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", category: "design" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", category: "design" },

  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "frontend" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
  { name: "NuxtJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", category: "frontend" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", category: "frontend" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "frontend" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg", category: "frontend" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", category: "frontend" },
  { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "backend" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "backend" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "backend" },

  // Database
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },

  // Cloud & DevOps
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", category: "cloud" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "cloud" },
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", category: "cloud" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "cloud" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg", category: "cloud" },

  // Version Control & Project Management
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", category: "tools" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", category: "tools" },
  { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg", category: "tools" },

  // Marketing & CMS
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", category: "cms" },
  { name: "Elementor", icon: "/elementor.png", category: "cms" },
  { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg", category: "cms" },
  { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg", category: "cms" },
  { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg", category: "cms" },
  { name: "Stripe", icon: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", category: "marketing" },
  { name: "PayPal", icon: "/paypal-logo.png", category: "marketing" },
  { name: "Google Ads", icon: "/google ads.jpg", category: "marketing" },
  { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", category: "marketing" },
  { name: "Meta", icon: "/meta.png", category: "marketing" },
  { name: "Instagram", icon: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg", category: "marketing" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", category: "tools" },
  { name: "Discord", icon: "https://cdn.worldvectorlogo.com/logos/discord-6.svg", category: "tools" },
  { name: "Zoom", icon: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg", category: "tools" },
];


const TechSection = () => {

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const cards = gridRef.current?.querySelectorAll(".tech-card");

    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out"
      }
    );

  }, []);

  return (

  <section className="py-20 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    <div
      ref={gridRef}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
    >

      {/* TITLE BOX */}

      <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col justify-center gap-3 h-auto py-6">

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black text-[var(--text-main)]">
          TECHNOLOGIES
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.1] tracking-tight text-[var(--text-main)]">
          TOOLS OF OUR{" "}
          <span
            className="italic font-serif font-medium"
            style={{ color: "var(--teal)" }}
          >
            TRADE
          </span>
        </h2>

      </div>


      {/* TECH CARDS */}

      {tools.map((tool, index) => (

        <div
          key={index}
          className="tech-card group flex flex-col items-center justify-center gap-3 h-28 sm:h-32 md:h-36 border transition-all duration-500 cursor-pointer rounded-xl relative overflow-hidden"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)"
          }}
        >

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/0 to-[var(--brand-coral)]/0 group-hover:from-[var(--brand-orange)]/10 group-hover:to-[var(--brand-coral)]/5 transition-all duration-500 rounded-xl" />

          <div className="text-2xl sm:text-3xl md:text-4xl flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[8deg] group-hover:-translate-y-1">
            <img 
              src={tool.icon} 
              alt={tool.name} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
              loading="lazy"
            />
          </div>

          <p
            className="text-xs sm:text-sm text-center relative z-10 font-semibold transition-all duration-300"
            style={{ color: "var(--text-secondary)" }}
          >
            {tool.name}
          </p>

        </div>

      ))}

    </div>

  </div>


  <style jsx>{`

    .tech-card:hover{
      transform: translateY(-12px) scale(1.08);
      border-color: var(--brand-orange);
      background: linear-gradient(135deg, var(--card-bg) 0%, var(--bg-secondary) 100%);
      box-shadow: 0 20px 60px -15px rgba(255, 107, 53, 0.4), 0 0 0 1px var(--brand-orange)/20;
    }

    .tech-card:hover p{
      color: var(--brand-orange);
      font-weight: 700;
    }

    .tech-card {
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .tech-card:active {
      transform: translateY(-8px) scale(1.02);
    }

  `}</style>

</section>

  );

};

export default TechSection;