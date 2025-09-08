"use client"

export default function Navigation({ activeSection, scrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-white/20 border-b-[1] py-3.5"
      style={{
        background:
          "linear-gradient(135deg, rgba(147, 51, 234, 0.95) 0%, rgba(236, 72, 153, 0.95) 50%, rgba(99, 102, 241, 0.95) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="font-semibold leading-7 drop-shadow-sm text-4xl hover:scale-105 transition-transform duration-300"
            style={{ color: "#ffffff" }}
          >
            Anurag Aggarwal
          </button>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all duration-300 drop-shadow-sm text-2xl px-4 py-2 rounded-lg transform hover:scale-110 hover:shadow-lg ${
                  activeSection === item.toLowerCase() ? "scale-105" : ""
                }`}
                style={{
                  color: activeSection === item.toLowerCase() ? "#fde047" : "#ffffff",
                  background:
                    activeSection === item.toLowerCase()
                      ? "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)"
                      : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.background = "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.background = "transparent"
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
