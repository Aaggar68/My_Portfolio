"use client"

import { useState } from "react"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ExperienceSection from "../components/ExperienceSection"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #6366f1 100%)",
        minHeight: "100vh",
      }}
    >
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
