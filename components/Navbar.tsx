"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/abogado-penal-costa-rica", label: "Penal" },
  { href: "/abogado-transito-costa-rica", label: "Tránsito" },
  { href: "/abogado-notario-costa-rica", label: "Notariado" },
  { href: "/sobre-didier-mora", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-navy/80 bg-navy text-cream">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-lg text-cream">
          Didier Mora Calvo | Abogado
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-cream/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded-full px-2 py-1 transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-cream/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="rounded-full border border-cream/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream focus-ring hover:text-gold"
        >
          Agendar consulta
        </Link>
      </Container>
      <div className="border-t border-cream/10 md:hidden">
        <Container className="flex flex-wrap items-center justify-center gap-4 py-3 text-xs text-cream/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded-full px-2 py-1 transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-cream/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
