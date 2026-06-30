import FadeIn from "../components/FadeIn";

const SKILLS = [
  { name: "n8n Workflow Design", pct: 98 },
  { name: "RAG AI Chatbots", pct: 95 },
  { name: "WhatsApp Business API", pct: 94 },
  { name: "AI Integrations (OpenAI/Gemini)", pct: 96 },
  { name: "Web Development (React/TS/Tailwind)", pct: 90 },
  { name: "Lead Capture Systems", pct: 95 },
  { name: "Lovable & Vibe Coding", pct: 92 },
  { name: "Python & Scripting", pct: 80 },
  { name: "CRM Systems (HubSpot, Sheets)", pct: 92 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
        >
          Skills &amp; Tools
        </h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SKILLS.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.06} y={20}>
            <div className="border border-[#D7E2EA]/20 rounded-2xl p-5 sm:p-6 hover:border-[#B600A8]/50 transition-colors duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#D7E2EA] font-medium text-sm sm:text-base">
                  {s.name}
                </span>
                <span className="text-[#B600A8] font-bold text-sm">
                  {s.pct}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#D7E2EA]/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${s.pct}%`,
                    background: "linear-gradient(90deg, #B600A8, #7621B0)",
                  }}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4} y={20}>
        <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest text-center mt-12">
          All Skills &amp; Focus Areas
        </p>
      </FadeIn>
    </section>
  );
}
