import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`rounded-3xl border border-navy/10 bg-white/70 p-5 shadow-card sm:p-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
