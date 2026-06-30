import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-6"
          style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
        >
          Let&apos;s automate
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#0C0C0C]/60 text-center max-w-lg mx-auto mb-12 font-light text-sm sm:text-base leading-relaxed">
          Tell me about your business and what&apos;s slowing you down. I&apos;ll reply
          with a free consultation and a concrete automation blueprint — usually within 24 hours.
        </p>
      </FadeIn>

      <div className="max-w-2xl mx-auto border border-[#0C0C0C]/10 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[#0C0C0C]/40 text-xs uppercase tracking-wider">
            Active Pipeline
          </span>
        </div>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-2xl px-5 py-3.5 text-[#0C0C0C] text-sm placeholder:text-[#0C0C0C]/30 outline-none focus:border-[#B600A8]/50 transition"
          />
          <input
            type="email"
            placeholder="Email Address *"
            className="w-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-2xl px-5 py-3.5 text-[#0C0C0C] text-sm placeholder:text-[#0C0C0C]/30 outline-none focus:border-[#B600A8]/50 transition"
          />
          <input
            type="text"
            placeholder="Business Type (Optional)"
            className="w-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-2xl px-5 py-3.5 text-[#0C0C0C] text-sm placeholder:text-[#0C0C0C]/30 outline-none focus:border-[#B600A8]/50 transition"
          />
          <textarea
            rows={4}
            placeholder="What would you like to automate?"
            className="w-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-2xl px-5 py-3.5 text-[#0C0C0C] text-sm placeholder:text-[#0C0C0C]/30 outline-none focus:border-[#B600A8]/50 transition resize-none"
          />
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              className="rounded-full bg-[#0C0C0C] text-white font-medium uppercase tracking-widest text-xs sm:text-sm px-10 py-3.5 hover:bg-[#2a2a2a] transition w-full sm:w-auto"
            >
              Send Inquiry
            </button>
            <span className="text-[#0C0C0C]/30 text-xs uppercase tracking-wider">
              SYSTEM: ROUTED TO AUTOMATION PIPELINE
            </span>
          </div>
        </form>
      </div>

      <div className="text-center mt-12 space-y-3">
        <p className="text-[#0C0C0C]/40 text-xs">
          Direct: sihagdeepak751@gmail.com
        </p>
        <a
          href="https://www.fiverr.com/sellers/deepak_python_c/edit"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] font-medium uppercase tracking-widest text-xs sm:text-sm px-8 py-3 hover:bg-[#0C0C0C] hover:text-white transition"
        >
          Order via Fiverr Profile
        </a>
        <p className="text-[#0C0C0C]/30 text-xs max-w-md mx-auto leading-relaxed pt-4">
          Free 20-minute operational workflow telemetry consult · Concrete, actionable
          automation roadmap · Direct price details matching standard small business grids
        </p>
      </div>
    </section>
  );
}
