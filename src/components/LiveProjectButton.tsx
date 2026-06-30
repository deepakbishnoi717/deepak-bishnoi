interface Props {
  className?: string;
  label?: string;
}

export default function LiveProjectButton({ className, label = "Live Project" }: Props) {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
