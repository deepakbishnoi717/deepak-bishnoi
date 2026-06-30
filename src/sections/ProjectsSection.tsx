import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../components/LiveProjectButton";

function ss(url: string, w: number) {
  return `https://image.thum.io/get/maxAge/12/width/${w}/${url}`;
}

const PROJECTS = [
  {
    num: "01",
    category: "Client",
    name: "IAS Coaching Centre",
    col1img1: ss("https://iascoachingcentre.vercel.app", 400),
    col1img2: ss("https://iascoachingcentre.vercel.app", 400),
    col2img: ss("https://iascoachingcentre.vercel.app/#why-hcs", 800),
    link: "https://iascoachingcentre.vercel.app/#why-hcs",
  },
  {
    num: "02",
    category: "Client",
    name: "Real Estate Demo",
    col1img1: ss("https://realstatedemo-alpha.vercel.app", 400),
    col1img2: ss("https://realstatedemo-alpha.vercel.app", 400),
    col2img: ss("https://realstatedemo-alpha.vercel.app", 800),
    link: "https://realstatedemo-alpha.vercel.app/",

  },
  {
    num: "03",
    category: "Client",
    name: "Coaching Centre Demo",
    col1img1: ss("https://coaching-centre-demo-bice.vercel.app", 400),
    col1img2: ss("https://coaching-centre-demo-bice.vercel.app", 400),
    col2img: ss("https://coaching-centre-demo-bice.vercel.app", 800),
    link: "https://coaching-centre-demo-bice.vercel.app/",

  },
  {
    num: "04",
    category: "Client",
    name: "Gym Demo",
    col1img1: ss("https://gymdemo-teal.vercel.app", 400),
    col1img2: ss("https://gymdemo-teal.vercel.app", 400),
    col2img: ss("https://gymdemo-teal.vercel.app", 800),
    link: "https://gymdemo-teal.vercel.app/",

  },
  {
    num: "05",
    category: "Client",
    name: "Amour Bistro",
    col1img1: ss("https://amourbistro-dn3jy5rd.manus.space", 400),
    col1img2: ss("https://amourbistro-dn3jy5rd.manus.space", 400),
    col2img: ss("https://amourbistro-dn3jy5rd.manus.space", 800),
    link: "https://amourbistro-dn3jy5rd.manus.space/",

  },
  {
    num: "06",
    category: "Client",
    name: "Mehta Boot House",
    col1img1: ss("https://mehtaboothouse.vercel.app", 400),
    col1img2: ss("https://mehtaboothouse.vercel.app", 400),
    col2img: ss("https://mehtaboothouse.vercel.app", 800),
    link: "https://mehtaboothouse.vercel.app/#about",

  },
];

function ProjectImg({ src, alt, className, style }: any) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "linear-gradient(135deg, #18011F, #B600A8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 800,
          fontSize: "clamp(0.8rem, 2vw, 1.5rem)",
          textTransform: "uppercase",
        }}
      >
        {alt || "Preview"}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

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
            <ProjectImg
              src={project.col1img1}
              alt={project.name}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)", objectFit: "cover" }}
            />
            <ProjectImg
              src={project.col1img2}
              alt={project.name}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)", objectFit: "cover" }}
            />
          </div>
          <div className="w-[60%]">
            <ProjectImg
              src={project.col2img}
              alt={project.name}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ objectFit: "cover" }}
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
