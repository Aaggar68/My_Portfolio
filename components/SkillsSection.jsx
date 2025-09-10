"use client"

export default function SkillsSection() {
  const mainSkills = [
    "Embedded systems & firmware",
    "Control systems & motor control (PID / FOC)",
    "Sensor fusion & state estimation",
    "Computer vision & perception",
    "TinyML & edge inference",
    "System integration & rapid prototyping",
    "Python",
    "C / C++",
    "Git",
    "Linux / Bash",
    "ROS / ROS2",
  ]

  const certifications = [
    { name: "TensorFlow Developer Certificate", thumbnail: "/tensorflow-developer-certificate.jpg" },
    { name: "NVIDIA DLI — Jetson / Deep Learning for Computer Vision", thumbnail: "/nvidia-dli-jetson-certificate.jpg" },
    { name: "ARM Accredited Engineer — Embedded Systems (AAE)", thumbnail: "/arm-accredited-engineer-certificate.jpg" },
    { name: "NVIDIA Deep Learning Institute (DLI) Certificate", thumbnail: "/nvidia-dli-certificate.jpg" },
    { name: "Google Professional Machine Learning Engineer", thumbnail: "/google-ml-engineer-certificate.jpg" },
    { name: "AWS Certified Machine Learning", thumbnail: "/aws-ml-certificate.jpg" },
  ]

  return (
    <section
      id="skills"
      className="px-6 py-24 relative"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-6">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="skills-cyber" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                <path d="M14,14 L126,14 L126,28 L112,28 L112,42 L126,42 L126,56 L98,56 L98,70 L126,70 L126,84 L84,84 L84,98 L126,98 L126,112 L70,112 L70,126 L126,126" 
                      stroke="#ff0080" strokeWidth="2" fill="none" opacity="0.3">
                  <animate attributeName="stroke-dasharray" values="0,280;280,0;0,280" dur="7s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#ff0080;#00ff88;#00ffff;#ff0080" dur="2.6s" repeatCount="indefinite"/>
                </path>
                <circle cx="28" cy="28" r="2.5" fill="#ff0080" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ff88;#ff0080" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="112" cy="112" r="2.5" fill="#00ff88" opacity="0.5">
                  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <rect x="56" y="56" width="8" height="8" fill="#00ffff" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#ff0080;#00ffff" dur="1.9s" repeatCount="indefinite"/>
                </rect>
                <polygon points="42,42 56,42 49,56" fill="#00ff88" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="1.6s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#skills-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/3 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white text-base font-semibold tracking-wider uppercase mb-2">TECHNICAL EXPERTISE</p>
          <h2 className="font-bold text-6xl mb-6" style={{ color: "#ffffff" }}>
            Engineering Skills
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#1e293b" }}>
            Comprehensive expertise in embedded systems, robotics, and intelligent control systems with hands-on
            experience in building autonomous systems and deploying edge AI solutions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
            Certifications & Training
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <img
                    src={cert.thumbnail || "/placeholder.svg"}
                    alt={`${cert.name} certificate`}
                    className="w-20 h-20 rounded-xl object-cover shadow-lg"
                  />
                  <span className="text-base font-semibold leading-relaxed" style={{ color: "#ffffff" }}>
                    {cert.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mainSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#3b82f6" }} />
                  <span className="font-medium text-lg" style={{ color: "#ffffff" }}>
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-8">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-blue-400 transition-all duration-300 animate-bounce hover:scale-110 p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to contact section"
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
