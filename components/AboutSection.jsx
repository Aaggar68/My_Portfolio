"use client"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 relative py-44"
      style={{
        background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #9333ea 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-center mb-8 text-5xl" style={{ color: "#ffffff" }}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="leading-relaxed mb-4 text-xl" style={{ color: "#f3f4f6" }}>
              Hey — I'm Anurag. I'm a Mechatronics + AI student at Western University who loves turning ideas into
              things that actually move, think, and solve problems. I'm obsessed with the mix of hardware and software:
              whether it's sketching a quick CAD concept, dialing in control code, or training a model to make a system
              smarter, I'm happiest building the bridge between electrons and algorithms. ⚙️🤖
            </p>
            <p className="leading-relaxed mb-4 text-xl" style={{ color: "#f3f4f6" }}>
              I care about engineering that makes a real difference — cleaner tech, smarter tools, better experiences.
              That's why I nerd out over robotics, embedded systems, and applied AI: they're the toolkit for changing
              how we live and work. I like projects where you get your hands dirty (literally or digitally), iterate
              fast, and measure impact — small wins that add up.
            </p>
            <p className="leading-relaxed mb-6 text-xl" style={{ color: "#f3f4f6" }}>
              If you're into tinkering, bold problems, or just want to chat about a weird design idea, let's connect. I
              build things, learn fast, and love collaborating with people who want to push technology to do better.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder-9o46q.png"
                    alt="CAD Design Workspace"
                    className="h-full object-cover w-full"
                  />
                </div>
                <div className="h-32 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder-er1g1.png"
                    alt="AI Neural Network"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder-3vv1s.png" alt="Embedded Systems" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder-ctygy.png"
                    alt="Mechatronics Robot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("experience").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-yellow-300 transition-colors duration-300 animate-bounce"
          style={{ color: "#ffffff" }}
          aria-label="Scroll to experience section"
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
