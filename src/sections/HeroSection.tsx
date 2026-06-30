import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Services</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m Deepak
            </h1>
          </div>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            An automation architect driven by crafting striking and intelligent pipelines
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <a href="#contact">
            <ContactButton className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base" />
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30}>
        <Magnet padding={150} strength={3} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <div
            className="w-full aspect-[3/4] rounded-[40px] flex items-center justify-center text-white font-black uppercase select-none"
            style={{
              background: "linear-gradient(145deg, #18011F 0%, #B600A8 40%, #7621B0 70%, #BE4C00 100%)",
              boxShadow: "0 20px 60px rgba(182,0,168,0.3), inset 0 2px 4px rgba(255,255,255,0.1)",
              fontSize: "clamp(6rem, 20vw, 12rem)",
            }}
          >
            D
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}
