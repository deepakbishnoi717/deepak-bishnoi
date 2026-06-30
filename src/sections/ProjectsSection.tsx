import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../components/LiveProjectButton";

const PROJECTS = [
  {
    num: "01",
    category: "Client",
    name: "IAS Coaching Centre",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    link: "https://iascoachingcentre.vercel.app/",
  },
  {
    num: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    link: "https://realstatedemo-alpha.vercel.app/",
  },
  {
    num: "03",
    category: "Client",
    name: "Solaris Digital",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    link: "https://coaching-centre-demo-bice.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1 - (PROJECTS.length - 1 - index) * 0.03, 1]
  );

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: "clamp(64px, 10vw, 128px)" }}
    >
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        style={{ scale, transformOrigin: "top center" }}
      >
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {project.num}
          </span>
          <div className="text-right">
            <p className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wider">
              {project.category}
            </p>
            <h3
              className="font-medium uppercase text-[#D7E2EA] leading-tight"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.8rem)" }}
            >
              {project.name}
            </h3>
          </div>
          <a href={project.link} target="_blank" rel="noreferrer">
            <LiveProjectButton className="px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base" />
          </a>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.col1img1}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
              loading="lazy"
            />
            <img
              src={project.col1img2}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
              loading="lazy"
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2img}
              alt=""
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center pt-16 sm:pt-20 md:pt-28 mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-8" style={{ height: `${PROJECTS.length * 85}vh` }}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.num}
            className="h-[85vh]"
            style={{ marginTop: i === 0 ? 0 : undefined }}
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
