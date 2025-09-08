"use client"

export default function SkillsSection() {
  const mainSkills = [
    "Embedded systems & firmware",
    "ROS & robot control",
    "Control systems (PID / FOC)",
    "Sensor fusion & state estimation",
    "Computer vision (OpenCV / CV pipelines)",
    "Machine learning & deep learning",
    "TinyML & edge inference",
    "C / C++ for performance",
    "Python for data & prototyping",
    "Data visualization & telemetry",
    "System integration & rapid prototyping",
  ]

  const certifications = [
    { name: "Arduino Certified Professional", thumbnail: "/arduino-certification-badge.jpg" },
    { name: "ROS Industrial Certification", thumbnail: "/ros-certification-badge.jpg" },
    { name: "Embedded Systems Design Certificate", thumbnail: "/embedded-systems-certificate.jpg" },
    { name: "Computer Vision Nanodegree", thumbnail: "/computer-vision-certificate.jpg" },
    { name: "Machine Learning Specialization", thumbnail: "/machine-learning-certificate.jpg" },
    { name: "Control Systems Engineering Certificate", thumbnail: "/control-systems-certificate.jpg" },
    { name: "PCB Design & Manufacturing", thumbnail: "/pcb-design-certificate.jpg" },
    { name: "Real-Time Systems Programming", thumbnail: "/real-time-systems-certificate.jpg" },
    { name: "Sensor Integration & Calibration", thumbnail: "/sensor-integration-certificate.jpg" },
    { name: "Robotics Process Automation", thumbnail: "/robotics-automation-certificate.jpg" },
    { name: "Edge AI Development", thumbnail: "/edge-ai-certificate.jpg" },
    { name: "Hardware-Software Integration", thumbnail: "/hardware-software-certificate.jpg" },
  ]

  return (
    <section
      id="skills"
      className="px-6 py-24"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #06b6d4 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">TECHNICAL EXPERTISE</p>
          <h2 className="font-bold text-5xl mb-6" style={{ color: "#ffffff" }}>
            Engineering Skills
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#94a3b8" }}>
            Comprehensive expertise in embedded systems, robotics, and intelligent control systems with hands-on
            experience in building autonomous systems and deploying edge AI solutions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={cert.thumbnail || "/placeholder.svg"}
                    alt={`${cert.name} certificate`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-sm font-medium" style={{ color: "#ffffff" }}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-blue-400 transition-colors duration-300 animate-bounce"
          style={{ color: "#ffffff" }}
          aria-label="Scroll to contact section"
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
