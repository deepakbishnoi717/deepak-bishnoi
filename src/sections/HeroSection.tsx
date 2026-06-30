import FadeIn from "../components/FadeIn";
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

      <div className="flex-1 flex flex-col justify-center overflow-hidden px-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Deepak
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.25} y={40}>
          <div className="overflow-hidden w-full -mt-4 sm:-mt-6 md:-mt-10">
            <h2 className="text-[#D7E2EA] font-black uppercase tracking-tight leading-none text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw] opacity-70">
              Bishnoi
            </h2>
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
    </section>
  );
}
