"use client"

export default function ProjectsSection() {
  const projects = [
    {
      title: "BLDC Motor Controller (FOC)",
      description:
        "Real-time BLDC controller with field-oriented control, current sensing, and safety interlocks for smooth torque.",
      tech: ["C++", "STM32", "FOC", "Real-time Control"],
      thumbnail: "/bldc-motor-controller-circuit-board.jpg",
      github: "https://github.com/Aaggar68/bldc-motor-controller",
      timeSpan: "Jan 2024 - Mar 2024",
    },
    {
      title: "Autonomous Delivery Rover",
      description:
        "Compact indoor rover that navigates hallways using LiDAR + IMU fusion and lightweight path planning.",
      tech: ["ROS", "C++", "LiDAR", "SLAM"],
      thumbnail: "/autonomous-rover-with-lidar-sensor.jpg",
      github: "https://github.com/Aaggar68/autonomous-delivery-rover",
      timeSpan: "Sep 2023 - Dec 2023",
    },
    {
      title: "Smart Greenhouse (TinyML)",
      description:
        "Automated greenhouse that predicts irrigation needs on-device using a tiny neural network and live dashboard.",
      tech: ["TinyML", "Arduino", "IoT", "Neural Networks"],
      thumbnail: "/smart-greenhouse-automation-system.jpg",
      github: "https://github.com/Aaggar68/smart-greenhouse-tinyml",
      timeSpan: "Jun 2023 - Aug 2023",
    },
    {
      title: "TinyML Model Deployment",
      description:
        "Workflow to quantize and deploy compact ML models on microcontrollers with measured latency and power.",
      tech: ["TFLite Micro", "Quantization", "STM32", "Edge AI"],
      thumbnail: "/tinyml-microcontroller-deployment.jpg",
      github: "https://github.com/Aaggar68/tinyml-deployment",
      timeSpan: "Apr 2023 - May 2023",
    },
    {
      title: "Stock Analyzer",
      description:
        "Data-driven trading insights Python tool that ingests historical & real-time market data, computes technical indicators, backtests strategies, and visualizes buy/sell signals in an interactive dashboard.",
      tech: ["Python", "pandas", "Streamlit", "Technical Analysis"],
      thumbnail: "/stock-analyzer-dashboard.jpg",
      github: "https://github.com/Aaggar68/stock-analyzer",
      timeSpan: "Feb 2023 - Mar 2023",
    },
  ]

  return (
    <section
      id="projects"
      className="px-6 py-24"
      style={{
        background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #9333ea 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-center mb-8 text-5xl" style={{ color: "#ffffff" }}>
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg border transition-all duration-300 cursor-pointer hover:scale-105 w-full max-w-md relative"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)"
              }}
            >
              {/* Time Span Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  {project.timeSpan}
                </span>
              </div>
              
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#ffffff" }}>
                  {project.title}
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: "#e5e7eb" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        color: "#ffffff",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("skills").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-yellow-300 transition-colors duration-300 animate-bounce"
          style={{ color: "#ffffff" }}
          aria-label="Scroll to skills section"
        >
          <svg
            className="w-8 h-8"
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
