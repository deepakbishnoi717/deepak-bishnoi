import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none aspect-square rounded-full opacity-60" style={{background:"radial-gradient(circle at 30% 30%, #B600A8, transparent 70%)"}} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none aspect-square rounded-3xl opacity-40" style={{background:"linear-gradient(135deg, #7621B0, #BE4C00)", filter:"blur(4px)"}} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none aspect-square rounded-full opacity-60" style={{background:"radial-gradient(circle at 70% 30%, #BE4C00, transparent 70%)"}} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none aspect-square rounded-[40px] opacity-40" style={{background:"linear-gradient(135deg, #646973, #B600A8)", filter:"blur(5px)"}} />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-3xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="Building automations that work while you sleep. Hi, I'm Deepak Bishnoi — a Web Developer & n8n Automation Specialist. I specialize in creating beautiful, functional websites and intelligent automation workflows for small businesses. Currently pursuing my BCA degree, I help small-to-medium businesses streamline operations through custom web solutions and AI-driven backend pipelines."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <p className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest text-center">
            Freelancer Status · BCA Candidate · Direct Automation Deployment
          </p>
          <a href="#contact">
            <ContactButton className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
