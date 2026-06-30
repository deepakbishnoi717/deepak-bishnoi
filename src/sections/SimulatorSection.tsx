import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function SimulatorSection() {
  return (
    <section id="simulator" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-8"
          style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
        >
          Automation Sandbox
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-[#D7E2EA]/60 text-center max-w-2xl mx-auto mb-12 font-light text-sm sm:text-base leading-relaxed">
          See Deepak&apos;s credentials in action! Toggle and execute custom automation models
          to inspect execution telemetry flow through vector AI search, CRM, and WhatsApp outputs.
        </p>
      </FadeIn>

      <div className="max-w-4xl mx-auto border border-[#D7E2EA]/20 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider ml-2">
            Interactive n8n Module
          </span>
        </div>

        <div className="border border-[#D7E2EA]/10 rounded-3xl p-5 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl">
              Smart Lead-Capture Pipeline
            </h3>
            <button
              className="rounded-full bg-[#B600A8] text-white font-medium uppercase tracking-widest text-xs px-6 py-2 hover:bg-[#7621B0] transition"
            >
              Execute Flow
            </button>
          </div>

          <div className="space-y-3">
            {[
              { label: "Website Form Inquiry", tag: "webhook", color: "bg-blue-500/20 text-blue-300" },
              { label: "Gemini Lead Scorer & Router", tag: "ai", color: "bg-purple-500/20 text-purple-300" },
              { label: "Google Sheets CRM", tag: "crm", color: "bg-green-500/20 text-green-300" },
              { label: "Inquiry Alert Push", tag: "whatsapp", color: "bg-emerald-500/20 text-emerald-300" },
            ].map((step) => (
              <div
                key={step.label}
                className="flex items-center gap-3 p-3 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5"
              >
                <div className="w-7 h-7 rounded-full border-2 border-[#D7E2EA]/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#D7E2EA]/40" />
                </div>
                <span className="text-[#D7E2EA] text-sm flex-1">{step.label}</span>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${step.color}`}>
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#D7E2EA]/30 text-xs text-center">
          Click execute to trace live telemetry flow. v1.2.0
        </p>
      </div>

      <FadeIn delay={0.3} y={20}>
        <div className="text-center mt-16">
          <p className="text-[#D7E2EA]/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Do you have a manual spreadsheet task costing you hours?
            I link your specific business triggers directly to custom WhatsApp APIs,
            Slack, HubSpot CRM, or Pinecone AI Vector memory databases.
          </p>
          <a href="#contact">
            <ContactButton
              className="px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm"
              label="Request Custom Automation"
            />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
