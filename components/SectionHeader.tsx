interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl sm:text-4xl text-navy">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base sm:text-lg text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
