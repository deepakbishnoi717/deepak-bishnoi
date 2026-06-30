import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef, CSSProperties } from "react";

function Char({
  char,
  scrollYProgress,
  index,
  total,
}: {
  char: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0.2, 1]
  );
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

interface Props {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <div ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          scrollYProgress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </div>
  );
}
