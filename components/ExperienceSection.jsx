"use client"

import { useState } from "react"

export default function ExperienceSection() {
  const [showTimeline, setShowTimeline] = useState(false)

  const experiences = [
    {
      title: "Mechatronics Project Lead",
      company: "Western University — Engineering Projects",
      period: "2023 – Present",
      description:
        "Led a multidisciplinary prototype project from concept to demo: CAD design, PCB prototyping, embedded control, and ML-based perception. Coordinated testing cycles, reduced iteration time with rapid 3D-printing, and produced a working demo for lab showcase.",
    },
    {
      title: "Robotics Workshop Coordinator",
      company: "Western University Robotics Club — Outreach & Workshops",
      period: "2023 – 2024",
      description:
        "Planned and ran hands-on workshops teaching Arduino, basic CAD, and sensor integration; wrote easy-to-follow lab guides and mentored small teams through beginner projects. Helped newcomers go from zero to a working prototype in a weekend and supported follow-up practice sessions.",
    },
    {
      title: "Embedded Systems Developer (Independent)",
      company: "Personal Projects",
      period: "2021 – 2023",
      description:
        "Designed and flashed real-time firmware for motor control, sensors, and safety interlocks; created compact PCBs and debugged hardware in the lab. Focused on reliable low-latency control loops and practical power/thermal management.",
    },
    {
      title: "AI & Vision Engineer — TinyML / Edge",
      company: "Course + Open Source Work",
      period: "2020 – 2021",
      description:
        "Built lightweight vision/ML pipelines for defect detection and on-device inference (TFLite/TinyML); deployed models to Jetson Nano and microcontroller targets. Delivered interactive dashboards showing live predictions and model performance metrics.",
    },
  ]

  return (
    <section
      id="experience"
      className="px-6 py-32"
      style={{
        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f43f5e 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-center mb-6 text-5xl" style={{ color: "#ffffff" }}>
          Experience
        </h2>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="px-16 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            style={{
              background: showTimeline
                ? "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)"
                : "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)",
              color: "#ffffff",
              border: "3px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            {showTimeline ? "View Cards" : "View Journey"}
          </button>
        </div>

        {showTimeline ? (
          // Timeline View
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, #8b5cf6, #06b6d4, #10b981)" }}
            ></div>

            <div className="space-y-8">
              {experiences.map((job, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 w-6 h-6 rounded-full border-4 z-10 animate-pulse"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      borderColor: "#ffffff",
                    }}
                  ></div>

                  {/* Timeline content */}
                  <div
                    className="ml-20 rounded-xl p-8 shadow-lg border transform transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold" style={{ color: "#ffffff" }}>
                        {job.title}
                      </h3>
                      <span
                        className="font-medium px-4 py-2 rounded-full text-base"
                        style={{
                          color: "#ffffff",
                          background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                          fontWeight: "700",
                        }}
                      >
                        {job.period}
                      </span>
                    </div>
                    <p className="font-medium mb-2" style={{ color: "#e0f2fe" }}>
                      {job.company}
                    </p>
                    <p className="leading-relaxed" style={{ color: "#f3f4f6" }}>
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Card View (updated layout)
          <div className="grid md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            {experiences.map((job, index) => (
              <div
                key={index}
                className="rounded-xl p-8 shadow-lg border transition-all duration-300 cursor-pointer hover:scale-105 w-full max-w-sm"
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
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#ffffff" }}>
                    {job.title}
                  </h3>
                  <p className="font-medium mb-3" style={{ color: "#e0f2fe" }}>
                    {job.company}
                  </p>
                  <span
                    className="inline-block font-medium rounded-full text-sm px-4 py-2"
                    style={{
                      color: "#ffffff",
                      background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                      fontWeight: "700",
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="leading-relaxed text-center" style={{ color: "#f3f4f6" }}>
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-yellow-300 transition-colors duration-300 animate-bounce"
          style={{ color: "#ffffff" }}
          aria-label="Scroll to projects section"
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
