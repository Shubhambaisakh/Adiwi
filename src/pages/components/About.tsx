import { FC, useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const About: FC = () => {
  const counterRef = useRef<HTMLSpanElement>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-main)]">
      <div className="max-w-8xl mx-auto px-6 lg:px-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* IMAGE CONTAINER - SIMPLIFIED */}
          <div className="lg:col-span-6 relative rounded-[2rem] lg:rounded-bl-[200px] overflow-hidden h-[460px] lg:h-[650px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
              alt="Strategic Team"
              className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* CONTENT OVERLAY */}
          <div className="lg:col-span-6 lg:-ml-32 mt-[-60px] lg:mt-0 relative z-30">
            <div className="mb-8 lg:ml-40 text-center lg:text-left">
              
              {/* SIMPLE BADGE */}
              <span className="inline-flex items-center gap-3 uppercase text-[10px] tracking-[0.5em] font-black px-6 py-3 rounded-full border-2" style={{
                background: 'var(--bg-main)',
                borderColor: '#FF8C42'
              }}>
                <span style={{ color: '#FF8C42' }}>✦</span>
                <span style={{ color: '#FF7F50', fontWeight: '900' }}>
                  About Agency
                </span>
              </span>

              {/* SIMPLE HEADING - NO LAG */}
              <h2 className="mt-6 font-bold tracking-tighter leading-[1.1] text-[2rem] md:text-[3.5rem]">
                <span className="inline-block" style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900'
                }}>
                  Reimagining
                </span>
                {" "}
                <span className="inline-block" style={{ color: '#2C1810', fontWeight: '900' }}>
                  brand potential
                </span>
                {" "}
                <span className="inline-block" style={{ color: '#5D4E37', fontWeight: '700' }}>through</span>
                <br className="hidden md:block" />
                <span className="italic font-serif inline-block" style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900'
                }}>
                  strategic digital
                </span>
              </h2>
            </div>

            {/* INFO CARD - SIMPLIFIED */}
            <div className="relative p-8 md:p-14 rounded-[2rem] lg:rounded-bl-[180px] lg:rounded-tr-[180px] lg:rounded-br-[180px] border-r-[12px] border-b-[12px] bg-[var(--bg-secondary)] shadow-2xl hover:-translate-y-2 transition-transform duration-500" style={{ borderColor: '#FF7F50' }}>
              
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 text-white rounded-full hidden lg:flex items-center justify-center shadow-xl" style={{ background: '#FF7F50' }}>
                <ChevronRight size={24} strokeWidth={3} />
              </div>

              <div className="flex flex-col md:flex-row gap-10">
                
                {/* STATS - SIMPLE */}
                <div className="text-center md:text-left">
                  <h3 className="text-7xl font-black leading-none">
                    <span ref={counterRef} style={{
                      color: '#FF7F50',
                      fontWeight: '900',
                      textShadow: '0 2px 20px rgba(255, 127, 80, 0.3)'
                    }}>10</span>
                    <span className="text-3xl ml-1" style={{
                      color: '#FF8C42',
                      fontWeight: '900'
                    }}>+</span>
                  </h3>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] font-black" style={{
                    color: '#5D4E37',
                    fontWeight: '900'
                  }}>
                    Years of Industry <br /> Expertise
                  </p>
                  
                  <div className="mt-4 flex gap-2 justify-center md:justify-start">
                    <span className="px-4 py-2 rounded-full font-bold text-xs shadow-lg" style={{
                      background: '#FF7F50',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(255, 127, 80, 0.4)'
                    }}>250+ Projects</span>
                  </div>
                </div>

                <div className="flex-1">
                  {/* SIMPLE DOTS */}
                  <div className="mb-6 flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-3 h-3 rounded-full" 
                        style={{ 
                          background: i % 2 === 0 ? '#FF8C42' : '#FF7F50',
                          boxShadow: '0 0 10px rgba(255, 127, 80, 0.4)'
                        }} 
                      />
                    ))}
                  </div>

                  <p className="leading-relaxed mb-10 text-lg font-medium" style={{ color: '#2C1810' }}>
                    Based in <span className="font-black relative" style={{
                      color: '#FF7F50',
                      fontWeight: '900'
                    }}>
                      Bhopal
                      <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{
                        background: '#FF7F50',
                        boxShadow: '0 2px 10px rgba(255, 127, 80, 0.3)'
                      }}></span>
                    </span>, 
                    we empower businesses with <span className="font-black" style={{
                      color: '#FF8C42',
                      fontWeight: '900'
                    }}>creative strategies</span> that turn digital presence into <span className="font-black" style={{
                      color: '#FF7F50',
                      fontWeight: '900'
                    }}>growth</span>. 🚀
                  </p>
                  
                  {/* SIMPLE BUTTON */}
                  <NavLink to="/about">
                    <button className="group flex items-center gap-6 border-2 rounded-full pl-8 pr-2 py-2 transition-all duration-300 hover:pr-4" style={{
                      borderColor: '#FF8C42',
                      color: '#2C1810'
                    }}>
                      <span className="uppercase text-[10px] font-black tracking-widest">Our Philosophy</span>
                      <span className="p-2.5 rounded-full text-white group-hover:rotate-45 transition-all duration-300 shadow-lg" style={{
                        background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)'
                      }}>
                        <ArrowUpRight size={18} />
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID - SIMPLIFIED */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <div className="relative p-10 rounded-3xl border-2 backdrop-blur-sm" style={{
              background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 127, 80, 0.1) 100%)',
              borderColor: 'rgba(255, 140, 66, 0.2)'
            }}>
              
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 rounded-2xl rotate-6" style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)'
                }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">💡</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-6xl opacity-30 font-serif leading-none" style={{ color: '#FF8C42' }}>"</div>
                <p className="text-xl leading-relaxed font-medium" style={{ color: '#2C1810' }}>
                  We align <strong style={{ color: '#FF8C42' }}>creative vision</strong> with <strong style={{ color: '#FF7F50' }}>performance execution</strong> to ensure every campaign delivers authority and ROI.
                </p>
                <div className="text-6xl opacity-30 font-serif leading-none text-right" style={{ color: '#FF7F50' }}>"</div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black shadow-lg" style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)'
                }}>
                  A
                </div>
                <div>
                  <div className="font-black text-sm" style={{ color: '#2C1810' }}>AdwikIndia Team</div>
                  <div className="text-xs" style={{ color: '#5D4E37' }}>Digital Growth Experts</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SERVICE CARDS */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.05) 0%, rgba(255, 140, 66, 0.1) 100%)',
              borderColor: 'rgba(255, 140, 66, 0.2)'
            }}>
              <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{
                background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)'
              }}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" 
                  alt="Digital Marketing"
                  className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-black mb-2" style={{ color: '#2C1810' }}>
                Digital Marketing
              </h3>
              <p className="text-sm mb-4" style={{ color: '#5D4E37' }}>
                ROI-focused campaigns that drive real results
              </p>
              
              <div className="flex items-center gap-2" style={{ color: '#FF8C42' }}>
                <span className="text-sm font-bold">Explore</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 127, 80, 0.05) 0%, rgba(255, 127, 80, 0.1) 100%)',
              borderColor: 'rgba(255, 127, 80, 0.2)'
            }}>
              <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{
                background: 'linear-gradient(135deg, #FF7F50 0%, #FFA07A 100%)'
              }}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" 
                  alt="Branding Solution"
                  className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-black mb-2" style={{ color: '#2C1810' }}>
                Branding Solution
              </h3>
              <p className="text-sm mb-4" style={{ color: '#5D4E37' }}>
                Memorable brand identities that stand out
              </p>
              
              <div className="flex items-center gap-2" style={{ color: '#FF7F50' }}>
                <span className="text-sm font-bold">Explore</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 127, 80, 0.05) 0%, rgba(255, 127, 80, 0.1) 100%)',
              borderColor: 'rgba(255, 127, 80, 0.2)'
            }}>
              <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{
                background: 'linear-gradient(135deg, #FF7F50 0%, #FFA07A 100%)'
              }}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                  alt="Growth Tracking"
                  className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-black mb-2" style={{ color: '#2C1810' }}>
                Growth Tracking
              </h3>
              <p className="text-sm mb-4" style={{ color: '#5D4E37' }}>
                Data-driven insights for continuous improvement
              </p>
              
              <div className="flex items-center gap-2" style={{ color: '#FF7F50' }}>
                <span className="text-sm font-bold">Explore</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.05) 0%, rgba(255, 140, 66, 0.1) 100%)',
              borderColor: 'rgba(255, 140, 66, 0.2)'
            }}>
              <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{
                background: 'linear-gradient(135deg, #FF8C42 0%, #FF7F50 100%)'
              }}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                  alt="Search Optimization"
                  className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-black mb-2" style={{ color: '#2C1810' }}>
                Search Optimization
              </h3>
              <p className="text-sm mb-4" style={{ color: '#5D4E37' }}>
                Top rankings that bring organic traffic
              </p>
              
              <div className="flex items-center gap-2" style={{ color: '#FF8C42' }}>
                <span className="text-sm font-bold">Explore</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
