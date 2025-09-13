"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 relative py-32"
      style={{
        background: "linear-gradient(135deg, #475569 0%, #334155 30%, #1e293b 70%, #0f172a 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="about-cyber" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M15,15 L135,15 L135,30 L120,30 L120,45 L135,45 L135,60 L105,60 L105,75 L135,75 L135,90 L90,90 L90,105 L135,105 L135,120 L75,120 L75,135 L135,135" 
                      stroke="#ff0080" strokeWidth="2" fill="none" opacity="0.6">
                  <animate attributeName="stroke-dasharray" values="0,300;300,0;0,300" dur="7s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#ff0080;#00ffff;#00ff88;#ff0080" dur="2.5s" repeatCount="indefinite"/>
                </path>
                <circle cx="30" cy="30" r="3" fill="#ff0080" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="120" cy="120" r="3" fill="#00ffff" opacity="0.7">
                  <animate attributeName="opacity" values="0.1;0.7;0.1" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#00ff88;#00ffff" dur="2s" repeatCount="indefinite"/>
                </circle>
                <rect x="60" y="60" width="8" height="8" fill="#00ff88" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="1.8s" repeatCount="indefinite"/>
                </rect>
                <polygon points="45,45 60,45 52,60" fill="#00ffff" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#ff0080;#00ffff" dur="1.5s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto responsive-container">
        <h2 className="font-bold text-center mb-16 responsive-text" style={{ color: "#ffffff", fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}>
        Maker. Mentor. Mess-up Expert
        </h2>
        <div className="responsive-grid lg:grid-cols-2 items-start" style={{gap: 'clamp(2rem, 5vw, 5rem)'}}>
          <div className="space-y-16">
            <div className="space-y-16">
                <p className="leading-relaxed text-4xl font-bold" style={{ color: "#ffffff" }}>
                  Hi — I'm Anurag. Curious maker, coffee-lover, and someone who prefers figuring things out with my hands (and a little chaos).
                </p>
                
                <p className="leading-relaxed text-3xl" style={{ color: "#f1f5f9" }}>
                  I love turning rough sketches into working prototypes, running beginner-friendly workshops, and helping friends debug — the messy, hands-on part is my favorite. Outside the lab I recharge with good coffee, a quick workout, and decent sleep — it keeps me curious and calm.
                </p>
                
                <p className="leading-relaxed text-3xl" style={{ color: "#f1f5f9" }}>
                  Got a weird idea or want to trade failure stories over coffee? I'm in.
                </p>
            </div>
          </div>
          <div className="relative">
            {/* Modern Collage Layout - Larger Thumbnails */}
            <div className="relative w-full h-[800px] lg:h-[900px] ml-4">
              {/* Large main image - top center-right */}
              <div className="absolute top-0 left-0 w-2/3 h-3/5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 z-10 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/GroupSaintPat.jpg"
                  alt="Group photo at Saint Patrick's Day"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Medium image - top right */}
              <div className="absolute top-0 right-0 w-1/3 h-2/5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 z-20 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/TreeHug.jpg"
                  alt="Tree hugging moment"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Medium image - middle right */}
              <div className="absolute top-1/2 right-0 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 z-30 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src="/CaskeSmash.jpg"  
                  alt="Anurag with fish"
                  fill
                  className="object-cover" 
                />
              </div>
              
              {/* Large bottom image - bottom center */}
              <div className="absolute bottom-0 left-0 w-1/2 h-2/5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 z-10 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/TobermoryLakeside.jpg"
                  alt="Cake smashing celebration"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Medium accent image - bottom right */}
              <div className="absolute bottom-0 right-0 w-2/5 h-1/3 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-2 z-40 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/anufish.jpg"
                  alt="Tobermory lakeside view"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Additional medium image - middle left */}
              <div className="absolute top-1/3 left-0 w-1/3 h-1/4 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 z-25 hover:z-50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/GroupBirthday.jpg"
                  alt="Group birthday celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-8">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("experience").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-yellow-300 transition-all duration-300 animate-bounce hover:scale-110 p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to experience section"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
