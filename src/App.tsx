import { lazy, Suspense } from "react";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import SimulatorSection from "./sections/SimulatorSection";
import ContactSection from "./sections/ContactSection";
import { ExternalLink } from "lucide-react";

const ThreeBackground = lazy(() => import("./components/ThreeBackground"));

export default function App() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <SimulatorSection />
      <ContactSection />
      <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#D7E2EA]/30 text-xs">
          <span>Deepak. &copy; 2026 Deepak Bishnoi. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            Built with React &amp; Vite.
            <ExternalLink size={12} />
          </span>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://www.fiverr.com/sellers/deepak_python_c/edit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D7E2EA]/60 transition underline underline-offset-2"
          >
            Fiverr Profile
          </a>
        </div>
      </footer>
    </div>
  );
}
