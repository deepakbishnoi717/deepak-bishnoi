import { useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");
  const [transition, setTransition] = useState("transform 0.6s ease-in-out");

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < padding) {
      setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
      setTransition("transform 0.3s ease-out");
    } else {
      setTransform("translate3d(0,0,0)");
      setTransition("transform 0.6s ease-in-out");
    }
  }

  function handleLeave() {
    setTransform("translate3d(0,0,0)");
    setTransition("transform 0.6s ease-in-out");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform,
        transition,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
