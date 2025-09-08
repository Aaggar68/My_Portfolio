"use client"

import { Button } from "@/components/ui/button"
import { Mail, LinkedinIcon, MessageCircle, Coffee, Lightbulb, Handshake, Rocket } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-white animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">Let's Collaborate!</h2>
            <Lightbulb className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Your next project deserves creativity and passion
          </p>
        </div>

        <p className="max-w-4xl mx-auto leading-relaxed mb-16 text-lg md:text-xl text-white/95 text-pretty">
          I turn rough ideas into real, working prototypes — whether that means soldering a PCB, training a tiny model,
          or quickly iterating a CAD part. Got a startup idea, a side-project, or just want to talk hardware + AI over
          coffee? Hit me up — I'd love to help or just swap stories.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <LinkedinIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Networking</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with me on LinkedIn for professional opportunities, industry insights, and networking.
            </p>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/aaggar68", "_blank")}
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Collaborations</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have an exciting project in mind? Let's discuss how we can bring your vision to life together.
            </p>
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("mailto:anuragaggarwal0612@gmail.com?subject=Project Collaboration Opportunity", "_blank")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Email for Projects
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20 md:col-span-2 lg:col-span-1">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Casual Coffee Chat</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              No pitch needed — just good coffee and better brainstorming about tech, robotics, or weird ideas.
            </p>
            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.instagram.com/anurag.aggarwal_/", "_blank")}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Let's Grab Coffee
            </Button>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/30 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Handshake className="w-8 h-8 text-white animate-pulse" />
            <span className="text-2xl font-bold text-white">Ready to Start Something Amazing?</span>
          </div>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto text-pretty">
            Whether it's a groundbreaking startup idea or just an interesting technical challenge, I'm always excited to
            collaborate with passionate people.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-12 py-4 bg-white text-primary hover:bg-white/90 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.open("mailto:anuragaggarwal0612@gmail.com?subject=Let's Build Something Amazing!", "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Let's Chat!
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-black/20 backdrop-blur-sm"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/Anurag's Resume.pdf"
                link.download = "Anurag's Resume.pdf"
                link.click()
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <p className="text-lg text-white/80 font-medium">Can't wait to hear from you — ping me anytime! 🚀</p>
      </div>
    </section>
  )
}
