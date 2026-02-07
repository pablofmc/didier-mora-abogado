import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  type = "button",
  variant = "primary",
  className
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 focus-ring sm:px-6";
  const styles =
    variant === "primary"
      ? "bg-navy text-cream shadow-soft hover:-translate-y-0.5"
      : "border border-navy/20 text-navy hover:border-gold hover:text-gold";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className ?? ""}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </button>
  );
}
