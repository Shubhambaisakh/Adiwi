import React from "react";
import { ArrowUpRight, Facebook, Linkedin, Twitter, Asterisk } from "lucide-react";
import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  img: string;
}

const team: Member[] = [
  {
    name: "Sara Malik",
    role: "Lead UI/UX Designer",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900",
  },
  {
    name: "Sohel Tanvir",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900",
  },
  {
    name: "Michel Hoon",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900",
  },
  {
    name: "Brain Lul",
    role: "Web Designer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900",
  },
];

const Team = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-main)]">

      {/* Brand Background Glows */}
      <div 
        className="absolute -top-32 -left-32 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: "var(--teal)" }} 
      />
      <div 
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-10" 
        style={{ backgroundColor: "var(--cyan)" }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Asterisk size={18} style={{ color: "var(--teal)" }} className="animate-spin-slow" />
              <span className="text-xs uppercase tracking-[0.4em] font-black text-[var(--text-main)]">
                Our Leadership
              </span>
            </div>

            <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight text-[var(--text-main)]">
              The creative minds <br />
              <span className="italic font-serif font-medium" style={{ color: "var(--teal)" }}>
                behind the growth
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
              A multidisciplinary team of strategists, designers and engineers 
              crafting high-performance digital ecosystems for ambitious brands.
            </p>
          </div>

          <button 
            className="group flex items-center gap-4 text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all duration-500 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] bg-[var(--navy)]"
          >
            Meet All
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div 
                className="relative rounded-[32px] overflow-hidden border transition-all duration-500 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] bg-[var(--card-bg)] border-[var(--border-color)]"
              >

                {/* IMAGE AREA */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />

                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 rounded-full bg-white text-[var(--navy)] flex items-center justify-center hover:bg-[var(--teal)] hover:text-white transition-all cursor-pointer shadow-lg"
                        >
                          <Icon size={16} strokeWidth={2.5} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 text-center">
                  <h4 
                    className="text-xl font-bold transition-colors group-hover:text-[var(--teal)] text-[var(--text-main)]"
                  >
                    {member.name}
                  </h4>
                  <p 
                    className="text-[10px] uppercase tracking-[0.2em] font-black mt-3 text-[var(--text-muted)]"
                  >
                    {member.role}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
      
      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default Team;