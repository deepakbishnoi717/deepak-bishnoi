import FadeIn from "../components/FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "n8n Workflow Design",
    desc: "Visual flows with smart error routes, dynamic loops, and direct API endpoints. Building production-grade visual workflows with standard integration APIs.",
  },
  {
    num: "02",
    name: "RAG AI Chatbots",
    desc: "Implementing vector embeddings, Pinecone namespaces, semantic retrieval, and OpenAI models for intelligent query-answering chatbots.",
  },
  {
    num: "03",
    name: "WhatsApp Automation",
    desc: "Configuring WhatsApp Business API webhooks, rich interaction menus, templates, and automated triggers for customer updates and inquiries.",
  },
  {
    num: "04",
    name: "Web Development",
    desc: "Building high-performance client panels and landing pages with React, TypeScript, and TailwindCSS. Clean, modern, conversion-focused interfaces.",
  },
  {
    num: "05",
    name: "AI Integrations",
    desc: "Connecting advanced LLMs inside workflows for dynamic content scoring, summarizing, tool calling, and intelligent routing.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className="flex items-start gap-4 sm:gap-6 py-8 sm:py-10 md:py-12 border-b" style={{ borderColor: "rgba(12,12,12,0.15)" }}>
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {s.num}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-1"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
